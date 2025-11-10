import { act, renderHook } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { useGifs } from "./useGifs"

describe("useGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs())

    expect(result.current.gifs.length).toBe(0)
    expect(result.current.previousSearches.length).toBe(0)
    expect(result.current.handleSearch).toBeDefined()
    expect(result.current.handleSearchClicked).toBeDefined()
  })

  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleSearch("Test")
    })

    expect(result.current.gifs.length).toBe(10)
  })

  test("should return a list of gifs when handleSearchClicked is called", async () => {
    const { result } = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleSearchClicked("Test")
    })

    expect(result.current.gifs.length).toBe(10)
  })
})
