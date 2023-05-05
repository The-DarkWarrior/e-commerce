const User = require("../models/user")
const asyncHandler = require("express-async-handler")
const createUser = asyncHandler(async (req, res) => {

    const email = req.body.email
    const mobile = req.body.mobile
    const findUserEmail = await User.findOne({email: email})
    const findUserMobile = await User.findOne({mobile: mobile})
    if (findUserEmail) {
        throw new Error("User already exist with email")
    } else if (findUserMobile) {
        throw new Error("User already exist with mobile")
    } else {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)

    }
});

module.exports = createUser;