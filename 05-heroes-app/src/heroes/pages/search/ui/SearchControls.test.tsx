import { describe, expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { MemoryRouter } from "react-router"
import { SearchControls } from "./SearchControls"

const renderSearchControls = (initialEntries: string[] = ["/"]) =>
  render(
    <MemoryRouter
      initialEntries={initialEntries}
      children={<SearchControls />}
    />
  )

if (typeof window.ResizeObserver === "undefined") {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver = ResizeObserver
}

describe("SearchControls", () => {
  test("should render search controls with default values", () => {
    const { container } = renderSearchControls()

    expect(container).toMatchSnapshot()
  })

  test("should set input value search when search param name is set", () => {
    renderSearchControls(["/?name=batman"])

    const input = screen.getByRole("textbox")
    expect(input.getAttribute("value")).toBe("batman")
  })

  test("should change params when input is changed and enter is pressed", () => {
    renderSearchControls(["/?name=batman"])

    const input = screen.getByRole("textbox")
    expect(input.getAttribute("value")).toBe("batman")

    fireEvent.change(input, { target: { value: "superman" } })
    fireEvent.keyDown(input, { key: "Enter" })
    expect(input.getAttribute("value")).toBe("superman")
  })

  test("should change params strength when slider change", () => {
    renderSearchControls(["/?name=batman&active-accordion=advanced-filters"])

    const slider = screen.getByRole("slider")

    expect(slider.getAttribute("aria-valuenow")).toBe("0")

    fireEvent.keyDown(slider, { key: "ArrowRight" })

    expect(slider.getAttribute("aria-valuenow")).toBe("1")
  })

  test("should accordion be open when active-accordion param is set", () => {
    renderSearchControls(["/?active-accordion=advanced-filters"])

    const accordion = screen.getByTestId("accordion")
    const accordionItem = accordion.querySelector("div")

    expect(accordionItem?.getAttribute("data-state")).toBe("open")
  })

  test("should accordion be closed when active-accordion param is not set", () => {
    renderSearchControls()

    const accordion = screen.getByTestId("accordion")
    const accordionItem = accordion.querySelector("div")

    expect(accordionItem?.getAttribute("data-state")).toBe("closed")
  })
})
