function nxnMatrix(number) {
    let string = ''
    for (let rows = 0; rows < number; rows++) {
        for (let cols = 0; cols < number; cols++) {
            string += `${number} `
        }
        console.log(string)
        string = ''
    }
}
nxnMatrix(3)