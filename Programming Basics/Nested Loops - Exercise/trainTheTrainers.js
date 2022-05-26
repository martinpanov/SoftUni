function trainTheTrainers(input) {
    let index = 1;
    let countOfJury = Number(input[0]);
    let command = input[index++];
    let countOfGrades = 0;
    let avgGrade = 0;
    let avgGradeForEachPresentation = 0;
    let totalAmountOfGrades = 0;
    while (command !== "Finish") {
        let nameOfPresentation = command;
        for (let i = 1; i <= countOfJury; i++) {
            command = input[index++]
            countOfGrades++
            avgGradeForEachPresentation += Number(command)
            totalAmountOfGrades += Number(command)
        }
        avgGradeForEachPresentation = avgGradeForEachPresentation / countOfJury;
        console.log(`${nameOfPresentation} - ${avgGradeForEachPresentation.toFixed(2)}.`)
        command = input[index++]
        avgGradeForEachPresentation = 0;
    }
    avgGrade = totalAmountOfGrades / countOfGrades
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])