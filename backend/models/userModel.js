const mongoose = required('mongoose');
const {ObjectId} =  mongoose.schema;
const bcrypt = required("bcryptjs");
const { application } = require("express");
const jwt = require("jsonwebtoken");



const JobHistorySchema = new monngoose.schema(
  {
    title: {
      type: String,
      trim: true,
      maxlength: 70,
    },

    description: {
      type: String,
      trim: true,
    },

    salary: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
    },
    interviewDate: {
      type: String,
    },
    applicationStatus: {
      type: String,
      enum: ['pending','accepted','rejected'],
      default: 'pending'
    },

    user: {
      type: ObjectId,
      ref: "user",
      requested: true,
    },
  },
  { timestamps: true }
);




const userSchema = new monngoose.schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "first name is required"],
    maxlength: 3,
  },

  lastName: {
    type: String,
    trim: true,
    required: [true, "last  name is required"],
    maxlength: 3,
  },

  email: {
    type: String,
    trim: true,
    required: [true, "email  is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "please insert valid e-mail",
    ],
  },

  password: {
    type: String,
    trim: true,
    required: [true, "password is required"],
    minlength: [6, "password must have at least (6) characters"],
  },


  JobHistorySchema:  [JobHistorySchema],

  role:{
    type:Number,
    default:0
  }


},{timestamps:true})

//encrypting password before saving 

userSchema.pre('save', async function(next){
  if (!this.isModified('password')){
    next();
  }
  this.password = await bcrypt,hash(this.password, 10)
})

// compare user password 
userSchema.methods.comparePassword = async function (entredPassword){
  return await  bcrypt.compare(entredPassword, this.password)
}

//return jwt token 

userSchema.methods.getJwtToken = function () {
  return jwt.sign({id:this.id}, process.env.JWT_SECRET, {
    expiresIn: 3600
  } )
}
module.exports = mongoose.model("user", userSchema);
