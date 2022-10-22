function heroicInventory(data) {
    let obj = []
    for (let el of data) {
        let [name, level, items] = el.split(" / ")
        level = Number(level)
        items = items ? items.split(", ") : []
        obj.push({name, level, items})
    }
    console.log(JSON.stringify(obj))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])