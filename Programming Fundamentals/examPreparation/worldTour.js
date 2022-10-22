function worldTour(data) {
    let myStops = data.shift()
    for (let i = 0; i < data.length; i++) {
        let [action, firstParam, secondParam] = data[i].split(":")
        switch (action) {
            case "Add Stop":
                let index = Number(firstParam)
                let destination = secondParam
                if (index < 0 || index >= myStops.length) {
                    break
                } else {
                    let firstPart = myStops.slice(0, index)
                    let secondPart = myStops.slice(index)
                    myStops = firstPart + destination + secondPart
                    console.log(myStops)
                }
            break
            case "Remove Stop":
                let startIndex = Number(firstParam)
                let endIndex = Number(secondParam)
                if ((startIndex < 0) || (endIndex < 0) || (startIndex >= myStops.length) || (endIndex >= myStops.length)) {
                    console.log(myStops)
                    break
                } else {
                    let firstPart = myStops.slice(0, startIndex)
                    let secondPart = myStops.slice(endIndex+1)
                    myStops = firstPart + secondPart
                    console.log(myStops)
                }
            break
            case "Switch":
                let oldString = firstParam
                let newString = secondParam
                let reggex = new RegExp(oldString, 'g')
                myStops = myStops.replace(reggex, newString)
                console.log(myStops)
            break
        }
    }
    console.log(`Ready for world tour! Planned stops: ${myStops}`)
}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Switch:Bulgaria:Australia",
"Travel"]))