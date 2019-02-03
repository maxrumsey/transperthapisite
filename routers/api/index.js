const express = require('express')
const router = express.Router()
const rateLimit = require("express-rate-limit");
router.use(rateLimit({
  windowMs: 5 * 60 * 1000, // 20r per 1 minute.
  max: 100,
  message: 'Ratelimit active. Limit: 100 requests / 5 minutes.'
}))
router.use('/v1', require('./v1/index.js'))
module.exports = router;
