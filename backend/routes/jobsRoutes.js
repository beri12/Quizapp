const express = require("express");

const router = express.Router();

const { isAuthinticated, isAdmin } = require("../middleware/auth");
const { createjob, singleJob } = require("../controllers/jobController");
const { updateJob, showJobs } = require("../models/jobController");

//job types routes

//api/job/create

router.post("job/create", isAuthinticated,isAdmin, createJob);

//api/job/id

router.get("job/id", singleJob);
//api/job/id/update/job_id

router.put("job/update/:job_id",isAuthinticated, updateJob);

//api/job/id/update/show

router.put("jobs/show", showJobs);
module.exports = router;
