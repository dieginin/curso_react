import { describe, expect, test, vi } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import { SearchBar } from "./SearchBar"

describe("SearchBar", () => {
  test("should render SearchBar correctly", () => {
    const { container } = render(<SearchBar onSearch={() => {}} />)

    expect(container).toMatchSnapshot()
  })

  test("should call onSearch with the correct value after 700ms", async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "test" } })

    expect(onSearch).not.toBeCalled()
    await waitFor(() => {
      expect(onSearch).toBeCalled()
      expect(onSearch).toBeCalledWith("test")
    })
  })

  test("should call only once with the las value (debounce)", async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "t" } })
    fireEvent.change(input, { target: { value: "te" } })
    fireEvent.change(input, { target: { value: "tes" } })
    fireEvent.change(input, { target: { value: "test" } })

    await waitFor(() => {
      expect(onSearch).toBeCalledTimes(1)
      expect(onSearch).toBeCalledWith("test")
    })
  })

  test("should call onSearch en button click with input value", () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "test" } })

    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(onSearch).toBeCalledTimes(1)
    expect(onSearch).toBeCalledWith("test")
  })

  test("should input have the correct placeholder value", () => {
    render(<SearchBar placeholder='Search Test' onSearch={() => {}} />)

    expect(screen.getByPlaceholderText("Search Test")).toBeDefined()
  })
})
