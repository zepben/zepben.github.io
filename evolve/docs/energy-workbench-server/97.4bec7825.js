(window.webpackJsonp=window.webpackJsonp||[]).push([[97,11],{169:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return a}));var r=e(23),u=e(175);function o(){const{siteConfig:{baseUrl:t="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(e,r)=>function(t,n,e,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!e)return e;if(e.startsWith("#"))return e;if(Object(u.b)(e))return e;if(r)return n+e;const a=e.startsWith(n)?e:n+e.replace(/^\//,"");return o?t+a:a}(n,t,e,r)}}function a(t,n={}){const{withBaseUrl:e}=o();return e(t,n)}},170:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u})),e.d(n,"useAllPluginInstancesData",(function(){return o})),e.d(n,"usePluginData",(function(){return a}));var r=e(23);function u(){const{globalData:t}=Object(r.default)();if(!t)throw new Error("Docusaurus global data not found");return t}function o(t){const n=u()[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${t}`);return n}function a(t,n="default"){const e=o(t)[n];if(!e)throw new Error(`Docusaurus plugin global data not found for pluginName=${t} and pluginId=${n}`);return e}},175:function(t,n,e){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function u(t){return void 0!==t&&!r(t)}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return u}))},188:function(t,n,e){"use strict";var r=e(192);n.a=r.a},224:function(t,n,e){"use strict";e.r(n);var r=e(0),u=e.n(r),o=e(184);n.default=function(){return u.a.createElement(o.a,{title:"Page Not Found"},u.a.createElement("main",{className:"container margin-vert--xl"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col col--6 col--offset-3"},u.a.createElement("h1",{className:"hero__title"},"Page Not Found"),u.a.createElement("p",null,"We could not find what you were looking for."),u.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);