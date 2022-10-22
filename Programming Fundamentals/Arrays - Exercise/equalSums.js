function equalSums (array) {
    let elementFound = 'no'
    for (let i = 0; i < array.length; i++) {
        let sumLeftSide = 0
        let sumRightSide = 0
        for (let k = 0; k < i; k++) {
            sumLeftSide += array[k] 
        }
        for (let j = i + 1; j < array.length; j++) {
            sumRightSide += array[j]
        }
        if (sumLeftSide === sumRightSide) {
            elementFound = i
        }
    }
    console.log(elementFound)
}
equalSums([1, 2, 3, 3])