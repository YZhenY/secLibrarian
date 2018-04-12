const model = require('./model');

module.exports = {
    search: function (req, res) {
        model.tickerToCIK(req.body.ticker)
        .then(CIK => {
            return model.getAvailableForms(CIK);
        })
        res.end();
    }
}