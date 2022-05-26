function energyBooster(input) {
    let fruit = input[0]
    let size = input[1]
    let amountOfOrders = Number(input[2])
    let price = 0;
    switch (size){
        case "small":
            if (fruit === "Watermelon") {
                price += 56 * 2
            } else if (fruit === "Mango") {
                price += 36.66 * 2
            } else if (fruit === "Pineapple") {
                price += 42.10 * 2
            } else if (fruit === "Raspberry") {
                price += 20 * 2
            }
        break;
        case "big":
            if (fruit === "Watermelon") {
                price += 28.7 * 5
            } else if (fruit === "Mango") {
                price += 19.6 * 5
            } else if (fruit === "Pineapple") {
                price += 24.8 * 5
            } else if (fruit === "Raspberry") {
                price += 15.2 * 5
            }
        break;
    }
    let totalPrice = price * amountOfOrders
    if(totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85
    } else if (totalPrice > 1000) {
        totalPrice *= 0.5
    } else {
        totalPrice
    }
    console.log(`${totalPrice.toFixed(2)} lv.`)
}
energyBooster(["Mango",
"big",
"8"])