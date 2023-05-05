const express = require("express")
const createUser = require("../controller/user");
const authRouter = express.Router();

authRouter.post("/register/", createUser)


module.exports = authRouter