(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=r,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||c;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=(n(56),n(23)),a=n(170),i=n(169),u=n(171);t.a=({specUrl:e,documentUrl:t})=>{const{siteConfig:p}=Object(c.default)(),s=Object(a.default)();let l;if("undefined"!=typeof window){const n=RegExp(`${p.baseUrl}(.*)${t}`,"g").exec(window.location.href);if(null!=n)l=Object(i.a)(["spec",n[1],e].join("/"));else{const t=Object(u.find)(s["docusaurus-plugin-content-docs"].default.versions,(e=>!0===e.isLast));l=Object(i.a)(["spec","current"===t.name?"next":t.name,e].join("/"))}}return Object(r.useEffect)((()=>{setTimeout((()=>{const e="swagger-ui";if(!document.getElementById(e)){const t=document.createElement("div");t.id=e,document.getElementById("api-doc").appendChild(t),void 0!==typeof window&&n.e(98).then(n.t.bind(null,172,7)).then((e=>{e.default({url:l,dom_id:"#swagger-ui",defaultModelsExpandDepth:1,docExpansion:"list"})}))}}),500)}),[]),o.a.createElement("div",{id:"api-doc"})}},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(167)),a=n(168),i={id:"store-api",slug:"/api/store",title:"Store API",hide_title:!0,hide_table_of_contents:!0},u={unversionedId:"api/other/store-api",id:"api/other/store-api",isDocsHomePage:!1,title:"Store API",source:"@site/docs\\api\\other\\store.mdx",slug:"/api/store",permalink:"/evolve/docs/energy-workbench-server/next/api/store",version:"current"},p=[],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(a.a,{specUrl:"store/spec.yaml",documentUrl:"/api/store",mdxType:"ApiDoc"}))}l.isMDXComponent=!0}}]);