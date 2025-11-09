import { CustomHeader } from "./shared/components/CustomHeader"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { mockGifs } from "./mocks/gifs.mock"

export function GifsApp() {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title='Buscador de Gifs'
        description='Descubre y comparte el gif perfecto'
      />

      {/* Search */}
      <SearchBar placeholder='Buscar gifs' />

      {/* Búsquedas previas */}
      <PreviousSearches searches={["Goku", "Dragon Ball Z"]} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
