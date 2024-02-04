const express = require("express");
const { signup, signin, logout, userProfile } = require("../controllers/authController");
const router = express.Router();
const {signup, signin, logout, userProfile} = require('../controllers/authController');
const { isAuthinticated } = require("../middleware/auth");

//auth routes
//api/rotes signup
router.post("/signup", signup);

//api/rotes signin
router.post("/signin", signin);
//api/logout
router.get("/logout", logout);


//api/me
router.get("/me",isAuthinticated, userProfile);
module.exports = router;
