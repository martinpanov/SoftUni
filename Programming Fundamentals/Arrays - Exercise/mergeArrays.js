function mergeArrays (firstArray, secondArray) {
    let thirdArray = []
    let result = 0
    for (let i = 0; i < firstArray.length; i++) {
            if (i % 2 === 0) {
                result = Number(firstArray[i]) + Number(secondArray[i])
                thirdArray.push(result)
            } else {
                thirdArray.push(firstArray[i] + secondArray[i])
            }
        }
    console.log(thirdArray.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])