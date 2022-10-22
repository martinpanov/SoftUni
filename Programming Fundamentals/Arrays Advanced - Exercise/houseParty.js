function houseParty(arr) {
    let copyOfArray = arr.slice()
    let peopleThatAreGoing = []
    for (let i = 0; i < copyOfArray.length; i++) {
        let splittedArray = copyOfArray[i].split(" ")
        if (splittedArray.includes("not")) {
            if (peopleThatAreGoing.includes(splittedArray[0])) {
                let indexOfTheNameThatIsNotGoing = peopleThatAreGoing.indexOf(splittedArray[0])
                peopleThatAreGoing.splice(indexOfTheNameThatIsNotGoing, 1)
                continue
            } else {
                console.log(`${splittedArray[0]} is not in the list!`)
                continue
            }
        }
        if (peopleThatAreGoing.includes(splittedArray[0])) {
            console.log(`${splittedArray[0]} is already in the list!`)
            continue
        } else {
            peopleThatAreGoing.push(splittedArray[0])
        }
    }
    console.log(peopleThatAreGoing.join("\n"))
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])