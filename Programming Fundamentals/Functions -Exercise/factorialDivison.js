function factorialDivison(firstNum, secondNum) {
    function factorialCalc(num) {
        let res = 1
        for (let i = num; i > 0; i--) {
            res *= i
        }
        return res
    }
   console.log((factorialCalc(firstNum) / factorialCalc(secondNum)).toFixed(2))
}
factorialDivison(5, 2)