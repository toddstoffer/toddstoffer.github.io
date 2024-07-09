// Standard Snippet Install

(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
//<--Set Additional API-->
          // additionalApiKey: ['d3c3d222-0e6d-4e3c-67bb-3b2de493f9aa'],
            visitor: {
                id:             'static-visitor-id3',
                newList:         'Pendo Employee',
                historical:       'PromotedField'
                // full_name:      'John Acme',
                // tags:           [{"Persona":'Product Manager'}],
            },
            account: {
                id:             'static-account-id',
                // account_name:    'Cool New Account',
                // monthly_value:   20000,
                // is_paying:       true,
                // tags:           ['enterprise'],
            } ,
            cookieDomain: '.github.io'
//<--Set Location API-->
            // location: {
            //     transforms: [annotateAddTransform]
            //   }
//<--Set Cookie Config API-->
            //  disablePersistence: true, 
            //  disableCookies: true, 
            //  analytics: {
            //     excludeEvents: ['identify', 'meta', 'load', 'click', 'focus', 'submit', 'change', 'track']
            // }
        });

})('5ba2118f-b462-47f9-66eb-e0eeddbf109d');




//Segment.com Install 


//   !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="VXrEPSlhnbVxODjBTfrk0sbdU29jLcNd";;analytics.SNIPPET_VERSION="4.16.1";
//   analytics.load("VXrEPSlhnbVxODjBTfrk0sbdU29jLcNd");
//   analytics.page();
//   analytics.identify("segment-user-id", {
//     id: "Segment user",
//     email: "peter@example.com",
//     plan: "premium",
//     logins: 5
//   });
//   analytics.group("segment-account-id", {
//     name: "Segment Account"
//   });
//   }}();


//GTM Install 



