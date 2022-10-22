function convertToJson(firstName, hisLastName, hisHairColor) {
    let object = {
        name: firstName,
        lastName: hisLastName,
        hairColor: hisHairColor,
    }
    let convertedToJson = JSON.stringify(object)
    return convertedToJson
}
console.log(convertToJson('George', 'Jones', 'Brown'))