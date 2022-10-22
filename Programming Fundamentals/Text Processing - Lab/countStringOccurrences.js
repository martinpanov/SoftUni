function countStringOccurences(text, word) {
    let splittedText = text.split(" ")
    let counter = 0
    for (let el of splittedText) {
        if (el === word) {
            counter++
        }
    }
    console.log(counter)
}
countStringOccurences('This is a word and it also is a sentence',
'is')