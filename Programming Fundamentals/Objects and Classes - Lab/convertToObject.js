function convertToObject(convert){
    let convertedToObject = JSON.parse(convert)
    for (let el of Object.keys(convertedToObject)) {
        console.log(`${el}: ${convertedToObject[el]}`)
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')