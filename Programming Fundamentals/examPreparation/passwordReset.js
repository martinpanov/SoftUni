function passwordReset(data) {
    let password = data.shift()
    for (let i = 0; i < data.length; i++) {
        let token = data[i].split(" ")
        let command = token[0]
        switch (command) {
            case "TakeOdd":
                let newPassword = ""
                for (let k = 0; k < password.length; k++) {
                    if (k % 2 !== 0) {
                        newPassword += password[k]
                    }
                }
                password = newPassword
                console.log(password)
            break
            case "Cut":
                let index = Number(token[1])
                let length = Number(token[2])
                let firstPart = password.slice(0, index)
                let secondPart = password.slice(index+length)
                password = firstPart + secondPart
                console.log(password)
            break
            case "Substitute":
                let oldString = token[1]
                let newString = token[2]
                if (password.includes(oldString)) {
                    let reggex = new RegExp (oldString, 'g')
                    password = password.replace(reggex, newString)
                    console.log(password)
                } else {
                    console.log('Nothing to replace!')
                }
            break
        }
    }
    console.log(`Your password is: ${password}`)
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])