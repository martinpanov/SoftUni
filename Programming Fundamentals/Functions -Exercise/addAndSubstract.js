function addAndSubstract(first, second, third) {
    let resOfSum = sum(first, second)
    let finalResult = substract(third)

    function sum(first, second) {
        return first + second
    }

    function substract() {
        return resOfSum - third
    }

    console.log(finalResult)
}
addAndSubstract(23, 6, 10)