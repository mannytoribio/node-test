const division = (num1, num2) => {
  if(typeof(num1) !== 'number') {
    throw "Invalid Input"
  }

  if((typeof(num2) !== 'number') || num2 === 0) {
    throw "Invalid Input"
  }
    return num1/num2
}

export default division