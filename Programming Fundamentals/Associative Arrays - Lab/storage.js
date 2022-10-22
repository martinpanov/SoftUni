function storage(arrayOfStrings) {
    let map = new Map()
    for (let el of arrayOfStrings) {
        let splitedArray = el.split(" ")
        let [name, quantity] = splitedArray
        if (!map.has(name)) {
            map.set(name, Number(quantity))
        } else {
            let currentQuantity = map.get(name)
            let newQuantity = currentQuantity += Number(quantity)
            map.set(name, newQuantity)
        }
    }
    let entries = Array.from(map.entries())
    for (let [name, quantity] of entries) {
        console.log(`${name} -> ${quantity}`)
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])