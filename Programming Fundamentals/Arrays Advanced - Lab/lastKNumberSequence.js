function lastKNumberSequence(integerOne, integerTwo) {
    let sum = 1
    let result = [1]
    for (let index = 1; index < integerOne; index++) {
        let sequence = result.slice(-integerTwo)
        let sum = 0
        for (let el of sequence) {
            sum += el
        }
        result.push(sum)
    }
    return result.join(' ')
}
console.log(lastKNumberSequence(6, 3))