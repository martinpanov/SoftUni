function dictionary(data) {
    let noteBook = data[0].split(" | ").join(": ")
    let wordsAndDefinitions = noteBook.split(": ")
    let dictionary = {}
    for (let i = 0; i < wordsAndDefinitions.length; i++) {
        let words = wordsAndDefinitions[i]
        let definition = wordsAndDefinitions[i]
        if (i % 2 === 0) {
            if (dictionary.hasOwnProperty(words)) {
                continue
            }
            dictionary[words] = {
                "definitions": []
            }
        } else {
            words = wordsAndDefinitions[i-1] 
            dictionary[words]["definitions"].push(definition)
        }
    }
    let words = data[1].split(" | ")
    for (let k = 0; k < words.length; k++) {
        if (data[2] === "Test") {
            if (dictionary.hasOwnProperty(words[k])) {
                console.log(`${words[k]}: `)
                for (let j = 0; j < dictionary[words[k]]["definitions"].length; j++) {
                    console.log(` -${dictionary[words[k]]["definitions"][j]}`)
                }
            }
        } else {
            console.log(`${Object.keys(dictionary).join(" ")}`)
            break
        }
    }
}
dictionary((["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"])
)