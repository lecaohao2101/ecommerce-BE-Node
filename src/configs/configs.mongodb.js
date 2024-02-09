'use strict';

// level 0
// const config = {
//     app:{
//         port: 3000
//     },
//     db:{
//         host: 'localhost',
//         port: 27017,
//         name: 'db'
//     }
// }

// level 1
// const dev = {
//     app:{
//         port: 3000
//     },
//     db:{
//         host: 'localhost',
//         port: 27017,
//         name: 'dbDev'
//     }
// }

// const product = {
//     app:{
//         port: 3000
//     },
//     db:{
//         host: 'localhost',
//         port: 27017,
//         name: 'dbProduct'
//     }
// }

// level 2
const dev = {
    app: {
        port: process.DEV_APP_PORT || 3000
    },
    db:{
        host: process.DEV_DB_HOST || 'localhost',
        port: process.DEV_DB_PORT || 27017,
        name: process.DEV_DB_NAME  || 'shopDev',
    }
}

const product = {
    app: {
        port: process.PRODUCT_APP_PORT || 3000
        },
    db:{
        host: process.PRODUCT_DB_HOST || 'localhost',
        port: process.PRODUCT_DB_PORT || 27017,
        name: process.PRODUCT_DB_NAME || 'shopPro',
    }
}

// const config = {dev, product}
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];