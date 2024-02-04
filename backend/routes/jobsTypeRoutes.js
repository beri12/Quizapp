const express = require("express");

const router = express.Router();

const { createjobType} = require('../controllers/jobTypeController')
const { isAuthinticated, isAdmin } = require("../middleware/auth");
const {createjobType,  alljobType, updateJobType } = require("../models/jobTypeControllers");

//user routes

//api/alluser/

router.post("type/create", isAuthinticated, isAdmin,  createjobType);
//api/type/jobs

router.get("type/jobs", allJobsType);

//api/type/update/type_id

router.post("type/update/type_id", isAuthinticated, isAdmin, updateJobType);

//api/type/delete/type_id

router.post("type/selete/type_id", isAuthinticated, isAdmin, deleteJobType);








module.exports = router;