import { afterEach, describe, expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"

import { FirstStepsApp } from "./FirstStepsApp"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((_props: unknown) => (
  <div data-testid='ItemCounter' />
))

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}))

describe("FirstStepsApp", () => {
  afterEach(() => vi.clearAllMocks())

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />)

    expect(container).toMatchSnapshot()
  })

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />)

    const itemCounters = screen.getAllByTestId("ItemCounter")

    expect(itemCounters.length).toBe(3)
  })

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />)

    expect(mockItemCounter).toBeCalledTimes(3)
    expect(mockItemCounter).toBeCalledWith({
      name: "Nintendo Switch",
      quantity: 1,
    })
    expect(mockItemCounter).toBeCalledWith({
      name: "Pro Controller",
      quantity: 4,
    })
    expect(mockItemCounter).toBeCalledWith({
      name: "Super Smash Bros",
      quantity: 2,
    })
  })
})
