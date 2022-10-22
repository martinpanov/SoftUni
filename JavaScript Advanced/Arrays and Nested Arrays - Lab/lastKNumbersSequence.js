function lastKNumbersSequence(n, k) {
    let arr = [1]
    for (let i = 0; i < n - 1; i++) {
        let copyOfArr = arr.slice()
        let result = copyOfArr.splice(-k).reduce((total, number) => total += number)
        arr.push(result)
    }
    return arr
}
lastKNumbersSequence(8, 2)