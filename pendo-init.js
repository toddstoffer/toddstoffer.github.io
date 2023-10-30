
    
    (function(apiKey){
        (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
        v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
            y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
            z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
    
            // Call this whenever information about your visitors becomes available
            // Please use Strings, Numbers, or Bools for value types.
            pendo.initialize({
              // additionalApiKeys: ['9740cfed-3e94-4620-7134-82d8dfb4e66d'],
                visitor: {
                    id:             'test-user',
                    // email:          'john@acmecorp.com',
                    // full_name:      'John Acme',
                    // tags:           [{"Persona":'Product Manager'}],
                },
                account: {
                    id:             '	Associated Strategies',
                    // account_name:    'Cool New Account',
                    // monthly_value:   20000,
                    // is_paying:       true,
                    // tags:           ['enterprise'],
                } ,
                // location: {
                //     transforms: [annotateAddTransform]
                //   }
    
                 excludeAllText: true
    
            });
    
    })('5ba2118f-b462-47f9-66eb-e0eeddbf109d');