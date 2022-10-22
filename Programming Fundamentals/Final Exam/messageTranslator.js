function messageTranslator(data){
    let numberOfCommands = data.shift()
    let reggex = /(!){1}(?<command>[A-Z]{1}[a-z]{2,})\1:\[(?<name>[A-z]{8,})\]/g
    let testData = reggex.exec(data)
    let asciCodes = []
    for (let i = 0; i < data.length; i++) {
        if (reggex.test(data) === false) {
            console.log('The message is invalid')
            continue
        }
        let stringName = String(testData.groups["name"])
        for (let k = 0; k < stringName.length; k++) {
            let charCodeAt = stringName.charCodeAt(k)
            asciCodes.push(charCodeAt)
        }
        asciCodes = asciCodes.join(" ") 
        console.log(`${testData.groups["command"]}: ${asciCodes}`)
    }
}
messageTranslator((["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]))