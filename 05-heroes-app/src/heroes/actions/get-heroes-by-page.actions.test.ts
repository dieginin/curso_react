import { beforeEach, describe, expect, test } from "vitest"

import AxiosMockAdapter from "axios-mock-adapter"
import { getHeroesByPage } from "./get-heroes-by-page.actions"
import { heroApi } from "../api/hero.api"

const BASE_URL = import.meta.env.VITE_API_URL

describe("getHeroesByPageActions", () => {
  const heroesApiMock = new AxiosMockAdapter(heroApi)

  beforeEach(() => heroesApiMock.reset())

  test("should return default heroes", async () => {
    const responseObject = {
      total: 10,
      pages: 2,
      heroes: [{ image: "1.jpeg" }, { image: "2.jpeg" }],
    }
    heroesApiMock.onGet("/").reply(200, responseObject)

    const response = await getHeroesByPage(1)

    expect(response).toStrictEqual({
      total: 10,
      pages: 2,
      heroes: [
        { image: `${BASE_URL}/images/1.jpeg` },
        { image: `${BASE_URL}/images/2.jpeg` },
      ],
    })
  })

  test("should return the correct heroes when page is not a number", async () => {
    const responseObject = {
      total: 10,
      pages: 1,
      heroes: [],
    }
    heroesApiMock.onGet("/").reply(200, responseObject)

    await getHeroesByPage("a" as unknown as number)
    const params = heroesApiMock.history.get[0].params

    expect(params).toStrictEqual({ limit: 6, offset: 0, category: "all" })
  })

  test("should return the correct heroes when page is a string number", async () => {
    const responseObject = {
      total: 10,
      pages: 1,
      heroes: [],
    }
    heroesApiMock.onGet("/").reply(200, responseObject)

    await getHeroesByPage("5" as unknown as number)
    const params = heroesApiMock.history.get[0].params

    expect(params).toStrictEqual({ limit: 6, offset: 24, category: "all" })
  })

  test("should call the api with correct params", async () => {
    const responseObject = {
      total: 10,
      pages: 1,
      heroes: [],
    }
    heroesApiMock.onGet("/").reply(200, responseObject)

    await getHeroesByPage(2, 10, "heroes")
    const params = heroesApiMock.history.get[0].params

    expect(params).toStrictEqual({ limit: 10, offset: 10, category: "heroes" })
  })
})
