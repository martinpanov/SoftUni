function pascalCaseSplitter(text){
    let words = []
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
            let word = text.substring(i, text.legnth)
            words.push(word)
        }
    }
    for (let k = 1; k < words.length; k++) {
        words[k - 1] = words[k - 1].replace(words[k],'')
    }
    console.log(words.join(", "))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')