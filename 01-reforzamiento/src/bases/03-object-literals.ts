const ironman = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: 97744,
    city: "New York",
  },
}
console.log(ironman)

const spiderman = structuredClone(ironman)
spiderman.firstName = "Peter"
spiderman.lastName = "Parker"
spiderman.age = 22
spiderman.address.city = " San Jose"
console.log(spiderman)
