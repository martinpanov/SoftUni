function theImitationGame(data) {
    let encryptedMessage = data.shift()
    for (let i = 0; i < data.length; i++) {
        let [command, firstParam, secondParam] = data[i].split("|")
        switch(command) {
            case "Move":
                let lettersToBeMoved = Number(firstParam)
                let firstLetters = encryptedMessage.slice(0, lettersToBeMoved)
                let lastLetters = encryptedMessage.slice(lettersToBeMoved)
                encryptedMessage = lastLetters + firstLetters
            break
            case "Insert":
                let index = Number(firstParam)
                let letter = secondParam
                let firstPart = encryptedMessage.slice(0, index)
                let secondPart = encryptedMessage.slice(index)
                encryptedMessage = firstPart + letter + secondPart
            break
            case "ChangeAll":
                let oldLetter = firstParam
                let newLetter = secondParam
                encryptedMessage = encryptedMessage.split(oldLetter)
                encryptedMessage = encryptedMessage.join(newLetter)
            break
        }
    }
    console.log(`The decrypted message is: ${encryptedMessage}`)
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ])