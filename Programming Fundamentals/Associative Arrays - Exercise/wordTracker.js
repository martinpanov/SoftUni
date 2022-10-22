function wordTracker(arrOfStrings) {
    let words = {

    }
    let importantWords = arrOfStrings.shift().split(" ")
    for (let word of importantWords) {
        words[word] = 0
    }
    for (let word of arrOfStrings) {
        if (words.hasOwnProperty(word)) {
            words[word]++
        }
    }
    let sortedValues = Object.entries(words).sort(([keyA, valueA], [keyB,valueB]) => {return valueB - valueA})
    for (let [key, value] of sortedValues) {
        console.log(`${key} - ${value}`)
    }
}
wordTracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])