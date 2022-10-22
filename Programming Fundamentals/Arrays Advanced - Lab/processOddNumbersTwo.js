function processOddNumbers(arrayOfNumbers) {
    let oddNumbersCalc = arrayOfNumbers.filter((arrayOfNumbers, index) => index % 2 == 1).reverse().map((arrayOfNumbers, index) => arrayOfNumbers * 2).join(' ')
    console.log(oddNumbersCalc)
}
processOddNumbers([10, 15, 20, 25])