const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SchedulingSchema = new Schema({
  clientName: String,
  products: [String],
  day: String,
  paymentStatus: String
}, {
  timestamps: true
})

module.exports = mongoose.model("schedules", SchedulingSchema)