//src/model/keyToken.model.js
"use strict";

//key !dmbg install by Mongo Snippet for Node-js
const { model  , Schema} = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Key";
const COLLECTION_NAME = "Keys";

// Declare the Schema of the Mongo model
const keyTokenSchema = new Schema(
    {
        name: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Shop'
        },
        privateKey: {
            type: String,
            required: true,
        },
        publicKey: {
            type: String,
            required: true,
            trim: true,
        },
        refreshToken: {
            type: String,
            default: [],
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

//Export the model
module.exports = model(DOCUMENT_NAME, keyTokenSchema);

