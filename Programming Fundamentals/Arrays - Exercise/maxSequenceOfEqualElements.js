function maxSequence(array) {
    let sequence = []
    for (let i = 0; i < array.length; i++) {
        let tempSequence = []
        for (let k = i; k < array.length; k++) {
            if (array[i] === array[k]) {
                tempSequence.push(array[k])
            } else {
                break
            }
        }
        if (tempSequence.length > sequence.length) {
            sequence = tempSequence
        }
    }
    console.log(sequence.join(' '))
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])