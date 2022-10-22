function reverseAnArrayOfNumbers (number, arr) {
    let result = []
    for (let i = number; i > 0; i--) {
       let push = result.push(arr[i - 1])
    }
    console.log(result.join(" "))
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])