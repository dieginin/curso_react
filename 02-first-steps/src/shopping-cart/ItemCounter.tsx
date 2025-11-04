interface Props {
  name: string
  quantity: number
}

export default function ItemCounter({ name, quantity }: Props) {
  return (
    <section
      style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}
    >
      <span style={{ width: 150 }}>{name}</span>
      <button>
        <small>-1</small>
      </button>
      <span>{quantity}</span>
      <button>
        <small>+1</small>
      </button>
    </section>
  )
}
