function carePuppy(input) {
    let index = 0
    let boughtFoodForDog = Number(input[index++]) * 1000
    let command = input[index]
    let foodEaten = 0
    while (command !== "Adopted") {
        foodEaten += Number(input[index++])
        command = input[index]
    }
    let difference = Math.abs(boughtFoodForDog - foodEaten) 
    if (boughtFoodForDog >= foodEaten) {
        console.log(`Food is enough! Leftovers: ${difference} grams.`)
    } else {
        console.log(`Food is not enough. You need ${difference} grams more.`)
    }
}
carePuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])