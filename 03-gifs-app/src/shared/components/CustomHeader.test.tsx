import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { CustomHeader } from "./CustomHeader"

describe("CustomHeader", () => {
  const title = "Test Title"
  const description = "Test Description"

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />)

    expect(screen.getByText(title)).toBeDefined()
  })

  test("should render the description when provided", () => {
    render(<CustomHeader title={title} description={description} />)

    // 3 opciones diferentes de hacer lo mismo
    expect(screen.getByText(description)).toBeDefined()
    expect(screen.getByRole("paragraph")).toBeDefined()
    expect(screen.getByRole("paragraph").innerHTML).toBe(description)
  })

  test("should not render description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />)

    const divElement = container.querySelector(".content-center")

    // 2 opciones diferentes de hacer lo mismo
    expect(divElement?.querySelector("p")).toBeFalsy()
    expect(divElement?.querySelector("p")).toBeNull()
  })
})
