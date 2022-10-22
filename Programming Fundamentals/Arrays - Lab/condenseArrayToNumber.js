function condenseArrayToNumber (arr) {
    let sum = 0
    while (arr.length > 1) {
        let arrTwo = []
        for (let i = 0; i < arr.length - 1; i++) {
            arrTwo[i] = arr[i] + arr[i + 1]
        }
        arr = arrTwo
    }
    console.log(String(arr))
}
condenseArrayToNumber([5,0,4,1,2])