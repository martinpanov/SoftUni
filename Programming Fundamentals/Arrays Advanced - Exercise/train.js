function train(arr) {
    let copyOfArray = arr.slice()
    let wagons = copyOfArray.shift().split(" ").map(Number)
    let maxCapacity = Number(copyOfArray.shift())
    for (let i = 0; i < copyOfArray.length; i++) {
        let separatedCommand = copyOfArray[i].split(" ")
        if (separatedCommand[0] === "Add") {
            wagons.push(Number(separatedCommand[1]))
        } else  {
            for (let index = 0; i < wagons.length; index++) {
                if (Number(separatedCommand[0]) + wagons[index] <= maxCapacity) {
                    wagons[index] += Number(separatedCommand)
                    break
                }
            }
        }
    }
    console.log(wagons.join(" "))
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])