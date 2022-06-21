const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
/*  @desc: create new user 
    @route: /api/auth/singup
    @access: puplic               */
const singupUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(400).json({ errors: errors.array() })
  }
  const { name, email, password } = req.body
  try {
    let user = await User.findOne({ email })
    if (user)
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] })
    user = await new User({ name, email, password, isAdmin: true })
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    console.log(user)
    await user.save()
    const payload = {
      user: { id: user._id },
    }
    jwt.sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: 3600000 },
      (err, token) => {
        if (err) throw new Error(err)
        res.status(201).json(token)
      }
    )
  } catch (error) {
    res.json({ errors: [{ msg: "Server Error " }] })
  }
}

/*
    @desc: log in user
    @route? /api/auth/login
    @access: puplic
    */
const longinUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(400).json({ errors: errors.array() })
  }
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    const isMatched = await bcrypt.compare(password, user.password)
    if (user && isMatched) {
      const payload = { user: { id: user._id } }
      jwt.sign(
        payload,
        process.env.JWT_KEY,
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) {
            console.log(err)
            throw new Error(err)
          }
          res.status(200).json(token)
        }
      )
    } else {
      return res.status(401).json({ errors: [{ msg: "Invalid Credentials" }] })
    }
  } catch (error) {
    res.json({ errors: { msg: "Server Error" } })
  }
}

module.exports = {
  singupUser,
  longinUser,
}
