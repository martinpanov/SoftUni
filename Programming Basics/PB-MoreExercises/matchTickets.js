function matchTickets(input) {
    const VIP = 499.99
    const normal = 249.99

    let budget = Number(input[0])
    let category = input[1]
    let peopleInGroup = Number(input[2])
    let leftBudget = 0


         if (peopleInGroup <= 4) {
           leftBudget = budget * 0.25
         } else if (peopleInGroup <= 9) {
            leftBudget = budget * 0.4
         } else if (peopleInGroup <= 24) {
            leftBudget = budget * 0.5
         } else if (peopleInGroup <= 49) {
            leftBudget = budget * 0.6
         } else {
            leftBudget = budget * 0.75
         }
    if (category === "VIP") {
        leftBudget -= peopleInGroup * VIP
    } else {
        leftBudget -= peopleInGroup * normal
    }

    if (leftBudget >= 0) {
        console.log(`Yes! You have ${leftBudget.toFixed(2)} leva left.`)
    } else {
        let difference = Math.abs(leftBudget)
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }
}
matchTickets(["30000", "VIP", "49"])