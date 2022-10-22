const { assert } = require("chai")
const { describe } = require("mocha")
const { sum } = require("./sumOfNumbers")


describe("Test sum functionality", () => {

    it("should test sum functionality", () => {
        assert.equal(sum([1,2,3]), 6)
    })


})