function aMinerTask(arrofStrings) {
    let finalResult = {}
    let copyOfArray = arrofStrings.slice()
    let quantity = []
    let counter = 0
    for (let i = 0; i < arrofStrings.length; i++) {
        if (i % 2 !== 0) {
            quantity.push(copyOfArray[i])
        }
    }
    for (let i = 0; i < copyOfArray.length; i++) {
        if (i % 2 === 0) {
            if (finalResult.hasOwnProperty(copyOfArray[i])) {
                let oldValue = finalResult[copyOfArray[i]]
                finalResult[copyOfArray[i]] = Number(oldValue) + Number(quantity[counter])
                counter++
            } else {
                finalResult[copyOfArray[i]] = quantity[counter]
                counter++
            }
        }
    }
    for (let keys of Object.keys(finalResult)) {
        console.log(`${keys} -> ${finalResult[keys]}`)
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])