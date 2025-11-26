import { FavoritesContext, FavoritesProvider } from "./Favorites.context"
import { describe, expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import type { Hero } from "@/heroes/interfaces/hero.interface"
import { use } from "react"

const mockHero = {
  id: "1",
  name: "Batman",
} as Hero

const TestComponent = () => {
  const { favorites, favoritesCount, isFavorite, toggleFavorite } =
    use(FavoritesContext)

  return (
    <div>
      <div data-testid='favorite-count'>{favoritesCount}</div>

      <div data-testid='favorite-list'>
        {favorites.map((favorite) => (
          <div key={favorite.id} data-testid={`hero-${favorite.id}`}>
            {favorite.name}
          </div>
        ))}
      </div>

      <button
        data-testid='toggle-favorite'
        onClick={() => toggleFavorite(mockHero)}
      >
        Toggle Favorite
      </button>
      <div data-testid='is-favorite'>{isFavorite(mockHero).toString()}</div>
    </div>
  )
}

const renderContextTest = () =>
  render(
    <FavoritesProvider>
      <TestComponent />
    </FavoritesProvider>
  )

describe("FavoritesContext", () => {
  test("should initialize with initial values", () => {
    renderContextTest()

    expect(screen.getByTestId("favorite-count").textContent).toBe("0")
    expect(screen.getByTestId("favorite-list").children.length).toBe(0)
  })

  test("should add hero to favorites when toggleFavorite is called with new hero", () => {
    renderContextTest()

    const button = screen.getByTestId("toggle-favorite")

    fireEvent.click(button)

    expect(screen.getByTestId("favorite-count").textContent).toBe("1")
    expect(screen.getByTestId("is-favorite").textContent).toBe("true")
    expect(screen.getByTestId("hero-1").textContent).toBe("Batman")
    expect(localStorage.getItem("favorites")).toBe(
      '[{"id":"1","name":"Batman"}]'
    )
  })
})
