const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { check, validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
/*
@desc: create new user 
@route: /api/auth/singup
@access: puplic
*/
const singupUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(400).json({ errors: errors.array() })
  }
  const { name, email, password } = req.body
  try {
    let user = await User.findOne({ email })
    if (user) return res.status(400).json({ msg: "User Already Registered" })
    user = await new User({ name, email, password })
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    console.log(user)
    await user.save()
    const payload = {
      user: { id: user._id },
    }
    jwt.sign(
      payload,
      "dfkdjfkdjskfjsdkjfksdjfksjfkjdkfjdkjfsdkjfkdjfkdsjf",
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw new Error(err)
        res.status(201).json(token)
      }
    )
  } catch (error) {
    console.log(error)
  }
}

/*
@desc: log in user
@route? /api/auth/login
@access: puplic
*/
const longinUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    console.log(user)
    if (user && user.validatePassword(password)) {
    } else {
      return res.status(401).json({ msg: "Invalid Credentails" })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  singupUser,
  longinUser,
}
