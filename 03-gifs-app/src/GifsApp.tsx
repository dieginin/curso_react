import { CustomHeader } from "./shared/components/CustomHeader"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export function GifsApp() {
  const { gifs, previousSearches, handleSearch, handleSearchClicked } =
    useGifs()

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
      <GifList gifs={gifs} />
    </>
  )
}
