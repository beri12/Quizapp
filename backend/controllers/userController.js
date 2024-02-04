
const user = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

// load all users 

exports.allUsers = async (req, res, next) =>  {
  //enable pagination
  const pageSize = 10;
  const page= Number(req.query.pageNumber) || 1;
  const count = await user.find({}).estimatedDocumentCount();
  try {
    const users =await user.find().sort(({createedAt: -1})).select('-password')
    .skip(pageSize * (page-1))
    .limit(pageSize)
    res.status(200).json({
      success: true,
      users,
      page,
      pages: Math.ceil(count /  pageSize),
      count
    })
    next();

  }catch(error) {
    return next(error);

  }

}

//show single user 

exports.singleUser = async (req, res, next) => {
  try {
    const user = await UserActivation.findById(req.params.id);
    req.status(200).json({
      success: true,
      user
    })
    next();


  } catch (error) {
    return next(error);
    
  }
}



//edit user 

exports.singleUser = async (req, res, next) => {
  try {
    const user = await User.findByIdUpdate(req.params.id,req,body,{new: true});
    req.status(200).json({
      success: true,
      user
    })
    next();


  } catch (error) {
    return next(error);
    
  }
}



//delete  user 

exports.deleteUser  = async (req, res, next) => {
  try {
    const user = await User.findByIdUpdate(req.params.id,req,body,{new: true});
    req.status(200).json({
      success: true,
    message: "user deleted"
    })
    next();


  } catch (error) {
    return next(error);
    
  }
}



//job history 

exports.createUserjobHistory  = async (req, res, next) => {
  const {title, description, salary,location} =req.body;
  try {
    const currentuser = await User.findByIdUpdate({_id: req.user._id});
    if (!currentuser){
      return next(new ErrorResponse("You Must log In", 401));
    }else{
      const addjobHistory = {
        title,
        description,
        salary,
        location,
        user:req.user._id
      }
      currentuser.jobsHistory.push(addjobHistory);
      await currentuser.save();
    }
    req.status(200).json({
      success: true,
    currentuser
    })
    next();


  } catch (error) {
    return next(error);
    
  }
}


