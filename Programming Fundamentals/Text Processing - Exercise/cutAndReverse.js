function cutAndReverse(text) {
    let splittedText = text.split("")
    let reversedText = splittedText.reverse().join("")
    let secondWord = reversedText.substring(0, reversedText.length / 2)
    let firstWord = reversedText.substring(reversedText.length / 2, reversedText.length)
    console.log(firstWord)
    console.log(secondWord)
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')