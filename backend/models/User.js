const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
      minlenth: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
userSchema.methods.validatePassword = async function (enteredPassword) {
  // console.log(await bcrypt.compare(enteredPassword, this.password))
  return await bcrypt.compare(enteredPassword, this.password)
}
module.exports = User = mongoose.model("User", userSchema)