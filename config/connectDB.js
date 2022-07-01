var colors = require("colors/safe");

const mongoose = require("mongoose");
module.exports = connectDB = () => {
  mongoose
    .connect(
      "mongodb://localhost/sudazonDB",
      // process.env.DB_URI,
      {
        useNewUrlParser: true,
      }
    )
    .then(() => console.log(colors.underline.yellow("DB Connected!")))
    .catch((e) => console.log(e));
};
console.log();
