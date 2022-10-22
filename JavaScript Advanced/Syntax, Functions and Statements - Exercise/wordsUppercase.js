function wordsUppercase(text) {
    let regex = /\w+/g
    let result = text.match(regex).join(", ").toUpperCase()
    console.log(result)
}
wordsUppercase('Hi, how are you?')