"use strict";(self.webpackChunkewb_app_server_doco=self.webpackChunkewb_app_server_doco||[]).push([[4293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1423:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7294),o=r(2263),i=r(8084),a=r(4996),c=r(6486);const p=e=>{let{specUrl:t,documentUrl:p,oauth2RedirectUrl:l}=e;const{siteConfig:s}=(0,o.Z)(),d=(0,i.ZP)();let u;if("undefined"!=typeof window){const e=RegExp(s.baseUrl+"(.*)"+p,"g").exec(window.location.href);if(null!=e)u=(0,a.Z)(["spec",e[1],t].join("/"));else{const e=(0,c.find)(d["docusaurus-plugin-content-docs"].default.versions,(e=>!0===e.isLast));u=(0,a.Z)(["spec","current"===e.name?"next":e.name,t].join("/"))}}return(0,n.useEffect)((()=>{setTimeout((()=>{const e="swagger-ui";if(!document.getElementById(e)){const t=document.createElement("div");t.id=e,document.getElementById("api-doc").appendChild(t),void 0!==typeof window&&r.e(1416).then(r.t.bind(r,1416,23)).then((t=>{t.default({url:u,dom_id:"#"+e,defaultModelsExpandDepth:1,docExpansion:"list",oauth2RedirectUrl:""+window.location.origin+s.baseUrl+l})}))}}),500)}),[]),n.createElement("div",{id:"api-doc"})}},4956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905)),i=r(1423);const a={id:"network-api",slug:"/api/network",title:"Network",hide_title:!0},c=void 0,p={unversionedId:"api/network-api",id:"version-2.2.0/api/network-api",title:"Network",description:"",source:"@site/versioned_docs/version-2.2.0/api/network.mdx",sourceDirName:"api",slug:"/api/network",permalink:"/evolve/docs/evolve-app-server/2.2.0/api/network",draft:!1,tags:[],version:"2.2.0",frontMatter:{id:"network-api",slug:"/api/network",title:"Network",hide_title:!0},sidebar:"sidebar",previous:{title:"Map",permalink:"/evolve/docs/evolve-app-server/2.2.0/api/map"},next:{title:"PowerFactoryModel",permalink:"/evolve/docs/evolve-app-server/2.2.0/api/power-factory-model"}},l={},s=[],d={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{specUrl:"network/spec.yaml",documentUrl:"/api/network",oauth2RedirectUrl:"swagger-oauth2-redirect.html",mdxType:"ApiDoc"}))}f.isMDXComponent=!0}}]);