module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })
  app.get('/calc/smartrider', (req, res) => {
    res.render('calc/smartrider')
  })
  app.get('/train', (req, res) => {
    res.render('calc/train')
  })
  app.get('/calc/ferry', (req, res) => {
    res.render('calc/ferry')
  })
  app.get('/calc/bus', (req, res) => {
    res.render('calc/bus')
  })
  app.get('/calc/', (req, res) => {
    res.redirect('/')
  })
}
