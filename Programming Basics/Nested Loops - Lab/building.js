function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let lastFloor = floors
    for (let rows = floors; rows <= floors; rows--) {
        let space = ""
        for (let cols = 0; cols < rooms; cols++) {
            if (rows === lastFloor) {
               space += `L${rows}${cols} `
            }
            if (rows % 2 === 0 && rows !== lastFloor) {
                space += `O${rows}${cols} `
            } else if (rows % 2 !== 0 && rows !== lastFloor) {
                space += `A${rows}${cols} `
            }
            
        }
        if (rows < 1) {
            break;
        }
        console.log(space)
    }

}
building(["9", "5"])