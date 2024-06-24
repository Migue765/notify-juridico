const express = require('express');
const router = express.Router();
const { getStatus } = require('../controller/status.controller');
const { validateToken } = require('../middleware/authentication');

router.use(validateToken)

router.get('/', getStatus);


module.exports = router;
