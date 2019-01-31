const express = require('express');
const app = express();

require('./routers/index.js')(app);
app.use('/reference/', express.static('docs'))
app.listen('8090', () => {
  console.log('Server started.')
})
