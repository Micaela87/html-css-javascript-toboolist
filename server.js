const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const path = require('path');

const api = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api', api);

app.use(errorhandler());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

module.exports = app;