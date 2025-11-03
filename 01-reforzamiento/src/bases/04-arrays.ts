const myArray: number[] = [1, 2, 3, 4, 5, 6]

myArray.push(7)

console.log(myArray)

myArray.forEach((myNumber) => console.log(myNumber + 10))

const myArray2 = [...myArray]
myArray2.push(8)

console.log({ myArray, myArray2 })
