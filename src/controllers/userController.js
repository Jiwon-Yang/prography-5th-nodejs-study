const User = require("../models/User");
const UserRepository = require("../database/repositories/UserRepository");

const userRepository = new UserRepository();

module.exports = {
    readUser: (req, res) => {
        const {
            params: { id }
        } = req;
        res.json(userRepository.findById(Number(id)));
    },
    updateUser: (req, res) => {
        const {
            params: { id }
        } = req;
        const {
            body: { admin, isBlocked, waiting, name, books }
        } = req;
        const newUser = {
            //To Do: 리팩토링 고민 (map, index ?)
            admin: admin || userRepository.findById(Number(id))["admin"],
            isBlocked:
                isBlocked || userRepository.findById(Number(id))["isBlocked"],
            waiting: waiting || userRepository.findById(Number(id))["waiting"],
            name: name || userRepository.findById(Number(id))["name"],
            books: books || userRepository.findById(Number(id))["books"]
        };
        userRepository.update(Number(id), newUser);
    },
    deleteUser: (req, res) => {
        const {
            params: { id }
        } = req;
        userRepository.delete(Number(id));
    }
};
