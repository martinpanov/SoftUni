function solution() {
    let res = ''

    return {
        append: (string) => res += string,
        removeStart: (int) => res = res.substring(int),
        removeEnd: (int) => res = res.substring(0, res.length - int),
        print: () => console.log(res)
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();