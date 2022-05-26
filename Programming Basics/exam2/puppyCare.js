function puppyCare(input) {
    let index = 0
    let command = input[index]
    let totalFoodEaten = 0
    let purchasedFood = Number(command)
    index++
    while (command !== "Adopted") {
        command = input[index]
        totalFoodEaten += Number(command)
        index++
        command = input[index]
    }
    let purchasedFoodInGrams = purchasedFood * 1000
    let difference = Math.abs(totalFoodEaten - purchasedFoodInGrams)
    if (totalFoodEaten <= purchasedFoodInGrams) {
        console.log(`Food is enough! Leftovers: ${difference} grams.`)
    } else {
        console.log(`Food is not enough. You need ${difference} grams more.`)
    }
}
puppyCare(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])