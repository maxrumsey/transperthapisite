const tp = require('transperthapi');
const API = new tp();
const directions = [
  'to Perth',
  'from Perth'
]

exports.bus = (req, res) => {
  if (!req.query.stop_number) return res.status(400).json({msg: 'Bus stop number not found.'});

  try {
    API.busStopTimes(req.query.stop_number)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(e => {
        console.error(e)
        res.status(500).json(req.DEF_ERROR)
      })
  } catch (e) {
    return res.status(400).json({ msg: e.message })
  }
}
exports.ferry = (req, res) => {
  if (!req.query.stop_number) return res.status(400).json({msg: 'Ferry stop number not found.'});

  try {
    API.ferryTimes(req.query.stop_number)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(e => {
        console.error(e)
        res.status(500).json(req.DEF_ERROR)
      })
  } catch (e) {
    return res.status(400).json({ msg: e.message })
  }
}
exports.train = (req, res) => {
  if (!req.query.direction) return res.json({msg: 'Train direction not found.'});
  if (!req.query.trainline) return res.json({msg: 'Trainline not found.'});
  if (!req.query.station) return res.json({msg: 'Train station not found.'});
  if (!directions.includes(req.query.direction)) return res.json({msg: 'Train direction is not either `to Perth` or `from Perth`'});
  try {
    API.trainTimes({
      direction: req.query.direction,
      trainline: req.query.trainline,
      station: req.query.station
    })
      .then(data => {
        for (var i = 0; i < data.trains.length; i++) {
          data.trains[i].stopping_pattern.replace(/ ./g, '.')
        }
        res.json(data)
      })
      .catch(e => {
        console.error(e)
        res.json(req.DEF_ERROR)
      })
  } catch (e) {
    return res.json({ msg: e.message })
  }
}
