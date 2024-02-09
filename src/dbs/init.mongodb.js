"use strict";

const mongoose = require("mongoose");
const {countConnect} = require('../helper/check.connect')

const connectString =
  "mongodb+srv://lecaohao2101:ZHUJoWvxBFp2WUYU@cluster0.hugbt2f.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(connectString)
//   .then((_) => console.log("Connected Mongodb Success"))
//   .catch((err) => console.log("Error Connect"));

  class Database {
    constructor() {
        this.connect()

    }

//connect
connect(type = 'mongodb'){
    if(1 === 1) {
        mongoose.set('debug', true);
        mongoose.set('debug', {color: true});
    }

    mongoose.connect(connectString, {
        maxPoolSize:50
    }).then( _ => console.log("Connect Mongodb Success PRO", countConnect())).catch(err => console.log("Error Connect"))
}
static getInstance() {
    if(!Database.instance) {
        Database.instance = new Database()
    }
    return Database.instance
}
}

