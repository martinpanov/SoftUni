function autoEngineeringCompany(data) {
    let result = new Map()
    let carBrandsAndProducedCars
    for (let manufactor of data) {
        let [brand, model, producedCars] = manufactor.split(" | ")
        if (!result.has(brand)) {
            result.set(brand, new Map())
        }

        if (result.has(brand)) {
            carBrandsAndProducedCars = result.get(brand)
            if (carBrandsAndProducedCars.has(model)) {
                carBrandsAndProducedCars.set(model, carBrandsAndProducedCars.get(model) + Number(producedCars))
            } else {
                carBrandsAndProducedCars.set(model, Number(producedCars))
            }
        }

    }

    for (let brand of result.keys()) {
        let index = 1
        let output = ''
        output += `${brand}\n`
        for (let [model, producedCars] of result.get(brand).entries()) {
            let size = result.get(brand).size
            if (index === size) {
                output += `###${model} -> ${producedCars}`
                break
            }
            output += `###${model} -> ${producedCars}\n`
            index++
        }
        console.log(output)
    }


}
autoEngineeringCompany(
['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)