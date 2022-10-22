function chessBoard(number) {
    console.log('<div class="chessboard">')
    for (let i = 0; i < number; i++){
        console.log('<div>')
        if (i % 2 === 0) {
            for (let k = 0; k < number; k++) {
                if (k % 2 === 0) {
                    console.log('<span class="black"></span>')
                } else {
                    console.log('<span class="white"></span>')
                }
            }
        } else {
            for (let j = 0; j < number; j++) {
                if (j % 2 === 0) {
                    console.log('<span class="white"></span>')
                } else {
                    console.log('<span class="black"></span>')
                }
            }
        }
        console.log('</div>')
    }
    console.log('</div>')
}
chessBoard(3)