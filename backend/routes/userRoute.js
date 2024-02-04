const express = require("express");
const {allUsers, singleUser, editUser, deleteUser} = require("../controllers/userController");
const router = express.Router();

const { isAuthinticated, isAdmin } = require("../middleware/auth");

//auth routes
//api/rotes signup
//router.post("/signup", signup);

//api/rotes signin
//router.post("/signin", signin);
//api/logout
//router.get("/logout", logout);

//api/all user
router.get("/alluser", isAuthinticated, isAdmin, allUsers);

//api/ user/id
router.get("/user/:id", isAuthinticated, singleUser);


//api/ user/id
router.put("/user/edit/:id", isAuthinticated, editUser);

//api/admin/user/ideleted/d
router.delete("/admin/user/delete/:id", isAuthinticated, isAdmin,  deleteUser);

//api/admin/user/jobhistory
router.post("/user/jobhistory", isAuthinticated, isAdmin, createUserjobHistory);

module.exports = router;
