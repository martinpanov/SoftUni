function passwordGuess(input) {
    const password = input[0];
    const correctPassword = "s3cr3t!P@ssw0rd"
    if (password === correctPassword){
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"]);