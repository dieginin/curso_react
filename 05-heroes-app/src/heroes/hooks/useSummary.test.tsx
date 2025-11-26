import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { describe, expect, test, vi } from "vitest"
import { renderHook, waitFor } from "@testing-library/react"

import type { PropsWithChildren } from "react"
import type { SummaryResponse } from "../interfaces/summary.response"
import { getSummary } from "../actions/get-summary.actions"
import { useSummary } from "./useSummary"

const tanStackCustomProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

vi.mock("../actions/get-summary.actions", () => ({
  getSummary: vi.fn(),
}))

const mockGetSummary = vi.mocked(getSummary)

describe("useSummary", () => {
  test("should return the initial state (isLoading)", () => {
    const { result } = renderHook(() => useSummary(), {
      wrapper: tanStackCustomProvider(),
    })

    expect(result.current.isLoading).toBeTruthy()
    expect(result.current.isError).toBeFalsy()
    expect(result.current.data).toBeUndefined()
  })

  test("should return success state with data when API call succeeds", async () => {
    const mockSummaryData = {
      totalHeroes: 10,
      strongestHero: {
        id: "1",
        name: "Superman",
      },
      smartestHero: {
        id: "2",
        name: "Batman",
      },
      heroCount: 10,
      villainCount: 10,
    } as SummaryResponse
    mockGetSummary.mockResolvedValue(mockSummaryData)

    const { result } = renderHook(() => useSummary(), {
      wrapper: tanStackCustomProvider(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())

    expect(result.current.isError).toBeFalsy()
    expect(mockGetSummary).toHaveBeenCalled()
  })

  test("should return error state when API call fails", async () => {
    const mockError = new Error("Failed to fetch summary")
    mockGetSummary.mockRejectedValue(mockError)

    const { result } = renderHook(() => useSummary(), {
      wrapper: tanStackCustomProvider(),
    })

    await waitFor(() => expect(result.current.isPending).toBeFalsy())

    expect(result.current.isError).toBeTruthy()
    expect(result.current.error).toBeDefined()
    expect(mockGetSummary).toHaveBeenCalled()
  })
})
