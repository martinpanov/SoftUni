function furniture(furnitures) {
    let joinedFurnitures = furnitures.join(" ")
    let regex = />>(?<furniture>[A-Za-z]+)<<(?<price>[0-9.*]+)!(?<quantity>\d+)/g
    let furnitureNames = []
    let totalPrice = 0
    let validFurniture = regex.exec(joinedFurnitures)

    while (validFurniture !== null) {
        let furnitureName = validFurniture.groups["furniture"]
        let furniturePrice = Number(validFurniture.groups["price"])
        let furnitureQuantity = Number(validFurniture.groups["quantity"])
        furnitureNames.push(furnitureName)
        totalPrice += furniturePrice * furnitureQuantity
        validFurniture = regex.exec(joinedFurnitures)
    }
    console.log('Bought furniture:')
    furnitureNames.forEach(el => console.log(el))
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase'])