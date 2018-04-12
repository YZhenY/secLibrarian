const cheerio = require('cheerio');

var $ = cheerio.load(`

<!DOCTYPE html>
<html lang="en" dir="ltr" prefix="content: http://purl.org/rss/1.0/modules/content/  dc: http://purl.org/dc/terms/  foaf: http://xmlns.com/foaf/0.1/  og: http://ogp.me/ns#  rdfs: http://www.w3.org/2000/01/rdf-schema#  schema: http://schema.org/  sioc: http://rdfs.org/sioc/ns#  sioct: http://rdfs.org/sioc/types#  skos: http://www.w3.org/2004/02/skos/core#  xsd: http://www.w3.org/2001/XMLSchema# ">
  <head>
    <meta charset="utf-8" /><script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[f.now()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e("handle"),a=e(2),u=e(3),c=e("ee").get("tracer"),f=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,t){s[t]=o(d+t,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,o="function"==typeof t;return i(l+"tracer",[f.now(),e,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return t.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],n),e}finally{c.emit("fn-end",[f.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=o(l+t)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,f.now()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r="",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],4:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o,i){if(!d.aborted||i){e&&e(n,r,o);for(var a=t(o),u=m(n),c=u.length,f=0;f<c;f++)u[f].apply(a,r);var p=s[y[n]];return p&&p.push([b,n,r,a]),a}}function l(e,t){v[e]=m(e).concat(t)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(n)}function g(e,t){f(e,function(e,n){t=t||"feature",y[n]=t,t in s||(s[t]=[])})}var v={},y={},b={on:l,emit:n,get:w,listeners:m,context:t,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",c=e("gos"),f=e(2),s={},p={},d=t.exports=o();d.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e("ee").get("handle");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=h.info=NREUM.info,t=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return s.abort();f(y,function(t,n){e[t]||(e[t]=n)}),c("mark",["onload",a()+h.offset],null,"api");var n=d.createElement("script");n.src="https://"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()+h.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),c=e("handle"),f=e(2),s=e("ee"),p=window,d=p.document,l="addEventListener",m="attachEvent",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1071.min.js"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=t.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l]("DOMContentLoaded",i,!1),p[l]("load",r,!1)):(d[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",u],null,"api");var x=0,E=e(4)},{}]},{},["loader"]);</script>
<meta name="title" content="SEC.gov | Forms List" />
<meta name="Generator" content="Drupal 8 (https://www.drupal.org)" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="shortcut icon" href="/themes/custom/secgov/favicon.ico" type="image/vnd.microsoft.icon" />
<script src="/files/google_tag/google_tag.script.js?p6sa8a"></script>

    <meta name="origin" content="Drupal" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" CONTENT="no-cache">
    <meta http-equiv="Expires" CONTENT="-1">
    <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=3.0" />
    <title>SEC.gov | Forms List</title>
    <script>window.env = "production";</script> 
    <link rel="stylesheet" href="/files/css/css_hUS268B-QOZQQnDa6g7WzDAv0sZlXyZ3B8d9aUmydmc.css?p6sa8a" media="all" />
<link rel="stylesheet" href="/files/css/css_0lTS_WvmKBwRB58YEZiR2aYlSyVAcNxTwVn_B5BPC5g.css?p6sa8a" media="all" />

    
<!--[if lte IE 8]>
<script src="/files/js/js_VtafjXmRvoUgAzqzYTA3Wrjkx9wcWhjP0G4ZnnqRamA.js"></script>
<![endif]-->
<script src="/files/js/js_M8bMkMWYaa6GjkCVIa45Had-OgBsWiXUcfHbMCa0eN8.js"></script>

  </head>
  <body class="default-view path-forms">

    <a href="#main-content" class="visually-hidden focusable" tabindex="1">
      Skip to main content
    </a>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD3BKV" height="0" width="0"></iframe></noscript>
    


<container>
<div id="page-wrapper">
  <div id="page" >

    <section role="header">
      <div class="header-content">
        <div id="global-header">
    
<div id="block-digitalgovsearch" class="block global-header-digitalgov-search">
  
    
      
            <div class="body"><div class="hide-for-small" id="global-search">
<form accept-charset="UTF-8" action="//secsearch.sec.gov/search" class="clearfix" id="global-search-form" method="get" name="form_iQueryForm">
<fieldset><legend></legend> <label class="overlabel" for="global-search-box" style="visibility: visible;">Search SEC.gov</label> <input name="utf8" type="hidden" value="?" /> <input class="affiliate" name="affiliate" type="hidden" value="secsearch" /> <input aria-autocomplete="list" aria-haspopup="true" autocomplete="off" class="usagov-search-autocomplete ui-autocomplete-input" id="global-search-box" name="query" role="textbox" tabindex="4" title="Search for" type="text" /> <span aria-hidden="true" class="button-label fa fa-search"> </span><input class="global-search-button" tabindex="5" title="Go" type="submit" value="" /></fieldset>
</form>

<p class="options"><a class="option-link" href="http://www.sec.gov/edgar/searchedgar/companysearch.html" tabindex="6">Company Filings</a> | <a class="option-link" href="http://www.sec.gov/search/search.htm" tabindex="7">More Search Options</a></p>
</div>
</div>
      
  </div>
<div id="block-secgov-branding" class="site-branding block system_branding_block">
  
    
  
    <div class="banner-seal">
    <a href="/" title="SEC Emblem" rel="home" tabindex="2">
      <img src="/files/sec-logo.png" alt="SEC Emblem" />
    </a>
  </div>
  
    <div class="banner-org-name">
      <a href="/" title="U.S. Securities and Exchange Commission" rel="home" tabindex="3">U.S. Securities and Exchange Commission</a>
  </div>
   

</div>

  </div>

      </div>
      <div id="global-navigation">
          <div class="navigation-wrapper">
    <div id="block-secgov-main-menu" class="block main">
  
    
    
        <div class="menu-toggle-target menu-toggle-target-show" id="show-block-secgov-main-menu"></div>
    <div class="menu-toggle-target" id="hide-block-secgov-main-menu"></div>

    <a class="menu-toggle" href="#show-block-secgov-main-menu">Show &mdash; Main navigation</a>

    <a class="menu-toggle menu-toggle--hide" href="#hide-block-secgov-main-menu">Hide &mdash; Main navigation</a>
    
              <ul id="main-menu">
                          <li >
                <a href="/about.shtml" title="About">About</a>
                                        <ul>
                          <li>
                <a href="/Article/whatwedo.html" title="What We Do">What We Do</a>
                      </li>
                    <li>
                <a href="/Article/about-commissioners.html" title="Commissioners">Commissioners</a>
                      </li>
                    <li>
                <a href="/answers/about-lawsshtml.html" title="Securities Laws">Securities Laws</a>
                      </li>
                    <li>
                <a href="/about/sec-docket.shtml" title="SEC Docket">SEC Docket</a>
                      </li>
                    <li>
                <a href="/reports" title="Reports and Publications">Reports and Publications</a>
                      </li>
                    <li>
                <a href="/careers" title="Careers">Careers</a>
                      </li>
                    <li>
                <a href="/contact-information/sec-directory" title="Contact">Contact</a>
                      </li>
        </ul>
  
              </li>
                    <li >
                <a href="/divisions.shtml" title="Divisions &amp; Offices">Divisions &amp; Offices</a>
                                        <ul>
                          <li>
                <a href="/divisions/corpfin.shtml" title="Corporation Finance">Corporation Finance</a>
                      </li>
                    <li>
                <a href="/divisions/enforce.shtml" title="Enforcement">Enforcement</a>
                      </li>
                    <li>
                <a href="/investment" title="Investment Management">Investment Management</a>
                      </li>
                    <li>
                <a href="/divisions/riskfin.shtml" title="Economic and Risk Analysis">Economic and Risk Analysis</a>
                      </li>
                    <li>
                <a href="/divisions/marketreg.shtml" title="Trading and Markets">Trading and Markets</a>
                      </li>
                    <li>
                <a href="/alj" title="Office of Administrative Law Judges">Office of Administrative Law Judges</a>
                      </li>
                    <li>
                <a href="/about/offices/ocie.shtml" title="Office of Compliance Inspections and Examinations">Office of Compliance Inspections and Examinations</a>
                      </li>
                    <li>
                <a href="/page/sec-regional-offices" title="Regional Offices">Regional Offices</a>
                      </li>
                    <li>
                <a href="/divisions.shtml" title="All Divisions and Offices">All Divisions and Offices</a>
                      </li>
        </ul>
  
              </li>
                    <li >
                <a href="https://www.sec.gov/litigation.shtml" title="Enforcement">Enforcement</a>
                                        <ul>
                          <li>
                <a href="/litigation/litreleases.shtml" title="Litigation Releases">Litigation Releases</a>
                      </li>
                    <li>
                <a href="/litigation/admin.shtml" title="Administrative Proceedings">Administrative Proceedings</a>
                      </li>
                    <li>
                <a href="/litigation/opinions.shtml" title="Opinions and Adjudicatory Orders">Opinions and Adjudicatory Orders</a>
                      </li>
                    <li>
                <a href="/divisions/enforce/friactions.shtml" title="Accounting and Auditing">Accounting and Auditing</a>
                      </li>
                    <li>
                <a href="/litigation/suspensions.shtml" title="Trading Suspensions">Trading Suspensions</a>
                      </li>
                    <li>
                <a href="/news/newsroom/howinvestigationswork.html" title="How Investigations Work">How Investigations Work</a>
                      </li>
        </ul>
  
              </li>
                    <li >
                <a href="/rules.shtml" title="Regulation">Regulation</a>
                                        <ul>
                          <li>
                <a href="/rules/rulemaking-index.shtml" title="Rulemaking Index">Rulemaking Index</a>
                      </li>
                    <li>
                <a href="/rules/proposed.shtml" title="Proposed Rules">Proposed Rules</a>
                      </li>
                    <li>
                <a href="/rules/final.shtml" title="Final Rules">Final Rules</a>
                      </li>
                    <li>
                <a href="/rules/interim-final-temp.shtml" title="Interim Final Temporary Rules">Interim Final Temporary Rules</a>
                      </li>
                    <li>
                <a href="/rules/other.shtml" title="Other Orders and Notices">Other Orders and Notices</a>
                      </li>
                    <li>
                <a href="/rules/sro.shtml" title="Self-Regulatory Organizations">Self-Regulatory Organizations</a>
                      </li>
                    <li>
                <a href="/interps.shtml" title="Staff Interpretations">Staff Interpretations</a>
                      </li>
        </ul>
  
              </li>
                    <li >
                <a href="/investor" title="Education">Education</a>
                                        <ul>
                          <li>
                <a href="https://investor.gov/" title="Investor.gov">Investor.gov</a>
                      </li>
                    <li>
                <a href="/reportspubs/investor-publications/investor-brokershtm.html" title="Check Out a Broker or Adviser">Check Out a Broker or Adviser</a>
                      </li>
                    <li>
                <a href="/investor/alerts" title="Investor Alerts and Bulletins">Investor Alerts and Bulletins</a>
                      </li>
                    <li>
                <a href="/answers.shtml" title="Fast Answers">Fast Answers</a>
                      </li>
                    <li>
                <a href="/complaint/select.shtml" title="File a Tip or Complaint">File a Tip or Complaint</a>
                      </li>
                    <li>
                <a href="/investor/pubs.shtml" title="Publications">Publications</a>
                      </li>
        </ul>
  
              </li>
                    <li >
                <a href="/edgar.shtml" title="Filings">Filings</a>
                                        <ul>
                          <li>
                <a href="/edgar/searchedgar/webusers.htm" title="EDGAR Search Tools">EDGAR Search Tools</a>
                      </li>
                    <li>
                <a href="/edgar/searchedgar/companysearch.html" title="Company Filing Search">Company Filing Search</a>
                      </li>
                    <li>
                <a href="/oiea/Article/edgarguide.html" title="How to Search EDGAR">How to Search EDGAR</a>
                      </li>
                    <li>
                <a href="/fast-answers/answerspublicdocshtm.html" title="Requesting Public Documents">Requesting Public Documents</a>
                      </li>
                    <li>
                <a href="/forms" title="Forms List">Forms List</a>
                      </li>
                    <li>
                <a href="/page/infoedgarshtml" title="Information for Filers">Information for Filers</a>
                      </li>
                    <li>
                <a href="/edgar/aboutedgar.htm" title="About EDGAR">About EDGAR</a>
                      </li>
        </ul>
  
              </li>
                    <li >
                <a href="/news" title="News">News</a>
                                        <ul>
                          <li>
                <a href="/news/pressreleases" title="Press Releases">Press Releases</a>
                      </li>
                    <li>
                <a href="/news/statements" title="Public Statements">Public Statements</a>
                      </li>
                    <li>
                <a href="/news/speeches" title="Speeches">Speeches</a>
                      </li>
                    <li>
                <a href="/news/testimony" title="Testimony">Testimony</a>
                      </li>
                    <li>
                <a href="/spotlight" title="Spotlight Topics">Spotlight Topics</a>
                      </li>
                    <li>
                <a href="/news/whatsnew/wn-today.shtml" title="What&#039;s New">What&#039;s New</a>
                      </li>
                    <li>
                <a href="/news/upcoming-events" title="Upcoming Events">Upcoming Events</a>
                      </li>
                    <li>
                <a href="https://www.sec.gov/news/webcasts.shtml" title="Webcasts">Webcasts</a>
                      </li>
                    <li>
                <a href="/news/sec-videos" title="SEC Videos">SEC Videos</a>
                      </li>
                    <li>
                <a href="/news/media-gallery" title="Media Gallery">Media Gallery</a>
                      </li>
        </ul>
  
              </li>
        </ul>
  

  
</div>
<nav role="navigation" aria-labelledby="block-secgov-account-menu-menu" id="block-secgov-account-menu">
            
  <h2 class="visually-hidden">User account menu</h2>
  

        
              <ul id="user-menu" role="menubar" aria-hidden="false">
        
            <li class="login" role="menuitem">
              <a href="/user/login" data-drupal-link-system-path="user/login">Log in</a>
              </li>


        </ul>
  


  </nav>

  </div>

      </div>
    </section>
          <div class="highlighted">
        <aside class="message section clearfix" role="complementary">
            <div>
    

  </div>

        </aside>
      </div>
    
    
                                
        
            
    <section role="content">
      <div id="main-wrapper" class="layout-main-wrapper layout-container clearfix">

                  

      
      
            <div id="sidebar-first" class="sidebar">
          <a class="left-nav-menu"><span class="fa fa-navicon"></span></a>
          <aside class="local-nav" role="complementary">
            
              <ul class="mobile-nav">
              <li>
        <a href="" data-drupal-link-system-path="&lt;front&gt;">U.S. Securities and Exchange Commission</a>
                                <ul class="submenu">
              <li>
        <a href="/divisions.shtml" data-drupal-link-system-path="node/91856">Divisions &amp; Offices</a>
              </li>
          <li>
        <a href="/litigation.shtml">Enforcement</a>
              </li>
          <li>
        <a href="/rules.shtml">Regulation</a>
              </li>
          <li>
        <a href="/investor">Education</a>
              </li>
          <li>
        <a href="/edgar.shtml" data-drupal-link-system-path="node/91901">Filings</a>
              </li>
          <li>
        <a href="/news">Newsroom</a>
              </li>
        </ul>
  
              </li>
          <li>
        <a href="/news">Newsroom</a>
                                <ul class="submenu">
              <li>
        <a href="/news/pressreleases" data-drupal-link-system-path="news/pressreleases">Press Releases</a>
              </li>
          <li>
        <a href="/news/public-statements">Public Statements</a>
              </li>
          <li>
        <a href="/news/speeches" data-drupal-link-system-path="news/speeches">Speehes</a>
              </li>
          <li>
        <a href="/news/testimony" data-drupal-link-system-path="news/testimony">Testimony</a>
              </li>
        </ul>
  
              </li>
          <li>
        <a href="/rss-feeds">RSS Feeds</a>
                                <ul class="submenu">
              <li>
        <a href="/rss/pressreleases">Press Releases</a>
              </li>
          <li>
        <a href="/rss/public-statements">Public Statements</a>
              </li>
          <li>
        <a href="/rss/speeches">Speeches</a>
              </li>
          <li>
        <a href="/rss/testimony">Testimony</a>
              </li>
        </ul>
  
              </li>
          <li>
        <a href="" data-drupal-link-system-path="&lt;front&gt;">Social Media</a>
                                <ul class="submenu">
              <li>
        <a href="" data-drupal-link-system-path="&lt;front&gt;">@SEC_News</a>
              </li>
          <li>
        <a href="" data-drupal-link-system-path="&lt;front&gt;">SEC Channel</a>
              </li>
          <li>
        <a href="" data-drupal-link-system-path="&lt;front&gt;">SEC Photostream</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


            <nav role="navigation">
                              <div id="local-nav">
    <nav role="navigation" aria-labelledby="block-filingsmenu-menu" id="block-filingsmenu">
            
  <h2 class="visually-hidden">Filings Menu</h2>
  

        
              <ul>
              <li class="item-information-for-edgar-filers">
        <a href="/page/infoedgarshtml" data-drupal-link-system-path="node/96001">Information for EDGAR Filers</a>
              </li>
          <li class="item-about-edgar">
        <a href="/edgar/aboutedgar.htm">About EDGAR</a>
              </li>
          <li class="item-quick-edgar-tutorial">
        <a href="https://www.sec.gov/edgar/quickedgar.htm">Quick EDGAR Tutorial</a>
              </li>
          <li class="item-how-to-search-edgar">
        <a href="/oiea/Article/edgarguide.html" data-drupal-link-system-path="node/91976">How To Search EDGAR</a>
              </li>
          <li class="item-company-filings-search">
        <a href="/edgar/searchedgar/companysearch.html">Company Filings Search</a>
              </li>
          <li class="item-edgar-search-tools">
        <a href="/edgar/searchedgar/webusers.htm" data-drupal-link-system-path="node/91871">EDGAR Search Tools</a>
              </li>
          <li class="item-search-edgar-comments">
        <a href="/answers/edgarletters.htm">Search EDGAR Comments</a>
              </li>
          <li class="item-preview-submissions">
        <a href="https://datapreview.sec.gov/previewer/">Preview Submissions</a>
              </li>
          <li class="item-filings-and-forms">
        <a href="/edgar.shtml" data-drupal-link-system-path="node/91901">Filings and Forms</a>
              </li>
          <li class="item-forms-list">
        <a href="/forms" data-drupal-link-system-path="forms" class="is-active">Forms List</a>
              </li>
          <li class="item-requesting-public-documents">
        <a href="/fast-answers/answerspublicdocshtm.html" data-drupal-link-system-path="node/90616">Requesting Public Documents</a>
              </li>
          <li class="item-accessing-edgar-data">
        <a href="/edgar/searchedgar/accessing-edgar-data.htm">Accessing EDGAR Data</a>
              </li>
          <li class="item-sic-codes">
        <a href="/info/edgar/siccodes.htm">SIC Codes</a>
              </li>
          <li class="item-contact-filer-support">
        <a href="/info/edgar/filer-support-contact-info" data-drupal-link-system-path="node/92971">Contact Filer Support</a>
              </li>
        </ul>
  


  </nav>

  </div>

                      </nav>
            <div id="mobile-search" >
  <form accept-charset="UTF-8" action="//secsearch.sec.gov/search" class="clearfix" id="mobile-search-form" method="get" name="form_iQueryForm" data-drupal-form-fields="global-search-box">
    <fieldset>
      <legend></legend><div class="search-box-container">
      <label class="overlabel" for="global-search-box" style="visibility: visible;">Search SEC.gov</label>
      <input name="utf8" type="hidden" value="?">
      <input class="affiliate" name="affiliate" type="hidden" value="secsearch">
      <input aria-autocomplete="list" aria-haspopup="true" autocomplete="off" class="usagov-search-autocomplete ui-autocomplete-input" id="mobile-search-box" name="query" role="textbox" tabindex="4" title="Search for" type="text">
      <span class="button-label fa fa-search"> </span>
      <input class="global-search-button" tabindex="5" title="Go" type="submit" value=""></div>
    </fieldset>
  </form>
  <p class="options"><a href="http://www.sec.gov/edgar/searchedgar/companysearch.html" tabindex="6">Company Filings</a> | <a href="http://www.sec.gov/search/search.htm" tabindex="7">More Search Options</a></p>
</div>
          </aside>
        </div>
                    <div id="content-wrapper" class="layout-main">

      <a id="main-content" tabindex="-1"></a>

		
				
    
          
        <div id="page-title">
          <h1>Forms List</h1>
          <!-- Subscribe link, RSS, Email -->
<div id="addthis-icons" aria-hidden="true" >
  <div class="addthis-wrapper">
    <div class="hide-for-print appIconsDetail" style="visibility: visible;">
      <div class="addthis_toolbox addthis_default_style hide-for-small">
        <a class="addthis_button_print at300b" title="Print" href="#" tabindex="0">
          <span class="fa fa-print"></span>
        </a>
        <a class="addthis_button_facebook at300b" title="Facebook" href="#" tabindex="0">
          <span class="fa fa-facebook"></span>
        </a>
        <a class="addthis_button_twitter at300b" title="Tweet" href="#" tabindex="0">
          <span class="fa fa-twitter"></span>
        </a>
        <a class="addthis_button_email at300b" target="_blank" title="Email" href="#" tabindex="0">
          <span class="fa fa-envelope"></span>
        </a>
        <a class="addthis_button_compact at300m" href="#" title="Share" tabindex="0">
          <span class="fa fa-plus"></span>
        </a>
      <div class="atclear"></div>
    </div>  
    <div class="addthis_toolbox addthis_default_style addthis_32x32_style hide-for-medium-up show-for-small addthis_mobile">
      <a class="addthis_button_facebook at300b" title="Facebook" href="#" tabindex="0">
        <span class="fa fa-facebook"></span>
      </a>
      <a class="addthis_button_twitter at300b" title="Tweet" href="#" tabindex="0">
        <span class="fa fa-twitter"></span>
      </a>
      <a class="addthis_button_email at300b" target="_blank" title="Email" href="#" tabindex="0">
        <span class="fa fa-envelope"></span>
      </a>
    </div>
    <div class="atclear"></div>
    </div>
  </div>
</div>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#async=1"></script>        </div>
          
              <div id="content" class="content">
            <div class="main-content">
    <div id="block-secgov-content">
  
    
      <div class="views-element-container">
<div class="forms-list article-list js-view-dom-id-4519a1411595a249e310aae4a6085bead1e8cf0a576ad4f7ed31314fb10246df">
  
  
  

      <header>
      <p>This page provides links to PDF versions of SEC public forms and many of the rules, regulations, and schedules associated with these forms. To find a form, either select the appropriate category below or scroll through the full list of SEC forms in alphanumeric order. Please note that you will need Adobe Reader plug-in to view these forms (available for free from Adobe through our About Adobe Acrobat (PDF) page).</p>
<div class="centered">
<label class="listSearch" style="text-align:center;" for="listSearch">Filter list by specific keywords:</label>
<div class="centered">
<input type="text" id="listSearch" size="40" title="Search for" name="query" role="textbox" aria-autocomplete="list" aria-haspopup="true">
</div>

    </header>
  
    
    <form  class="views-exposed-form" data-drupal-selector="views-exposed-form-forms-list-page-page-1" action="/forms" method="get" id="filter" accept-charset="UTF-8" >

    <div class="form-container">
  <input type="hidden" name="aId" value="">
  <div class="js-form-item form-item js-form-type-select form-item-field-audience-target-id js-form-item-field-audience-target-id">
      <label for="edit-field-audience-target-id">Filed By:</label>
          <span class="select-container"><select data-drupal-selector="edit-field-audience-target-id" id="edit-field-audience-target-id" name="field_audience_target_id" class="form-select"><option value="All" selected="selected">-View All-</option><option value="76">Public Company Accounting Oversight Board</option><option value="77">Security-Based Swap Data Repositories</option><option value="75">Public Companies</option><option value="74">NRSRO</option><option value="73">Non-Regulated Entities</option><option value="78">Self-Regulatory Organizations</option><option value="79">Small Businesses</option><option value="82">XBRL Filers</option><option value="81">Whistleblowers</option><option value="80">Transfer Agents</option><option value="32331">Teacher and Students</option><option value="72">Municipal Securities</option><option value="71">Municipal Advisors</option><option value="64">Compliance Officers</option><option value="63">Clearing Agencies</option><option value="62">Broker-Dealers</option><option value="61">Auditors</option><option value="65">Credit Rating Agencies</option><option value="66">EDGAR Filers</option><option value="70">Investors</option><option value="69">Investment Companies</option><option value="68">Investment Advisers</option><option value="67">International</option><option value="60">Accountants</option></select></span>
        </div>
<div class="js-form-item form-item js-form-type-select form-item-field-act-target-id js-form-item-field-act-target-id">
      <label for="edit-field-act-target-id">Statute:</label>
          <span class="select-container"><select data-drupal-selector="edit-field-act-target-id" id="edit-field-act-target-id" name="field_act_target_id" class="form-select"><option value="All" selected="selected">-View All-</option><option value="84">Dodd-Frank Act of 2010</option><option value="85">Investment Advisers Act of 1940</option><option value="86">Investment Company Act of 1940</option><option value="87">JOBS Act of 2012</option><option value="88">Sarbanes-Oxley Act of 2002</option><option value="83">Securities Act of 1933</option><option value="89">Securities Exchange Act of 1934</option><option value="90">Trust Indenture Act of 1939</option></select></span>
        </div>
<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit-forms-list-page" type="submit" id="edit-submit-forms-list-page" value="Apply" class="button js-form-submit form-submit" />
</div>


    	<noscript>
		<input type="submit" id="submitFilter" value="Go">
	</noscript>
	          <div class="subscribe-rss">
        <span class="userAction"> Subscribe </span>
        <a href="/rss/forms" aria-label="RSS Subscribe"><span class="fa fa-rss"></span></a>
      </div>
        
  </div>
  </form>

  
  
<noscript>
  <style type="text/css"> .en-datatable { display: block; } </style>
</noscript>

<table class="list">
        <thead>
      <tr class="header">
        
                                                                          <th id="view-field-release-number-table-column" class="views-field views-field-field-release-number is-active" scope="col">
            <div>Number</div>
          </th>
        
                                                                          <th id="view-field-display-title-table-column" class="views-field views-field-field-display-title" scope="col">
            <div>Description</div>
          </th>
        
                                                                          <th id="view-field-date-table-column" class="views-field views-field-field-date" scope="col">
            <div>Last Updated</div>
          </th>
        
                                                                          <th id="view-field-list-page-det-secarticle-table-column" class="views-field views-field-field-list-page-det-secarticle" scope="col">
            <div>SEC Number</div>
          </th>
        
                                                                          <th id="view-term-node-tid-table-column" class="views-field views-field-term-node-tid" scope="col">
            <div>Topic(s)</div>
          </th>
              </tr>
    </thead>
    <tbody>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1.pdf">Application for registration or exemption from registration as a national securities exchange (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="1999-02-01T10:00:00Z" class="datetime">Feb. 1999</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1935           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1-A           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1-a.pdf">Regulation A Offering Statement (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-20T00:05:07Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC486           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Small Businesses           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1-E           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1-e.pdf">Notification under Regulation E (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2001-08-01T09:00:00Z" class="datetime">Aug. 2001</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1807           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Small Businesses, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1-K           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1-k.pdf">Annual Reports and Special Financial Reports (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-19T20:48:34Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2913</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Small Businesses           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1-N           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1-n.pdf">Form and amendments for notice of registration as a national securities exchange for the sole purpose of trading security futures products (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-12-01T10:00:00Z" class="datetime">Dec. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2568</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1-SA           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1-sa.pdf">Semiannual Report or Special Financial Report Pursuant to Regulation A (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-19T20:07:39Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2914</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Small Businesses           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1-U           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1-u.pdf">Current Report Pursuant to Regulation A (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-19T20:24:24Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2915</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Small Businesses           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>1-Z           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form1-z.pdf">Exit Report Under Regulation A (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-19T20:36:41Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2916</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Small Businesses           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>10           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form10.pdf">General form for registration of securities pursuant to Section 12(b) or (g) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-02-01T10:00:00Z" class="datetime">Feb. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1396           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>10-D           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form10-d.pdf">Asset-Backed Issuer Distribution Report Pursuant to Section 13 or 15(d) of the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-07-31T08:00:00Z" class="datetime">July 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2503           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>10-K           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form10-k.pdf">Annual report pursuant to Section 13 or 15(d) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-01T16:07:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1673</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Form 10-K, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>10-M           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form10-m%2C0.pdf">Irrevocable Appointment of Agent for Service of Process, Pleadings and Other Papers by Non-Resident General Partner of Broker or Dealer (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-06-01T09:00:00Z" class="datetime">June 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC878           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>10-Q           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form10-q.pdf">General form for quarterly reports under Section 13 or 15(d) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-01-01T15:00:00Z" class="datetime">Jan. 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1296</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>11-K           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form11-k.pdf">Annual reports of employee stock purchase, savings and similar plans pursuant to Section 15(d) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-02-01T10:00:00Z" class="datetime">Feb. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC617           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>12b-25           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form12b-25%2C0.pdf">Notification of late filing (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2009-04-01T09:00:00Z" class="datetime">April 2009</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC1344</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>13F           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form13f%2C0.pdf">Information required of institutional investment managers pursuant to Section 13(f) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-01-01T10:00:00Z" class="datetime">Jan. 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC1685</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>13H           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form13h.pdf">Information Required of Large Traders Pursuant To Section 13(h) of the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T09:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2858           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>144           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form144.pdf">Notice of proposed sale of securities pursuant to Rule 144 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-08-01T09:00:00Z" class="datetime">Aug. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1147           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>15           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form15.pdf">Certification and notice of termination of registration under Section 12(g) or suspension of duty to file reports under Sections 13 and 15(d) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-02-01T10:00:00Z" class="datetime">Feb. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2069           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>15F           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form15f.pdf">Certification of a foreign private issuer’s termination of registration of a class of securities under Section 12(g) or its termination of the duty to file reports under Section 13(a) or Section 15(d) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-01-01T05:00:00Z" class="datetime">Jan. 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>17-H           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form17-h.pdf">Risk Assessment for Brokers &amp; Dealers (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2010-01-01T10:00:00Z" class="datetime">Jan. 2010</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2332           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>18           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form18.pdf">Application for registration pursuant to Section 12(b) &amp; (c) of the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1421           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>18-K           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form18-k.pdf">Annual report for foreign governments and political subdivisions thereof (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-04-01T09:00:00Z" class="datetime">April 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1797           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>19b-4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form19b-4.pdf">Proposed rule change by self-regulatory organization (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-01-01T11:00:00Z" class="datetime">Jan. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1832           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>19b-4(e)           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form19b-4e.pdf">Information required of a self-regulatory organization listing and trading a new derivative securities product pursuant to Rule 19b-4(e) under the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-07-01T09:00:00Z" class="datetime">July 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2449           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>19b-7           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form19b-7.pdf">Proposed rule change by self-regulatory organization (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-07-01T09:00:00Z" class="datetime">July 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2450           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>2-E           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form2-e.pdf">Report of sales pursuant to Rule 609 of Regulation E (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2006-10-01T09:00:00Z" class="datetime">Oct. 2006</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1808           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Small Businesses, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>20-F           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form20-f.pdf">Registration statement / Annual report / Transition report (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-18T17:44:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1852</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>24F-2           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form24f-2.pdf">Annual notice of securities sold pursuant to Rule 24-f2 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2002-06-01T09:00:00Z" class="datetime">June 2002</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2393           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>25           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form25.pdf">Notification of the removal from listing and registration of matured, redeemed or retired securities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2006-03-01T10:00:00Z" class="datetime">March 2006</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1654           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form3.pdf">Initial statement of beneficial ownership of securities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T09:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1473           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Directors, Officers, Securities Exchange Act of 1934, Significant Shareholders           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form3data.pdf">Initial statement of beneficial ownership of securities - general instructions (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T09:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1472           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Directors, Officers, Securities Exchange Act of 1934, Significant Shareholders           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form4.pdf">Statement of changes in beneficial ownership of securities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T09:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1474           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Directors, Officers, Securities Exchange Act of 1934, Significant Shareholders           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form4data%2C0.pdf">Statement of changes in beneficial ownership of securities - general instructions (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T09:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1475           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Directors, Officers, Securities Exchange Act of 1934, Significant Shareholders           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>40-F           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form40-f.pdf">Registration statement pursuant to Section 12 or annual report pursuant to Section 13(a) or 15(d) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-18T17:45:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2285</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>5           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form5.pdf">Annual statement of changes in beneficial ownership of securities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T09:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2270T</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Directors, Officers, Securities Exchange Act of 1934, Significant Shareholders           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>5           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form5data%2C0.pdf">Annual statement of changes in beneficial ownership of securities - general instructions (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T09:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2270           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Directors, Officers, Securities Exchange Act of 1934, Significant Shareholders           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>6-K           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form6-k.pdf">Report of foreign private issuer pursuant to Rule 13a-16 or 15d-16 under the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2009-04-01T09:00:00Z" class="datetime">April 2009</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1815           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>7-M           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form7-m%2C0.pdf">Irrevocable Appointment of Agent for Service of Process, Pleadings and Other Papers by Individual Non-Resident Broker or Dealer (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-06-01T09:00:00Z" class="datetime">June 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC876           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>8-A           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form8-a.pdf">Registration of certain classes of securities pursuant to Section 12(b) or (g) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-20T00:04:46Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1922           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>8-K           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form8-k.pdf">Current report pursuant to Section 13 or 15(d) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-20T22:07:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC873</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>8-M           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form8-m%2C0.pdf">Irrevocable Appointment of Agent for Service of Process, Pleadings and Other Papers by Corporate Non-Resident Broker or Dealer (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-06-01T09:00:00Z" class="datetime">June 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC877           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>9-M           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form9-m%2C0.pdf">Irrevocable Appointment of Agent for Service of Process, Pleadings and Other Papers by Partnership Non-Resident Broker or Dealer (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-06-01T09:00:00Z" class="datetime">June 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC878           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ABS DD-15E           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formabs-dd-15e.pdf">Certification of Provider of Third-Party Due Diligence Services for Asset-Backed Securities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-15T19:31:16Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2917</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Form ABS Due Diligence-15E, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ABS-15G           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formabs-15g.pdf">Asset-Backed Securitizer Report (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-06-01T08:00:00Z" class="datetime">June 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2860           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ABS-EE           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formabs-ee.pdf">Form for Submission of Electronic Exhibits for Asset-Backed Securities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-11-16T02:23:57Z" class="datetime">Nov. 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2910</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ADV           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formadv.pdf">Uniform Application for Investment Adviser Registration and Report by Exempt Reporting Advisers (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-10-01T09:00:00Z" class="datetime">Oct. 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1707</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Advisers Act of 1940, Investment Advisers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ADV-E           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formadv-e.pdf">Certificate of accounting of client securities and funds in the possession or custody of an investment adviser (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-01-01T10:00:00Z" class="datetime">Jan. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2223           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Advisers Act of 1940, Investment Advisers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ADV-H           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formadv-h.pdf">Application for a temporary or continuing hardship exemption (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-09-01T09:00:00Z" class="datetime">Sept. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2566           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Advisers Act of 1940, Investment Advisers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ADV-NR           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formadv-nr.pdf">Appointment of agent for service of process by non-resident general partner and non-resident managing agent of an investment adviser (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-09-01T09:00:00Z" class="datetime">Sept. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2565           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Advisers Act of 1940, Investment Advisers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ADV-W           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formadv-w.pdf">Notice of withdrawal from registration as investment adviser (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2010-11-01T09:00:00Z" class="datetime">Nov. 2010</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC777           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Advisers Act of 1940, Investment Advisers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ATS           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formats.pdf">Initial operation report, amendment to initial operation report and cessation of operations report for alternative trading systems (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2005-05-01T09:00:00Z" class="datetime">May 2005</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2550</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Alternative Trading Systems           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ATS-R           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formats-r.pdf">Quarterly report of alternative trading systems activities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2009-06-01T09:00:00Z" class="datetime">June 2009</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2551</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Alternative Trading Systems           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>BD           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formbd.pdf">Uniform application for broker-dealer registration (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-01-01T10:00:00Z" class="datetime">Jan. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1490</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>BD-N           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formbd-n.pdf">Notice of registration as a broker-dealer for the purpose of trading security futures products pursuant to Section 15(b)(11) of the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-01-01T10:00:00Z" class="datetime">Jan. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1500</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>BDW           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formbdw.pdf">Uniform request for broker-dealer withdrawal (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-04-01T09:00:00Z" class="datetime">April 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC122           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>C           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formc.pdf">Form C (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-14T19:04:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC 2930</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>CA-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formca-1.pdf">Registration or exemption from registration as a clearing agency and for amendment to registration (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2002-10-01T09:00:00Z" class="datetime">Oct. 2002</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1853           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Clearing Agencies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>CB           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formcb.pdf">Tender offer/rights offering notification form (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-12-01T10:00:00Z" class="datetime">Dec. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2560           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Proxy and Tender Offer, Securities Act of 1933, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>CFPORTAL           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formcfportal.pdf"> Application or Amendment to Application for Registration or Withdrawal from Registration as Funding Portal Under the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-10-01T18:27:27Z" class="datetime">Oct. 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Funding Portal, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>D           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

<a href="/info/smallbus/cfformd.htm" hreflang="en">Notice of Exempt Offering of Securities</a>
<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-05-01T09:00:00Z" class="datetime">May 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1972</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Small Businesses           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-1.pdf">Registration statement for securities of certain foreign private issuers (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-14T20:34:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1981</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-10           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-10.pdf">Registration statement for securities of certain Canadian issuers (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-12-01T10:00:00Z" class="datetime">Dec. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2292           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-3.pdf">Registration statement for securities of certain foreign private issuers (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-14T20:35:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1983</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-4.pdf">Registration statement for securities of certain foreign private issuers issued in certain business combination transactions (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-14T20:36:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2078</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-6           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-6.pdf">Registration statement under the Securities Act of 1933 for depositary shares evidenced by American depositary receipts (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-10-01T09:00:00Z" class="datetime">Oct. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2001           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-7           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-7.pdf">Registration statement under the Securities Act of 1933 for securities of certain Canadian issuers offered for cash upon the exercise of rights granted to existing security holders (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2289           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-8           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-8.pdf">Registration statement under the Securities Act of 1933 for securities of certain Canadian issuers to be issued in exchange offers or a business combination (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-15T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2290           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-80           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-80.pdf">Registration statement for securities of certain Canadian issuers to be issued in exchange offers or a business combination (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2282           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-N           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-n.pdf">Appointment of agent for service of process by foreign banks and foreign insurance companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2006-10-01T09:00:00Z" class="datetime">Oct. 2006</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2306           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>F-X           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formf-x.pdf">Appointment of agent for service of process and undertaking (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-02-01T10:00:00Z" class="datetime">Feb. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2288           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, International           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>ID           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

<a href="/about/forms/formid.html" hreflang="en">Uniform application for access codes to file on EDGAR</a>
<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-12-01T10:00:00Z" class="datetime">Dec. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2084           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Securities Exchange Act of 1934, EDGAR Filers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>MA           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/2017-03/formmadata.pdf">Instructions for the Form MA Series (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-09-16T19:59:58Z" class="datetime">Sept. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Municipal Advisors           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>MA           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formma.pdf">Application for Municipal Advisor Registration; Annual Update of Municipal Advisor Registration; and Amendment of a Prior Application for Registration (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-04-22T01:52:13Z" class="datetime">April 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2898</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Municipal Advisors           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>MA-I           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formma-i.pdf">Information Regarding Natural Persons who Engage in Municipal Advisory Activities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-06T19:13:41Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2899</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Municipal Advisors           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>MA-NR           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formma-nr.pdf">Designation of U.S. Agent for Service of Process for Non-Residents (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-04-22T19:36:35Z" class="datetime">April 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2900</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Municipal Advisors           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>MA-W           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formma-w.pdf">Notice of Withdrawal from Registration as a Municipal Advisor (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-04-22T19:58:35Z" class="datetime">April 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2901</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Municipal Advisors           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>MSD           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formmsd.pdf">Application for registration as a municipal securities dealer or amendment to such application (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-12-01T10:00:00Z" class="datetime">Dec. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1534           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Municipal Securities           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>MSDW           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formmsdw.pdf">Notice of withdrawal from registration as a municipal securities dealer (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-12-01T10:00:00Z" class="datetime">Dec. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1588           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Municipal Securities           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-14           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-14.pdf">Form for the registration of securities issued in business combination transactions by investment companies and business development companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-07-01T09:00:00Z" class="datetime">July 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2106           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-17D-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-17d-1.pdf">Report filed by small business investment company (SBIC) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2005-08-01T09:00:00Z" class="datetime">Aug. 2005</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1839           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-17f-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-17f-1.pdf">Certificate of accounting of securities and similar investments of a management investment company in the custody of members of national securities exchanges (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2003-11-01T10:00:00Z" class="datetime">Nov. 2003</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2205           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-17f-2           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-17f-2.pdf">Certificate of accounting of securities and similar investments in the custody of management investment companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2009-04-01T09:00:00Z" class="datetime">April 2009</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2198           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-18f-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-18f-1.pdf">Notification of election pursuant to Rule 18f-1 under the Investment Company Act of 1940 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-01-01T10:00:00Z" class="datetime">Jan. 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1846           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-1A           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-1a.pdf">Registration form for open-end management investment companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-08-01T14:17:00Z" class="datetime">Aug. 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2052</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-2           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-2.pdf">Registration statement for closed-end management investment companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-04-01T08:00:00Z" class="datetime">April 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1716           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-23c-3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-23c-3.pdf">Notification of repurchase offer (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2003-10-01T09:00:00Z" class="datetime">Oct. 2003</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2380           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-27D-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-27d-1.pdf">Accounting of Segregated Trust Account (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-04-22T07:07:35Z" class="datetime">April 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1840</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-3.pdf">Registration statement of separate accounts organized as management investment companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-08-02T08:00:00Z" class="datetime">Aug. 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2124</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-4.pdf">Registration statement of separate accounts organized as unit investment trusts (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2009-11-01T11:00:00Z" class="datetime">Nov. 2009</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2125           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-5           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-5.pdf">Registration statement of small business investment company (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2010-03-01T10:00:00Z" class="datetime">March 2010</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC993           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Small Businesses, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-54A           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-54a.pdf">Notification of election to be subject to Sections 55-65 of the Investment Company Act of 1940 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2003-10-01T09:00:00Z" class="datetime">Oct. 2003</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1937           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-54C           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-54c.pdf">Notification of withdrawal of election to be subject to Sections 55-65 of the Investment Company Act of 1940 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2001-03-01T10:00:00Z" class="datetime">March 2001</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1938           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-6           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-6.pdf">Registration statement for separate accounts organized as unit investment trusts that offer variable life insurance policies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2006-08-01T09:00:00Z" class="datetime">Aug. 2006</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2567           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-6EI-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-6e1-1.pdf">Notification of claim of exemption pursuant to Rule 6e-2 or 6e-3(T) under the Investment Company Act of 1940 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2003-03-01T10:00:00Z" class="datetime">March 2003</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1130           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-6F           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-6f.pdf">Notice of intent to elect to be subject to Sections 55-65 of the Investment Company Act of 1940 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2001-03-01T10:00:00Z" class="datetime">March 2001</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1936           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-8A           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-8a%2C0.pdf">Notification of registration filed pursuant to Section 8(a) of Investment Company Act of 1940 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2001-12-01T10:00:00Z" class="datetime">Dec. 2001</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1102           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-8B-2           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-8b-2.pdf">Registration statement of unit investment trusts which are currently issuing securities (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2010-03-01T10:00:00Z" class="datetime">March 2010</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC977           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-8B-4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-8b-4.pdf">Registration statement of face-amount certificate companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2005-11-01T10:00:00Z" class="datetime">Nov. 2005</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1285           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-8F           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-8f.pdf">Application for deregistration of certain registered investment companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2010-09-15T09:00:00Z" class="datetime">Sept. 2010</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1691           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-CEN           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-cen.pdf">Annual Report for Registered Investment Companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2018-02-01T19:00:00Z" class="datetime">Feb. 2018</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC 2846</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-CR           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-cr.PDF">Current Report, Money Market Fund Material Events (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-01-02T00:17:28Z" class="datetime">Jan. 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2918</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-CSR           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-csr.pdf">Certified shareholder report of registered management investment companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-10-13T09:00:00Z" class="datetime">Oct. 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2569</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-MFP           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-mfp.pdf">Monthly Schedule of Portfolio Holdings of Money Market Funds (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-06-28T09:00:00Z" class="datetime">June 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2847           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-PX           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-px.pdf">Annual Report of Proxy Voting Record of Registered Management Investment Company (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2003-04-01T10:00:00Z" class="datetime">April 2003</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2451           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-Q           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-q.pdf">Quarterly Schedule of Portfolio Holdings of Registered Management Investment Company (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2005-08-01T09:00:00Z" class="datetime">Aug. 2005</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2455</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>N-SAR           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formn-sar.pdf">Semi-annual report of registered investment companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2010-10-01T09:00:00Z" class="datetime">Oct. 2010</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2100           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Company Act of 1940, Investment Companies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>n/a           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/sec1661.pdf">Supplemental Information for Regulated Entities Directed to Supply Information Other Than Pursuant to a Commission Subpoena (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-08-18T09:00:00Z" class="datetime">Aug. 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1661           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Other Forms and Materials           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>n/a           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/sec2903.pdf">Supplemental Information for Persons Requested to Supply Information Voluntarily to the Office of Credit Ratings’Monitoring Staff (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-09-16T01:11:21Z" class="datetime">Sept. 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2903</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>n/a           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/sec1662.pdf">Supplemental Information for Persons Requested to Supply Information Voluntarily or Directed to Supply Information Pursuant to a Commission Subpoena (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-08-17T09:00:00Z" class="datetime">Aug. 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1662           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Other Forms and Materials           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>n/a           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/industryguides.pdf">Industry Guides (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-05-01T09:00:00Z" class="datetime">May 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2056           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Other Forms and Materials           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>n/a           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/sec2405.pdf">Notice on Supplying Information Voluntarily (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-08-01T09:00:00Z" class="datetime">Aug. 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2405</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Other Forms and Materials           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>n/a           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/sec2866.pdf">Supplemental Information for Persons Requested to Supply Information Voluntarily to the Commissions Examination Staff (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-04-13T09:00:00Z" class="datetime">April 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2866           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Other Forms and Materials           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>NRSRO           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/2017-03/formnrsro-2009-instructions.pdf">Form NRSRO - April 2009 Instructions (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2009-04-15T21:09:12Z" class="datetime">April 2009</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>NRSRO           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>NRSRO           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/2017-02/formnrsro.pdf">Application for Registration as a Nationally Recognized Statistical Rating Organization (NRSRO) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-04-06T17:01:12Z" class="datetime">April 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1541</p>           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>NRSRO           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>PF           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formpf.pdf">Reporting Form for Investment Advisers to Private Funds and Certain Commodity Pool Operators and Commodity Trading Advisors (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-07-01T08:00:00Z" class="datetime">July 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2048           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Investment Advisers Act of 1940, Investment Advisers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>PILOT           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formpilot.pdf">Initial operation report, amendment to initial operation report and quarterly report for pilot trading systems operated by self-regulatory organizations (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-09-01T09:00:00Z" class="datetime">Sept. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2552           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>R31           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formr31.pdf">Form for Reporting Covered Sales and Covered Round Turn Transactions Under Section 31 of the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-09-01T08:00:00Z" class="datetime">Sept. 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2502           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>S-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/forms-1.pdf">Registration statement under Securities Act of 1933 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-20T22:13:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC870</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Small Businesses           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>S-11           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/forms-11.pdf">Registration of securities of certain real estate companies (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-20T22:20:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC907</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>S-20           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/forms-20%2C0.pdf">Registration statement under the Securities Act of 1933 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2005-06-01T09:00:00Z" class="datetime">June 2005</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2013           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>S-3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/forms-3.pdf">Registration statement under Securities Act of 1933 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-20T22:14:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1379</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>S-4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/forms-4.pdf">Registration statement under Securities Act of 1933 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-20T22:16:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2077</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>S-6           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/forms-6.pdf">Registration under 1933 act of securities of unit investment trusts registered on form N-8B-2 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2008-01-15T11:00:00Z" class="datetime">Jan. 2008</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC649           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>S-8           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/forms-8.pdf">Registration statement under Securities Act of 1933 to be offered to employees pursuant to certain plans (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2017-04-20T22:18:00Z" class="datetime">April 2017</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC1398</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SBSE           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form-sbse.pdf">Application for Registration of Security-based Swap Dealers and Major Security-based Swap Participants (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-01-01T21:33:09Z" class="datetime">Jan. 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2924</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Dodd-Frank Act of 2010, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SBSE-A           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formsbse-a.pdf">Application for Registration of Security-based Swap Dealers and Major Security-based Swap Participants that are Registered or Registering with the Commodity Futures Trading Commission as a Swap Dealer (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-01-01T21:33:21Z" class="datetime">Jan. 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2925</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Dodd-Frank Act of 2010, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SBSE-BD           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formsbse-bd.pdf">Application for Registration of Security-based Swap Dealers and Major Security-based Swap Participants that are Registered Broker-dealers (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-01-01T21:33:46Z" class="datetime">Jan. 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2926</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Dodd-Frank Act of 2010, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SBSE-C           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formsbse-c.pdf">Certifications for Registration of Security-based Swap Dealers and Major Security-based Swap Participants (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-01-01T21:33:33Z" class="datetime">Jan. 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2927</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Dodd-Frank Act of 2010, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SBSE-W           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formsbse-w.pdf">Request for Withdrawal from Registration as a Security-based Swap Dealer or Major Security-based Swap Participant (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2016-01-01T21:38:45Z" class="datetime">Jan. 2016</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2928</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Dodd-Frank Act of 2010, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SCI           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/form-sci.pdf">Systems Compliance and Integrity (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-09-02T00:26:04Z" class="datetime">Sept. 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC 2919</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934, Self-Regulatory Organizations, Clearing Agencies           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SD           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formsd.pdf">Specialized Disclosure Report (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2014-01-01T10:00:00Z" class="datetime">Jan. 2014</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC697           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SDR           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formsdr.pdf">Application or Amendment to Application for Registration or Withdrawal from Registration As Security-Based Swap Data Repository Under the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-02-12T21:07:16Z" class="datetime">Feb. 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2911</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Dodd-Frank Act of 2010, SBS Data Repositories, Securities Exchange Act of 1934           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SE           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formse%2C0.pdf">Submission of Paper Format Exhibits by Electronic Filers (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-11-01T08:00:00Z" class="datetime">Nov. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2082           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Securities Exchange Act of 1934, EDGAR Filers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SF-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/2017-03/formsf-1.pdf">Registration Statement Under the Securities Act of 1933 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-11-01T08:00:00Z" class="datetime">Nov. 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2908</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SF-3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/2017-03/formsf-3.pdf">Registration Statement Under the Securities Act of 1933 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2015-07-01T08:00:00Z" class="datetime">July 2015</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>SEC2909</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>SIP           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formsip%2C0.pdf">Application or amendment to application for registration as securities infomation processor (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-03-19T09:00:00Z" class="datetime">March 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1939           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Other Forms and Materials           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>T-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formt-1.pdf">Statement of eligibility and qualification under the Trust Indenture Act of 1939 of corporations designated to act as trustees (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1836           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Trust Indenture Act of 1939           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>T-2           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formt-2.pdf">Statement of eligibility under the Trust Indenture Act of 1939 of an individual designated to act as trustee (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC1849</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Trust Indenture Act of 1939           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>T-3           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formt-3.pdf">For applications for qualification of indentures under the Trust Indenture Act of 1939 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1919           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Trust Indenture Act of 1939           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>T-4           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formt-4.pdf">Application for exemption filed pursuant to Section 304(c) of the Trust Indenture Act of 1939 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1920           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Trust Indenture Act of 1939           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>T-6           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formt-6.pdf">Application under Section 310(a)(1) of the Trust Indenture Act of 1939 for determination of eligibility of a foreign personal to act as institutional trustee (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2007-01-01T10:00:00Z" class="datetime">Jan. 2007</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2275           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Trust Indenture Act of 1939           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>TA-1           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formta-1.pdf">Uniform form for registration as a transfer agent and for amendment to registration (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2006-12-01T10:00:00Z" class="datetime">Dec. 2006</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC1528</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Transfer Agents           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>TA-2           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formta-2%2C0.pdf">Form for reporting activities of transfer agents (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-08-01T09:00:00Z" class="datetime">Aug. 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span><p>
	SEC2113</p>
           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Transfer Agents           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>TA-W           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formta-w.pdf">Notice of withdrawal from registration as transfer agent (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2006-12-01T10:00:00Z" class="datetime">Dec. 2006</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1669           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Transfer Agents           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>TCR           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formtcr.pdf">Tip, Complaint, or Referral (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-08-01T09:00:00Z" class="datetime">Aug. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2850           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Tips Complaints and Referrals, Whistleblower           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>TH           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formth%2C0.pdf">Notification of Reliance on Temporary Hardship Exemption (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2006-07-01T08:00:00Z" class="datetime">July 2006</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2348           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Securities Act of 1933, Securities Exchange Act of 1934, EDGAR Filers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>WB-APP           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formwb-app.pdf">Application for Award for Original Information Submitted Pursuant to Section 21F of the Securities Exchange Act of 1934 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2011-08-01T09:00:00Z" class="datetime">Aug. 2011</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2851           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Tips Complaints and Referrals, Whistleblower           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-19           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-19.pdf">Report of Change in Membership Status (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2001-07-01T09:00:00Z" class="datetime">July 2001</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1414           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Self-Regulatory Organizations           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Part I           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_1.pdf">FOCUS Report, Part I (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2003-04-01T10:00:00Z" class="datetime">April 2003</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1705           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Part II           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_2.pdf">FOCUS Report, Part II (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2002-07-01T09:00:00Z" class="datetime">July 2002</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1695           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Part II           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_22.pdf">FOCUS Report, Part II Instructions (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2004-02-01T10:00:00Z" class="datetime">Feb. 2004</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1695A           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Part IIA           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_2a.pdf">FOCUS Report Part IIa Instructions (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2002-04-01T10:00:00Z" class="datetime">April 2002</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1696A           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Part IIA           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_2f.pdf">FOCUS Report Part IIa (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2003-02-01T10:00:00Z" class="datetime">Feb. 2003</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1696           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Part IIB           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_2b.pdf">FOCUS Report, Part IIb (OTC Derivatives Dealer) (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2012-03-01T10:00:00Z" class="datetime">March 2012</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC2430           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Part III           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_3.pdf">FOCUS Report: Information Required of All Brokers and Dealers Pursuant to Rule 17a-5, Part III (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-05-01T09:00:00Z" class="datetime">May 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1410           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17A-5 Schedule I           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17a-5_schedi.pdf">(Financial and Operational Combined Uniform Single) FOCUS Report: Information Required of All Brokers and Dealers Pursuant to Rule 17a-5 (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2013-05-01T09:00:00Z" class="datetime">May 2013</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1675           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
          <tr>
                                                              <td class="release-number-content views-field views-field-field-release-number is-active" headers="view-field-release-number-table-column">						
            <span class="show-for-small">Number:</span>X-17F-1A           
          </td>
                                                              <td class="display-title-content views-field views-field-field-display-title" headers="view-field-display-title-table-column">						
            <span class="show-for-small">Description:</span>
	 

      <a href="/files/formx-17f-1a.pdf">Missing/Lost/Stolen/Counterfeit Securities Report (PDF)</a>

<br/>
<span class="abstract"></span>

           
          </td>
                                                              <td class="noFilter views-field views-field-field-date" headers="view-field-date-table-column">						
            <span class="show-for-small">Last Updated:</span>    <time datetime="2001-05-01T09:00:00Z" class="datetime">May 2001</time>

           
          </td>
                                                              <td class="list-page-detail-content views-field views-field-field-list-page-det-secarticle" headers="view-field-list-page-det-secarticle-table-column">						
            <span class="show-for-small">SEC Number:</span>SEC1666           
          </td>
                                                              <td headers="view-term-node-tid-table-column" class="views-field views-field-term-node-tid">						
            <span class="show-for-small">Topic(s):</span>Broker-Dealers           
          </td>
              </tr>
      </tbody>
</table>

    
  
    

      <div id="table_paging">
      <span class="tgroup">
            </span>
      <center></center>
      <span class="tgroup1">1 to 158 of 158 items <span>
    </div>
  
</div>


</div>

  </div>

  </div>

        </div>
      
        
      
      </div>

      
    </div>
    </section>

    <section role="footer">
                <div>
    
<div id="block-globalfooterstayconnectedfooter" class="block stay-connected-footer">
  
    
      
            <div class="body"><p class="data-exempt" id="stay-connected-footer"><span>STAY CONNECTED</span><br class="new-line" />
<a href="/news/socialmedia.shtml"><span class="fa fa-lg fa-twitter"><span class="visually-hidden">1</span></span> <span class="hide-for-small">Twitter</span></a> <a href="/news/socialmedia.shtml"><span class="fa fa-lg fa-facebook"><span class="visually-hidden">2</span></span> <span class="hide-for-small">Facebook</span></a> <a href="/about/secrss.shtml"><span class="fa fa-lg fa-rss"><span class="visually-hidden">3</span></span><span class="hide-for-small">RSS</span></a> <a href="//www.youtube.com/user/SECViews/videos"><span class="fa fa-lg fa-youtube-play"><span class="visually-hidden">4</span></span><span class="hide-for-small">YouTube</span></a><br class="hide-for-medium-up" />
<a href="//www.flickr.com/photos/67083337@N02"><span class="fa fa-lg fa-flickr"><span class="visually-hidden">5</span></span> <span class="hide-for-small">Flickr</span></a> <a href="//www.linkedin.com/company/us-securities-and-exchange-commission?trk=mini-profile"> <span class="fa fa-lg fa-linkedin"><span class="visually-hidden">6</span></span><span class="hide-for-small">LinkedIn</span></a> <a href="//www.pinterest.com/secgov"><span class="fa fa-lg fa-pinterest-p"><span class="visually-hidden">7</span></span> <span class="hide-for-small">Pinterest</span></a> <a href="//public.govdelivery.com/accounts/USSEC/subscriber/new"><span class="fa fa-lg fa-envelope"><span class="visually-hidden">8</span></span> <span class="hide-for-small">Email Updates</span> </a></p>
</div>
      
  </div>
<nav role="navigation" aria-labelledby="block-secgov-footer-menu" id="block-secgov-footer">
            
  <h2 class="visually-hidden">Footer menu</h2>
  

        
              <ul>
              <li class="item-site-map">
        <a href="/sitemap.shtml" data-drupal-link-system-path="node/111831">Site Map</a>
              </li>
          <li class="item-accessibility">
        <a href="/disability/sec_access.htm" data-drupal-link-system-path="node/111766">Accessibility</a>
              </li>
          <li class="item-contracts">
        <a href="/about/offices/oacq.htm">Contracts</a>
              </li>
          <li class="item-privacy">
        <a href="/privacy.htm" data-drupal-link-system-path="node/111706">Privacy</a>
              </li>
          <li class="item-inspector-general">
        <a href="/oig" data-drupal-link-system-path="node/41456">Inspector General</a>
              </li>
          <li class="item-agency-financial-report">
        <a href="https://www.sec.gov/agency-financial-report">Agency Financial Report</a>
              </li>
          <li class="item-budget-&amp;-performance">
        <a href="/about/offices/ofm/ofm-documents.htm" data-drupal-link-system-path="node/111606">Budget &amp; Performance</a>
              </li>
          <li class="item-careers">
        <a href="/jobs.shtml">Careers</a>
              </li>
          <li class="item-contact">
        <a href="/contact-information/sec-directory" data-drupal-link-system-path="node/102846">Contact</a>
              </li>
          <li class="item-foia">
        <a href="/foia.shtml">FOIA</a>
              </li>
          <li class="item-no-fear-act-&amp;-eeo-data">
        <a href="/eeoinfo.shtml">No FEAR Act &amp; EEO Data</a>
              </li>
          <li class="item-whistleblower-protection">
        <a href="/eeoinfo/whistleblowers.htm" data-drupal-link-system-path="node/111891">Whistleblower Protection</a>
              </li>
          <li class="item-votes">
        <a href="/about/commission-votes.shtml" data-drupal-link-system-path="node/111231">Votes</a>
              </li>
          <li class="item-open-government">
        <a href="/open">Open Government</a>
              </li>
          <li class="item-plain-writing">
        <a href="/plainwriting.shtml" data-drupal-link-system-path="node/111701">Plain Writing</a>
              </li>
          <li class="item-links">
        <a href="/links.shtml">Links</a>
              </li>
          <li class="item-investor.gov">
        <a href="https://investor.gov/">Investor.gov</a>
              </li>
          <li class="item-usa.gov">
        <a href="https://www.usa.gov/">USA.gov</a>
              </li>
        </ul>
  


  </nav>

  </div>

          </section>
      <script>
      if (typeof dataLayer != "undefined") dataLayer.push({"pageType": "Forms List"});
    </script>
    </div>
</div>
</container>

<section role="off-canvas">

</section>

    

    <a href="#" class="back-to-top"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i>Return to Top</a>

    <div class="overlap">
  <!-- Subscribe link, RSS, Email -->
  <div id="addthis-icons-508" class="visibly-hidden">
    <div class="addthis-wrapper">
      <div class="appIconsDetail hide">
        <div class="addthis_toolbox addthis_default_style hide-for-small">
          <a class="addthis_button_print at300b" title="Print" href="#">
            <span class="fa fa-print"></span>
          </a>
          <a class="addthis_button_facebook at300b" title="Facebook" href="#">
            <span class="fa fa-facebook"></span>
          </a>
          <a class="addthis_button_twitter at300b" title="Tweet" href="#">
            <span class="fa fa-twitter"></span>
          </a>
          <a class="addthis_button_email at300b" target="_blank" title="Email" href="#">
            <span class="fa fa-envelope"></span>
          </a>
          <a class="addthis_button_compact at300m" href="#" title="Share">
            <span class="fa fa-plus"></span>
          </a>
        <div class="atclear"></div>
      </div>  
      <div class="addthis_toolbox hide">
        <a class="addthis_button_facebook at300b" title="Facebook" href="#">
          <span class="fa fa-facebook"></span>
        </a>
        <a class="addthis_button_twitter at300b" title="Tweet" href="#">
          <span class="fa fa-twitter"></span>
        </a>
        <a class="addthis_button_email at300b" target="_blank" title="Email" href="#">
          <span class="fa fa-envelope"></span>
        </a>
      </div>
      <div class="atclear"></div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#async=1"></script>
</div>
    <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"forms","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en"},"pluralDelimiter":"\u0003","data":{"extlink":{"extTarget":false,"extClass":"0","extLabel":"","extImgClass":false,"extSubdomains":true,"extExclude":".*\\.gov|http:\/\/www.xbrl.org\/utr\/2013-05-17\/utr.xml|http:\/\/www.xbrl.org\/dtr\/type\/numeric-2009-12-16.xsd|http:\/\/www.xbrl.org\/dtr\/type\/nonNumeric-2009-12-16.xsd|https:\/\/secir.secure.force.com\/ombudsman\/OMMSForm","extInclude":"","extCssExclude":".data-exempt","extCssExplicit":"","extAlert":true,"extAlertText":"You are now leaving the SEC Website. The link you have selected is located on another server. Please click on the OK button below to proceed to the selected site. The SEC does not endorse this web site, its sponsor, or any of the policies, activities, products, or services offered on the site or by any advertiser on the site.","mailtoClass":"0","mailtoLabel":""}},"ajaxTrustedUrl":{"\/forms":true},"user":{"uid":0,"permissionsHash":"52a6ae2ac0e898f5e28f6af5a03f9bbbec5d203e0889c8a484f64f05e805e831"}}</script>
<script src="/files/js/js_NN-DwGAprH8nl8im1ivPwHAWvIRljeipgzTz4Px4RAA.js"></script>


  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"32edb8f179","applicationID":"55448943","transactionName":"ZQZSMBQEXxZZARJeXlxMcQcSDF4LFxIHUFRtAFEHDgA=","queueTime":0,"applicationTime":42,"atts":"SUFRRlweTBg=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
  </html>
`)

var obj = [];
var result = $('.release-number-content')
for (var i = 0; i < result.length; i ++) {
    obj.push(result[i]['children'][2]['data'])
}
for (var i = 0; i < obj.length; i ++) {
    obj[i] = obj[i].slice(0,obj[i].match(/ *\n/).index);
}
const fs = require('fs');

fs.writeFile('formList.json', JSON.stringify(obj));

console.log(obj.length);