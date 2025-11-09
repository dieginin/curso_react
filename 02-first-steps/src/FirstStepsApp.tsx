import { ItemCounter } from "./shopping-cart/ItemCounter"

interface ItemInCart {
  productName: string
  quantity: number
}

const itemInCart: ItemInCart[] = [
  { productName: "Nintendo Switch", quantity: 1 },
  { productName: "Pro Controller", quantity: 4 },
  { productName: "Super Smash Bros", quantity: 2 },
]

export function FirstStepsApp() {
  return (
    <>
      {/* <h1>Hola Mundo</h1>
      <p>Esto es un párrafo</p>

      <button>Click Me</button>

      <div>
        <h2>Hola dentro del div</h2>
      </div> */}
      <h1>Carrito de Compras</h1>
      {/* <ItemCounter name='Nintendo Switch 2' quantity={1} />
      <ItemCounter name='Pro Controller' quantity={3} />
      <ItemCounter name='Super Smash Bros' quantity={2} /> */}

      {itemInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  )
}
