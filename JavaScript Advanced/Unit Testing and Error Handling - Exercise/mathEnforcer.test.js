const { assert } = require("chai")
const { describe } = require("mocha")
const mathEnforcer = require("./mathEnforcer")

describe("mathEnforcer", () => {

    describe("addFive", () => {
        it("Test the if statement that checks the type of the input with a string", () => {
            assert.equal(mathEnforcer.addFive("string"), undefined)
        })

        it("Test the if statement that checks the type of the input with a boolean", () => {
            assert.equal(mathEnforcer.addFive(true), undefined)
        })

        it("Test the if statement that checks the type of the input with an array", () => {
            assert.equal(mathEnforcer.addFive([]), undefined)
        })

        it("Test the if statement that checks the type of the input with an object", () => {
            assert.equal(mathEnforcer.addFive({}), undefined)
        })

        it("Test the if statement that checks the type of the input with null", () => {
            assert.equal(mathEnforcer.addFive(null), undefined)
        })

        it("Test the if statement that checks the type of the input with undefined", () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined)
        })
        
        it("Test if the addFive function will return correct result with positive number as input", () => {
            assert.equal(mathEnforcer.addFive(), undefined)
        })

        it("Test if the addFive function will return correct result with positive number as input", () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        })

        it("Test if the addFive function will return correct result with positive number as input", () => {
            assert.equal(mathEnforcer.addFive(0), 5)
        })

        it("Test if the addFive function will return correct result with negative number as input", () => {
            assert.equal(mathEnforcer.addFive(-6), -1)
        })

        it("Test if the addFive function will return correct result with a floating number as input", () => {
            assert.equal(mathEnforcer.addFive(0.999), 5 + 0.999)
        })
    })

    describe("substractTen", () => {
        it("Test the if statement that checks the type of the input with a string", () => {
            assert.equal(mathEnforcer.subtractTen("string"), undefined)
        })

        it("Test the if statement that checks the type of the input with a boolean", () => {
            assert.equal(mathEnforcer.subtractTen(true), undefined)
        })

        it("Test the if statement that checks the type of the input with an array", () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined)
        })

        it("Test the if statement that checks the type of the input with an object", () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined)
        })

        it("Test the if statement that checks the type of the input with null", () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined)
        })

        it("Test the if statement that checks the type of the input with undefined", () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined)
        })

        it("Test the if statement that checks the type of the input with empty", () => {
            assert.equal(mathEnforcer.subtractTen(), undefined)
        })
        
        it("Test if the substractTen function will return correct result with positive number as input", () => {
            assert.equal(mathEnforcer.subtractTen(15), 5)
        })

        it("Test if the substractTen function will return correct result with positive number as input", () => {
            assert.equal(mathEnforcer.subtractTen(10), 0)
        })

        it("Test if the substractTen function will return correct result with negative number as input", () => {
            assert.equal(mathEnforcer.subtractTen(-11), -21)
        })

        it("Test if the substractTen function will return correct result with a floating number as input", () => {
            assert.equal(mathEnforcer.subtractTen(10.001), 10.001 - 10)
        })

    })

    describe("sum", () => {
        it("Test the if statement that checks the type of the input with a string", () => {
            assert.equal(mathEnforcer.sum("string","string2"), undefined)
        })

        it("Test the if statement that checks the type of the input with a string", () => {
            assert.equal(mathEnforcer.sum("5",1), undefined)
        })

        it("Test the if statement that checks the type of the input with a string", () => {
            assert.equal(mathEnforcer.sum(5,"1"), undefined)
        })

        it("Test the if statement that checks the type of the input with a boolean", () => {
            assert.equal(mathEnforcer.sum(true, true), undefined)
        })

        it("Test the if statement that checks the type of the input with an array", () => {
            assert.equal(mathEnforcer.sum([], []), undefined)
        })

        it("Test the if statement that checks the type of the input with an object", () => {
            assert.equal(mathEnforcer.sum({},{}), undefined)
        })

        it("Test the if statement that checks the type of the input with null", () => {
            assert.equal(mathEnforcer.sum(null,null), undefined)
        })

        it("Test the if statement that checks the type of the input with undefined", () => {
            assert.equal(mathEnforcer.sum(undefined, undefined), undefined)
        })

        it("Test the if statement that checks the type of the input with empty", () => {
            assert.equal(mathEnforcer.sum(), undefined)
        })
        
        it("Test if the sum function will return correct result with positive number as input", () => {
            assert.equal(mathEnforcer.sum(1,1), 2)
        })

        it("Test if the sum function will return correct result with positive number as input", () => {
            assert.equal(mathEnforcer.sum(0,0), 0)
        })

        it("Test if the sum function will return correct result with negative number as input", () => {
            assert.equal(mathEnforcer.sum(-1, -1), -2)
        })

        it("Test if the sum function will return correct result with a floating number as input", () => {
            assert.equal(mathEnforcer.sum(10.0001,1.009), 10.0001 + 1.009)
        })


    })

})