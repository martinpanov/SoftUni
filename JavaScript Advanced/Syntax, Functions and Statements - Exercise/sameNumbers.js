function sameNumbers(num) {
    let numberToString = num.toString()
    let firstNum = Number(numberToString[0])
    let sum = 0
    let isSame = true
    for (let i = 0; i < numberToString.length; i++) {
        if (firstNum !== Number(numberToString[i])) {
            isSame = false
        }
        sum += Number(numberToString[i])
    }
    console.log(isSame)
    console.log(sum)
}
sameNumbers(1234)