function deckOfCards(arr) {
    let cardIsAlreadyInTheDeck = false
    let originalArr = arr.slice()
    let listOfCards = originalArr.shift().split(', ')
    let numberOfCommands = originalArr.shift()
    let secondIndex = 0
    let cardNumber
    for (let i = 0; i < numberOfCommands; i++) {
        let index = 0
        let command = originalArr[secondIndex]
        let separatedCommand = command.split(", ")
        let operation = separatedCommand[index++]
        if (operation === "Insert") {
            cardNumber = separatedCommand[index++]
        }
        if (operation === "Remove At") {
            cardNumber = separatedCommand[index++]
        }
        let currentCard = separatedCommand[index++]
        switch (operation) {
            case "Add":
                if (listOfCards.includes(currentCard)) {
                    cardIsAlreadyInTheDeck = true
                }
                if (cardIsAlreadyInTheDeck) {
                    console.log('Card is already in the deck')
                } else {
                    listOfCards.push(currentCard)
                    console.log('Card successfully added')
                }
                secondIndex++
                break
            case "Remove":
                    if (!listOfCards.includes(currentCard)) {
                        console.log('Card not found')
                    } else {
                        let indexOf = listOfCards.indexOf(currentCard)
                        listOfCards.splice(indexOf, 1)
                        console.log('Card successfully removed')
                    }
                break
            case "Remove At":
                if (Number(currentCard) < 0 || Number(currentCard) > listOfCards.length) {
                    console.log('Index out of range')
                } else {
                    listOfCards.splice(Number(cardNumber), 1)
                    console.log('Card successfully removed')
                }
            break
            case "Insert":
                if (Number(cardNumber) < 0 || Number(cardNumber) > listOfCards.length) {
                    console.log('Index out of range')
                    
                } else {
                    if (listOfCards.includes(currentCard)) {
                        console.log('Card is already added')
                    } else {
                        console.log('Card successfully added')
                        listOfCards.splice(Number(cardNumber), 0, currentCard)
                    }
                }
                secondIndex++
            break
        }
    }
    console.log(listOfCards.join(", "))
}
deckOfCards(['Jack of Spades, Ace of Clubs, Jack of Clubs',
    '2',
    'Insert, -1, Queen of Spades',
    'Remove At, 1'])