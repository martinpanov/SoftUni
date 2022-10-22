function theBiscuitFactory(arr) {
    let biscuitsProduced = 0
    let numberOfBiscuits = arr[0]
    let countOfWorkers = arr[1]
    let biscuitsFactoryProduces = arr[2]
    for (let i = 0; i < 30; i++) {
        if (i % 3 === 0) {
            biscuitsProduced += Math.floor((numberOfBiscuits * countOfWorkers) * 0.75)
        } else {
            biscuitsProduced += numberOfBiscuits * countOfWorkers
        }
    }
    let difference = Math.abs(biscuitsFactoryProduces - biscuitsProduced)
    let differenceInPercentage = difference / biscuitsFactoryProduces * 100
    console.log(`You have produced ${biscuitsProduced} biscuits for the past month.`)
    if (biscuitsFactoryProduces > biscuitsProduced) {
        console.log(`You produce ${differenceInPercentage.toFixed(2)} percent less biscuits.`)
    } else {
        console.log(`You produce ${differenceInPercentage.toFixed(2)} percent more biscuits.`)
    }
}
theBiscuitFactory([78, 8, 16000])