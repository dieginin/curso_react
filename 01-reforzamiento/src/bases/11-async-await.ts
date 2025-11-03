import type { GiphyResponse } from "../data/giphy.response"

const API_KEY = "38lZjFNPNKurPr7sVvcIDOcMxZM7GeLJ"

const displayGiphyImage = (url: string) => {
  const imageElement = document.createElement("img")
  imageElement.src = url
  document.body.append(imageElement)
}

const fetchRandomGifUrl = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  )
  const { data }: GiphyResponse = await response.json()

  return data.images.original.url
}

fetchRandomGifUrl().then(displayGiphyImage)
