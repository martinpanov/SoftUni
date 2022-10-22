function negativeAndPositiveNumbers(elements) {
    let arr = []
    for (let el of elements) {
        if (el < 0) {
            arr.unshift(el)
        } else {
            arr.push(el)
        }
    }
    arr.forEach(el => console.log(el))
}
negativeAndPositiveNumbers([7, -2, 8, 9])