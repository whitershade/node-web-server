const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('server is up on localhost:3000');
});
