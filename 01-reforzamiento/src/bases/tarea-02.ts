import { heroes, Owner, type Hero } from "../data/heroes.data"

export const getHeroesByOwner = (owner: Owner): Hero[] =>
  heroes.filter((hero) => hero.owner === owner)
