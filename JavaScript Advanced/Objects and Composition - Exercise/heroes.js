function solve() {
    return {
        mage(name) {return {
            name,
            health: 100,
            mana: 100,
            cast(spell) {
                console.log(`${name} cast ${spell}`)
                this.mana--
            }
        }
        },
        fighter(name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    console.log(`${name} slashes at the foe!`)
                    this.stamina--
                }
            }
        }
    }
}    

let create = solve();
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
let act = scorcher2.stamina;
let exp = 99;
assert.equal(act,exp,"2");

let act1 = scorcher2.name;
let exp1 = "Scorcher 2"
assert.equal(act1,exp1);
