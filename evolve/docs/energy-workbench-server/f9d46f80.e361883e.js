(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(126)),i=t(127),c={id:"analysis-api",slug:"/api/analysis",title:"Analysis API",hide_title:!0,hide_table_of_contents:!0},s={unversionedId:"api/energy/analysis-api",id:"version-2.6.0/api/energy/analysis-api",isDocsHomePage:!1,title:"Analysis API",source:"@site/versioned_docs\\version-2.6.0\\api\\energy\\analysis.mdx",slug:"/api/analysis",permalink:"/evolve/docs/energy-workbench-server/2.6.0/api/analysis",version:"2.6.0"},l=[],u={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(i.a,{specUrl:"energy/analysis/spec.yaml",documentUrl:"/api/analysis",mdxType:"ApiDoc"}))}p.isMDXComponent=!0},126:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?a.a.createElement(y,c(c({ref:n},l),{},{components:t})):a.a.createElement(y,c({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},127:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=(t(56),t(23)),i=t(129),c=t(128),s=t(132);n.a=({specUrl:e,documentUrl:n})=>{const{siteConfig:l}=Object(o.default)(),u=Object(i.default)();let p;if("undefined"!=typeof window){const t=RegExp(`${l.baseUrl}(.*)${n}`,"g").exec(window.location.href);if(null!=t)p=Object(c.a)(["spec",t[1],e].join("/"));else{const n=Object(s.find)(u["docusaurus-plugin-content-docs"].default.versions,(e=>!0===e.isLast));p=Object(c.a)(["spec","current"===n.name?"next":n.name,e].join("/"))}}return Object(r.useEffect)((()=>{setTimeout((()=>{const e="swagger-ui";if(!document.getElementById(e)){const n=document.createElement("div");n.id=e,document.getElementById("api-doc").appendChild(n),void 0!==typeof window&&t.e(57).then(t.t.bind(null,133,7)).then((e=>{e.default({url:p,dom_id:"#swagger-ui",defaultModelsExpandDepth:1,docExpansion:"list"})}))}}),500)}),[]),a.a.createElement("div",{id:"api-doc"})}}}]);