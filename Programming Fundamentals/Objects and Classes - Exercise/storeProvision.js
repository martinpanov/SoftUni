function storeProvision(arrOne, arrTwo) {
    let products = {}
    for (let i = 0; i < arrOne.length; i+=2) {
        let product = arrOne[i]
        products[product] = Number(arrOne[i+1])

    } 
    for (let i = 0; i < arrTwo.length; i+=2) {
        let product = arrTwo[i]
        if (!products.hasOwnProperty(product)) {
            products[product] = 0
        }
        products[product] += Number(arrTwo[i+1])

    }
    for (let el of Object.keys(products)) {
        console.log(`${el} -> ${products[el]}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])