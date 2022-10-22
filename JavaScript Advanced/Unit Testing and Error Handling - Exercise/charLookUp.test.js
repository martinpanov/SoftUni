const { assert } = require("chai")
const { describe } = require("mocha")
const { lookupChar } = require("./charLookUp")

describe("Testing the lookupChar function", () => {

    it("Testing giving a different type than string", () => {
        assert.equal(lookupChar(1, 1), undefined)
    })

    it("Testing giving two strings", () => {
        assert.equal(lookupChar("test", "test"), undefined)
    })

    it("Testing giving a different type than string", () => {
        assert.equal(lookupChar(1, "1"), undefined)
    })

    it("Testing giving a different type than string", () => {
        assert.equal(lookupChar([], 1), undefined)
    })

    it("Testing giving a floating number", () => {
        assert.equal(lookupChar("test", 2.33), undefined)
    })

    it("Testing giving an index as string", () => {
        assert.equal(lookupChar("test", "2"), undefined)
    })

    it("Testing giving an index larger than string.length", () => {
        assert.equal(lookupChar("test", 5), "Incorrect index")
    })

    it("Testing giving an index equal to string.length", () => {
        assert.equal(lookupChar("test", 4), "Incorrect index")
    })

    it("Testing giving an index larger than string.length", () => {
        assert.equal(lookupChar("test", 100), "Incorrect index")
    })

    it("Testing giving an index lower than zero", () => {
        assert.equal(lookupChar("test", -1), "Incorrect index")
    })

    it("Testing if it will return the last char", () => {
        assert.equal(lookupChar("test1", 4), "1")
    })

    it("Testing if it will return the first char", () => {
        assert.equal(lookupChar("Test", 0), "T")
    })
})