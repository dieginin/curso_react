import { describe, expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"

import { FirstStepsApp } from "./FirstStepsApp"

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: () => <div data-testid='ItemCounter' />,
}))

describe("FirstStepsApp", () => {
  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />)

    expect(container).toMatchSnapshot()
  })

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />)

    const itemCounters = screen.getAllByTestId("ItemCounter")

    expect(itemCounters.length).toBe(3)
  })
})
