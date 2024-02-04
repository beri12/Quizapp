
const user = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

exports.signup = async(res, req, next) => {
  const {email} = req.body;
  const userExist = await User.findOne({email});
  if (userExist){
    return next(ErrorResponse("E-mail already registred", 400));

  }
  try {
    const user = await user.create(req.body);
    res.status(201).json({
      sucess: true,
      user
    })
  } catch (error) {
    next(error);

  }
}

exports.signin = async (res, req, next) => {
 
  try {
     const { email, password } = req.body;
     //validation
     if (!email) {
       return next(ErrorResponse("please add an e-mail", 403));
     }
      if (!password) {
        return next(ErrorResponse("please add a password", 403));
      }

      // check user email
         const user = await User.findOne({ email });
         if (!user) {
           return next(ErrorResponse("Invalid creditinal", 400));
         }
         //check password
         const isMatched = await user.comparePssword(password);
         if (!isMatched) {
           return next(ErrorResponse("Invalid creditinal", 400));
         }

         sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
}

const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  res
  .status(codeStatus)
  .cookie('token', token, { maxAge: 60 * 60  * 1000, httpOnly:true })
  .json({ sucess: true, token, user})
}

// logout

exports.logout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: "logged out"
  })
}

// user profile

exports.userProfile = async  (req, res, next) => {

   const User= await User.findById(req.user.id ).select('password');
 
  res.status(200).json({
    success: true,
    user
  })
}