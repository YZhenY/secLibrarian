const RssParser = require('rss-parser');
let rssParser = new RssParser();
const fetch = require('node-fetch');
const cheerio = require('cheerio');

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

var url = 'https://www.sec.gov/cgi-bin/srch-edgar?text=COMPANY-NAME%3DFORD&start=1&count=200&output=atom'

let feed = rssParser.parseURL(url, function(err, feed)  {
    console.log(feed.title);
    var count = 0;
    feed.items.forEach(item => {
        console.log(count++);
        if (count === 1) {
            console.log(item);
        }
    });
});

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
        return new Promise ((resolve, reject) => {

        })
    }
}