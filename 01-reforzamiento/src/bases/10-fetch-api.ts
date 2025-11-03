const API_KEY = "38lZjFNPNKurPr7sVvcIDOcMxZM7GeLJ"

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
)

myRequest
  .then((response) => response.json())
  .then(({ data }) => {
    const imageUrl = data.images.original.url

    const imageElement = document.createElement("img")
    imageElement.src = imageUrl

    document.body.append(imageElement)
  })
  .catch((error) => console.error(error))
