import { describe, expect, test } from "vitest"

import { getHero } from "./get-hero.actions"

const BASE_URL = import.meta.env.VITE_API_URL

describe("getHeroAction", () => {
  test("should fetch hero data and return with complete image url", async () => {
    const hero = await getHero("doomsday")

    expect(hero.image).toBe(`${BASE_URL}/images/${hero.id}.jpeg`)
  })

  test("should throw an error if hero is not found", async () => {
    await getHero("error").catch((error) => expect(error.status).toBe(404))
  })
})
