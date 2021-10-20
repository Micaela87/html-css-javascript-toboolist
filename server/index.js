const express = require('express');

const bodyParser = express.json();
const errorhandler = require('errorhandler');
const morgan = require('morgan');

const form = require('./form');
const app = express();

app.use(bodyParser);
app.use(errorhandler());
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true,
    type: "application/json"
}));

app.use('/form', form);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
});

module.exports = app;