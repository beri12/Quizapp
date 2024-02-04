const mongoose = require("mongoose");
const {ObjectId} =  mongoose.schema;


const JobSchema = new monngoose.schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "title is required"],
      maxlength: 70,
    },

    description: {
      type: String,
      trim: true,
      required: [true, "Description  is required"],
    },

    salary: {
      type: String,
      trim: true,
      required: [true, "salary  is required"],
    },

    location: {
      type: String,
    },

    available: {
      type: Boolean,
      default: true,
    },

    jobType: {
      type: ObjectId,
      ref: "jobType",
      requested: true,
    },

    user: {
      type: ObjectId,
      ref: "user",
      requested: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("job", JobSchema);