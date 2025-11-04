import ItemCounter from "./shopping-cart/ItemCounter"

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
      <ItemCounter />
      <ItemCounter />
      <ItemCounter />
    </>
  )
}
