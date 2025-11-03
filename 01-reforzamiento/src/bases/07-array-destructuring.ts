const characterNames = ["Goku", "Vegeta", "Trunks"]

const [, p2] = characterNames
console.log({ p2 })

const [, , p3] = characterNames
console.log({ p3 })

const returnsArrayFn = () => ["ABC", 123] as const

const [letters, numbers] = returnsArrayFn()
console.log(letters + 100)
console.log(numbers + 100)
console.log(letters, numbers)
