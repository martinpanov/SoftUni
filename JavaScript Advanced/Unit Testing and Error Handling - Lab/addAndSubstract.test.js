const { assert } = require("chai")
const { add, substract, get } = require("./addAndSubstract")
const { describe } = require("mocha")
const createCalculator = require("./addAndSubstract")

describe("Testing the functionality of the add and substract function", () => {

    it("Test giving a string as parameter", () => {
        let result = createCalculator()

        result = createCalculator()
        result.add("marto")
        assert.isNaN(result.get())

        result = createCalculator()
        result.subtract("marto")
        assert.isNaN(result.get())
    })

    it("Test giving an array as parameter", () => {
        let result = createCalculator()
        result.add([])
        result.subtract(3)
        assert.equal(result.get(), -3)

        result = createCalculator()
        result.add(3)
        result.subtract([])
        assert.equal(result.get(), 3)

        result = createCalculator()
        result.add([])
        result.subtract([])
        assert.equal(result.get(), 0)
    })

    it("Test giving an object as parameter", () => {
        let result = createCalculator()
        result.add({})
        result.subtract(3)
        assert.isNaN(result.get())

        result = createCalculator()
        result.add(3)
        result.subtract({})
        assert.isNaN(result.get())

        result = createCalculator()
        result.add({})
        result.subtract({})
        assert.isNaN(result.get())
    })

    it("Test giving undefined as parameter", () => {
        let result = createCalculator()
        result.add(undefined)
        result.subtract(3)
        assert.isNaN(result.get())

        result = createCalculator()
        result.add(3)
        result.subtract(undefined)
        assert.isNaN(result.get())

        result = createCalculator()
        result.add(undefined)
        result.subtract(undefined)
        assert.isNaN(result.get())
    })

    it("Test substracting type Number from number as string", () => {

        let result = createCalculator()
        result.add(10)
        result.subtract(5)
        result.subtract("2")
        result.add("3")
        assert.equal(result.get(), 6)

    })


    it("Test substracting whole numbers", () => { 
        let result = createCalculator()
        result.add(10)
        result.subtract(5)
        assert.equal(result.get(), 5)

        result = createCalculator()
        result.add(5)
        result.subtract(10)
        assert.equal(result.get(), -5)
    })

    it("Test substracting negative numbers", () => { 
        let result = createCalculator()
        result.add(-5)
        result.subtract(-3)
        assert.equal(result.get(), -2)

        result = createCalculator()
        result.add(-2)
        result.subtract(-6)
        assert.equal(result.get(), 4)
    })

    it("Test substracting floating numbers", () => { 
        let result = createCalculator()
        result.add(5.4)
        result.subtract(5.3)
        assert.equal(result.get(), 0.10000000000000053)

        result = createCalculator()
        result.add(-5.4)
        result.subtract(-5.3)
        assert.equal(result.get(), -0.10000000000000053)

        result = createCalculator()
        result.add(-5.3)
        result.subtract(-5.4)
        assert.equal(result.get(), 0.10000000000000053)
    })

})