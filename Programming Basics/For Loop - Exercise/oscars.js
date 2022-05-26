function oscars(input) {
    let index = 0;
    let name = input[index]
    index++
    let academyPoints = Number(input[index]);
    index++
    let jury = Number(input[index]);
    index++

    let isNominee = false;
    

    for (let i = 0; i < jury; i++) {
        let nameOfJury = input[index];
        index++
        let pointsByJury = Number(input[index]);
        index++

        academyPoints += nameOfJury.length * pointsByJury / 2

        if (academyPoints > 1250.5) {
            isNominee = true;
            console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
            break;
        }
         
    }

    if (!isNominee) {
    let diff = Math.abs(academyPoints - 1250.5)
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])