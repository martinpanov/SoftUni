class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.')
        }
        this.plants.push({
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        })
        this.spaceAvailable -= spaceRequired
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantsName, quantity) {
        let isPlantFound = false
        let indexOfFoundPlant
        this.plants.forEach((plant, index) => {
            if (plant.plantName === plantsName) {
                isPlantFound = true
                indexOfFoundPlant = index
                return
            }
        })
        if (isPlantFound === false) {
            throw new Error(`There is no ${plantsName} in the garden.`)
        }

        if (this.plants[indexOfFoundPlant].ripe === true) {
            throw new Error(`The ${plantsName} is already ripe.`)
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }

        this.plants[indexOfFoundPlant].ripe = true
        this.plants[indexOfFoundPlant].quantity += quantity

        if (quantity === 1) {
            return `${quantity} ${plantsName} has successfully ripened.`
        } else if (quantity > 1) {
            return `${quantity} ${plantsName}s have successfully ripened.`
        }
    }

    harvestPlant(plantsName) {
        let isPlantFound = false
        let indexOfFoundPlant
        this.plants.forEach((plant, index) => {
            if (plant.plantName === plantsName) {
                isPlantFound = true
                indexOfFoundPlant = index
                return
            }
        })

        if (isPlantFound === false) {
            throw new Error(`There is no ${plantsName} in the garden.`)
        }

        if (this.plants[indexOfFoundPlant].ripe === false) {
            throw new Error(`The ${plantsName} cannot be harvested before it is ripe.`)
        }

        this.storage.push(this.plants[indexOfFoundPlant])
        this.spaceAvailable += this.plants[indexOfFoundPlant].spaceRequired
        this.plants.splice(indexOfFoundPlant, 1)
        return `The ${plantsName} has been successfully harvested.`
    }

    generateReport() {
        let res = ''
        res += `The garden has ${this.spaceAvailable} free space left.\n`
        res += "Plants in the garden: "
        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName)).forEach(plant => res += `${plant.plantName}, `)
        res = res.substring(0, res.length -2)
        res += `\n`

        if (this.storage.length === 0) {
            res += 'Plants in storage: The storage is empty.\n'
        } else {
            res += 'Plants in storage: '
            this.storage.forEach(plant => res += `${plant.plantName} (${plant.quantity}), `)
        }
        res = res.substring(0, res.length -2)
        return res
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());







