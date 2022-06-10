const mongoose = require(
"mongoose")
module.exports = connectDB = () => {
  mongoose
    .connect(
      "mongodb://localhost/E-shop",
      // process.env.DB_URI,
      {
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("Good"))
    .catch((e) => console.log(e))
}
console.log()