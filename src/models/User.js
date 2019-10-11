class User {
    constructor(id, name) {
        this.id = id;
        this.admin = 0;
        this.isBlocked = 0;
        this.waiting = 0;
        this.name = name;
        this.books = [];
    }

    getUser() {
        return JSON.stringify(this);
    }
}

module.exports = User;
