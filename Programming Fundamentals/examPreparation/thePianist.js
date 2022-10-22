function thePianist(data) {
    let numberOfPieces = data.shift()
    let allPiecesAndComposers = {}
    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = data[i].split("|")
        if (!allPiecesAndComposers.hasOwnProperty(piece)) {
            allPiecesAndComposers[piece] = {}
        }
        allPiecesAndComposers[piece][composer] = key
    }
    for (let k = numberOfPieces - 1; k < data.length - 1; k++) {
        let token = data[k+1].split("|")
        let command = token[0]
        let piece = token[1]
        let composer = token[2]
        let key = token[3]
        switch(command) {
            case "Add": 
                if (!allPiecesAndComposers.hasOwnProperty(piece)) {
                    allPiecesAndComposers[piece] = {}
                    allPiecesAndComposers[piece][composer] = key
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                    break
                }
                console.log(`${piece} is already in the collection!`)
            break
            case "Remove":
                piece = token[1]
                if (!allPiecesAndComposers.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                    break
                }
                delete allPiecesAndComposers[piece]
                console.log(`Successfully removed ${piece}!`)
            break
            case "ChangeKey":
                piece = token[1]
                newKey = token[2]
                if (!allPiecesAndComposers.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                    break
                }
                for (let [keyComposer, keyValue] of Object.entries(allPiecesAndComposers[piece])) {
                    allPiecesAndComposers[piece][keyComposer] = newKey
                }
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            break
        }
    }
    for (let [piece,composer] of Object.entries(allPiecesAndComposers)) {
        for (let key of Object.keys(allPiecesAndComposers[piece])) {
            console.log(`${piece} -> Composer: ${key}, Key: ${composer[key]}`)
        }
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])