function evenAndOddSubstraction (arr) {
    let sumOdd = 0
    let sumEven = 0
    let total = 0 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sumOdd += arr[i]
        } else {
            sumEven += arr[i]
        }
    }
    total = sumOdd - sumEven
    console.log(total)
}
evenAndOddSubstraction([2,4,6,8,10])