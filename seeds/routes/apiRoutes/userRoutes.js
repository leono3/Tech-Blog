const router = require("express").Router();
const { signIn, signUp, signOut } = require("../../controllers/userController");

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/signout", signOut);

module.exports = router;
