import { GetGifsByQuery } from "../services/get-gifs-by-query.action"
import type { Gif } from "../interfaces/gif.interface"
import { useState } from "react"

export function useGifs() {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousSearches, setPreviousSearches] = useState<string[]>([])

  const handleSearchClicked = async (query: string) =>
    setGifs(await GetGifsByQuery(query))

  const handleSearch = async (query: string) => {
    const formattedQuery = query.trim().toLowerCase()

    if (formattedQuery.length === 0) return

    if (previousSearches.includes(formattedQuery)) return

    setPreviousSearches([formattedQuery, ...previousSearches].slice(0, 8))

    setGifs(await GetGifsByQuery(formattedQuery))
  }

  return { gifs, previousSearches, handleSearch, handleSearchClicked }
}
