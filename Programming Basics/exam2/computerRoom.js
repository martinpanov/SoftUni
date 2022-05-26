function computerRoom(input) {
    let month = input[0]
    let hours = Number(input[1])
    let peopleInGroup = Number(input[2])
    let timeOfDay = input[3]
    let price = 0
    let tempTotalPrice = 0
    switch (timeOfDay) {
        case "day":
            if (month === "march" || month === "april" || month === "may"){
                price += 10.5
            } else if (month === "june" || month === "july" || month === "august") {
                price += 12.6
            }
        break;
        case "night": 
            if (month === "march" || month === "april" || month === "may") {
                price += 8.4
            } else if (month === "june" || month === "july" || month === "august") {
                price += 10.2
            }
        break;
    }
    if (peopleInGroup >= 4) {
        price *= 0.9
    }
    if (hours >= 5) {
        price *= 0.5
    }
    let totalPrice = price * peopleInGroup * hours
    console.log(`Price per person for one hour: ${price.toFixed(2)}`)
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`)
}
computerRoom(["july",
"5",
"5",
"night"])