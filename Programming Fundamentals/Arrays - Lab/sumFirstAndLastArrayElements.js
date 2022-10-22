function sumFirstAndLastArrayElements (arr) {
    let length = arr.length
    let sum = arr[0] + arr[length - 1]
    console.log(sum)
}
sumFirstAndLastArrayElements([20, 30, 40])