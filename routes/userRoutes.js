const express = require("express")
const router = express.Router()
const {registerUser, loginUser, dataUser} = require ("../controllers/userController")
const {protect} = require ("../middleware/authMiddleware")

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/data", dataUser)

module.exports = router