const express = require('express');
const app = express();

app.enable('trust proxy');
app.set('view engine', 'ejs');
app.use('/reference/', express.static('docs'))
app.use('/static/', express.static('static'))
app.use(express.static('topstatic'))

require('./routers/index.js')(app);

app.listen(process.env.PORT || 8090, () => {
  console.log('Server started.')
})
