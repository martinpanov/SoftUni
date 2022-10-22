function processOddNumbers(arrayOfNumbers) {
    let oddNumbers = []
    for (let index = 0; index < arrayOfNumbers.length; index++) {
        if (index % 2 == 1) {
            oddNumbers.push(arrayOfNumbers[index])
        }
    }
    oddNumbers = oddNumbers.reverse()
    let newOddNumbers = []
    for (let index = 0; index < oddNumbers.length; index++) {
        let calc = oddNumbers[index] * 2
        newOddNumbers.push(calc)
    }
    console.log(newOddNumbers.join(' '))
}
processOddNumbers([10, 15, 20, 25])