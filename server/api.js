const express = require('express');

const router = express.Router();

router.use('/lessons', require('./lessons'));

module.exports = router;
