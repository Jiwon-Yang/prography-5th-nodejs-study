const express = require("express");
const {
    readUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");
const router = express.Router();

router.get("/:id", readUser);
router.put("/:id/update", updateUser);
router.delete("/:id/delete", deleteUser);

module.exports = router;
