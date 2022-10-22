function maxNumber (array) {
    let maxNumber = []
    for (let i = 0; i < array.length; i++) {
        let isLarger = true
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] <= array[k]) {
                isLarger = false
            } 
        }
        if (isLarger) {
            maxNumber.push(array[i])
        }
    }
    console.log(maxNumber.join(' '))
}
maxNumber([27, 19, 42, 2, 13, 45, 48])