const express = require("express");
const { register, login } = require("../controllers/auth.js");
const { validateRegister } = require("../middleware/validationMiddleware.js");

const router = express.Router();

// REGISTER ROUTE
// POST /register
router.post("/register", validateRegister, register);

// LOGIN ROUTE
// POST /login
router.post("/login", login);

module.exports = router;
