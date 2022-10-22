function secretChat(data) {
    let concealedMessage = data.shift()
    for (let i = 0; i < data.length; i++) {
        let [action, firstParam, secondParam] = data[i].split(":|:")
        switch (action) {
            case "InsertSpace":
                let index = Number(firstParam)
                let firstPart = concealedMessage.slice(0, index)
                let secondPart = concealedMessage.slice(index)
                concealedMessage = firstPart + " " + secondPart
                console.log(concealedMessage)
                break
            case "Reverse":
                let message = firstParam
                if (!concealedMessage.includes(message)) {
                    console.log('error')
                    break
                }
                let reverseMessage = message.split("").reverse().join("")
                concealedMessage = concealedMessage.replace(message,"").split("")
                concealedMessage.push(reverseMessage)
                concealedMessage = concealedMessage.join("")
                console.log(concealedMessage)
                break
            case "ChangeAll":
                let oldString = firstParam
                let newString = secondParam
                let oldMessage = concealedMessage.split(oldString)
                concealedMessage = oldMessage.join(newString)
                console.log(concealedMessage)
                break
        }
    }
    console.log(`You have a new text message: ${concealedMessage}`)
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])