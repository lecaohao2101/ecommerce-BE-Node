require("dotenv").config;
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init db
require("./dbs/init.mongodb");

// const { checkOverload } = require("./helper/check.connect");
// checkOverload();

// init router
// app.get("/", (req, res, next) => {
//   const strCompress = "Hello World";

//   return res.status(200).json({
//     message: "Welcome to my API",
//     metadata: strCompress.repeat(1000000),
//   });
// });
app.use("/", require("./routes"));

// handling error

module.exports = app;
