function needForSpeed(data) {
    let numberOfCars = data.shift()
    let cars = {}
    let inputAfterCarInfo = numberOfCars - 1
    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = data[i].split("|")
        if (!car.hasOwnProperty(cars)) {
            cars[car] = {
                "mileage":Number(mileage),
                "fuel":Number(fuel)
            }
        }
    }
    for (let k = inputAfterCarInfo; k < data.length; k++) {
        let [command, car, distance, fuelRequired] = data[k].split(" : ")
        switch(command) {
            case "Drive":
                if (cars[car].fuel - Number(fuelRequired) < 0) {
                    console.log("Not enough fuel to make that ride")
                    break
                }
                cars[car].fuel -= Number(fuelRequired)
                cars[car].mileage += Number(distance)
                console.log(`${car} driven for ${distance} kilometers. ${fuelRequired} liters of fuel consumed.`)
                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`)
                    delete cars[car]
                    break
                }
            break
            case "Refuel":
                let refuelAmount = Number(distance)
                if (cars[car].fuel + refuelAmount > 75) {
                    let difference = Math.abs(cars[car].fuel - 75)
                    cars[car].fuel = 75
                    console.log(`${car} refueled with ${difference} liters`)
                    break
                }
                cars[car].fuel += refuelAmount
                console.log(`${car} refueled with ${refuelAmount} liters`)
            break
            case "Revert":
                let kilometers = Number(distance)
                if (cars[car].mileage - kilometers < 10000) {
                    cars[car].mileage = 10000
                    break
                }
                cars[car].mileage -= kilometers
                console.log(`${car} mileage decreased by ${kilometers} kilometers`)
            break
        }
    }
    for (let [carName, carInfo] of Object.entries(cars)){
        console.log(`${carName} -> Mileage: ${carInfo.mileage} kms, Fuel in the tank: ${carInfo.fuel} lt.`)
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])