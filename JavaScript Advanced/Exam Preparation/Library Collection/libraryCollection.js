class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error("Not enough space in the collection.")
        }

        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        })

        this.capacity--
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let isFound = false
        let indexOfIsFound

        this.books.forEach((book, index) => {
            if (book.bookName === bookName) {
                if (book.payed === true) {
                    throw new Error(`${bookName} has already been paid.`)
                }
                book.payed = true
                isFound = true
                indexOfIsFound = index
                return
            }
        })

        if (!isFound) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let isFound = false

        this.books.forEach((book, index) => {
            if (book.bookName === bookName) {
                if (book.payed === false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                }
                isFound = true
                this.books.splice(index, 1)
                return
            }

        })

        if (!isFound) {
            throw new Error("The book, you're looking for, is not found.")
        }

        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let res = ''
        let isFound = false
        if (bookAuthor === undefined) {
            res += `The book collection has ${this.capacity} empty spots left.\n`
            this.books.sort((a,b) => a.bookName.localeCompare(b.bookName)).forEach((book, index) => {
                if (index === this.books.length - 1) {
                    res += `${book.bookName} == ${book.bookAuthor} - ${book.payed === false ? "Not Paid" : "Has Paid"}.`
                } else {
                    res += `${book.bookName} == ${book.bookAuthor} - ${book.payed === false ? "Not Paid" : "Has Paid"}.\n`
                }
            })
            return res
        }

        this.books.forEach((book, index) => {
            if (book.bookAuthor === bookAuthor) {
                if (index === this.books.length - 1) {
                    res += `${book.bookName} == ${book.bookAuthor} - ${book.payed === false ? "Not Paid" : "Has Paid"}.`
                } else {
                    res += `${book.bookName} == ${book.bookAuthor} - ${book.payed === false ? "Not Paid" : "Has Paid"}.\n`
                }
                isFound = true
            }
        })

        if (!isFound) {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }

        return res
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());






