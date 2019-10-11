class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isBorrowed = 0;
        this.dueDate = 0;
        this.borrower = 0;
    }

    getBook() {
        return JSON.stringify(this);
    }
}

module.exports = Book;
