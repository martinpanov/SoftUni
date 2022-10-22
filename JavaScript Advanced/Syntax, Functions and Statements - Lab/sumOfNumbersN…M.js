function sumOfNumbers(firstNum, secondNum) {
    let sum = 0
    for (let i = Number(firstNum); i <= Number(secondNum); i++) {
        sum += i
    }
    console.log(sum)
}
sumOfNumbers('1', '5')