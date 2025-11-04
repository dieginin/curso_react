const firstName = "Diego"
const lastName = "Balestra"

const favoriteGames = ["Brawl Stars", "Smash", "Mario Kart"]

const isActive = true

const address = {
  zipCode: "ABC123",
  country: "Canada",
}

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No Activo"}</h1>

      <p>{JSON.stringify(address)}</p>
    </>
  )
}
