import { beforeEach, describe, expect, test, vi } from "vitest"

import AxiosMockAdapter from "axios-mock-adapter"
import { GetGifsByQuery } from "./get-gifs-by-query.action"
import { giphyApi } from "./api/giphy.api"
import { giphyResponseMock } from "./../../../tests/mocks/giphy.response.data"

describe("GetGifsByQuery", () => {
  //   test("should return a list of gifs", async () => {
  //     const gifs = await GetGifsByQuery("Test")
  //     const [gif1] = gifs

  //     expect(gif1).toStrictEqual({
  //       id: expect.any(String),
  //       title: expect.any(String),
  //       url: expect.any(String),
  //       height: expect.any(Number),
  //       width: expect.any(Number),
  //     })
  //   })

  let mock = new AxiosMockAdapter(giphyApi)

  beforeEach(() => {
    // mock.reset()
    mock = new AxiosMockAdapter(giphyApi)
  })

  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphyResponseMock)

    const gifs = await GetGifsByQuery("Test")

    expect(gifs.length).toBe(10)

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string")
      expect(typeof gif.title).toBe("string")
      expect(typeof gif.url).toBe("string")
      expect(typeof gif.height).toBe("number")
      expect(typeof gif.width).toBe("number")
    })
  })

  test("should return an empty list of gifs if there's no results", async () => {
    // mock.onGet("/search").reply(200, { data: [] }) //! sin beforeEach
    mock.restore() //! con beforeEach

    const gifs = await GetGifsByQuery("")

    expect(gifs.length).toBe(0)
  })

  test("should handle error when API returns an error", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {})

    mock.onGet("/search").reply(400, { data: { message: "Bad Request" } })

    const gifs = await GetGifsByQuery("Test")

    expect(gifs.length).toBe(0)
    expect(consoleErrorSpy).toBeCalled()
    expect(consoleErrorSpy).toBeCalledWith(expect.anything())
  })
})
