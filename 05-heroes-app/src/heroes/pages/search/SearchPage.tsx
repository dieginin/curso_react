import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"

const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title='Búsqueda de SuperHeroes'
        description='Descubre, explora y administra superheroes y villanos'
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />
    </>
  )
}

export default SearchPage
