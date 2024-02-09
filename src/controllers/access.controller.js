'use strict';

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
            return res.status(201).json({
                code: '201'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController();