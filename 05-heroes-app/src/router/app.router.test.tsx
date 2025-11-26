import {
  Outlet,
  RouterProvider,
  createMemoryRouter,
  useParams,
} from "react-router"
import { describe, expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"

import { appRouter } from "./app.router"

vi.mock("@/heroes/layouts/HeroesLayout", () => ({
  HeroesLayout: () => <div data-testid='heroes-layout' children={<Outlet />} />,
}))

vi.mock("@/heroes/pages/home/HomePage", () => ({
  HomePage: () => <div data-testid='home-page' />,
}))

vi.mock("@/heroes/pages/hero/HeroPage", () => ({
  HeroPage: () => {
    const { idSlug = "" } = useParams()

    return <div data-testid='hero-page' children={`HeroPage: ${idSlug}`} />
  },
}))

vi.mock("@/heroes/pages/search/SearchPage", () => ({
  default: () => <div data-testid='search-page' />,
}))

describe("appRouter", () => {
  test("should be configured as expected", () => {
    expect(appRouter.routes).toMatchSnapshot()
  })

  test("should render home page at root path", () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ["/"],
    })
    render(<RouterProvider router={router} />)

    expect(screen.getByTestId("home-page")).toBeDefined()
  })

  test("should render hero page at /heroes/:idSlug path", () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ["/heroes/superman"],
    })
    render(<RouterProvider router={router} />)

    expect(screen.getByTestId("hero-page").innerHTML).toContain("superman")
  })

  test("should render search page at /search path", async () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ["/search"],
    })
    render(<RouterProvider router={router} />)

    expect(await screen.findByTestId("search-page")).toBeDefined()
  })
})
