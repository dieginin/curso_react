import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { MyAwesomeApp } from "./MyAwesomeApp"

describe("MyAwesomeApp", () => {
  test("should render firstName and LastName", () => {
    // CON CONTAINER
    const { container } = render(<MyAwesomeApp />)

    const h1 = container.querySelector("h1")
    const h3 = container.querySelector("h3")

    expect(h1?.innerHTML).toContain("Diego")
    expect(h3?.innerHTML).toContain("Balestra")
  })

  test("should render firstName and LastName", () => {
    // CON SCREEN
    render(<MyAwesomeApp />)

    const h1 = screen.getByTestId("first-name-title")

    expect(h1.innerHTML).toBe("Diego")
  })
})
