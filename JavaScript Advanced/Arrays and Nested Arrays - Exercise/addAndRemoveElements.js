function addAndRemoveElements(commands) {
    let res = []
    let num = 1
    for (let command of commands) {
        switch (command) {
            case "add":
                res.push(num)
                break
            case "remove":
                res.pop()
                break
        }
        num++
    }

    if (res.length === 0) {
        console.log("Empty")
    } else {
        console.log(res.join(`\n`))
    }
}
addAndRemoveElements(
    ['add',
        'add',
        'remove',
        'add',
        'add']
)