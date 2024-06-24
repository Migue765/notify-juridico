const { httpError } = require('../tools/handleError');

const getStatus = async(req, res) => {
    res.status(200).send({"message": "sevicio en linea"})
}

module.exports = { getStatus };
