function phoneBook(arrOfStrings) {
    let phoneBooks = {

    }
    for (let line of arrOfStrings) {
        let splitedArray = line.split(" ")
        let [name, phoneNumber] = splitedArray
        phoneBooks[name] = phoneNumber
    }
    for (let key of Object.keys(phoneBooks)) {
        console.log(`${key} -> ${phoneBooks[key]}`)
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])