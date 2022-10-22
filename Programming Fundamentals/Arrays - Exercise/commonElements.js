function commonElements (firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        for (let k = 0; k < secondArray.length; k++) {
            if (firstArray[i] === secondArray[k]) {
                console.log(firstArray[i])
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])