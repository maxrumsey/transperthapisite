const routers = {
  times: require('./times.js'),
  smartrider: require('./smartrider.js')
}
const express = require('express')
const router = express.Router()
router.get('/smartrider', routers.smartrider.check)
router.get('/busTimes', routers.times.bus)
router.get('/ferryTimes', routers.times.ferry)
router.get('/trainTimes', routers.times.train)

module.exports = router;
