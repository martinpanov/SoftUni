function cats(arr) {
    let allCats = []
class Cat {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}
    for (let i = 0; i < arr.length; i++) {
        let splitedArray = arr[i].split(" ")
        let name = splitedArray[0]
        let age = splitedArray[1]
        allCats.push(new Cat(name, age))
    }
    for (let el of allCats) {
        el.meow()
    }
}
cats(['Mellow 2', 'Tom 5'])