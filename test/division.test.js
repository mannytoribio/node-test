import division from "../src/division"

describe("Testing division", () => {
  it("should return 6 / 2 = 3", () => {
    // Arrange
    let a = 6, b = 2

    // Act
    const actual = division(a,b)

    // Assert
    expect(actual).toBe(a/b)
  })
  it("it should fail because input is invalid", () => {
    // Arrange
    let a = 6, b = 0

    // Act && Assert in one line
    expect(() => division(a,b)).toThrowError("Invalid Input")
  })
})