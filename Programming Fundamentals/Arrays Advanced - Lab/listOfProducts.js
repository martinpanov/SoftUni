function listOfProducts(arrayOfProducts) {
    let sortedProducts = arrayOfProducts.sort()
    let countedProducts
    for (let index = 0; index < arrayOfProducts.length; index++) {
        countedProducts = `${index+1}.${sortedProducts[index]}`
        console.log(countedProducts)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])