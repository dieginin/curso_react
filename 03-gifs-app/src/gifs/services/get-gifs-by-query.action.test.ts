import { describe, expect, test } from "vitest"

import { GetGifsByQuery } from "./get-gifs-by-query.action"

describe("GetGifsByQuery", () => {
  test("should return a list of gifs", async () => {
    const gifs = await GetGifsByQuery("Test")
    const [gif1] = gifs

    expect(gif1).toStrictEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      height: expect.any(Number),
      width: expect.any(Number),
    })
  })
})
