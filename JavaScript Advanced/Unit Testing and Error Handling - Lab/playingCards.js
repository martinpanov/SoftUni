function playingCards(face, suit) {
    let validCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    let validCardSuits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }

    if (!validCards.includes(face) || !validCardSuits.hasOwnProperty(suit)) {
        throw new Error('Error')
    }

    return `${face}${validCardSuits[suit]}`
}
console.log(playingCards('1', 'C'))