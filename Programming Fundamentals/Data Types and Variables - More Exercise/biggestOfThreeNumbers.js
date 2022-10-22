function biggestOfThreeNumbers(numberOne, numberTwo, numberThree) {
    let numbers = [numberOne, numberTwo, numberThree]
    let result = numbers.sort((a,b) => b-a)
    console.log(result[0])
}
biggestOfThreeNumbers(-2,
    7,
    3)