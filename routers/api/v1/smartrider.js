const tp = require('transperthapi');
const API = new tp();

exports.check = (req, res) => {
  if (!req.query.card_number) return res.status(400).json({error: 'Card number not found in query string.'});

  try {
    API.smartRiderInfo(req.query.card_number)
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
