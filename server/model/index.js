
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');
const rssFeedHelper = require('./rssFeedHelper.js');

//get formList
var formList = fs.readFileSync('formList.json', 'utf-8');
formList = JSON.parse(formList);

// var url = "https://sec.gov/";
// fetch(url, {
//     headers: {
//     },
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer', // *client, no-referrer
// })
// .then(response => response.text())
// .then( result => {
//     console.log(result);
// })
// .catch(err => console.log(err));



module.exports = {
    tickerToCIK(ticker) {
        //gets CIK through calling search and getting respective HREF
        return new Promise ((resolve, reject) => {
            var url = `https://www.sec.gov/cgi-bin/browse-edgar?CIK=${ticker}&owner=exclude&action=getcompany&Find=Search`
            fetch(url)
            .then(response => response.text())
            .then(result => {
                var $ = cheerio.load(result);
                var href = $('.companyName').children()[1].attribs['href'];
                resolve(href.match(/CIK=[0-9]*/)[0].slice(4));
            })
            .catch(err => reject(err));
        })
    },
    getAvailableForms: function (CIK) {
        console.log(`Getting available forms for ${CIK}`);
        return new Promise ((resolve, reject) => {
            var promiseArr = [];
            for (var i = 0; i < formList.length; i ++) {
                promiseArr.push(rssFeedHelper.isFormAvailableBrowse(CIK, formList[i]));
            }
            Promise.all(promiseArr).then(resultArr => {
                var resultObj = {}
                for (var i = 0; i < resultArr.length; i++) {
                    resultObj[formList[i]] = resultArr[i];
                }
                console.log(resultObj);
                resolve(resultObj);
            })
        })
    },
    getAvailableForms2: function (CIK) {
        console.log('Getting all forms available for ', CIK);
        return new Promise ((resolve, reject) => {
            var resultObj = {};

            rssFeedHelper.getAllForms(CIK).then(forms => {
                console.log(forms.length);
            })
        })
    },
    getForm: function (CIK, form, start) {
        return new Promise ((resolve, reject) => {
            rssFeedHelper.getForm(CIK, form, start)
            .then(forms => resolve(forms))
            .catch(err => console.log(err));
        })
    }
}