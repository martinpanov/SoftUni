function nonDecreasingSubset(numbers) {
    let result = []
    result.push(numbers[0])
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= result[result.length - 1]) {
            result.push(numbers[i])
        }
    }
    console.log(result.join(" "))
}
nonDecreasingSubset([101,10])