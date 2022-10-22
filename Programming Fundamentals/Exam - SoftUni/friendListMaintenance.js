function friendListMaintenance(arr) {
    let friendsNames = arr.shift().split(", ")
    let lastCommand = arr.pop()
    let blackListedCount = 0
    let lostCount = 0
    for (let el of arr) {
        let commandParams = el.split(" ")
        let commandName = commandParams.shift()
        switch (commandName) {
            case "Blacklist":
                let blacklistName = commandParams[0]
                if (friendsNames.includes(blacklistName)) {
                    friendsNames[friendsNames.indexOf(blacklistName)] = 'Blacklisted'
                    console.log(`${blacklistName} was blacklisted.`)
                    blackListedCount++
                } else {
                    console.log(`${blacklistName} was not found.`)
                }
            break
            case "Error":
                let errorNameIndex = Number(commandParams[0])
                if (errorNameIndex >= 0 && errorNameIndex <= friendsNames.length - 1) {
                    if (friendsNames[errorNameIndex] !== "Blacklisted" && friendsNames[errorNameIndex] !== "Lost") {
                        let errorName = friendsNames[errorNameIndex]
                        console.log(`${errorName} was lost due to an error.`)
                        friendsNames[errorNameIndex] = 'Lost'
                        lostCount++
                    }
                }
            break
            case "Change": 
                let changeIndex = Number(commandParams[0])
                let newName = commandParams[1]
                if (changeIndex >= 0 && changeIndex <= friendsNames.length - 1) {
                    let oldName = friendsNames[changeIndex]
                    console.log(`${oldName} changed his username to ${newName}.`)
                    friendsNames[changeIndex] = newName
                }
            break
        }
    }
    console.log(`Blacklisted names: ${blackListedCount}`)
    console.log(`Lost names: ${lostCount}`)
    console.log(friendsNames.join(" "))
}
friendListMaintenance(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])