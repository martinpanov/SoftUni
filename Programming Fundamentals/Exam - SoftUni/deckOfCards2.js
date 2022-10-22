function deckOfCardsTwo(arr) {
    let listOfCards = arr.shift().split(", ")
    let commandsCount = arr.shift()
    for (let el of arr) {
        let commandParams = el.split(", ")
        let commandName = commandParams.shift()
        switch(commandName) {
            case "Add": 
                let cardName = commandParams[0]
                if (listOfCards.includes(cardName)) {
                    console.log('Card is already in the deck')
                } else {
                    listOfCards.push(cardName)
                    console.log('Card successfully added')
                }
            break
            case "Remove":
                let cardNameRemove = commandParams[0]
                if (listOfCards.includes(cardNameRemove)) {
                    listOfCards.splice(listOfCards.indexOf(cardNameRemove), 1)
                    console.log('Card successfully removed')
                } else {
                    console.log('Card not found')
                }
            break
            case "Remove At": 
                let removeCardIndex = Number(commandParams[0])
                if (removeCardIndex >= 0 && removeCardIndex <= listOfCards.length - 1) {
                    listOfCards.splice(removeCardIndex, 1)
                    console.log('Card successfully removed')
                } else {
                    console.log('Index out of range')
                }
            break
            case "Insert": 
                let insertCardIndex = Number(commandParams[0])
                let insertCardName = commandParams[1]
                if (insertCardIndex >= 0 && insertCardIndex <= listOfCards.length - 1) {
                    if (listOfCards.includes(insertCardName)) {
                        console.log('Card is already added') 
                    } else {
                        listOfCards.splice(insertCardIndex, 0, insertCardName)
                        console.log('Card successfully added')
                    } 
                } else {
                    console.log('Index out of range')
                }
            break
        }
    }
    console.log(listOfCards.join(", "))
}
deckOfCardsTwo(['Ace of Diamonds, Queen of Hearts, King of Clubs',
'3',
'Add, King of Diamonds',
'Insert, 2, Jack of Spades',
'Remove, Ace of Diamonds'])