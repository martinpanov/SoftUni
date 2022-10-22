function matchPhoneNumber(phoneNumbers) {
    let joinedPhoneNumbers = phoneNumbers.join(", ")
    let regex = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g
    let validPhoneNumbers = []
    let validPhoneNumber = regex.exec(joinedPhoneNumbers)
    while (validPhoneNumber !== null) {
        validPhoneNumbers.push(validPhoneNumber[0])
        validPhoneNumber = regex.exec(joinedPhoneNumbers)
    }
    console.log(validPhoneNumbers.join(", "))
}
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'])