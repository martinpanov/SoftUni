class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    toString() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }
}
function extendPrototype(Class) {
    Class.prototype.species = "Human"
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}
extendPrototype(Person)

let myPerson = new Person("Maria", "maria@abv.bg")

console.log(myPerson.toSpeciesString())
