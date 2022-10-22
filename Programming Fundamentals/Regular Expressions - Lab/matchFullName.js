function matchFullName(names) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validNames = []
    let validName = regex.exec(names)
    while (validName !== null) {
        validNames.push(validName)
        validName = regex.exec(names)
    }
    console.log(validNames.join(" "))
}
matchFullName("ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov, Ivan Ivanov, Test Testov")