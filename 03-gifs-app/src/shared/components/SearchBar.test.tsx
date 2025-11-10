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
})
