const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PictureSchema = new Schema({
  urlImage: String,
  product: String,
  brand: String,
  price: String,
  amount: Number,
  sales: Number
},{
  timestamps: true
})

module.exports = mongoose.model("products", PictureSchema)