const express = require("express");
const app = express();
const Mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");


//import routes 

const authRoutes = require('./routes/authRoutes')
const userRoutes = require("./routes/userRoutes");
const jobTypeRoutes = require("./routes/jobsTypeRoutes");
const jobRoute= require("./routes/jobsRoutes");


const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const jobTypeRoute = require("./routes/jobsTypeRoutes");

//database connection
Mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,

  useFindAndModify: false,
})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

  //Middleware
  app.use(morgan('dev'));
  app.use(bodyParser.json({limit: "5mb"}));
  app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
  }));
  app.use(cookieParser());
  app.use(cors());

  //Routes  Middleware

 // app.get('/', (req, res) => {
   // res.send("Hello from node js");
  //})

  app.use('/api', authRoutes);
  app.use("/api", userRoutes);
   app.use("/api", jobTypeRoute);
    app.use("/api", jobRoute);




  //error middleware
  app.use(errorHandler);

  


//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
