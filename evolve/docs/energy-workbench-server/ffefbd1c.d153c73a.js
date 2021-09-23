(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{184:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(189)),i=t(190),c={id:"analysis-api",slug:"/api/analysis",title:"Analysis API",hide_title:!0,hide_table_of_contents:!0},u={unversionedId:"api/energy/analysis-api",id:"api/energy/analysis-api",isDocsHomePage:!1,title:"Analysis API",source:"@site/docs/api/energy/analysis.mdx",slug:"/api/analysis",permalink:"/evolve/docs/energy-workbench-server/next/api/analysis",version:"current"},l=[],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(i.a,{specUrl:"energy/analysis/spec.yaml",documentUrl:"/api/analysis",mdxType:"ApiDoc"}))}p.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,y=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return t?a.a.createElement(y,c(c({ref:n},l),{},{components:t})):a.a.createElement(y,c({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},190:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=(t(56),t(23)),i=t(192),c=t(191),u=t(193);n.a=function(e){var n,l=e.specUrl,s=e.documentUrl,p=Object(o.default)().siteConfig,f=Object(i.default)();if("undefined"!=typeof window){var d=RegExp(p.baseUrl+"(.*)"+s,"g").exec(window.location.href);if(null!=d)n=Object(c.a)(["spec",d[1],l].join("/"));else{var y=Object(u.find)(f["docusaurus-plugin-content-docs"].default.versions,(function(e){return!0===e.isLast}));n=Object(c.a)(["spec","current"===y.name?"next":y.name,l].join("/"))}}return Object(r.useEffect)((function(){setTimeout((function(){var e="swagger-ui";if(!document.getElementById(e)){var r=document.createElement("div");r.id=e,document.getElementById("api-doc").appendChild(r),void 0!==typeof window&&t.e(120).then(t.t.bind(null,194,7)).then((function(e){e.default({url:n,dom_id:"#swagger-ui",defaultModelsExpandDepth:1,docExpansion:"list"})}))}}),500)}),[]),a.a.createElement("div",{id:"api-doc"})}}}]);