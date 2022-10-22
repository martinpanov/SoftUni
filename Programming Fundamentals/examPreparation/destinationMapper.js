function destinationMapper(destinations) {
    let reggex = /([=|\/])(?<name>[A-Z]{1}[A-Za-z]{2,})\1/g
    let testDestinations = reggex.exec(destinations)
    let travelPoints = 0
    let validDestinations = []
    while(testDestinations !== null) {
        travelPoints += testDestinations[2].length
        validDestinations.push(testDestinations[2])
        testDestinations = reggex.exec(destinations)
    }
    let joinedDestinations = validDestinations.join(", ")
    console.log(`Destinations: ${joinedDestinations}`)
    console.log(`Travel Points: ${travelPoints}`) 
}
destinationMapper(("ThisIs some InvalidInput"))