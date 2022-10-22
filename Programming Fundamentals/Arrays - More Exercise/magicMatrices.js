function magicMatrices(arrays) {
    let sums = []
    let boolean = false
    for (let el of arrays) {
        let sum = 0
        for (let numbers of el) {
            sum += numbers
        }
        sums.push(sum)
    }
    for (let i = 0; i < sums.length; i++) {
        if (sums[0] === sums[1] && sums[0] === sums[2]) {
            boolean = true
        }
    }
    console.log(boolean)
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])