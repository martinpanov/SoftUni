function solution(num) {
    return function (test) {
        let res = num
        return res += test
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));