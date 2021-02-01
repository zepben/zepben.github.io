(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/menu-17361648f1b61261bb4917e9b7480038.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(99)),i={id:"dms-plugin",title:"DMS Plugin"},s={unversionedId:"dms-plugin",id:"version-1.12.0/dms-plugin",isDocsHomePage:!1,title:"DMS Plugin",description:"The Energy Workbench DMS plugin allows load data trend lines to be accessed from the DMS diagram displays, in a similar way to trendSCADA, except the selection of load is via assets, instead of analogue values on the display pages.",source:"@site/versioned_docs/version-1.12.0/dms-plugin.md",slug:"/dms-plugin",permalink:"/evolve/docs/ewb-web-client/1.12.0/dms-plugin",version:"1.12.0",sidebar:"version-1.12.0/sidebar",previous:{title:"GIS Plugin",permalink:"/evolve/docs/ewb-web-client/1.12.0/gis-plugin"}},c=[{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The Energy Workbench DMS plugin allows load data trend lines to be accessed from the DMS diagram displays, in a similar way to trendSCADA, except the selection of load is via assets, instead of analogue values on the display pages."),Object(o.a)("p",null,"Most switches, circuit breakers and conductors have a menu added called \u201cMaximum Demand\u201d, as illustrated below. This menu provides three additional options: "),Object(o.a)("p",null,Object(o.a)("img",{src:n(149).default})),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Show Downstream \u2013 this will trace downstream of the selected asset, summating the aggregated load on each distribution transformer, to find the top n co-incident maximum demand days."),Object(o.a)("li",{parentName:"ol"},"From\u2026 this menu option is used to pick a starting asset for trace."),Object(o.a)("li",{parentName:"ol"},"To Here \u2013 is used to pick an ending asset for a trace. The system will trace out the network between the two selected assets, summating aggregated load in the same way as the downstream trace.")),Object(o.a)("p",null,"Following this, a set of trend lines will be displayed, showing the top 5 maximum demand days for the portion of the network traced. The result will look similar to the screen shots elsewhere in this document for maximum demand trend lines. "),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"The results will typically be 10 to 15% lower than the results reported by SCADA, where a comparison is made with telemetry data downstream of the same device."))),Object(o.a)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.a)("p",null,"Limitations"),Object(o.a)("p",null,"In some cases, we cannot tell which transformer a customer is connected to in a multi-transformer site - this is mostly an issue for large CBD transformers. In this case, we spread the load over all the possible transformers the customer can be connected to."))}d.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,b=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return n?r.a.createElement(b,s({ref:t},l,{components:n})):r.a.createElement(b,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);