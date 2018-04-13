const RssParser = require('rss-parser');
let rssParser = new RssParser();
const {URL} = require('url');

var url = 'https://www.sec.gov/cgi-bin/srch-edgar?text=CIK%3D0000320193&start=1&count=10&output=atom'

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
    isFormAvailable: function (CIK, form) {
        return new Promise ((resolve, reject) => {
            var url = new URL("https://www.sec.gov/cgi-bin/srch-edgar")
            var params = {text:`CIK=${CIK} AND form-type="${form}"`, start:0, count:100, output:'atom', first:1996, last:2018}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            var feed = rssParser.parseURL(url.href, (err, feed) => {
                if (err) {
                    console.log(`Errored at ${form}` ,err);
                } else {
                    var count = 0;
                    feed.items.forEach(item => {
                        count++
                    });
                    resolve(count);
                }
            })
        })
    }
}


