'use strict'

const keyTokenModel = require('../models/keyTokenModel/');

class KeyTokenService {

    static createKeyToken = async ({userId, publicKey}) => {
        try {
            const publicKeyString = publicKey.toString();
            const tokens = await keyTokenModel.create({
                userId: userId,
                publicKey: publicKeyString
            });
            return tokens ? publicKey: null
        } catch (error) {
            return error
        }
    }
}

module.exports = KeyTokenService;