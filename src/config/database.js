const mongoose = require("mongoose")

mongoose.set("strictQuery", true)


async function main (){

  await mongoose.connect("mongodb+srv://mattheusarf:4uaolFNCoT4LUphS@cluster0.eexnzle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

  console.log("Connected with database")
}


main().catch(error => console.log(error))


module.exports = main