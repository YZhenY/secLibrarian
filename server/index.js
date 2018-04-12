const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());

