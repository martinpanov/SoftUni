function rightPlace (firstWord, letter, lastWord) {
    let wholeWord = ""
    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] === "_") {
            wholeWord += letter
        } else {
        wholeWord += firstWord[i]
        }
    }
    if (wholeWord === lastWord) {
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}
rightPlace('Str_ng', 'I', 'Strong')