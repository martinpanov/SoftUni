function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index++];
    let book = input[index++]
    let booksChecked = 0;
    let bookFound = false
    while (book !== "No More Books") {
        if (favouriteBook === book) {
            console.log(`You checked ${booksChecked} books and found it.`)
            bookFound = true
            break;
        }
        book = input[index++]
        booksChecked++
    }
    if (bookFound === false) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${booksChecked} books.`)
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
