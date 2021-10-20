import sum from '../src/node-testing'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

describe("Testing sum", () => {
  it("should return 3 + 2 = 5", () => {
    // Arrange
    let a = 3, b = 2

    // Act
    const actual = sum(a,b)

    // Assert
    expect(actual).toBe(a+b)
  })

  it("it should fail because input is invalid", () => {
    // Arrange
    let a = 4, b

    // Act && Assert in one line
    expect(() => sum(a,b).toThrowError("Invalid Input"))
  })

  it("it should fail because input is invalid", () => {
    // Arrange
    let a, b=3

    // Act && Assert in one line
    expect(() => sum(a,b).toThrowError("Invalid Input"))
  })
})

// it("it should fail because input is invalid with try catch", () => {
//   // Arrange
//   let a = 4, b

//   // Act
//   try {
    
//   const actual = sum(a,b)

//   } catch(error) {

//   // Assert
//   expect(error).toBe("Invalid Input")
//   }
// })
// })