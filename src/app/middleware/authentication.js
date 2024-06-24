const { httpError } = require('../tools/handleError');


const validateToken = async (req, res, next) => {
    next()
}

module.exports = {
    validateToken
}
