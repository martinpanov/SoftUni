function passwordValidator(password) {
    let specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    let digitsCount = 0
    let isThereSpecialChar = false
    let passwordLengthIsEnough = false
    for (let i = 0; i < password.length; i++) {
        if (specialChar.test(password[i]) === true) {
            isThereSpecialChar = true
        }
        if (/\d/.test(password[i]) == true) {
            digitsCount++
        }
    }
    if (password.length >= 6 && password.length <= 10) {
        passwordLengthIsEnough = true
    }

    if (digitsCount >= 2 && passwordLengthIsEnough && !isThereSpecialChar) {
        console.log('Password is valid')
    } else if (digitsCount < 2 && !passwordLengthIsEnough && isThereSpecialChar) {
        console.log('Password must be between 6 and 10 characters')
        console.log('Password must consist only of letters and digits')
        console.log('Password must have at least 2 digits')
    } else if (!passwordLengthIsEnough && isThereSpecialChar) {
        console.log('Password must be between 6 and 10 characters')
        console.log('Password must consist only of letters and digits')
    } else if (digitsCount < 2 && isThereSpecialChar) {
        console.log('Password must consist only of letters and digits')
        console.log('Password must have at least 2 digits')
    } else if (digitsCount < 2 && !passwordLengthIsEnough) {
        console.log('Password must be between 6 and 10 characters')
        console.log('Password must have at least 2 digits')
    } else if (digitsCount < 2) {
        console.log('Password must have at least 2 digits')
    } else if (!passwordLengthIsEnough) {
        console.log('Password must be between 6 and 10 characters')
    } else if (isThereSpecialChar) {
        console.log('Password must consist only of letters and digits')
    }

}
passwordValidator('tetttttttttt3@')