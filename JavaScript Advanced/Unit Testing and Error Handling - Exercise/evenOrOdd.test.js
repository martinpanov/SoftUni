const { assert } = require("chai")
const { describe } = require("mocha")
const { isOddOrEven } = require("./evenOrOdd")

describe("Testing the isOddOrEven function", () => {

    it("Testing the function with different type than string", () => {
        assert.equal(isOddOrEven(1), undefined)
        assert.equal(isOddOrEven([]), undefined)
    })

    it("Testing the function with even length string", () => {
        assert.equal(isOddOrEven("test"), "even")
    })

    it("Testing the function with odd length string", () => {
        assert.equal(isOddOrEven("marto"), "odd")
    })

    it("Testing the function with multiple different length strings", () => {
        assert.equal(isOddOrEven("marto","dqdo", "test", "rap"), "odd", "even", "even", "odd")
    })

})