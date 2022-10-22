function partyTime(arrOfStrings) {
    let vip = []
    let regular = []
    let allGuests = []
    for (let i = 0; i < arrOfStrings.length; i++) {
        if (arrOfStrings[i] !== "PARTY") {
            allGuests.push(arrOfStrings[i])
        }
    }
    for (let el of allGuests) {
            if (isNaN(el[0]) === true) {
                if (regular.includes(el)) {
                    regular.splice(regular.indexOf(el),1)
                } else {
                    regular.push(el)
                }
            } else {
                if (vip.includes(el)) {
                    vip.splice(vip.indexOf(el),1)
                } else {
                    vip.push(el)
                }
            }
    }
    console.log(vip.length + regular.length)
    if (vip.length > 0) {
        console.log(vip.join(`\n`))
    }
    if (regular.length > 0) {
        console.log(regular.join(`\n`))
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])