const express = require("express")
const { getSingleUser } = require("../controllers/usersController")

const router = express.Router()
router.get("/", getSingleUser)

module.exports = router
