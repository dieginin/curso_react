import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { beforeEach, describe, expect, test, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { FavoritesProvider } from "@/context/Favorites.context"
import { HomePage } from "../home/HomePage"
import { MemoryRouter } from "react-router"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"

vi.mock("@/heroes/hooks/usePaginatedHero")
const mockUsePaginatedHero = vi.mocked(usePaginatedHero)

mockUsePaginatedHero.mockReturnValue({
  data: [],
  isLoading: false,
  isError: false,
} as unknown as ReturnType<typeof usePaginatedHero>)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
})

const renderHomePage = (initialEntries: string[] = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider children={<HomePage />} />
      </QueryClientProvider>
    </MemoryRouter>
  )
}

describe("HomePage", () => {
  beforeEach(() => vi.clearAllMocks())

  test("should render Home Page with default values", () => {
    const { container } = renderHomePage()

    expect(container).toMatchSnapshot()
  })

  test("should call usePaginatedHero with default values", () => {
    renderHomePage()

    expect(mockUsePaginatedHero).toHaveBeenCalled()
    expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 6, "all")
  })

  test("should call usePaginatedHero with custom query params", () => {
    renderHomePage(["/?page=2&limit=10&category=villains"])

    expect(mockUsePaginatedHero).toHaveBeenCalled()
    expect(mockUsePaginatedHero).toHaveBeenCalledWith(2, 10, "villains")
  })

  test("should called usePaginatedHero with default page and same limit on tab clicked", () => {
    renderHomePage(["/?tab=favorites&page=2&limit=10"])

    const [, , , villainsTab] = screen.getAllByRole("tab")
    fireEvent.click(villainsTab)

    expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 10, "villain")
  })
})
