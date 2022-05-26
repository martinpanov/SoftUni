function foodForPets(input) {
    let index = 0
    let days = Number(input[index++])
    let totalFood = Number(input[index++])
    let foodEatByDog = Number(input[index++])
    let foodEatenByCat = Number(input[index++])
    let totalFoodEatenByDog = 0
    let totalFoodEatenByCat = 0
    let biscuits = 0
    let totalFoodEatenForThisDay = 0
    let eatenFoodByDogForDay = 0
    let eatenFoodByCatForDay = 0
    let totalFoodEaten = 0



    for (let i = 1; i <= days; i++) { 
        eatenFoodByDogForDay = foodEatByDog
        eatenFoodByCatForDay = foodEatenByCat
        totalFoodEatenByDog += foodEatByDog
        totalFoodEatenByCat += foodEatenByCat
        totalFoodEaten = totalFoodEatenByCat + totalFoodEatenByDog
        totalFoodEatenForThisDay = eatenFoodByCatForDay + eatenFoodByDogForDay
        if (i % 3 === 0) {
            biscuits += totalFoodEatenForThisDay * 0.1
        }
        foodEatByDog = Number(input[index++])
        foodEatenByCat = Number(input[index++])
        totalFoodEatenForThisDay = 0
    }
    let totalFoodPerc = (totalFoodEaten / totalFood) * 100
    let foodEatByDogPerc = (totalFoodEatenByDog / totalFoodEaten) * 100
    let foodEatenByCatPerc = (totalFoodEatenByCat / totalFoodEaten) * 100

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
    console.log(`${totalFoodPerc.toFixed(2)}% of the food has been eaten.`)
    console.log(`${foodEatByDogPerc.toFixed(2)}% eaten from the dog.`)
    console.log(`${foodEatenByCatPerc.toFixed(2)}% eaten from the cat.`)

}
foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])