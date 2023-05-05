const express = require("express")
const app = express()

const dotenv = require("dotenv")
const dbConnect = require("./config/mongo");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const {notFound, errorHandler} = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 4040

dbConnect();

app.use(bodyParser.json())
app.use("/api/v1/user", authRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log("Server Port", PORT)
} )
