function classTop() {
class Laptop{
    info = {}
    isOn = false
    quality = 0
    constructor(info, quality){
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        }
        this.quality = quality
    }

    turnOn() {
        this.quality -= 1
        this.isOn = true
        return this.isOn
    }
    turnOff() {
        this.quality -= 1
        this.isOn = false
        return this.isOn
    }
    showInfo() {
        let infoParsedToJson = JSON.stringify(this.info)
        return infoParsedToJson
    }
    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5)
    }
}




let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
}
classTop()