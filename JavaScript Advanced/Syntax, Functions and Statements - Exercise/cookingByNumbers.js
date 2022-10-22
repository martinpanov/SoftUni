function cookingByNumbers(...params) {
    let inputNumber = Number(params.shift())
    for (let el of params) {
        switch (el) {
            case "chop":
                inputNumber /= 2
            break
            case "dice":
                inputNumber = Math.sqrt(inputNumber)
            break
            case "spice":
                inputNumber += 1
            break
            case "bake":
                inputNumber *= 3
            break
            case "fillet":
                inputNumber *= 0.8
            break
        }
        console.log(inputNumber)
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')