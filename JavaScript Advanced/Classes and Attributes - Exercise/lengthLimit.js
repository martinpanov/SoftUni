class Stringer {
    constructor(innerString, innerLength) {
        this._originalString = innerString
        this.innerString = innerString
        this.innerLength = innerLength

    }
    increase(value) {
        this.innerLength += value
        if (this.innerString.length > this.innerLength) {
            let length = this.innerString.length - this.innerLength
            this.innerString = this.innerString.slice(0, -length)
            this.innerString += '...'
        } else {
            this.innerString = this._originalString
        }
    }

    decrease(value) {
        this.innerLength -= value
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
        if (this.innerString.length > this.innerLength) {
            let length = this.innerString.length - this.innerLength
            this.innerString = this.innerString.slice(0, -length)
            this.innerString += '...'
        }
    }

    toString() {
        return `${this.innerString}`
    }
 

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
