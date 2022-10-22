function calculator() {

    let numOneInput
    let numTwoInput
    let resultInput

    return {
        init: (numOne, numTwo, result) => {
            numOneInput = document.querySelector(numOne)
            numTwoInput = document.querySelector(numTwo)
            resultInput = document.querySelector(result)
        },
        add: () => {
            let firstNum = Number(numOneInput.value)
            let secondNum = Number(numTwoInput.value)
            let result = firstNum + secondNum
            resultInput.value = result
        },
        subtract: () => {
            let firstNum = Number(numOneInput.value)
            let secondNum = Number(numTwoInput.value)
            let result = firstNum - secondNum
            resultInput.value = result
        }

    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





