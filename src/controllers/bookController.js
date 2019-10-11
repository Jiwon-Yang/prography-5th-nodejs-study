const Book = require("../models/Book");
const BookRepository = require("../database/repositories/BookRepository");

const bookRepository = new BookRepository();

module.exports = {
    readBooks: (req, res) => {
        res.json(bookRepository.find());
    },
    createBook: (req, res) => {
        const {
            body: { id, title, author }
        } = req;
        const book = new Book(id, title, author);
        bookRepository.create(book);
    },
    readBook: (req, res) => {
        const {
            params: { id }
        } = req;
        res.json(bookRepository.findById(Number(id)));
    },
    updateBook: (req, res) => {
        const {
            params: { id }
        } = req;
        const {
            body: { title, author, isBorrowed, dueDate, borrower }
        } = req;
        const newBook = {
            //To Do: 리팩토링 고민 (map, index ?)
            title: title || bookRepository.findById(Number(id))["title"],
            author: author || bookRepository.findById(Number(id))["author"],
            isBorrowed:
                isBorrowed || bookRepository.findById(Number(id))["isBorrowed"],
            dueDate: dueDate || bookRepository.findById(Number(id))["dueDate"],
            borrower:
                borrower || bookRepository.findById(Number(id))["borrower"]
        };
        bookRepository.update(Number(id), newBook);
    },
    deleteBook: (req, res) => {
        const {
            params: { id }
        } = req;
        bookRepository.delete(Number(id));
    }
};
