function storeCatalogue(data) {
    let sortedData = data.sort((a, b) => a.localeCompare(b))
    let res = {}

    for (let element of sortedData) {
        let [product, price] = element.split(" : ")
        if (!res.hasOwnProperty(product[0])) {
            res[product[0]] = {}
            res[product[0]][product] = price
        } else {
            res[product[0]][product] = price
        }
    }

    for (let [letter, productsAndPrice] of Object.entries(res)) {
        console.log(letter)
        for (let [product, price] of Object.entries(productsAndPrice)) {
            console.log(`  ${product}: ${price}`)
        }
    }
    
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)