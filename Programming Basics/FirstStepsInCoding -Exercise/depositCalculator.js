function depositCalculator(input){
    let depositedAmount = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let calcInterest = depositedAmount * (annualInterestRate / 100);
    let calcInterestOneMonth = calcInterest / 12;
    let total = depositedAmount + termDeposit * calcInterestOneMonth;
    console.log(total);
}
depositCalculator(["185000", "240", "1.5"]);