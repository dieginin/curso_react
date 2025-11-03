const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
}

const { name: ironmanName, age, key } = person
console.log(ironmanName, age, key)

interface Hero {
  name: string
  age: number
  key: string
  rank?: string
}

const useContext = ({ key, name, age, rank = "Sin Rango" }: Hero) => {
  return {
    keyName: key,
    user: { name, age },
    rank,
  }
}

// const {
//   keyName,
//   rank,
//   user: { name },
// } = useContext(person)
const { keyName, rank, user } = useContext(person)
const { name } = user

console.log({ keyName, rank, name })
