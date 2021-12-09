const express = require('express');

const index = require('./index');
const form = require('./form');
const api = express.Router();

api.use('/form', form);
api.use('/index', index);

module.exports = api;