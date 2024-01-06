const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');




// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// init db

// init router
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "Welcome to my API",
        metadata: strCompress.repeat(10000)
    })
})
// handling error

module.exports = app;
