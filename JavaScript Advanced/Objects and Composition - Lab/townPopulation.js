function townPopulation(data) {
    let obj = {}
    for (let i = 0; i < data.length; i++) {
        let splittedData = data[i].split(" <-> ")
        let town = splittedData[0]
        let population = Number(splittedData[1])
        if (obj.hasOwnProperty(town)) {
            obj[town] += population

        } else {
            obj[town] = population
        }  
    }
    for (let [town, population] of Object.entries(obj)) {
        console.log(town + " : " + population)
    }

}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])