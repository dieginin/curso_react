import * as gifActions from "../services/get-gifs-by-query.action"

import { act, renderHook } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

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

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleSearchClicked("Test")
    })

    expect(result.current.gifs.length).toBe(10)

    vi.spyOn(gifActions, "GetGifsByQuery").mockRejectedValue(
      new Error("Custom Error")
    )

    await act(async () => {
      await result.current.handleSearchClicked("Test")
    })
    expect(result.current.gifs.length).toBe(10)
  })

  test("should return no more than 8 previous searches", async () => {
    const { result } = renderHook(() => useGifs())

    vi.spyOn(gifActions, "GetGifsByQuery").mockResolvedValue([])

    await act(async () => {
      await result.current.handleSearch("Test1")
    })
    await act(async () => {
      await result.current.handleSearch("Test2")
    })
    await act(async () => {
      await result.current.handleSearch("Test3")
    })
    await act(async () => {
      await result.current.handleSearch("Test4")
    })
    await act(async () => {
      await result.current.handleSearch("Test5")
    })
    await act(async () => {
      await result.current.handleSearch("Test6")
    })
    await act(async () => {
      await result.current.handleSearch("Test7")
    })
    await act(async () => {
      await result.current.handleSearch("Test8")
    })
    await act(async () => {
      await result.current.handleSearch("Test9")
    })

    expect(result.current.previousSearches.length).toBe(8)
    expect(result.current.previousSearches).toStrictEqual([
      "test9",
      "test8",
      "test7",
      "test6",
      "test5",
      "test4",
      "test3",
      "test2",
    ])
  })
})
