import { describe, expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import MyCounterApp from "./MyCounterApp"

describe("MyCounterApp", () => {
  test("should render component", () => {
    render(<MyCounterApp />)

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(0)
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined()
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined()
    expect(screen.getByRole("button", { name: "+1" })).toBeDefined()
  })

  test("should increment counter", () => {
    render(<MyCounterApp />)

    const heading = screen.getByRole("heading", { level: 1 })
    const button = screen.getByRole("button", { name: "+1" })

    fireEvent.click(button)

    expect(heading.innerHTML).toContain(1)
  })

  test("should not decrement counter if its equal to 0", () => {
    render(<MyCounterApp />)

    const heading = screen.getByRole("heading", { level: 1 })
    const button = screen.getByRole("button", { name: "-1" })

    fireEvent.click(button)

    expect(heading.innerHTML).toContain(0)
  })

  test("should decrement counter if it's above 0", () => {
    render(<MyCounterApp />)

    const heading = screen.getByRole("heading", { level: 1 })
    const decrementButton = screen.getByRole("button", { name: "-1" })
    const incrementButton = screen.getByRole("button", { name: "+1" })

    fireEvent.click(incrementButton)
    expect(heading.innerHTML).toContain(1)

    fireEvent.click(decrementButton)
    expect(heading.innerHTML).toContain(0)
  })
})
