function catWalking(input) {
    let minutesWalk = Number(input[0])
    let amountOfWalks = Number(input[1])
    let caloriesIntake = Number(input[2])

    let totalTimeForWalk = minutesWalk * amountOfWalks
    let totalCaloriesBurned = totalTimeForWalk * 5
    let caloriesCalc = caloriesIntake * 0.5

    if (totalCaloriesBurned >= caloriesCalc) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`)
    }

}
catWalking(["30",
"3",
"600"])