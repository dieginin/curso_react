const useState = (name: string) => {
  const setName = (newName: string) => console.log(newName)

  return [name, setName] as const
}

const [name, setName] = useState("Goku")
console.log(name) // Goku
setName("Vegeta") // Imprime "Vegeta"
