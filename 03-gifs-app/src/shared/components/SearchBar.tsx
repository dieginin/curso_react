import { useEffect, useState } from "react"

interface Props {
  placeholder?: string
  onSearch: (query: string) => void
}

export function SearchBar({ placeholder = "Buscar", onSearch }: Props) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const timeoutId = setTimeout(() => onSearch(query), 700)

    return () => clearTimeout(timeoutId)
  }, [query, onSearch])

  const handleSearch = () => onSearch(query)

  const handleKeyDown = ({ key }: { key: string }) => {
    if (key === "Enter") handleSearch()
  }

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
