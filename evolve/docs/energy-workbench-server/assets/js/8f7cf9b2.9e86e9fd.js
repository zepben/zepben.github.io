"use strict";(self.webpackChunkenergy_worbench_server_doco=self.webpackChunkenergy_worbench_server_doco||[]).push([[9470],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[f]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19217:function(e,t,n){var r=n(67294),o=n(52263),i=n(28084),c=n(44996),a=n(96486);t.Z=function(e){var t,u=e.specUrl,p=e.documentUrl,l=(0,o.Z)().siteConfig,f=(0,i.ZP)();if("undefined"!=typeof window){var s=RegExp(l.baseUrl+"(.*)"+p,"g").exec(window.location.href);if(null!=s)t=(0,c.Z)(["spec",s[1],u].join("/"));else{var d=(0,a.find)(f["docusaurus-plugin-content-docs"].default.versions,(function(e){return!0===e.isLast}));t=(0,c.Z)(["spec","current"===d.name?"next":d.name,u].join("/"))}}return(0,r.useEffect)((function(){setTimeout((function(){var e="swagger-ui";if(!document.getElementById(e)){var r=document.createElement("div");r.id=e,document.getElementById("api-doc").appendChild(r),void 0!==typeof window&&n.e(1416).then(n.t.bind(n,11416,23)).then((function(n){n.default({url:t,dom_id:"#"+e,defaultModelsExpandDepth:1,docExpansion:"list"})}))}}),500)}),[]),r.createElement("div",{id:"api-doc"})}},44884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=n(19217),a=["components"],u={id:"trace-api",slug:"/api/trace",title:"Trace API",hide_title:!0,hide_table_of_contents:!0},p=void 0,l={unversionedId:"api/network/trace-api",id:"version-2.8.0/api/network/trace-api",title:"Trace API",description:"",source:"@site/versioned_docs/version-2.8.0/api/network/trace.mdx",sourceDirName:"api/network",slug:"/api/trace",permalink:"/evolve/docs/energy-workbench-server/2.8.0/api/trace",draft:!1,tags:[],version:"2.8.0",frontMatter:{id:"trace-api",slug:"/api/trace",title:"Trace API",hide_title:!0,hide_table_of_contents:!0}},f={},s=[],d={toc:s},m="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{specUrl:"network/trace/spec.yaml",documentUrl:"/api/trace",mdxType:"ApiDoc"}))}y.isMDXComponent=!0}}]);