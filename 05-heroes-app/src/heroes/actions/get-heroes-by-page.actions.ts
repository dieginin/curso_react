import type { HeroesResponse } from "../interfaces/get-heroes.response"
import { heroApi } from "../api/hero.api"

const BASE_URL = import.meta.env.VITE_API_URL

export const getHeroesByPage = async (): Promise<HeroesResponse> => {
  const { data } = await heroApi.get<HeroesResponse>("/")

  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.id}.jpeg`,
  }))

  return { ...data, heroes }
}
