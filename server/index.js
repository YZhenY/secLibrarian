const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const controller = require('./controller.js');

const app = express();
const port = process.env.PORT || 5000;


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/../build'));
}

app.use('/search/ticker', controller.searchTicker);

app.use('/search/form', controller.searchForm);

app.listen(port, () => console.log(`Listening on port ${port}`));
