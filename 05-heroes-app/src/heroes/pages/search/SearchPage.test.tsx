import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { beforeEach, describe, expect, test, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"

import type { Hero } from "@/heroes/interfaces/hero.interface"
import { MemoryRouter } from "react-router"
import { SearchHero } from "@/heroes/actions/search-hero.actions"
import SearchPage from "./SearchPage"

vi.mock("@/heroes/actions/search-hero.actions")
const mockSearchHero = vi.mocked(SearchHero)

vi.mock("@/components/custom/CustomJumbotron", () => ({
  CustomJumbotron: () => <div>Jumbotron</div>,
}))

vi.mock("@/components/custom/CustomBreadcrumb", () => ({
  CustomBreadcrumb: () => <nav>Breadcrumb</nav>,
}))

vi.mock("@/heroes/components/HeroGrid", () => ({
  HeroGrid: ({ heroes }: { heroes: Hero[] }) => (
    <div data-testid='hero-grid'>
      {heroes.map((hero) => (
        <div key={hero.id} children={hero.name} />
      ))}
    </div>
  ),
}))

// vi.mock("./ui/SearchControls", () => ({
//   SearchControls: () => <div>SearchControls</div>,
// }))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
})

const renderSearchPage = (initialEntries: string[] = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={queryClient} children={<SearchPage />} />
    </MemoryRouter>
  )
}

describe("SearchPage", () => {
  beforeEach(() => vi.clearAllMocks())

  test("should render SearchPage with default values", () => {
    renderSearchPage()

    expect(mockSearchHero).toBeCalledWith({
      category: undefined,
      name: undefined,
      status: undefined,
      strength: undefined,
      team: undefined,
      universe: undefined,
    })
  })

  test("should call search action with name parameter", () => {
    renderSearchPage(["/search?name=superman"])

    expect(mockSearchHero).toBeCalledWith({
      category: undefined,
      name: "superman",
      status: undefined,
      strength: undefined,
      team: undefined,
      universe: undefined,
    })
  })

  test("should call search action with strength parameter", () => {
    renderSearchPage(["/search?strength=5"])

    expect(mockSearchHero).toBeCalledWith({
      category: undefined,
      name: undefined,
      status: undefined,
      strength: "5",
      team: undefined,
      universe: undefined,
    })
  })

  test("should call search action with name and strength parameter", () => {
    renderSearchPage(["/search?name=bat&strength=5"])

    expect(mockSearchHero).toBeCalledWith({
      category: undefined,
      name: "bat",
      status: undefined,
      strength: "5",
      team: undefined,
      universe: undefined,
    })
  })

  test("should render HeroGrid with search results", async () => {
    const mockHeroes = [
      { id: 1, name: "Clark Kent" },
      { id: 2, name: "Bruce Wayne" },
    ] as unknown as Hero[]

    mockSearchHero.mockResolvedValue(mockHeroes)

    renderSearchPage()

    const heroGrid = screen.getByTestId("hero-grid")
    screen.debug(heroGrid)

    await waitFor(() => {
      expect(screen.getAllByText("Clark Kent")).toBeDefined()
      expect(screen.getAllByText("Bruce Wayne")).toBeDefined()
    })
    screen.debug(heroGrid)
  })
})
