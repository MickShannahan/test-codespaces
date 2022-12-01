const path = require('path');
let express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.use((req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.listen(port);
console.log('changed')