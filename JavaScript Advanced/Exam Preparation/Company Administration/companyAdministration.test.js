const { assert } = require("chai")
const companyAdministration = require("./companyAdministration")

describe("Testing companyAdministration", () => {
    it("testing hiringEmployee function", () => {
        assert.throw(function(){companyAdministration.hiringEmployee("Martin", "Support", 3)}, `We are not looking for workers for this position.`)
        assert.throw(function(){companyAdministration.hiringEmployee("Djaro", "Marketing", 10)}, `We are not looking for workers for this position.`)
        assert.throw(function(){companyAdministration.hiringEmployee("Ivo", "Shefche", 7)}, `We are not looking for workers for this position.`)
        assert.equal(companyAdministration.hiringEmployee("Tosho", "Programmer", 3), `Tosho was successfully hired for the position Programmer.`)
        assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 5), `Gosho was successfully hired for the position Programmer.`)
        assert.equal(companyAdministration.hiringEmployee("Misho", "Programmer", 2), `Misho is not approved for this position.`)
    })

    it("testing the calculateSalary function", () => {

        assert.throw(function(){companyAdministration.calculateSalary("test")}, "Invalid hours")
        assert.throw(function(){companyAdministration.calculateSalary("3")}, "Invalid hours")
        assert.throw(function(){companyAdministration.calculateSalary(-1)}, "Invalid hours")

        assert.equal(companyAdministration.calculateSalary(50), 50 * 15)
        assert.equal(companyAdministration.calculateSalary(160), 160 * 15)
        assert.equal(companyAdministration.calculateSalary(161), 161 * 15 + 1000)
        assert.equal(companyAdministration.calculateSalary(170), 170 * 15 + 1000)
        assert.equal(companyAdministration.calculateSalary(0), 0)
    })

    it("testing the fireEmployee function", () => {
        assert.throw(function(){companyAdministration.firedEmployee("test", 1)}, "Invalid input")
        assert.throw(function(){companyAdministration.firedEmployee("{}", 1)}, "Invalid input")
        assert.throw(function(){companyAdministration.firedEmployee(1, [])}, "Invalid input")
        assert.throw(function(){companyAdministration.firedEmployee(["Pesho", "Gosho", "Tosho"], "3")}, "Invalid input")
        assert.throw(function(){companyAdministration.firedEmployee(["Pesho", "Djaro", "Tosho"], -1)}, "Invalid input")
        assert.throw(function(){companyAdministration.firedEmployee(["Pesho", "Djaro", "Ivo"], 4)}, "Invalid input")
        assert.throw(function(){companyAdministration.firedEmployee(["Pesho", "Djaro", "Ivan"], 3)}, "Invalid input")
        assert.throw(function(){companyAdministration.firedEmployee(["Pesho", "Gosho", "Tosho"], "pesho")}, "Invalid input")

        assert.equal(companyAdministration.firedEmployee(["Pesho"], 0), "")
        assert.equal(companyAdministration.firedEmployee(["Pesho", "Marto"], 0), "Marto")
        assert.equal(companyAdministration.firedEmployee(["Pesho", "Marto", "Tosho"], 0), "Marto, Tosho")
        assert.equal(companyAdministration.firedEmployee(["Pesho", "Marto", "Tosho"], 1), "Pesho, Tosho")
        assert.equal(companyAdministration.firedEmployee(["Pesho", "Marto", "Tosho"], 2), "Pesho, Marto")
    })

})