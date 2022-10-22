function listProcessor(arrayOfCommands) {
    let res = []
    for (let el of arrayOfCommands) {
        let [command, string] = el.split(" ")
        switch (command) {
            case "add":
                res.push(string)
            break
            case "remove":
                res = res.filter(word => word !== string)
            break
            case "print":
                console.log(res.join(","))
            break
        }
    }
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])