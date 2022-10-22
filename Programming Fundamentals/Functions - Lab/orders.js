function orders(product, quantity) {
    switch (product) {
        case "coffee":
            function coffee() {
                let priceOfCoffee = 1.50 * quantity
                console.log(priceOfCoffee.toFixed(2))
            }
            coffee()
            break;
        case "water":
            function water() {
                let priceOfWater = 1.00 * quantity
                console.log(priceOfWater.toFixed(2))
            }
            water()
            break;
        case "coke":
            function coke() {
                let priceOfCoke = 1.40 * quantity
                console.log(priceOfCoke.toFixed(2))
            }
            coke()
            break;
        case "snacks":
            function snacks() {
                let priceOfCoke = 2.00 * quantity
                console.log(priceOfSnacks.toFixed(2))
            }
            snacks()
            break;
    }
}
orders("coffee", 2)









// function orders(product, quantity) {
//     const coffee = 1.50
//     const water = 1.00
//     const coke = 1.40
//     const snacks = 2.00
//     let finalPrice = 0
//     switch (product) {
//         case "coffee": finalPrice = coffee * quantity; break;
//         case "water": finalPrice = water * quantity; break;
//         case "coke": finalPrice = coke * quantity; break;
//         case "snacks": finalPrice = snacks * quantity; break;
//     }
//     console.log(finalPrice.toFixed(2))

// }
// orders("water", 5)