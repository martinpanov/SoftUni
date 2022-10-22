function colorize() {
    for (let i = 0; i < document.getElementsByTagName('tr').length; i++) {
        if (i % 2 === 1) {
            document.getElementsByTagName('tr')[i].style.backgroundColor = "Teal"
        }
    }
}