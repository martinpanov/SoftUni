function getFibonator() {
    let res
    let n1 = 1, n2 = 0, nextTerm;
    return function () {
        nextTerm = n1 + n2;
        n1 = n2;
        return n2 = nextTerm;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
