function lowestPricesInCities(data) {
    let res = {}
    for (let element of data) {
        let [townName, productName, productPrice] = element.split(" | ")
        productPrice = Number(productPrice)
        if (!res.hasOwnProperty(productName)) {
            res[productName] = {
                    "price": productPrice,
                    "town": townName
            }
        } else if (res.hasOwnProperty(productName) && productPrice < res[productName]["price"]) {
            res[productName]["price"] = productPrice
            res[productName]["town"] = townName
        }
    }
    for (let [product, details] of Object.entries(res)) {
        console.log(`${product} -> ${details["price"]} (${details["town"]})`)
    }
}
lowestPricesInCities(['Sofia City | Audi | 1000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])