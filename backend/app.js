const express = require("express");
const app = express();
const cors = require("cors");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");



app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
};
// Allow CORS for Development Only
if(process.env.NODE_ENV === 'development') {
  const cors = require ('cors');
  app.use(cors({origin: 'http://localhost:5173'}));
}

//import Routes
const user = require("./controller/user");

app.use("/api/v2/user", user);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;