const express = require('express');

const bodyParser = express.json();
const errorhandler = require('errorhandler');
const morgan = require('morgan');

const form = require('./form');
const api = express.Router();

api.use(bodyParser);
api.use(errorhandler());
api.use(morgan('dev'));
api.use(express.urlencoded({
    extended: true,
}));

api.use('/form', form);

module.exports = api;