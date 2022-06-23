const express = require("express");
const router = express.Router();
const { getSingleUser } = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/me", authMiddleware, getSingleUser);

module.exports = router;
