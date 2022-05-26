function fishingBoat(input) {
    const boatSpring = 3000;
    const boatSummerFall = 4200;
    const boat = 2600;

    const budget = Number(input[0]);
    const season = input[1];
    const numFishers = Number(input[2]);
    let totalPrice = 0;

    switch(season) {
        case "Summer":
            if (numFishers <= 6) {
            totalPrice += boatSummerFall * 0.9
            } else if (numFishers > 6 && numFishers <= 11) {
                totalPrice += boatSummerFall * 0.85;
            } else if (numFishers > 12) {
                totalPrice += boatSummerFall * 0.75;
            }
            if (numFishers % 2 === 0) {
                totalPrice *= 0.95;
            }
        break;
        case "Spring":
                if (numFishers <= 6) {
                totalPrice += boatSpring * 0.9
                } else if (numFishers > 6 && numFishers <= 11) {
                    totalPrice += boatSpring * 0.85;
                } else if (numFishers > 12) {
                    totalPrice += boatSpring * 0.75;
                }
                if (numFishers % 2 === 0) {
                    totalPrice *= 0.95;
                }
        break;
        case "Winter":
                if (numFishers <= 6) {
                totalPrice += boat * 0.9
                } else if (numFishers > 6 && numFishers <= 11) {
                    totalPrice += boat * 0.85;
                } else if (numFishers > 12) {
                    totalPrice += boat * 0.75;
                }
                if (numFishers % 2 === 0) {
                    totalPrice *= 0.95;
                }
        break;
        case "Autumn":
                if (numFishers <= 6) {
                totalPrice += boatSummerFall * 0.9
                } else if (numFishers > 6 && numFishers <= 11) {
                    totalPrice += boatSummerFall * 0.85;
                } else if (numFishers > 12) {
                    totalPrice += boatSummerFall * 0.75;
                }
        break;
        }
    let moneyLeft = Math.abs(totalPrice - budget);
    if (budget >= totalPrice) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`)
    }
}
fishingBoat(["3600",
"Autumn",
"6"])