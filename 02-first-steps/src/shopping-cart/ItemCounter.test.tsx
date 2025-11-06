import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

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
})
