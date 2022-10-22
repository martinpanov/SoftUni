function fruit(fruit, weight, pricePerKilo) {
    let weightInKG = weight / 1000
    let price = weightInKG * pricePerKilo
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80)