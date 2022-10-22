function carFactory(order) {
    let res = {
        model: order["model"]
    }

    if (order["power"] <= 90) {
        res["engine"] = {
            power: 90,
            volume: 1800
        }
    } else if (order["power"] <= 120) {
        res["engine"] = {
            power: 120,
            volume: 2400
        }
    } else {
        res["engine"] = {
            power: 200,
            volume: 3500
        }
    }
    if (order["carriage"] === "hatchback") {
        res["carriage"] = {
            type: 'hatchback',
            color: order["color"]
        }
    } else if (order["carriage"] === "coupe") {
        res["carriage"] = {
            type: 'coupe',
            color: order["color"]
        }
    }
    if (order["wheelsize"] % 2 !== 0) {
        res["wheels"] = [order["wheelsize"], order["wheelsize"], order["wheelsize"], order["wheelsize"]]
    } else {
        res["wheels"] = [order["wheelsize"] - 1, order["wheelsize"] - 1, order["wheelsize"] - 1, order["wheelsize"] - 1]
    }
    return res
}
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))