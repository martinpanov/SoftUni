const { assert } = require("chai")
const { describe } = require("mocha")
const { isSymmetric } = require("./checkForSymmetry")

describe("Test isSymetric functionality", () => {

    it("it should test isSymetric functionality with a number", () => {
        assert.equal(isSymmetric(23, 23), false)
    })

    it("it should test isSymetric functionality with a string", () => {
        assert.equal(isSymmetric("test", "test"), false)
    })

    it("it should test isSymetric functionality with an object", () => {
        assert.equal(isSymmetric({}), false)
    })

    it("it should test isSymetric functionality with a boolean", () => {
        assert.equal(isSymmetric(true), false)
    })

    it("it should test isSymetric functionality with undefined", () => {
        assert.equal(isSymmetric(undefined), false)
    })

    it("it should test if the array is symetrical", () => {
        assert.equal(isSymmetric([23, 23]), true)
    })

    it("it should test if the array is symetrical with odd number elements", () => {
        assert.equal(isSymmetric([23, 23, 23]), true)
    })

    it("it should test isSymetric functionality with a symmetric string", () => {
        assert.equal(isSymmetric(["a", "b", "b", "a"]), true)
    })

    it("should return false for [-1,2,1]", function () {
        assert.equal(isSymmetric([-1,2,1]), false);
    });

    it("it should test if the array is not symetrical", () => {
        assert.equal(isSymmetric([23, 21]), false)
    })

    it("it should test if the array has mixed elements", () => {
        assert.equal(isSymmetric([23, "23"]), false)
    })
})