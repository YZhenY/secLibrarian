const model = require('./model');

module.exports = {
    searchTicker: function (req, res) {
        var data = { ticker: req.body.ticker};
        model.tickerToCIK(req.body.ticker)
        .then(CIK => {
            data['CIK'] = CIK
            return model.getAvailableForms(CIK);
        })
        .then(availableForms => {
            data['availForms'] = availableForms;
            res.json(data)
        })  
    },
    searchForm: function (req, res) {
        model.getForm(req.body.CIK, req.body.formType)
        .then(formList => res.json(formList))
        .catch(err => console.log(err));
    }
}