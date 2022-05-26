function hospital(input) {
    let index = 0
    let days = Number(input[0])
    index++
    let patients = Number(input[index++])
    let doctors = 7
    let treatedPatients = 0
    let untreatedPatients = 0
    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0 && treatedPatients < untreatedPatients) {
            doctors++
        }
        if (patients < doctors) {
            treatedPatients += patients
        } else {
            treatedPatients += doctors
            untreatedPatients += Math.abs(doctors - patients)
        }
        patients = Number(input[index++])
    }
    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}
hospital(["3", "7", "7", "7"])