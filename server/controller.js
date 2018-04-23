const model = require('./model');

module.exports = {
    searchTicker: function (req, res) {
        //returns all available forms for corresponding ticker
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
        //returns 100 forms of selected ticker
        model.getForm(req.body.CIK, req.body.formType, req.body.start)
        .then(formList => res.json(formList))
        .catch(err => console.log(err));
    }
}