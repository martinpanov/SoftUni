function negativeOrPositiveNumbers(arrayOfNumbers) {
    let result = []
    for (let index = 0; index < arrayOfNumbers.length; index++) {
        if (Number(arrayOfNumbers[index] < 0)) {
            result.unshift(arrayOfNumbers[index])
        } else {
            result.push(arrayOfNumbers[index])
        }
    }
    return result.join('\n')
}
console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']))