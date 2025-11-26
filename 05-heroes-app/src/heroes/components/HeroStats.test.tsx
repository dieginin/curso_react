import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { describe, expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"

import { FavoritesProvider } from "@/context/Favorites.context"
import type { Hero } from "../interfaces/hero.interface"
import { HeroStats } from "./HeroStats"
import type { SummaryResponse } from "../interfaces/summary.response"
import { useSummary } from "../hooks/useSummary"

vi.mock("../hooks/useSummary")
const mockUseSummary = vi.mocked(useSummary)

const mockSummaryData: SummaryResponse = {
  totalHeroes: 25,
  strongestHero: {
    id: "1",
    name: "Clark Kent",
    slug: "clark-kent",
    alias: "Superman",
    powers: [
      "Súper fuerza",
      "Vuelo",
      "Visión de calor",
      "Visión de rayos X",
      "Invulnerabilidad",
      "Súper velocidad",
    ],
    description:
      "El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.",
    strength: 10,
    intelligence: 8,
    speed: 9,
    durability: 10,
    team: "Liga de la Justicia",
    image: "1.jpeg",
    firstAppearance: "1938",
    status: "Active",
    category: "Hero",
    universe: "DC",
  },
  smartestHero: {
    id: "2",
    name: "Bruce Wayne",
    slug: "bruce-wayne",
    alias: "Batman",
    powers: [
      "Artes marciales",
      "Habilidades de detective",
      "Tecnología avanzada",
      "Sigilo",
      "Genio táctico",
    ],
    description:
      "El Caballero Oscuro de Ciudad Gótica, que utiliza el miedo como arma contra el crimen y la corrupción.",
    strength: 6,
    intelligence: 10,
    speed: 6,
    durability: 7,
    team: "Liga de la Justicia",
    image: "2.jpeg",
    firstAppearance: "1939",
    status: "Active",
    category: "Hero",
    universe: "DC",
  },
  heroCount: 18,
  villainCount: 7,
}
const mockHero: Hero = mockSummaryData.strongestHero

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
})

const renderHeroStats = (mockData?: Partial<SummaryResponse>) => {
  if (mockData) {
    mockUseSummary.mockReturnValue({
      data: mockData,
    } as unknown as ReturnType<typeof useSummary>)
  } else {
    mockUseSummary.mockReturnValue({
      data: undefined,
    } as unknown as ReturnType<typeof useSummary>)
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <HeroStats />
      </FavoritesProvider>
    </QueryClientProvider>
  )
}

describe("HeroStats", () => {
  test("should render component with default values", () => {
    const { container } = renderHeroStats()

    expect(container).toMatchSnapshot()
    expect(screen.getByText("Loading...")).toBeDefined()
  })

  test("should render HeroStats with mock data", () => {
    const { container } = renderHeroStats(mockSummaryData)

    expect(container).toMatchSnapshot()
    expect(screen.getByText("Total de personajes")).toBeDefined()
    expect(screen.getByText("Favoritos")).toBeDefined()
    expect(screen.getByText("Fuerte")).toBeDefined()
    expect(screen.getByText("Inteligente")).toBeDefined()
  })

  test("should change the percentage of favorites when a hero is added to favorites", () => {
    localStorage.setItem("favorites", JSON.stringify([mockHero]))

    renderHeroStats(mockSummaryData)

    const favsPercentageElement = screen.getByTestId("favorites-percentage")
    expect(favsPercentageElement.innerHTML).toContain("4%")

    const favsCountElement = screen.getByTestId("favorites-count")
    expect(favsCountElement.innerHTML).toContain("1")
  })
})
