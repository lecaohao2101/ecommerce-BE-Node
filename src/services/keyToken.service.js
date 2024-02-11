//src/services/keyToken.service.js
'use strict'

const keyTokenModel = require('../models/keyToken.model');

class KeyTokenService {

    static createKeyToken = async ({userId, publicKey, privateKey}) => {
        try {
            // console.log(`publicKey::`, publicKey)
            // const publicKeyString = publicKey.toString();
            // console.log(`publicKeyString::`, publicKeyString)
            const tokens = await keyTokenModel.create({
                userId: userId, publicKey, privateKey
                // publicKey: publicKeyString
            });
            return tokens ? tokens.publicKey: null
        } catch (error) {
            return error
        }
    }
}

module.exports = KeyTokenService;