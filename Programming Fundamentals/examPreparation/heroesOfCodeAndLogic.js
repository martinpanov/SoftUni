function heroesOfCodeAndLogic(data) {
    let numberOfHeroes = Number(data.shift())
    let heroes = {}
    for (let i = 0; i < numberOfHeroes; i++) {
        let [name, health, mana] = data[i].split(" ")
        if (health > 100 || mana > 200) {
            continue
        }
        heroes[name] = {
            "health":Number(health),
            "mana":Number(mana)
        }
    }
    for (let k = numberOfHeroes; k < data.length; k++) {
        let [action, name, firstParam, secondParam] = data[k].split(" - ")
        switch(action) {
            case "CastSpell":
                let manaNeeded = Number(firstParam)
                let spellName = secondParam
                if (heroes[name]["mana"] < manaNeeded) {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`)
                    break
                }
                let difference = heroes[name]["mana"] - manaNeeded
                heroes[name]["mana"] -= manaNeeded
                console.log(`${name} has successfully cast ${spellName} and now has ${difference} MP!`)
            break
            case "TakeDamage":
                let damage = Number(firstParam)
                let attacker = secondParam
                let healthLeft = heroes[name]["health"] - damage
                heroes[name]["health"] -= damage
                if (heroes[name]["health"] <= 0) {
                    console.log(`${name} has been killed by ${attacker}!`)
                    delete heroes[name]
                    break
                }
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${healthLeft} HP left!`)
            break
            case "Recharge":
                let manaRecharge = Number(firstParam)
                let manaDifference
                if (heroes[name]["mana"] + manaRecharge > 200) {
                    manaDifference = Math.abs(heroes[name]["mana"] - 200)
                    heroes[name]["mana"] = 200
                    console.log(`${name} recharged for ${manaDifference} MP!`)
                    break                    
                } 
                heroes[name]["mana"] += manaRecharge
                manaDifference = Math.abs(heroes[name]["mana"] - manaRecharge)
                console.log(`${name} recharged for ${manaRecharge} MP!`)
            break
            case "Heal":
                let healthHealed = Number(firstParam)
                let healthDifference
                if (heroes[name]["health"] + healthHealed > 100) {
                    healthDifference = Math.abs(heroes[name]["health"] - 100)
                    heroes[name]["health"] = 100
                    console.log(`${name} healed for ${healthDifference} HP!`)
                    break
                }
                heroes[name]["health"] += healthHealed
                healthDifference = Math.abs(heroes[name]["health"] - healthHealed)
                console.log(`${name} healed for ${healthHealed} HP!`)
            break
        }
    }
    for (let [heroName, heroInfo] of Object.entries(heroes)) {
        console.log(heroName)
        console.log(`  HP: ${heroInfo["health"]}`)
        console.log(`  MP: ${heroInfo["mana"]}`)
    }
}
heroesOfCodeAndLogic(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "TakeDamage - Kyrre - 33 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])