function sortNumbers(numberOne, numberTwo, numberThree){
    let sortedNumbers = [numberOne, numberTwo, numberThree].sort((a,b) => b-a)
    sortedNumbers.forEach((number) => console.log(number))
}
sortNumbers(2,1,3)