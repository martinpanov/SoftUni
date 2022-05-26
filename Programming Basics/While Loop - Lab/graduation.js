function graduation(input) {
    let index = 1;
    let name = input[0];
    let grade = Number(input[index++]);
    let i = 1
    let badGradeCounter = 0;
    let year = 0;
    let totalGrade = 0;
    let studentGraduation = true
    while (i <= 12) {
        i++
        if (grade < 4) {
            badGradeCounter++
        }
        if (badGradeCounter >= 2){
            studentGraduation = false
            console.log(`${name} has been excluded at ${year} grade`)
            break;
        }
        year++
        totalGrade += grade;
        grade = Number(input[index++]);
    }
    let avgGrade = totalGrade / 12
    if (studentGraduation === true) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])