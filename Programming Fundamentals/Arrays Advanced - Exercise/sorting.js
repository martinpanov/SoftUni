function sorting(arr) {
    let copyOfOriginalArr = arr.slice()
    let sortedArray = arr.sort((a, b) => b - a)
    let sortedArrayAscending = copyOfOriginalArr.sort((j, k) => j - k)
    let finalArray = []
    for (let y = 0; y < copyOfOriginalArr.length / 2; y++) {
        if (sortedArrayAscending[y] === sortedArray[y]) {
            finalArray.push(sortedArray[y])
            continue
        } else {
            finalArray.push(sortedArray[y])
            finalArray.push(sortedArrayAscending[y])
        }
    }
    console.log(finalArray.join(" "))
}
sorting([34, 2, 45, 690, 6, 32, 7, 19, 47])