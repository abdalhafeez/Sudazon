const express = require("express")
const router = express.Router()
const { check } = require("express-validator")

const { singupUser, longinUser } = require("../controllers/authController.js")
router.post(
  "/singup",
  [
    check("name", "please enter your userName").not().isEmpty(),
    check("email", "please enter your email").isEmail(),
    check("password", "please enter a longer password").isLength({ min: 6 }),
  ],
  singupUser
)
router.post(
  "/login",
  [
    check("email", "please enter your email").isEmail(),
    check("password", "please enter a longer password").isLength({ min: 6 }),
  ],
  longinUser
)

module.exports = router









