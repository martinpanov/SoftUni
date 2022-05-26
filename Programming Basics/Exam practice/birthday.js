function birthday(input) {
    let roomCost = Number(input[0])
    let cake = roomCost * 0.2
    let drinks = cake * 0.55
    let animator = roomCost / 3

    let totalCost = roomCost + cake + drinks + animator

    console.log(totalCost)
}
birthday(["2250"])