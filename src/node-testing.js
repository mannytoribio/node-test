

const sum = (num1, num2) => {
  if(typeof(num1) !== 'number') {
    throw "Invalid Input"
  }

  if(typeof(num2) !== 'number') {
    throw "Invalid Input"
  }
  return num1 + num2
}

export default sum