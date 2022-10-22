const { assert } = require("chai")
const { describe } = require("mocha")
const { rgbToHexColor } = require("./rgbToHex")

describe("Test functionality of rgbToHexColor", () => {

    it("Test input with black color", () => {
        assert.equal(rgbToHexColor(0, 0, 0), "#000000")
    })

    it("Test input with white color", () => {
        assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF")
    })

    it("Test input with random color", () => {
        assert.equal(rgbToHexColor(255, 78, 69), "#FF4E45")
    })

    it("Test for the color range with larger number than 255", () => {
        assert.equal(rgbToHexColor(256, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, 256, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, 256), undefined)
    })
    
    it("Test for the color range with lower number than 0", () => {
        assert.equal(rgbToHexColor(-1, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, -1, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, -1), undefined)
    })

    it("Test for the color range with decimal number", () => {
        assert.equal(rgbToHexColor(10.5, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, 10.5, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, 10.5), undefined)
    })

    it("Test input with a string", () => {
        assert.equal(rgbToHexColor("255", 0, 0), undefined)
        assert.equal(rgbToHexColor(0, "255", 0), undefined)
        assert.equal(rgbToHexColor(0, 0, "255"), undefined)
    })

    it("Test input with an array", () => {
        assert.equal(rgbToHexColor([0], 0, 0), undefined)
        assert.equal(rgbToHexColor(0, [0], 0), undefined)
        assert.equal(rgbToHexColor(0, 0, [0]), undefined)
    })

    it("Test input with an object", () => {
        assert.equal(rgbToHexColor({0:0}, 0, 0), undefined)
        assert.equal(rgbToHexColor(0,{0:0}, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, {0:0}), undefined)
    })

    it("Test input with a boolean", () => {
        assert.equal(rgbToHexColor(true, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, true, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, true), undefined)
    })

    it("Test input with undefined", () => {
        assert.equal(rgbToHexColor(undefined, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, undefined, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, undefined), undefined)
    })

    it("Test input with null", () => {
        assert.equal(rgbToHexColor(null, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, null, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, null), undefined)
    })
})