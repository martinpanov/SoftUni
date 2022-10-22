function addAndRemove(commands) {
    let result = []
    for (let i = 0; i < commands.length; i ++) {
        if (commands[i] === "add") {
            result.push(i+1)
        } else if (commands[i] === "remove") {
            result.pop()
        }
    }
    if (result.length === 0) {
        console.log('Empty')
    } else {
        console.log(result.join(" "))
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])