class VegetableStore {
    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = []
    }

    loadingVegetables(vegetables) {
        let veggiesAdded = []
        for (let vegetablesInfo of vegetables) {
            let [veggieName, quantity, price] = vegetablesInfo.split(" ")
            let isFoundVeggie = false
            let indexOfFoundVeggie

            this.availableProducts.forEach((obj, index) => {
                if (obj.name === veggieName) {
                    isFoundVeggie = true
                    indexOfFoundVeggie = index
                    return
                }
            })

            if (!isFoundVeggie) {
                this.availableProducts.push({
                    name: veggieName,
                    quantity: Number(quantity),
                    price: Number(price)
                })
                veggiesAdded.push(veggieName)
            } else {
                this.availableProducts[indexOfFoundVeggie].quantity += Number(quantity)
                if (this.availableProducts[indexOfFoundVeggie].price < Number(price)) {
                    this.availableProducts[indexOfFoundVeggie].price = Number(price)
                }
            } 
        }
        return `Successfully added ${veggiesAdded.join(", ")}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0
        for (let products of selectedProducts) {
            let [productType, quantity] = products.split(" ")
            let isFoundVeggie = false
            let indexOfFoundVeggie

            this.availableProducts.forEach((obj, index) => {
                if (obj.name === productType) {
                    isFoundVeggie = true
                    indexOfFoundVeggie = index
                    return
                }
            })

            if (!isFoundVeggie) {
                throw new Error(`${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (quantity > this.availableProducts[indexOfFoundVeggie].quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            let priceForVegetable = quantity * this.availableProducts[indexOfFoundVeggie].price
            this.availableProducts[indexOfFoundVeggie].quantity -= quantity
            totalPrice += priceForVegetable
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let isFoundVeggie = false
        let indexOfFoundVeggie
        this.availableProducts.forEach((obj, index) => {
            if (obj.name === type) {
                isFoundVeggie = true
                indexOfFoundVeggie = index
                return
            }
        })

        if (!isFoundVeggie) {
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity > this.availableProducts[indexOfFoundVeggie].quantity) {
            this.availableProducts[indexOfFoundVeggie].quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        } else {
            this.availableProducts[indexOfFoundVeggie].quantity -= quantity
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision() {
        let res = 'Available vegetables:\n'
        let sortedByPrice = this.availableProducts.sort((a,b) => a.price - b.price)
        this.availableProducts.forEach(product => res += `${product.name}-${product.quantity}-$${product.price}\n`)
        res += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return res
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



