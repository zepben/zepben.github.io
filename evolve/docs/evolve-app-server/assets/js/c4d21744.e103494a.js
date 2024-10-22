"use strict";(self.webpackChunkewb_app_server_doco=self.webpackChunkewb_app_server_doco||[]).push([[5889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1423:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),o=n(2263),i=n(8084),a=n(4996),c=n(6486);const l=e=>{let{specUrl:t,documentUrl:l,oauth2RedirectUrl:p}=e;const{siteConfig:d}=(0,o.Z)(),s=(0,i.ZP)();let u;if("undefined"!=typeof window){const e=RegExp(d.baseUrl+"(.*)"+l,"g").exec(window.location.href);if(null!=e)u=(0,a.Z)(["spec",e[1],t].join("/"));else{const e=(0,c.find)(s["docusaurus-plugin-content-docs"].default.versions,(e=>!0===e.isLast));u=(0,a.Z)(["spec","current"===e.name?"next":e.name,t].join("/"))}}return(0,r.useEffect)((()=>{setTimeout((()=>{const e="swagger-ui";if(!document.getElementById(e)){const t=document.createElement("div");t.id=e,document.getElementById("api-doc").appendChild(t),void 0!==typeof window&&n.e(1416).then(n.t.bind(n,1416,23)).then((t=>{t.default({url:u,dom_id:"#"+e,defaultModelsExpandDepth:1,docExpansion:"list",oauth2RedirectUrl:""+window.location.origin+d.baseUrl+p})}))}}),500)}),[]),r.createElement("div",{id:"api-doc"})}},2438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),i=n(1423);const a={id:"net-model-api",slug:"/api/net-model",title:"NetModel",hide_title:!0},c=void 0,l={unversionedId:"api/net-model-api",id:"version-2.0.0/api/net-model-api",title:"NetModel",description:"",source:"@site/versioned_docs/version-2.0.0/api/netmodel.mdx",sourceDirName:"api",slug:"/api/net-model",permalink:"/evolve/docs/evolve-app-server/2.0.0/api/net-model",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"net-model-api",slug:"/api/net-model",title:"NetModel",hide_title:!0}},p={},d=[],s={toc:d},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{specUrl:"netmodel/spec.yaml",documentUrl:"/api/net-model",oauth2RedirectUrl:"swagger-oauth2-redirect.html",mdxType:"ApiDoc"}))}f.isMDXComponent=!0}}]);