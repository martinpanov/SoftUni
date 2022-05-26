function dishWasher(input) {
    let index = 0
    let amountBottles = Number(input[0])
    let command = input[index++]
    let detergent = 750
    let totalDetergent = detergent * amountBottles
    let calc = 0
    let cleanDishes = 0
    let cleanPots = 0
    let counter = 0

    while (command !== "End") {
        command = input[index]
        counter++
        let dishes = Number(command)
        if (counter % 3 === 0) {
            calc = dishes * 15
            totalDetergent -= calc
            cleanPots += Number(command)
        } else {
            calc = dishes * 5
            totalDetergent -= calc
            cleanDishes += dishes
        }
        if (totalDetergent < 0){
            let differnece = Math.abs(totalDetergent)
            console.log(`Not enough detergent, ${differnece} ml. more necessary!`)
            break
        }
        command = input[index++]
        command = input[index]
    }
    if (totalDetergent >= 0) {
        console.log(`Detergent was enough!`)
        console.log(`${cleanDishes} dishes and ${cleanPots} pots were washed.`)
        console.log(`Leftover detergent ${totalDetergent} ml.`)
    }
}
dishWasher(["1", "10", "15", "10", "12", "13", "30"])