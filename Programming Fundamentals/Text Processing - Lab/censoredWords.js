function censoredWords(text, censoredWord) {
    let splittedText = text.split(censoredWord)
    let newText = splittedText.join("*".repeat(censoredWord.length))
    console.log(newText)
}
censoredWords('A small sentence with some small', 'small')