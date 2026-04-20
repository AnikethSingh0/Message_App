const express = require('express');

const router = express.Router();
const v1Api = require('./v1/tweet-routes.js');

router.use('/v1', v1Api);
module.exports = router;