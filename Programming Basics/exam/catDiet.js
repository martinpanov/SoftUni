function catDiet(input) {
    const fat = 9
    const protein = 4
    const carbs = 4

    let percentFat = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbs = Number(input[2]);
    let totalCaloeries = Number(input[3]);
    let percentWaterInFood = Number(input[4]);

    let FatCalc = (percentFat / 100 * totalCaloeries) / fat
    let proteinCalc = (percentProtein / 100 * totalCaloeries) / protein
    let carbsCalc = (percentCarbs / 100 * totalCaloeries) / carbs
    
    let foodWeight = FatCalc + proteinCalc + carbsCalc

    let caloriesFor1gFood = totalCaloeries / foodWeight
    let waterCalc = (100 - percentWaterInFood) / 100 * caloriesFor1gFood
    console.log(waterCalc.toFixed(4))

}
catDiet(["60",
"25",
"15",
"2500",
"60"])