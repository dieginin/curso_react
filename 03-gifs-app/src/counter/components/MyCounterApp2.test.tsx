import { describe, expect, test, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import MyCounterApp from "./MyCounterApp"

const handleDecrementMock = vi.fn()
const handleResetMock = vi.fn()
const handleIncrementMock = vi.fn()

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 20,
    handleDecrement: handleDecrementMock,
    handleReset: handleResetMock,
    handleIncrement: handleIncrementMock,
  }),
}))

describe("MyCounterApp", () => {
  test("should render component", () => {
    render(<MyCounterApp />)

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(20)
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined()
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined()
    expect(screen.getByRole("button", { name: "+1" })).toBeDefined()
  })

  test("should call handleIncrement if button is clicked", () => {
    render(<MyCounterApp />)

    const button = screen.getByRole("button", { name: "+1" })

    fireEvent.click(button)

    expect(handleDecrementMock).not.toBeCalled()
    expect(handleResetMock).not.toBeCalled()
    expect(handleIncrementMock).toBeCalled()

    expect(handleIncrementMock).toBeCalledTimes(1)
  })
})
