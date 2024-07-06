const route = require("express").Router()

route.use("/api", require("./ProductRoutes"))
route.use("/api", require("./SchedulingRoutes"))

module.exports = route