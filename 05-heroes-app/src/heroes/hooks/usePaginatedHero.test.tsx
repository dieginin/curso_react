import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { beforeEach, describe, expect, test, vi } from "vitest"
import { renderHook, waitFor } from "@testing-library/react"

import type { PropsWithChildren } from "react"
import { getHeroesByPage } from "../actions/get-heroes-by-page.actions"
import { usePaginatedHero } from "./usePaginatedHero"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})
const tanStackCustomProvider = () => {
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

vi.mock("../actions/get-heroes-by-page.actions", () => ({
  getHeroesByPage: vi.fn(),
}))
const mockGetHeroesByPage = vi.mocked(getHeroesByPage)

describe("usePaginatedHero", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    queryClient.clear()
  })

  test("should return the initial state (isLoading)", () => {
    const { result } = renderHook(() => usePaginatedHero(1, 6, "all"), {
      wrapper: tanStackCustomProvider(),
    })

    expect(result.current.isLoading).toBeTruthy()
    expect(result.current.isError).toBeFalsy()
    expect(result.current.data).toBeUndefined()
  })

  test("should return success state with data when API call succeeds", async () => {
    const mockedHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    }
    mockGetHeroesByPage.mockResolvedValue(mockedHeroesData)

    const { result } = renderHook(() => usePaginatedHero(1, 6, "all"), {
      wrapper: tanStackCustomProvider(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())

    expect(result.current.status).toBe("success")
    expect(mockGetHeroesByPage).toHaveBeenCalled()
    expect(mockGetHeroesByPage).toHaveBeenCalledWith(1, 6, "all")
  })

  test("should call getHeroesByPage with arguments", async () => {
    const mockedHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    }
    mockGetHeroesByPage.mockResolvedValue(mockedHeroesData)

    const { result } = renderHook(() => usePaginatedHero(2, 16, "heroes"), {
      wrapper: tanStackCustomProvider(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())

    expect(result.current.status).toBe("success")
    expect(mockGetHeroesByPage).toHaveBeenCalled()
    expect(mockGetHeroesByPage).toHaveBeenCalledWith(2, 16, "heroes")
  })
})
