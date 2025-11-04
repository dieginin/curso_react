export default function ItemCounter() {
  return (
    <section
      style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}
    >
      <span style={{ width: 150 }}>Nintendo Switch 2</span>
      <button>+1</button>
      <span>10</span>
      <button>-1</button>
    </section>
  )
}
