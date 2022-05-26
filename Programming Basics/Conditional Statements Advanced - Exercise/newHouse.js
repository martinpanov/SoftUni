function newHouse(input) {
    const rose = 5;
    const dahlia = 3.8;
    const tulip = 2.8;
    const narcissus = 3;
    const gladiolus = 2.5;
    const type = input[0];
    const quantity = Number(input[1]);
    const budget = Number(input[2]);

    let totalPrice = 0;
    switch(type) {
        case "Roses":
            if (type == "Roses" && quantity > 80) {
                totalPrice = rose * quantity;
                totalPrice *= 0.9;
            } else {
                totalPrice = rose *quantity;
            }
        break;
        case "Dahlias":
            if (type == "Dahlias" && quantity > 90) {
                totalPrice = dahlia * quantity;
                totalPrice *= 0.85;
            } else {
                totalPrice = dahlia * quantity;
            }
        break;
        case "Tulips":
            if (type == "Tulips" && quantity > 80) {
                totalPrice = tulip * quantity;
                totalPrice *= 0.85;
            } else {
                totalPrice = tulip * quantity;
            }
        break;
        case "Narcissus":
            if (type == "Narcissus" && quantity < 120) {
                totalPrice = narcissus * quantity;
                totalPrice += totalPrice * 0.15;
            } else {
                totalPrice = narcissus * quantity;
            }
        break;
        case "Gladiolus":
            if (type == "Gladiolus" && quantity < 80) {
                totalPrice = gladiolus * quantity;
                totalPrice += totalPrice * 0.20;
            } else {
                totalPrice = gladiolus * quantity;
            }
        break;
    }
    let moneyLeft = Math.abs(totalPrice - budget);
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`)
    }
}
newHouse(["Dahlias",
"112",
"460"])