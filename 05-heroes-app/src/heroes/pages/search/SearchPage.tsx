import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { SearchHero } from "@/heroes/actions/search-hero.actions"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

const SearchPage = () => {
  const [searchParams] = useSearchParams()

  const name = searchParams.get("name") ?? undefined
  const team = searchParams.get("team") ?? undefined
  const category = searchParams.get("category") ?? undefined
  const universe = searchParams.get("universe") ?? undefined
  const status = searchParams.get("status") ?? undefined
  const strength = searchParams.get("strength") ?? undefined

  const { data: searchData } = useQuery({
    queryKey: ["search", { name, team, category, universe, status, strength }],
    queryFn: () =>
      SearchHero({
        name: name,
        team: team,
        category: category,
        universe: universe,
        status: status,
        strength: strength,
      }),
  })

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title='Búsqueda de SuperHeroes'
        description='Descubre, explora y administra superheroes y villanos'
      />

      {/* Breadcrumb */}
      <CustomBreadcrumb currentPage='Buscador' />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/* Results */}
      <HeroGrid heroes={searchData ?? []} />
    </>
  )
}

export default SearchPage
