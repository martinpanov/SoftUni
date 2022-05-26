function password (input) {
    let username = input[0];
    let password = input[1];
    let index = 2
    let tempPass = input[index++]

    while (tempPass !== password) {
        tempPass = input[index++]
    }
    console.log(`Welcome ${username}!`)
}
password(["Gosho",
"secret",
"secret"])