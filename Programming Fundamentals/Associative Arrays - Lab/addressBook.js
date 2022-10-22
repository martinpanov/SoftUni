function addressBook(arrayOfStrings) {
    let addressBooks = {

    }
    for (let el of arrayOfStrings) {
        let splitedArray = el.split(":")
        let [name, address] = splitedArray
        addressBooks[name] = address
    }
    let sortedKeys = Object.keys(addressBooks).sort((a,b) => a.localeCompare(b))
    for (let el of sortedKeys) {
        console.log(`${el} -> ${addressBooks[el]}`)
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])