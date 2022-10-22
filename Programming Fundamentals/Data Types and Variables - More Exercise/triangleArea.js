function triangleArea(numberOne, numberTwo, numberThree) {
    let semiPerimeter = (numberOne + numberTwo + numberThree) / 2
    let result = Math.sqrt(semiPerimeter *(semiPerimeter - numberOne) * (semiPerimeter - numberTwo) * (semiPerimeter - numberThree))
    console.log(result)
}
triangleArea(2,3.5,4)