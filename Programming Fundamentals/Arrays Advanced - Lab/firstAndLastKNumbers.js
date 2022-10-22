function firstAndLastKNumbers(arrayOfNumbers) {
    let firstElement = arrayOfNumbers.shift()
    let firstSlicedElements = arrayOfNumbers.slice(0, firstElement)
    let lastSlicedElements = arrayOfNumbers.slice(-firstElement)
    console.log(firstSlicedElements.join(' '))
    console.log(lastSlicedElements.join(' '))
}
firstAndLastKNumbers([2, 7, 8, 9])