import { describe, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { MyAwesomeApp } from "./MyAwesomeApp"

describe("MyAwesomeApp", () => {
  test("should render firstName and LastName", () => {
    render(<MyAwesomeApp />)

    screen.debug()
  })
})
