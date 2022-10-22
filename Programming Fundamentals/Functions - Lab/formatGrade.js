function formatGrade(grade) {
    let gradeDescription = ''
    let finalGrade = grade.toFixed(2)
    if (grade < 3.00) {
        gradeDescription = 'Fail'
        finalGrade = Math.floor(grade)
    } else if (grade < 3.50) {
        gradeDescription = 'Poor'
    } else if (grade < 4.50) {
        gradeDescription = 'Good'
    } else if (grade < 5.50) {
        gradeDescription = 'Very good'
    } else {
        gradeDescription = 'Excellent'
    }
    console.log(`${gradeDescription} (${finalGrade})`)
}
formatGrade(2.99)