function skiTrip(input) {
    const roomForOnePerson = 18;
    const apartment = 25;
    const presidentApartment = 35;

    let days = Number(input[0]) - 1;
    let type = input[1];
    let rating = input[2];
    let finalPrice = 0
    switch(type) {
        case "room for one person":
            finalPrice = roomForOnePerson * days
            if (rating === "positive") {
                finalPrice *= 1.25
            } else {
                finalPrice *= 0.9
            }
        break;
        case "apartment":
            if (days < 10) {
                finalPrice = apartment * days * 0.7
            } else if (days >= 10 && days < 15) {
                finalPrice = apartment * days * 0.65
            } else {
                finalPrice = apartment * days * 0.5
            }
            if (rating === "positive") {
                finalPrice *= 1.25
            } else {
                finalPrice *= 0.9
            }
        break;
        case "president apartment":
            if (days < 10) {
                finalPrice = presidentApartment * days * 0.9
            } else if (days >= 10 && days < 15) {
                finalPrice = presidentApartment * days * 0.85
            } else {
                finalPrice = presidentApartment * days * 0.8
            }
            if (rating === "positive") {
                finalPrice *= 1.25
            } else {
                finalPrice *= 0.9
            }
        break;
    }
    console.log(finalPrice.toFixed(2))
}
skiTrip(["2",
"apartment",
"positive"])