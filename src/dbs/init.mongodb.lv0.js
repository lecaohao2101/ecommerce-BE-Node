"use strict";

const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://lecaohao2101:ZHUJoWvxBFp2WUYU@cluster0.hugbt2f.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectString)
  .then((_) => console.log("Connected Mongodb Success"))
  .catch((err) => console.log("Error Connect"));

//dev
if (1 === 0) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}
module.exports = mongoose;
