function smallestTwoNumbers(arrayOfNumbers) {
    let smallestNumbers = arrayOfNumbers.sort((a,b) => a-b).splice(0, 2)
    return smallestNumbers.join(' ')
}
smallestTwoNumbers([30, 15, 50, 5])