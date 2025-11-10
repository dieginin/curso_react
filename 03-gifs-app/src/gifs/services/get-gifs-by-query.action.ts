import type { Gif } from "../interfaces/gif.interface"
import type { GiphyResponse } from "../interfaces/giphy.response"
import { giphyApi } from "./api/giphy.api"

export async function GetGifsByQuery(query: string): Promise<Gif[]> {
  if (query.trim().length === 0) return []

  const response = await giphyApi<GiphyResponse>("/search", {
    params: { q: query, limit: 10 },
  })

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title.replace(" GIF", ""),
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }))
}
