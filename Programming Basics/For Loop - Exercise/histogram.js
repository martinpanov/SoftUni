function histogram(input) {
    let num = Number(input[0]);
    totalNum = 0;
    p1Counter = 0;
    p2Counter = 0;
    p3Counter = 0;
    p4Counter = 0;
    p5Counter = 0;
    for (let i = 1; i <= num; i++) {
        let n = Number(input[i]);
        totalNum++
        if (n < 200) {
            p1Counter++
        } else if (n >= 200 && n <= 399) {
            p2Counter++
        } else if (n >= 400 && n <= 599) {
            p3Counter++
        } else if (n >= 600 && n <= 799) {
            p4Counter++
        } else {
            p5Counter++
        }
    }
    let p1Percentage = p1Counter / totalNum * 100
    let p2Percentage = p2Counter / totalNum * 100
    let p3Percentage = p3Counter / totalNum * 100
    let p4Percentage = p4Counter / totalNum * 100
    let p5Percentage = p5Counter / totalNum * 100
    
    console.log(`${p1Percentage.toFixed(2)}%`)
    console.log(`${p2Percentage.toFixed(2)}%`)
    console.log(`${p3Percentage.toFixed(2)}%`)
    console.log(`${p4Percentage.toFixed(2)}%`)
    console.log(`${p5Percentage.toFixed(2)}%`)
}
histogram(["3",
"1",
"2",
"999"])