const express = require("express")
const router = express.Router()
const {registerUser, loginUser, dataUser} = require ("../controllers/userController")

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/data", dataUser)

module.exports = router