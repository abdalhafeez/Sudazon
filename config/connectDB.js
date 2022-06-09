const mongoose = require(
"mongoose")
module.exports = connectDB = () => {
  mongoose.connect(
    "mongodb://localhost/E-shop",
    {
      // useNewUrlParser: true,
      // useFindAndModify: false,
      // useUnifiedTopology: true,
    },
    () => console.log("DB Connected")
  )
}