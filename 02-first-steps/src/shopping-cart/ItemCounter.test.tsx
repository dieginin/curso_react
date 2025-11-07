import { describe, expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import ItemCounter from "./ItemCounter"

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const itemName = "Test Item"

    render(<ItemCounter name={itemName} />)

    expect(screen.getByText(itemName)).toBeDefined()
    expect(screen.getByText(itemName)).not.toBeNull()
  })

  test("should render with custom quantity", () => {
    const itemName = "Test Item"
    const itemQuantity = 10

    render(<ItemCounter name={itemName} quantity={itemQuantity} />)

    expect(screen.getByText(itemQuantity)).toBeDefined()
  })

  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter name={"Test Item"} />)

    const [, buttonAdd] = screen.getAllByRole("button")

    fireEvent.click(buttonAdd)

    expect(screen.getAllByText(2)).toBeDefined()
  })

  test("should decrease count when -1 button is pressed", () => {
    render(<ItemCounter name={"Test Item"} />)

    const [buttonDecrease] = screen.getAllByRole("button")

    fireEvent.click(buttonDecrease)

    expect(screen.getAllByText(0)).toBeDefined()
  })

  test("should not decrease count when -1 button is pressed and quantity is 0", () => {
    render(<ItemCounter name={"Test Item"} quantity={0} />)

    const [buttonDecrease] = screen.getAllByRole("button")

    fireEvent.click(buttonDecrease)

    expect(screen.getAllByText(0)).toBeDefined()
  })
})
