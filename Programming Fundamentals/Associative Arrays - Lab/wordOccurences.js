function wordOccurences(arrayOfStrings) {
    let words = {

    }
    for (let el of arrayOfStrings) {
        let word = el
        let counter = 0
        if (words.hasOwnProperty(word)) {
            for (let key of Object.keys(words)) {
                if (key === el) {
                    words[word]++
                }
            }
        } else {
            words[word] = counter + 1
        }
    }
    let sortedValues = Object.entries(words).sort((a,b) => b[1]-a[1])
    for (let el of sortedValues) {
        console.log(`${el[0]} -> ${el[1]} times`)
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])