function printDeckOfCards(input) {
    let res = []
    try {
        for (let el of input) {
        let face
        let suit
        if (el.includes("10")) {
            face = el.substring(0, 2)
            suit = el.substring(2)
        } else {
            [face, suit] = el.split("")
        }
        res.push(playingCards(face, suit).toString())
    }
    console.log(res.join(" "))
    } catch (error) {
        console.log(error.message)
    }

    function playingCards(face, suit) {
        let validCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        let validCardSuits = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663"
        }
    
        if (!validCards.includes(face) || !validCardSuits.hasOwnProperty(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`)
        }
    
        return `${face}${validCardSuits[suit]}`
    }
}
console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']))