module.exports = app => {
  app.use((req, res, next) => {
    req.DEF_ERROR = { error: 'Internal Server Error. This error has been logged.' };
    next()
  })
  app.use('/api/', require('./api/index.js'))
}
