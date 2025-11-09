import { CustomHeader } from "./shared/components/CustomHeader"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { mockGifs } from "./mocks/gifs.mock"
import { useState } from "react"

export function GifsApp() {
  const [previousSearches, setPreviousSearches] = useState(["dragon ball z"])

  const handleSearchClicked = (search: string) => console.log({ search })

  const handleSearch = (query: string) => console.log({ query })

  return (
    <>
      {/* Header */}
      <CustomHeader
        title='Buscador de Gifs'
        description='Descubre y comparte el gif perfecto'
      />

      {/* Search */}
      <SearchBar
        placeholder='Buscar gifs'
        onSearch={(query: string) => handleSearch(query)}
      />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={handleSearchClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
