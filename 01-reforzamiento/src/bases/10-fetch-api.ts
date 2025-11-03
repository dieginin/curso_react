import type { GiphyResponse } from "../data/giphy.response"

const API_KEY = "38lZjFNPNKurPr7sVvcIDOcMxZM7GeLJ"

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
)

const displayGiphyImage = (url: string) => {
  const imageElement = document.createElement("img")
  imageElement.src = url
  document.body.append(imageElement)
}

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyResponse) =>
    displayGiphyImage(data.images.original.url)
  )
  .catch((error) => console.error(error))
