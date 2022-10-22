(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this
        }
        return this.toString()
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str
        }
        return this.toString()
    }

    String.prototype.truncate = function (num) {
        if (this.length <= num) {
            return this.toString()
        }
        if (num < 4) {
            let amountOfDots = ''
            for (let i = 0; i < num; i++) {
                amountOfDots += '.'
            }
            return amountOfDots
        }
        let lastIndexOfSpace = this.toString().substring(0, num - 2).lastIndexOf(" ")
        if (lastIndexOfSpace === -1) {
            if (this.includes("...")) {
                return `${this.slice(0, num - 3)}...`
            }
            return `${this}...`
        }
        if (lastIndexOfSpace + 3 > num) {
            return this.toString()
        }
        return `${this.slice(0, lastIndexOfSpace)}...`
    } 

    String.prototype.isEmpty = function () {
        if (this.length <= 0) {
            return true
        } else {
            return false
        }
    }
    
    String.format = function (string, ...params) {
        let paramsLength = params.length
        let res = string
        for (let i = 0; i < paramsLength; i++) {
            if (res.includes(`{${i}}`)) {
                res = res.replace(`{${i}}`, params[i])
            }
        }
        return res
    }


})()


let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
  'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
   'dog');
   console.log(str)

