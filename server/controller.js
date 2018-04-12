const model = require('./model.js');

module.exports = {
    search: function (req, res) {
        model.getAvailableForms(req.body.ticker);
        res.end();
    }
}