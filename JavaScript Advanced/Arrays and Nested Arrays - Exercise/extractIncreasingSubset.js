function extractIncreasingSubset(input) {
    let res = [input.shift()]
    for (let number of input) {
        if (res[res.length - 1] <= number) {
            res.push(number)
        }
    }
    return res
} 
extractIncreasingSubset([1, 
    3, 
    8, 
    8, 
    10, 
    12, 
    3, 
    2, 
    24])