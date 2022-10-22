function cars(data) {
    let res = {}

    let commands = {
        create: function (name, optionOne, optionTwo) {
            if (optionOne) {
                res[name] = Object.create(res[optionTwo])
                return
            }
            return res[name] = {}
        },
        set: function (name, optionOne, optionTwo) {
            res[name][optionOne] = optionTwo 
        },
        print: function (name) {
            let result = []
            for (let key in res[name]) {
                result.push(`${key}:${res[name][key]}`)
            }
            console.log(result.join(", "))
        }
    }

    for (let el of data) {
        let [command, name, optionOne, optionTwo] = el.split(" ")
        commands[command](name, optionOne, optionTwo)

    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)