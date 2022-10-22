const { assert } = require("chai")
const chooseYourCar = require("./chooseYourCar")

describe("test the chooseYourCar variable", () => {
    it ("test the choosingType function", () => {
        assert.throw(()=>{chooseYourCar.choosingType("Sedan", "red", 1899)}, "Invalid Year!")
        assert.throw(()=>{chooseYourCar.choosingType("Sedan", "red", 2023)}, "Invalid Year!")
        assert.throw(()=>{chooseYourCar.choosingType("Sedan", "red", 2040)}, "Invalid Year!")
        assert.throw(()=>{chooseYourCar.choosingType("Sedan", "red", 1800)}, "Invalid Year!")
        
        assert.throw(()=>{chooseYourCar.choosingType("Hatchback", "red", 1901)}, "This type of car is not what you are looking for.")
        assert.throw(()=>{chooseYourCar.choosingType("Cabrio", "red", 1901)}, "This type of car is not what you are looking for.")
        assert.throw(()=>{chooseYourCar.choosingType("Wagon", "red", 1901)}, "This type of car is not what you are looking for.")

        assert.equal(chooseYourCar.choosingType("Sedan", "red", 2010), "This red Sedan meets the requirements, that you have.")
        assert.equal(chooseYourCar.choosingType("Sedan", "yellow", 2011), "This yellow Sedan meets the requirements, that you have.")
        assert.equal(chooseYourCar.choosingType("Sedan", "yellow", 2015), "This yellow Sedan meets the requirements, that you have.")
        
        assert.equal(chooseYourCar.choosingType("Sedan", "yellow", 2009), "This Sedan is too old for you, especially with that yellow color.")
        assert.equal(chooseYourCar.choosingType("Sedan", "pink", 1998), "This Sedan is too old for you, especially with that pink color.")
        assert.equal(chooseYourCar.choosingType("Sedan", "green", 1998), "This Sedan is too old for you, especially with that green color.")
    })

    it("test the brandName function", () => {
        assert.throw(()=>{chooseYourCar.brandName(5, 0)}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.brandName((["BMW", "Toyota", "Peugeot"]), 3)}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.brandName((["BMW", "Toyota", "Peugeot"]), 10)}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.brandName("BMW", 0)}, "Invalid Information!")

        assert.equal(chooseYourCar.brandName((["BMW", "Toyota", "Peugeot"]), 0), "Toyota, Peugeot")
        assert.equal(chooseYourCar.brandName((["BMW", "Toyota", "Peugeot"]), 1), "BMW, Peugeot")
        assert.equal(chooseYourCar.brandName((["BMW", "Toyota", "Peugeot"]), 2), "BMW, Toyota")
    })

    it("test the CarFuelConsumption function", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100, 7), `The car is efficient enough, it burns ${((7 / 100) * 100).toFixed(2)} liters/100 km.`)
        assert.equal(chooseYourCar.carFuelConsumption(100, 6.3), `The car is efficient enough, it burns ${((6.3 / 100) * 100).toFixed(2)} liters/100 km.`)
        assert.equal(chooseYourCar.carFuelConsumption(500, 7), `The car is efficient enough, it burns ${((7 / 500) * 100).toFixed(2)} liters/100 km.`)
        assert.equal(chooseYourCar.carFuelConsumption(150, 8), `The car is efficient enough, it burns ${((8 / 150) * 100).toFixed(2)} liters/100 km.`)
        assert.equal(chooseYourCar.carFuelConsumption(300, 10), `The car is efficient enough, it burns ${((10 / 300) * 100).toFixed(2)} liters/100 km.`)

        assert.equal(chooseYourCar.carFuelConsumption(100, 8), `The car burns too much fuel - ${((8 / 100) * 100).toFixed(2)} liters!`)
        assert.equal(chooseYourCar.carFuelConsumption(100, 7.3), `The car burns too much fuel - ${((7.3 / 100) * 100).toFixed(2)} liters!`)
        assert.equal(chooseYourCar.carFuelConsumption(500, 50), `The car burns too much fuel - ${((50 / 500) * 100).toFixed(2)} liters!`)

        assert.throw(()=>{chooseYourCar.carFuelConsumption("test", 7)}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.carFuelConsumption("tosho", "gosho")}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.carFuelConsumption(100, "marto")}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.carFuelConsumption(-100, -7)}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.carFuelConsumption(100, -7)}, "Invalid Information!")
        assert.throw(()=>{chooseYourCar.carFuelConsumption(-100, 7)}, "Invalid Information!")
    })

})
