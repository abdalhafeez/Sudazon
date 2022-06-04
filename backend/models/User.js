const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        
    },
    password: {
        type: String,
        minlenth: 6
    }
    , isAdmin: {
        type: Boolean,
        default: false
    }
})
userSchema.methods.validatePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
module.exports = User = mongoose.model("User", userSchema)