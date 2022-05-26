function tradeCommissions(input) {
    const city = input[0];
    const sales = Number(input[1]);
    let commission = 0;
    switch(city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = 0.05
                const finalSum = sales * commission
                console.log (finalSum.toFixed(2))
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.07
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.08
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 10000) {
                commission = 0.12
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else {
                console.log("error");
            }
        break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = 0.045
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.075
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.1
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 10000) {
                commission = 0.13
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else {
                console.log("error");
            }
        break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = 0.055
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.08
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.12
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else if (sales > 10000) {
                commission = 0.145
                const finalSum = sales * commission
                console.log(finalSum.toFixed(2))
            } else {
                console.log("error");
            }
        break;
        default: console.log("error");
        break;
    }
}
tradeCommissions(["Plovdiv",
"-20"])