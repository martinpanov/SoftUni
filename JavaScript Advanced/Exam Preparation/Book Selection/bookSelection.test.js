const { assert } = require("chai")
const { suitableTitles } = require("./bookSelection")
const bookSelection = require("./bookSelection")


describe("Test functionality of the bookSelection variable", () => {
    describe("Test the functionality of the isGenereSuitable function", () => {
        it("test first if statement", () => {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), `Books with Thriller genre are not suitable for kids at 12 age`)
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), `Books with Horror genre are not suitable for kids at 12 age`)
            assert.equal(bookSelection.isGenreSuitable("Random", 12), `Those books are suitable`)
            assert.equal(bookSelection.isGenreSuitable("Thriller", 14), `Those books are suitable`)
        })

    })

    describe("Test the functionality of the isItAffordable function", () => {
        it("validate if input's type is number", () => {
            assert.throw(function(){bookSelection.isItAffordable("test", 0)}, "Invalid input")
            assert.throw(function(){bookSelection.isItAffordable("0", "0")}, "Invalid input")
            assert.throw(function(){bookSelection.isItAffordable(0, "test")}, "Invalid input")
            assert.throw(function(){bookSelection.isItAffordable("test", "test")}, "Invalid input")
        })

        it("test if I have enough money to buy the book", () => {
            assert.equal(bookSelection.isItAffordable(5, 5), `Book bought. You have 0$ left`)
            assert.equal(bookSelection.isItAffordable(5, 10), `Book bought. You have 5$ left`)
            assert.equal(bookSelection.isItAffordable(5, 4), `You don't have enough money`)
        })

    })

    describe("Test the suitableTitles function", () => {
        it("testing if input's type is valid", () => {
            assert.throw(function(){suitableTitles({}, "text")}, "Invalid input")
            assert.throw(function(){suitableTitles({}, 0)}, "Invalid input")
            assert.throw(function(){suitableTitles([1, 2, 3], 0)}, "Invalid input")
        })

        it("testing if obj.genre === wantedGenre", () => {
            let input = [
            { title: "The Da Vinci Code", genre: "Thriller" }, 
            { title: "test", genre: "Horror"},
            { title: "random", genre: "Random"}]

            let result = ["The Da Vinci Code"]

            assert.equal(bookSelection.suitableTitles(input, "Thriller").join(" "), result.join(" "))
            result = ["test"]
            assert.equal(bookSelection.suitableTitles(input, "Horror").join(" "), result.join(" "))
            result = ["random"]
            assert.equal(bookSelection.suitableTitles(input, "Random").join(" "), result.join(" "))
        })
    })


})