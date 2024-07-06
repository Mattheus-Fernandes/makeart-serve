const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes/route")
const port = process.env.PORT || 3030


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", routes)


//DB
require("./config/database")

require("./model/Scheduling")

app.listen(port, () => console.log("Ok"))

