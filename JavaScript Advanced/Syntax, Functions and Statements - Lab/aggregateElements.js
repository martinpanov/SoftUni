function aggregateElements(elements) {
    sumNumbers(elements)
    inverseNumbers(elements)
    concatNumbers(elements)
}
function sumNumbers(numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum
}

function inverseNumbers(numbers) {
    let inverseNumber = 0

    for (let k = 0; k < numbers.length; k++) {
        inverseNumber += 1 / numbers[k]
    }

    return inverseNumber
}

function concatNumbers(numbers) {
    let concatenateNumbers = ''

    for (let j = 0; j < numbers.length; j++) {
        concatenateNumbers += numbers[j]
    }

    return concatenateNumbers
}
aggregateElements([1, 2, 3])
