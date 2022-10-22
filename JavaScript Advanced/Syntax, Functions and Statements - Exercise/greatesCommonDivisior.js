function greatesCommonDivisior(numOne, numTwo) {
    let commonDivisior = 0
    for (let i = 0; i < numOne; i++) {
        if (numOne % i === 0 && numTwo % i === 0) {
            commonDivisior = i
        }
    }
    console.log(commonDivisior)
}
greatesCommonDivisior(2154, 458)