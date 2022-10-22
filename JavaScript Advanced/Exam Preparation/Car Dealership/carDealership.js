class CarDealership {
    constructor(name) {
        this.name = name
        this.totalIncome = 0
        this.availableCars = []
        this.soldCars = []
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error("Invalid input!")
        }

        this.availableCars.push({model, horsepower, price, mileage})
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let isFound = false
        let indexOfIsFound
        this.availableCars.forEach((car, index) => {
            if (car.model === model) {
                isFound = true
                indexOfIsFound = index
                return
            }
        })

        if (!isFound) {
            throw new Error(`${model} was not found!`)
        }

        if (this.availableCars[indexOfIsFound].mileage - desiredMileage <= 40000 && this.availableCars[indexOfIsFound].mileage - desiredMileage > 0) {
            this.availableCars[indexOfIsFound].price *= 0.95
        } else if (this.availableCars[indexOfIsFound].mileage - desiredMileage > 40000){
            this.availableCars[indexOfIsFound].price *= 0.90
        }

        this.soldCars.push({
            model: this.availableCars[indexOfIsFound].model,
            horsepower: this.availableCars[indexOfIsFound].horsepower,
            soldPrice: this.availableCars[indexOfIsFound].price
        })
        this.availableCars.splice(indexOfIsFound, 1)
        
        this.totalIncome += this.soldCars[this.soldCars.length - 1].soldPrice
        return `${this.soldCars[this.soldCars.length - 1].model} was sold for ${(this.soldCars[this.soldCars.length - 1].soldPrice).toFixed(2)}$`
    }

    currentCar() {
        let available = '-Available cars:\n'
        if (this.availableCars.length === 0) {
            return "There are no available cars"
        }

        for (let i = 0; i < this.availableCars.length; i++) {
            if (i === this.availableCars.length - 1) {
                available += `---${this.availableCars[i].model} - ${this.availableCars[i].horsepower} HP - ${this.availableCars[i].mileage.toFixed(2)} km - ${this.availableCars[i].price.toFixed(2)}$`
            } else {
                available += `---${this.availableCars[i].model} - ${this.availableCars[i].horsepower} HP - ${this.availableCars[i].mileage.toFixed(2)} km - ${this.availableCars[i].price.toFixed(2)}$\n`
            }

        }
        return available
    }

    salesReport(criteria) {
        let res = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        res += `-${this.soldCars.length} cars sold:\n`
       

        if (criteria === "horsepower") {
            this.soldCars.sort((a,b) => b.horsepower - a.horsepower)
        } else if (criteria === "model") {
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model))
        } else {
            throw new Error("Invalid criteria!")
        }

        for (let i = 0; i < this.soldCars.length; i++) {
            if (i === this.soldCars.length - 1) {
                res += `---${this.soldCars[i].model} - ${this.soldCars[i].horsepower} HP - ${this.soldCars[i].soldPrice.toFixed(2)}$`
            } else {
                res += `---${this.soldCars[i].model} - ${this.soldCars[i].horsepower} HP - ${this.soldCars[i].soldPrice.toFixed(2)}$\n`
            }
        }
        return res
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

