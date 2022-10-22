function adAstra(data) {
    let reggex = /([#/|])(?<name>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)\1/g
    let sumCalories = 0
    let testFoods = reggex.exec(data)
    while (testFoods !== null) {
        let foodCalories = Number(testFoods.groups["calories"])
        sumCalories += foodCalories
        testFoods = reggex.exec(data)
    }

    let daysBeforeIStarve = Math.floor(sumCalories / 2000)
    console.log(`You have food to last you for: ${daysBeforeIStarve} days!`)
    testFoods = reggex.exec(data)

    while (testFoods !== null) {
        let foodName = testFoods.groups["name"]
        let foodCalories = Number(testFoods.groups["calories"])
        let expirationDate = testFoods.groups["expirationDate"]
        console.log(`Item: ${foodName}, Best before: ${expirationDate}, Nutrition: ${foodCalories}`)
        testFoods = reggex.exec(data)
    }

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)