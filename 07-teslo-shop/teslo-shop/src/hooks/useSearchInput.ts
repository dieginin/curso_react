import { useRef, type KeyboardEvent } from "react"
import { useSearchParams } from "react-router"

export const useSearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const inputRef = useRef<HTMLInputElement>(null)

  const query = searchParams.get("query") || ""

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return

    const query = inputRef.current?.value
    const newSearchParams = new URLSearchParams()

    if (!query) {
      newSearchParams.delete("query")
    } else {
      newSearchParams.set("query", query)
    }

    setSearchParams(newSearchParams)
  }
  return { inputRef, query, handleSearch }
}
