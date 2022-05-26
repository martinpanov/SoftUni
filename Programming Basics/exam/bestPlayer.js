function bestPlayer(input) {
    let index = 0
    let name = input[index++]
    let command = ""
    let goals = Number(input[index++]);
    while (command !== "END") {
        name = input[index++]
        goals = Number(input[index++])
        if (goals > 10) {
            console.log(`He has made ${goals} goals and made a hat-trick !!!`)
            break;
        }
        command = input[index--]
    }
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
    } else {
        console.log(`${name} is the best player!`)
        console.log(`He has scored ${goals}.`)
    }
}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])