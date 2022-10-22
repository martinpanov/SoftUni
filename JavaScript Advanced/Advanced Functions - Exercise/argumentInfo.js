function argumentInfo(...args) {
    let res = []
    let count = {}
    args.forEach((argument) => {
        let typeofArgument = typeof argument
        let obj = {}
        obj[typeofArgument] = argument
        res.push(obj)
        count[typeof argument] = 0
    })

    args.forEach((argument) => count[typeof argument]++)

    for (let obj of res) {
        for (let [key, value] of Object.entries(obj)) {
            console.log(`${key}: ${value}`)
        }
    }

    let buff = ''
    for (let [key, value] of Object.entries(count)) {
        buff += `${key} = ${value}\n`
    }
    console.log(buff)
}
argumentInfo({ name: 'bob'}, 3.333, 9.999)