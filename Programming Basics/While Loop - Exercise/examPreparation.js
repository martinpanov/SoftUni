function examPreparation(input) {
    let index = 1;
    let badGrades = Number(input[0]);
    let nameOfExercise = input[index++];
    let grade = Number(input[index++]);
    let badGradeCounter = 0;
    let totalGrade = 0;
    let gradeCounter = 0;
    let allExercisesDone = false;
    let exercisesCounter = 0;
    let lastProblem = ""
    while (nameOfExercise !== "Enough") {
        if (grade <= 4) {
            badGradeCounter++
        }
        if (badGrades === badGradeCounter) {
            console.log(`You need a break, ${badGradeCounter} poor grades.`)
            allExercisesDone = true;
            break;
        }
        exercisesCounter++
        gradeCounter++
        totalGrade += grade
        nameOfExercise = input[index++]
        grade = Number(input[index++])
        lastProblem = input[index - 4]
    }
    if (allExercisesDone === false) {
    let avgGrade = totalGrade / gradeCounter
    console.log(`Average score: ${avgGrade.toFixed(2)}`)
    console.log(`Number of problems: ${exercisesCounter}`)
    console.log(`Last problem: ${lastProblem}`)
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])