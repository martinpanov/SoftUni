function theatrePromortions (day, age) {
    let price = 0
    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'Weekday':
                price += 12
            break;
            case 'Weekend':
                price += 15
            break;
            case 'Holiday':
                price += 5
            break;
        }
    }
    if (age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday':
                price += 18
            break;
            case 'Weekend':
                price += 20
            break;
            case 'Holiday':
                price += 12
            break;
        }
    }
    if (age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday':
                price += 12
            break;
            case 'Weekend':
                price += 15
            break;
            case 'Holiday':
                price += 10
            break;
        }
    }
    if (age < 0 || age > 122) {
        console.log('Error!')
    } else {
        console.log(`${price}$`)
    }
}
theatrePromortions('Weekday', 
42)