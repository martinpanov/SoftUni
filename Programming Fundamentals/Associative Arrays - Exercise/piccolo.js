function piccolo(arrOfStrings) {
    let cars = new Set ()
    for (let el of arrOfStrings) {
        let command = el.split(", ").shift()
        let carNumber = el.split(", ").pop()
        switch (command) {
            case "IN":
                cars.add(carNumber)
            break
            case "OUT":
                cars.delete(carNumber)
            break
        }
    }
    if (cars.size === 0) {
        console.log("Parking Lot is Empty")
    } else {
        let sortedCars = Array.from(cars).sort()
    for (let carsIn of sortedCars) {
        console.log(carsIn)
    }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])