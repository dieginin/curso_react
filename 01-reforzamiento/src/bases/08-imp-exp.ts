import { type Hero, heroes } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id)

  //   if (!hero) throw new Error(`No existe un heroe con el id ${id}`)
  return hero
}

const firstHero = getHeroById(1)
console.log(firstHero)
