function schoolGrades(arrayOfStrings) {
    let grades = {}
    for (let el of arrayOfStrings) {
        let splitedArray = el.split(" ")
        let name = splitedArray.shift()       
       if (grades.hasOwnProperty(name)) {
            for (let i = 0; i < splitedArray.length; i++) {
                grades[name].push(splitedArray[i])
            }
        } else {
            grades[name] = splitedArray
        }
    }
    let sortedKeys = Object.keys(grades).sort((a,b) => a.localeCompare(b))
    for (let keys of sortedKeys) {
        let avgGrade = 0
        for (let i = 0; i < grades[keys].length; i++) {
            avgGrade += Number(grades[keys][i])
        }
        avgGrade /= grades[keys].length
        console.log(`${keys}: ${avgGrade.toFixed(2)}`)
    }
}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])