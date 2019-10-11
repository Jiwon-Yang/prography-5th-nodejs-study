const { Router } = require("express");
const auth = require("../middlewares/auth");
const authRouter = require("./authRouter");
const bookRouter = require("./bookRouter");
const userRouter = require("./userRouter");

const router = Router();

router.use("/auth", auth, authRouter);
router.use("/books", bookRouter);
router.use("/users", userRouter);

module.exports = router;
