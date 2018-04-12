const RssParser = require('rss-parser');
let rssParser = new RssParser();
const fetch = require('node-fetch');


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

var url = 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000320193&CIK=0000320193&type=&dateb=&owner=exclude&start=0&count=40&output=atom'

let feed = rssParser.parseURL(url, function(err, feed)  {
    console.log(feed.title);
    
    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
    });
});
