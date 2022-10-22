function vacation (people, type, day) {
    let totalPrice = 0
    if (type === "Students") {
        switch (day) {
            case "Friday":
                totalPrice += people * 8.45
                break
            case "Saturday":
                totalPrice += people * 9.80
                break
            case "Sunday":
                totalPrice += people * 10.46
        }
        if (people >= 30) {
            totalPrice *= 0.85
        }
    } else if (type === "Business") {
        if (people >= 100) {
            people -= 10
        }
        switch (day) {
            case "Friday":
                totalPrice += people * 10.90
                break
            case "Saturday":
                totalPrice += people * 15.60
                break
            case "Sunday":
                totalPrice += people * 16
        }
    } else {
        switch (day) {
            case "Friday":
                totalPrice += people * 15
                break
            case "Saturday":
                totalPrice += people * 20
                break
            case "Sunday":
                totalPrice += people * 22.50
        }
        if (people >= 10 && people <= 20) {
            totalPrice *= 0.95
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday")