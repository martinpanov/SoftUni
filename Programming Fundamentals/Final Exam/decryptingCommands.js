function decryptingCommands(data) {
    let text = data.shift()
    for (let i = 0; i < data.length; i++) {
        let [action, firstParam, secondParam] = data[i].split(" ")
        switch(action) {
            case "Replace":
                let oldChar = firstParam
                let newChar = secondParam
                text = text.split(oldChar)
                text = text.join(newChar)
                console.log(text)
            break
            case "Cut":
                let startIndex = Number(firstParam)
                let endIndex = Number(secondParam)
                if ((startIndex < 0) || (endIndex < 0) || (startIndex > text.length) || (endIndex > text.length)){
                    console.log('Invalid indices!')
                    break
                }
                let firstPart = text.slice(0, startIndex)
                let secondPart = text.slice(endIndex+1)
                text = firstPart + secondPart
                console.log(text)
            break
            case "Make":
                let upperOrLowerCase = firstParam
                if (upperOrLowerCase === "Upper") {
                    text = text.toUpperCase()
                    console.log(text)
                    break
                }
                text = text.toLowerCase()
                console.log(text)
            break
            case "Check":
                let stringToCheck = firstParam
                if (text.includes(stringToCheck)) {
                    console.log(`Message contains ${stringToCheck}`)
                    break
                }
                console.log(`Message doesn't contain ${stringToCheck}`)
            break
            case "Sum":
                let startingIndex = Number(firstParam)
                let endingIndex = Number(secondParam)
                let sum = 0
                if ((startingIndex < 0) || (endingIndex < 0) || (startingIndex > text.length) || (endingIndex > text.length)){
                    console.log('Invalid indices!')
                    break
                }
                for (let k = startingIndex; k < endingIndex+1; k++) {
                    sum += text.charCodeAt(k)
                }
                console.log(sum)
            break
        }
    }
}
decryptingCommands((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"]))