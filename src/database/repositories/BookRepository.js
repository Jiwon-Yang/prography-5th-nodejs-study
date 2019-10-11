const BaseRepository = require("./BaseRepository");

class BookRepository extends BaseRepository {
    constructor() {
        super("books");
    }
}

module.exports = BookRepository;
