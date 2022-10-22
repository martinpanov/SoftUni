function createCalculator(num) {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let result = createCalculator()

result.add()
//console.log(createCalculator)
result.subtract(undefined)
console.log(result.get())

module.exports = createCalculator