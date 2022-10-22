function cardGame(arrOfStrings) {
    let result = new Map()
    let power = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    let type = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    for (let el of arrOfStrings) {
        let tokens = el.split(": ")
        let name = tokens.shift()
        let separatedCards = tokens.toString().split(", ")
        if (!result.has(name)) {
            result.set(name, new Set())
        }
        for (let card of separatedCards) {
            result.get(name).add(card)
        }
    }
    let sum = 0
    for (let [key, value] of result) {
        let sum = 0
        for (let card of value) {
            let token = card.split("")
            let typeOfCard = token.pop()
            let powerOfCard = token.join("")
            sum += type[typeOfCard] * power[powerOfCard]
        }
        console.log(`${key}: ${sum}`)
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])