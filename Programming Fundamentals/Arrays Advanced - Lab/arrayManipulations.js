function arrayManipulations(arr) {
    let copyOfArray = arr.slice()
    let myNumbers = copyOfArray.shift().split(" ")
    let command
    let operation
    for (let i = 0; i < copyOfArray.length; i ++) {
        command = copyOfArray[i].split(" ")
        operation = command[0]
        switch (operation) {
            case "Add":
                let indexOfAddNumber = command.indexOf("Add") + 1
                myNumbers.push(command[indexOfAddNumber])
            break
            case "Remove":
                let indexOfRemoveNumber = command.indexOf("Remove") + 1
                for (let removeLoop = 0; removeLoop < myNumbers.length; removeLoop++) {
                    if (myNumbers[removeLoop] === command[indexOfRemoveNumber]) {
                        myNumbers.splice(removeLoop, 1)
                    }
                }
            break
            case "RemoveAt":
                let indexOfRemoveAtNumber = command.indexOf("RemoveAt") + 1
                for (let removeAtLoop = 0; removeAtLoop < myNumbers.length; removeAtLoop++) {
                    if (removeAtLoop === Number(command[indexOfRemoveAtNumber])) {
                        myNumbers.splice(removeAtLoop, 1)
                    }
                }
            break
            case "Insert": 
                let indexOfInsertNumber = command.indexOf("Insert") + 1
                let indexOfInsertIndex = indexOfInsertNumber + 1
                for (let insertLoop = 0; insertLoop < myNumbers.length; insertLoop++) {
                    if (insertLoop === Number(command[indexOfInsertIndex])) {
                        myNumbers.splice(insertLoop, 0, command[indexOfInsertNumber])
                    }
                }
            break
        }
    }
    console.log(myNumbers.join(" "))
}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])