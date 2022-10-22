function addAndSubstract (array) {
    let newArr = []
    let sumOriginal = 0
    let sumNewArr = 0
    for (let i = 0; i < array.length; i++) {
        sumOriginal += array[i]
        if (array[i] % 2 === 0) {
            array[i] += i
            sumNewArr += array[i]
            newArr.push(array[i])
        } else {
            array[i] -= i
            sumNewArr += array[i]
            newArr.push(array[i])
        }
    }
    console.log(newArr)
    console.log(sumOriginal)
    console.log(sumNewArr)
}
addAndSubstract([-5, 11, 3, 0, 2])