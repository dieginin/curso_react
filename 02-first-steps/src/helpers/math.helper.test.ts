import { add, multiply, subtract } from "./math.helper"
import { describe, expect, test } from "vitest"

describe("Add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1
    const b = 1

    // ! 2. Act
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(a + b)
  })

  test("should add two negative numbers", () => {
    // ! 1. Arrange
    const a = -1
    const b = -1

    // ! 2. Act
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(a + b)
  })

  test("should add one positive and one negative number", () => {
    // ! 1. Arrange
    const a = 1
    const b = -1

    // ! 2. Act
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(a + b)
  })
})

describe("Subtract", () => {
  test("should subtract two positive numbers", () => {
    const a = 1
    const b = 1

    const result = subtract(a, b)

    expect(result).toBe(a - b)
  })

  test("should subtract two negative numbers", () => {
    const a = -1
    const b = -1

    const result = subtract(a, b)

    expect(result).toBe(a - b)
  })

  test("should subtract one positive and one negative number", () => {
    const a = 1
    const b = -1

    const result = subtract(a, b)

    expect(result).toBe(a - b)
  })
})

describe("Multiply", () => {
  test("should multiply two positive numbers", () => {
    const a = 1
    const b = 1

    const result = multiply(a, b)

    expect(result).toBe(a * b)
  })

  test("should multiply two negative numbers", () => {
    const a = -1
    const b = -1

    const result = multiply(a, b)

    expect(result).toBe(a * b)
  })

  test("should multiply one positive and one negative number", () => {
    const a = 1
    const b = -1

    const result = multiply(a, b)

    expect(result).toBe(a * b)
  })

  test("should multiply by zero", () => {
    const a = 1
    const b = 0

    const result = multiply(a, b)

    expect(result).toBe(a * b)
  })
})
