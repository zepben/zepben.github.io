(window.webpackJsonp=window.webpackJsonp||[]).push([[182,148],{254:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return o}));var r=e(23),a=e(261);function u(){var t=Object(r.default)().siteConfig,n=(t=void 0===t?{}:t).baseUrl,e=void 0===n?"/":n,u=t.url;return{withBaseUrl:function(t,n){return function(t,n,e,r){var u=void 0===r?{}:r,o=u.forcePrependBaseUrl,i=void 0!==o&&o,l=u.absolute,c=void 0!==l&&l;if(!e)return e;if(e.startsWith("#"))return e;if(Object(a.b)(e))return e;if(i)return n+e;var f=e.startsWith(n)?e:n+e.replace(/^\//,"");return c?t+f:f}(u,e,t,n)}}}function o(t,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(t,n)}},255:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a})),e.d(n,"useAllPluginInstancesData",(function(){return u})),e.d(n,"usePluginData",(function(){return o}));var r=e(23);function a(){var t=Object(r.default)().globalData;if(!t)throw new Error("Docusaurus global data not found");return t}function u(t){var n=a()[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return n}function o(t,n){void 0===n&&(n="default");var e=u(t)[n];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t+" and pluginId="+n);return e}},261:function(t,n,e){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return a}))},274:function(t,n,e){"use strict";var r=e(278);n.a=r.a},309:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),u=e(270);n.default=function(){return a.a.createElement(u.a,{title:"Page Not Found"},a.a.createElement("main",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);