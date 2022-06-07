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

module.exports = User = mongoose.model("User", userSchema)
