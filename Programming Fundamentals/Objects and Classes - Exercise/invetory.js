function inventory(arr) {
    let heroes = [] 

    for (let el of arr) {
        let [hero, level, items] = el.split(" / ")
        heroes.push({hero, level, items})
    }
    let sortedLevel = heroes.sort((a,b) => {return a.level - b.level})
    for (let el of heroes) {
        
        console.log(`Hero: ${el.hero}`)
        console.log(`level => ${el.level}`)
        console.log(`items => ${el.items}`)
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])