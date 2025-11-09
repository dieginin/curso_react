import { act, renderHook } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { useCounter } from "./useCounter"

describe("useCounter", () => {
  const initialCount = 20

  test("should initialize with default value of 0", () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.counter).toBe(0)
  })

  test("should initialize with value of 20", () => {
    const { result } = renderHook(() => useCounter(initialCount))

    expect(result.current.counter).toBe(initialCount)
  })

  test("should decrement counter when handleDecrement is called and is over 0", () => {
    const { result } = renderHook(() => useCounter(initialCount))

    act(() => {
      result.current.handleDecrement()
    })

    expect(result.current.counter).toBe(initialCount - 1)
  })

  test("should not decrement counter when handleDecrement is called and is below 0", () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.handleDecrement()
    })

    expect(result.current.counter).toBe(0)
  })

  test("should reset counter when handleReset is called", () => {
    const { result } = renderHook(() => useCounter(initialCount))

    act(() => {
      result.current.handleReset()
    })

    expect(result.current.counter).toBe(initialCount)
  })

  test("should increment counter when handleIncrement is called", () => {
    const { result } = renderHook(() => useCounter(initialCount))

    act(() => {
      result.current.handleIncrement()
    })

    expect(result.current.counter).toBe(initialCount + 1)
  })
})
