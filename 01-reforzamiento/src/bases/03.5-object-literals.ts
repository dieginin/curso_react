interface Address {
  postalCode: number
  city: string
}

interface Hero {
  firstName: string
  lastName: string
  age: number
  address: Address
}

const ironman: Hero = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: 97744,
    city: "New York",
  },
}
console.log(ironman)

const spiderman: Hero = {
  firstName: "Peter",
  lastName: "Parker",
  age: 22,
  address: {
    postalCode: 97234,
    city: "San Jose",
  },
}
console.log(spiderman)
