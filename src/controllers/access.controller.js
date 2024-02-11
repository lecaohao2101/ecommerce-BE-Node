'use strict';

const {} = require("jsonwebtoken");
const AccessService = require("../services/access.service");

class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log(`[P]::signUp::`, req.body)
            /*
            200 OK
            201 Created
            202 Accepted
            400 Bad Request
            401 Unauthorized
            500 Internal Server Error
            */
            return res.status(201).json(await AccessService.signUp(req.body))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController();