function revealWords(word, text) {
    let index = 0
    let splittedWords = word.split(", ")
    let splittedText = text.split(" ")
   for (let el of splittedText) {
        for (let words of splittedWords) {
            if (el.includes("*") && words.length === el.length) {
                splittedText[index] = splittedText[index].replace(el, words)
            }
        }
        index++
   }
   console.log(splittedText.join(" "))
}
revealWords('learning, great',
'softuni is ***** place for ******** new programming languages')