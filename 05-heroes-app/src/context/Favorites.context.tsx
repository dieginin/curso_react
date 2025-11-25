import type { Hero } from "@/heroes/interfaces/hero.interface"
import { createContext, useState, type PropsWithChildren } from "react"

interface FavoritesContext {
  // State
  favorites: Hero[]
  favoritesCount: number

  /// Methods
  isFavorite: (hero: Hero) => boolean
  toggleFavorite: (hero: Hero) => void
}

const FavoritesContext = createContext({} as FavoritesContext)

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>([])

  const isFavorite = (hero: Hero) => favorites.some((h) => h.id === hero.id)

  const toggleFavorite = (hero: Hero) => {
    if (isFavorite(hero))
      return setFavorites(favorites.filter((h) => h.id !== hero.id))
    setFavorites([...favorites, hero])
  }

  return (
    <FavoritesContext
      value={{
        favorites: favorites,
        favoritesCount: favorites.length,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext>
  )
}

export { FavoritesContext, FavoritesProvider }
