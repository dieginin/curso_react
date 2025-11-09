import { useRef, useState } from "react"

import { GetGifsByQuery } from "../services/get-gifs-by-query.action"
import type { Gif } from "../interfaces/gif.interface"

export function useGifs() {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousSearches, setPreviousSearches] = useState<string[]>([])

  const gifsCache = useRef<Record<string, Gif[]>>({})

  const handleSearchClicked = async (query: string) => {
    if (gifsCache.current[query]) return setGifs(gifsCache.current[query])

    const gifs = await GetGifsByQuery(query)
    setGifs(gifs)
  }

  const handleSearch = async (query: string) => {
    const formattedQuery = query.trim().toLowerCase()

    if (formattedQuery.length === 0) return

    if (previousSearches.includes(formattedQuery)) return

    setPreviousSearches([formattedQuery, ...previousSearches].slice(0, 8))

    const gifs = await GetGifsByQuery(formattedQuery)
    setGifs(gifs)

    gifsCache.current[formattedQuery] = gifs
  }

  return { gifs, previousSearches, handleSearch, handleSearchClicked }
}
