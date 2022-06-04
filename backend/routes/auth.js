const express = require("express")
const    router = express.Router()
const {
singupUser,
longinUser
} = require("../controllers/authController.js")
router.post("/singup", singupUser)
router.get("/login", longinUser)

module.exports = router









