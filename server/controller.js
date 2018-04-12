const model = require('./model.js');

module.exports = {
    search: function (req, res) {
        model.tickerToCIK(req.body.ticker);
        // model.getAvailableForms(req.body.ticker);
        res.end();
    }
}