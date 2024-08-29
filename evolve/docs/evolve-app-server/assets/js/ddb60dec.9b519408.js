"use strict";(self.webpackChunkewb_app_server_doco=self.webpackChunkewb_app_server_doco||[]).push([[639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1423:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7294),o=r(2263),i=r(8084),a=r(4996),c=r(6486);const p=e=>{let{specUrl:t,documentUrl:p,oauth2RedirectUrl:s}=e;const{siteConfig:l}=(0,o.Z)(),u=(0,i.ZP)();let d;if("undefined"!=typeof window){const e=RegExp(l.baseUrl+"(.*)"+p,"g").exec(window.location.href);if(null!=e)d=(0,a.Z)(["spec",e[1],t].join("/"));else{const e=(0,c.find)(u["docusaurus-plugin-content-docs"].default.versions,(e=>!0===e.isLast));d=(0,a.Z)(["spec","current"===e.name?"next":e.name,t].join("/"))}}return(0,n.useEffect)((()=>{setTimeout((()=>{const e="swagger-ui";if(!document.getElementById(e)){const t=document.createElement("div");t.id=e,document.getElementById("api-doc").appendChild(t),void 0!==typeof window&&r.e(416).then(r.t.bind(r,1416,23)).then((t=>{t.default({url:d,dom_id:"#"+e,defaultModelsExpandDepth:1,docExpansion:"list",oauth2RedirectUrl:""+window.location.origin+l.baseUrl+s})}))}}),500)}),[]),n.createElement("div",{id:"api-doc"})}},7203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905)),i=r(1423);const a={id:"user-api",slug:"/api/user",title:"User",hide_title:!0},c=void 0,p={unversionedId:"api/user-api",id:"version-2.0.0/api/user-api",title:"User",description:"",source:"@site/versioned_docs/version-2.0.0/api/user.mdx",sourceDirName:"api",slug:"/api/user",permalink:"/evolve/docs/evolve-app-server/2.0.0/api/user",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"user-api",slug:"/api/user",title:"User",hide_title:!0},sidebar:"version-2.0.0/sidebar",previous:{title:"Config",permalink:"/evolve/docs/evolve-app-server/2.0.0/api/config"},next:{title:"Map",permalink:"/evolve/docs/evolve-app-server/2.0.0/api/map"}},s={},l=[],u={toc:l},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{specUrl:"user/spec.yaml",documentUrl:"/api/user",oauth2RedirectUrl:"swagger-oauth2-redirect.html",mdxType:"ApiDoc"}))}f.isMDXComponent=!0}}]);