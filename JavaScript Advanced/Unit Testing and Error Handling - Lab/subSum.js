function subSum(array, startIndex, endIndex) {
    let sum = 0
    if (!Array.isArray(array)) {
        return NaN
    }
    if (startIndex < 0) {
        startIndex = 0
    }
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1
    }
    for (let start = startIndex; start <= endIndex; start++) {
        sum += Number(array[start])
    }
    return sum
}
console.log(subSum('text', 0, 2))