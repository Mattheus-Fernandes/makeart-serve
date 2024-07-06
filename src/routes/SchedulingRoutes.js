const SchedulingRouter = require("express").Router()
const {
  findAllSchedules,
  makeScheduling,
  deleteScheduling
} = require("../controller/SchedulingController")

SchedulingRouter.get("/schedule", findAllSchedules)
SchedulingRouter.post("/schedule", makeScheduling)
SchedulingRouter.delete("/schedule/:id", deleteScheduling)


module.exports = SchedulingRouter