function fitnessCard(input) {
    let sum = Number(input[0])
    let gender = input[1]
    let age = Number(input[2])
    let sport = input[3]

    let money = 0
    switch (gender) {
        case "m":
            if (sport === "Gym") {
                money += 42
            } else if (sport === "Boxing") {
                money += 41
            } else if (sport === "Yoga") {
                money += 45
            } else if (sport === "Zumba") {
                money += 34
            } else if (sport === "Dances") {
                money += 51
            } else {
                money += 39
            }
        break;
        case "f":
            case "m":
                if (sport === "Gym") {
                    money += 35
                } else if (sport === "Boxing") {
                    money += 37
                } else if (sport === "Yoga") {
                    money += 42
                } else if (sport === "Zumba") {
                    money += 31
                } else if (sport === "Dances") {
                    money += 53
                } else {
                    money += 37
                }
        break;
    }
    if (age <= 19) {
        money *= 0.8
    }
    let diff = Math.abs(money - sum)
    if (sum >= money) {
        console.log(`You purchased a 1 month pass for ${sport}.`)

    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`)

    }
}
fitnessCard(["10",
"m",
"50",
"Pilates"])