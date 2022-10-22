function plantDiscovery(data) {
    let plantsCount = data.shift()
    let plants = {}
    for (let i = 0; i < plantsCount; i++){
        let [plantName, rarity] = data[i].split("<->")
        if (!plants.hasOwnProperty(plantName)){
            plants[plantName] = {
                "rarity":rarity,
                "rating":[]
            }
        } else {
            plants[plantName]["rarity"] = rarity
        }
    }
    for (let k = plantsCount; k < data.length - 1; k++){
        let action = data[k].split(": ")[0]
        let firstParam = data[k].split(": ")[1].split(" - ")[0]
        let secondParam = data[k].split(": ")[1].split(" - ")[1]
        if (!plants.hasOwnProperty(firstParam)) {
            console.log("error")
            continue
        }
        switch(action) {
            case "Rate":
                let plantName = firstParam
                let rating = secondParam
                plants[plantName]["rating"].push(rating)
            break
            case "Update":
                let namePlant = firstParam
                let rarity = secondParam
                plants[namePlant]["rarity"] = rarity
            break
            case "Reset":
                let name = firstParam
                plants[name]["rating"] = []
            break
        }
    }
    
    console.log("Plants for the exhibition: ")
    for (let [plantName, plantInfo] of Object.entries(plants)) {
        let sum = 0
        let averageRating
        for (let j = 0; j < plantInfo["rating"].length; j++) {
            sum += Number(plantInfo["rating"][j])
        }
        if (plantInfo["rating"].length > 0 && sum > 0) {
            averageRating = sum / plantInfo["rating"].length
        } else {
            averageRating = 0
        }
        console.log(`- ${plantName}; Rarity: ${plantInfo["rarity"]}; Rating: ${averageRating.toFixed(2)}`)
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodiih - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Rate: Arnoldii - 10",
"Exhibition"])