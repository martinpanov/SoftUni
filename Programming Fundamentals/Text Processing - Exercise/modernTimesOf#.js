function modernTimesOf(text) {
    let splittedText = text.split(" ")
    let specialWords = []
    for (let i = 0; i < splittedText.length; i++) {
        let word = splittedText[i]
        if (word.includes("#") && word.length > 1) {
            let isValid = true
            let wordLowerCase = word.slice(1).toLowerCase()
            for (let k = 0; k < wordLowerCase.length; k++) {
                if (wordLowerCase.charCodeAt(k) < 97 || wordLowerCase.charCodeAt(k) > 122) {
                    isValid = false
                    break
                }
            }
            if (isValid) {
                specialWords.push(word.slice(1))
            }
        }
    }
    console.log(specialWords.join("\n"))
}
modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')