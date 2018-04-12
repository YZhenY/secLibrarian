const RssParser = require('rss-parser');
let rssParser = new RssParser();

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
    isFormAvailable: function (CIK, form) {
        return new Promise ((resolve, reject) => {
            
        })
    }
}

