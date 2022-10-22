function juiceFlavors(data) {
    let bottleInfo = new Map()
    let bottlesAmount = new Map()
    for (let element of data) {
        let [fruit, amount] = element.split(" => ")
        if (!bottleInfo.has(fruit)) {
            bottleInfo.set(fruit, Number(amount))
        } else {
            bottleInfo.set(fruit, bottleInfo.get(fruit) + Number(amount))
        }
        if (bottleInfo.get(fruit) >= 1000) {
            if (!bottlesAmount.has(fruit)) {
                bottlesAmount.set(fruit, Math.floor(bottleInfo.get(fruit) / 1000))
            } else {
                bottlesAmount.set(fruit, Math.floor(bottleInfo.get(fruit) / 1000))
            }
        }


    }

    bottlesAmount.forEach((value, key) => console.log(`${key} => ${value}`))

}
juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])