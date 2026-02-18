const express = require("express");
const { register, login } = require("../controllers/auth.js");

const router = express.Router();


// REGISTER ROUTE
// POST /register

router.post("/register", register);


// LOGIN ROUTE
// POST /login

router.post("/login", login);

module.exports = router;
