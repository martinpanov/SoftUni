function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litresDetergent = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let penPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let detergentPrice = litresDetergent * 1.20;
    let price = penPrice + markersPrice + detergentPrice;
    let totalDiscount = price * (percentDiscount / 100);
    let totalPrice = price - totalDiscount
    console.log(totalPrice);
}
suppliesForSchool(["2", "3", "4", "25"]);