function greet(name: string): string {
  return `Hola ${name}!`
}
const greet2 = (name: string): string => `Hola ${name}!`

const message = greet("Goku")
const message2 = greet2("Vegeta")

console.log(message)
console.log(message2)

interface User {
  uid: string
  username: string
}

function getUser(): User {
  return {
    uid: "17775298-f406-5c08-a8c4-cc1611dbd6fb",
    username: "jonsfg4",
  }
}
const getUser2 = (): User => ({
  uid: "17775298-f406-5c08-a8c4-cc1611dbd6fb",
  username: "jonsfg4",
})

const user = getUser()
const user2 = getUser2()

console.log(user)
console.log(user2)

const myNumbers: number[] = [1, 2, 3, 4, 5]

myNumbers.forEach(console.log)
