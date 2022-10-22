function substring(string, numOne, numTwo) {
    let secondIndex = numOne + numTwo
    let res = string.substring(numOne, secondIndex)
    console.log(res)
}
substring('ASentence', 1, 8)