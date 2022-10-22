function equalArrays (arrayOne, arrayTwo) {
    let sum = 0
    let booLean = true
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            booLean = false
            break
        }
        if (arrayOne[i] === arrayTwo[i]) {
            sum += Number(arrayOne[i])
        }
    }
    if (booLean === true) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
equalArrays(['1'], ['10'])