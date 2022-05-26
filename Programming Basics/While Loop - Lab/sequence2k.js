function sequence2k (input) {

    let counter = 1;
    let num = Number(input[0]);
    while (counter <= num) {
        console.log(counter)
        counter = counter * 2 + 1
    }

}
sequence2k(["3"])