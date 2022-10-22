function extensibleObject() {
    let objectPrototype = Object.getPrototypeOf(this)

    this.extend = function (obj) {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value == "function") {
                objectPrototype[key] = value
            } else {
                this[key] = value
            }
        }
    }
    return this
}

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
const myObj = extensibleObject()
myObj.extend(template)