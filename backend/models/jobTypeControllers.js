const  jobType = require('../models/jobTypeModel');
const ErrorResponse = require("../utils/errorResponse");

//create job catagory 

exports.createjobType = async(req, res, next) => {
  try {
    const jobT = await jobType.create({
      jobTypeName: req.body.jobTypeName,
      user: req.user.id
    });
    res.status(201).json({
      success: true,
      jobT

    })
  } catch(error) {
    next(error);

  }
}

//all job catagory 

exports.alljobType = async(req, res, next) => {
  try {
    const jobT = await jobType.find();
    res.status(201).json({
      success: true,
      jobT

    })
      
  
   
  } catch(error) {
    next(error);

  }
}

//update job Type

exports.updateJobType = async(req, res, next) => {
  try {
    const jobT = await jobType.findByIdAndUpdate(req.params.type_id.body, {new: true});
    res.status(200).json({
      success: true,
      jobT

    })
      
  
   
  } catch(error) {
    next(error);

  }
}

//delete  job Type

exports.deleteJobType = async(req, res, next) => {
  try {
    const jobT = await jobType.findByIdAndremove(req.params.type_id);
    res.status(200).json({
      success: true,
      message: "Job type deleted"

    })
      
  
   
  } catch(error) {
    next(new ErrorResponse("server errpr", 500));

  }
}