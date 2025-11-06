import type { CSSProperties } from "react"

const firstName = "Diego"
const lastName = "Balestra"

const favoriteGames = ["Brawl Stars", "Smash", "Mario Kart"]

const isActive = true

const address = {
  zipCode: "ABC123",
  country: "Canada",
}

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
}

export function MyAwesomeApp() {
  return (
    <div>
      <h1 data-testid='first-name-title'>{firstName}</h1>
      <h3>{lastName}</h3>
      <h1>{isActive ? "Activo" : "No Activo"}</h1>

      <p className='mi-clase-favorita'>{favoriteGames.join(", ")}</p>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  )
}
