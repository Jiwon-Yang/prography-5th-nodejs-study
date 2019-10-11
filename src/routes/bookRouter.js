const express = require("express");
const {
    readBooks,
    createBook,
    readBook,
    updateBook,
    deleteBook
} = require("../controllers/bookController");

const router = express.Router();

router.get("", readBooks);
router.post("", createBook);
router.get("/:id", readBook);
router.put("/:id/update", updateBook);
router.delete("/:id/delete", deleteBook);

module.exports = router;
