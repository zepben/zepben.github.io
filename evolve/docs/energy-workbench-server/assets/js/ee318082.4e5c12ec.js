"use strict";(self.webpackChunkenergy_worbench_server_doco=self.webpackChunkenergy_worbench_server_doco||[]).push([[7284],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,m=l["".concat(p,".").concat(d)]||l[d]||f[d]||i;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19217:function(e,t,n){var r=n(67294),o=n(52263),i=n(28084),c=n(44996),a=n(96486);t.Z=function(e){var t,p=e.specUrl,u=e.documentUrl,s=(0,o.Z)().siteConfig,l=(0,i.ZP)();if("undefined"!=typeof window){var f=RegExp(s.baseUrl+"(.*)"+u,"g").exec(window.location.href);if(null!=f)t=(0,c.Z)(["spec",f[1],p].join("/"));else{var d=(0,a.find)(l["docusaurus-plugin-content-docs"].default.versions,(function(e){return!0===e.isLast}));t=(0,c.Z)(["spec","current"===d.name?"next":d.name,p].join("/"))}}return(0,r.useEffect)((function(){setTimeout((function(){var e="swagger-ui";if(!document.getElementById(e)){var r=document.createElement("div");r.id=e,document.getElementById("api-doc").appendChild(r),void 0!==typeof window&&n.e(1416).then(n.t.bind(n,11416,23)).then((function(n){n.default({url:t,dom_id:"#"+e,defaultModelsExpandDepth:1,docExpansion:"list"})}))}}),500)}),[]),r.createElement("div",{id:"api-doc"})}},11020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=n(19217),a=["components"],p={id:"graphics-api",slug:"/api/graphics",title:"Graphics API",hide_title:!0,hide_table_of_contents:!0},u=void 0,s={unversionedId:"api/network/graphics-api",id:"version-2.19.0/api/network/graphics-api",title:"Graphics API",description:"",source:"@site/versioned_docs/version-2.19.0/api/network/graphics.mdx",sourceDirName:"api/network",slug:"/api/graphics",permalink:"/evolve/docs/energy-workbench-server/2.19.0/api/graphics",draft:!1,tags:[],version:"2.19.0",frontMatter:{id:"graphics-api",slug:"/api/graphics",title:"Graphics API",hide_title:!0,hide_table_of_contents:!0}},l={},f=[],d={toc:f},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{specUrl:"network/graphics/spec.yaml",documentUrl:"/api/graphics",mdxType:"ApiDoc"}))}g.isMDXComponent=!0}}]);