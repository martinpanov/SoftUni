function squareOfStars(stars = 5) {
    for (let i = 0; i < stars; i++) {
        let result = ""
        for (let i = 0; i < stars; i++) {
            result += "* "
        }
        console.log(result)
    }
}
squareOfStars(5)