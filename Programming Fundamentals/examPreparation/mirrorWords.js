function mirrorWords(data) {
    let copyOfData = data.slice()
    let reggex = /([@|#]{1})(?<word1>[A-z]{3,})\1{2}(?<word2>[A-z]{3,})\1/g
    let match = copyOfData[0].match(reggex)
    if (match !== null) {
        if (match.length <= 2) {
            reggex = /([@|#]{1})(?<word1>[A-z]{3,})\1{2}(?<word2>[A-z]{3,})\1/
        }
    }
    if (reggex.test(data[0]) === false) {
        console.log('No word pairs found!')
    }
    let wordPairs = 1
    let testedData = reggex.exec(data)
    let mirrorWords = []
    while(testedData !== null) {
        let firstWord = testedData.groups.word1
        let secondWord = testedData.groups.word2
        let reversedSecondWord = secondWord.split("").reverse().join("")
        if (reversedSecondWord === firstWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`)
        }
        if (match !== null) {
            if (match.length <= 2) {
                reggex = /([@|#]{1})(?<word1>[A-z]{3,})\1{2}(?<word2>[A-z]{3,})\1/g
                if (match.length < 2) {
                    wordPairs--
                    testedData = reggex.exec(data)
                }
                testedData = reggex.exec(data)
            }
        }
        testedData = reggex.exec(data)
        wordPairs++
    }
    if (reggex.test(data)) {
        console.log(`${wordPairs} word pairs found!`)
    }
    if (mirrorWords.length < 1) {
        console.log('No mirror words!')
    } else {
        console.log('The mirror words are:')
        console.log(mirrorWords.join(", "))
    }
}
mirrorWords([
    '#Part##traP#@pack@@ckap@'
    ]
    
    )