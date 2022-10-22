function stringSubstring(word, text) {
    let lowerCaseWordFromInput = word.toLowerCase()
    let splittedText = text.split(" ")
    for (let el of splittedText) {
        let lowerCaseWord = el.toLowerCase()
        if (lowerCaseWord === lowerCaseWordFromInput) {
            console.log(word)
            return
        }
    }
    console.log(`${word} not found!`)
}
stringSubstring('python',
'JavaScript is the best programming language')