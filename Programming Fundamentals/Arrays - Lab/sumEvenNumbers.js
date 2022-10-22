function sumEvenNumbers (arr) {
    let index = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let numbers = Number(arr[index])
        if (numbers % 2 === 0) {
            sum += Number(arr[index])
            index++
        } else {
            index++
        }
    }
    console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6'])