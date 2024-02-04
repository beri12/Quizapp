const mongoose = required("mongoose");

const JobTypeSchema = new monngoose.schema(
  {
    jobTypeName: {
      type: String,
      trim: true,
      required: [true, "job catagory  is required"],
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

    user: {
      type: ObjectId,
      ref: "user",
      requested: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jobType", JobTypeSchema);
