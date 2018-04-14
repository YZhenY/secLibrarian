const RssParser = require('rss-parser');
let rssParser = new RssParser();
const {URL} = require('url');

module.exports = {
    isFormAvailableBrowse: function (CIK, form) {
        return new Promise ((resolve, reject) => {
            var url = new URL("https://www.sec.gov/cgi-bin/browse-edgar")
            var params = {CIK:CIK, type:form, start:0, count:100, output:'atom', action:'getcompany'}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            var feed = rssParser.parseURL(url.href, (err, feed) => {
                if (err) {
                    console.log(`Errored at ${form} \n href:${url.href}  \n`);
                    resolve(0)
                } else {
                    var count = 0;
                    feed.items.forEach(item => {
                        count++
                    });
                    resolve(count);
                }
            })
        })
    },
    getForm: function (CIK, form, start) {
        return new Promise ((resolve, reject) => {
            var url = new URL("https://www.sec.gov/cgi-bin/browse-edgar")
            var params = {CIK:CIK, type:form, start:start, count:100, output:'atom', action:'getcompany'}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            var feed = rssParser.parseURL(url.href, (err, feed) => {
                if (err) {
                    console.log(`Errored at ${form} \n href:${url.href}  \n`);
                    resolve(0)
                } else {
                    resolve(feed.items);
                }
            })
        })
    },
    isFormAvailableSearch: function (CIK, form) {
        return new Promise ((resolve, reject) => {
            var url = new URL("https://www.sec.gov/cgi-bin/srch-edgar")
            var params = {text:`CIK=${CIK} AND form-type="${form}"*`, start:0, count:50, output:'atom', first:1996, last:2018}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            var feed = rssParser.parseURL(url.href, (err, feed) => {
                if (err) {
                    console.log(`Errored at ${form} \n href:${url.href}  \n`);
                    resolve(0)
                } else {
                    var count = 0;
                    feed.items.forEach(item => {
                        count++
                    });
                    resolve(count);
                }
            })
        })
    },
    get100FormsSearch: function (CIK, start) {
        //limited due to API
        return new Promise ((resolve, reject) => {
            var url = new URL("https://www.sec.gov/cgi-bin/srch-edgar")
            var params = {text:`CIK=${CIK}`, start:start, count:100, output:'atom', first:1996, last:2018}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            console.log(url.href)
            var feed = rssParser.parseURL(url.href, (err, feed) => {
                if (err) {
                    console.log(`Errored at ${form}` ,err);
                } else {
                    resolve(feed.items);
                }
            })
        })
    },
    getAllFormsSearch: function (CIK) {
        return new Promise((resolve, reject) => {
            var position =  0;
            var allForms = [] 
            var recurse = function(CIK, resolve, position) {
                get100FormsSearch(CIK, position)
                .then(forms => {
                    position += 100;
                    allForms.concat(forms);
                    if (forms.length < 100) {
                        console.log('resolved');
                        resolve(allForms)
                    } else {
                        recurse(CIK, resolve, position)
                    }
                })
            }
            recurse(CIK, resolve, position);
        })
    }
}


var get100FormsSearch = function (CIK, start) {
    //limited due to API
    return new Promise ((resolve, reject) => {
        var url = new URL("https://www.sec.gov/cgi-bin/srch-edgar")
        var params = {text:`CIK=${CIK}`, start:start, count:100, output:'atom', first:1996, last:2018}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        console.log(url.href)
        var feed = rssParser.parseURL(url.href, (err, feed) => {
            if (err) {
                console.log(`Errored at ${form}` ,err);
            } else {
                resolve(feed.items);
            }
        })
    })
}