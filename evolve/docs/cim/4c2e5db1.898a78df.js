(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{2174:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},2175:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c({ref:t},l,{components:n})):o.a.createElement(b,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2176:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(10),i=n(2174),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(2177),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,b=e.href,v=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,h=void 0===m||m,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=Object(l.b)().withBaseUrl,g=Object(r.useContext)(s),P=f||b,E=Object(i.a)(P),C=null==P?void 0:P.replace("pathname://",""),N=void 0!==C?(n=C,h&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,k=Object(r.useRef)(!1),B=p?a.e:a.c,I=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!I&&E&&window.docusaurus.prefetch(N),function(){I&&d&&d.disconnect()}}),[N,I,E]);var U=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,x=!N||!E||U;return N&&E&&!U&&!j&&g.collectLink(N),x?o.a.createElement("a",Object.assign({href:N},P&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(B,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:function(e){var t,n;I&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:N||""},p&&{isActive:O,activeClassName:v}))}},2177:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(23),o=n(2174);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},697:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(2175)),i=n(2176),c={title:"PhotoVoltaicUnit"},s={unversionedId:"evolve/IEC61970/Base/Generation/Production/PhotoVoltaicUnit",id:"evolve/IEC61970/Base/Generation/Production/PhotoVoltaicUnit",isDocsHomePage:!1,title:"PhotoVoltaicUnit",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Generation\\Production\\PhotoVoltaicUnit.md",slug:"/evolve/IEC61970/Base/Generation/Production/PhotoVoltaicUnit",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Generation/Production/PhotoVoltaicUnit",version:"current",sidebar:"docs",previous:{title:"BatteryStateKind",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Generation/Production/BatteryStateKind"},next:{title:"PowerElectronics \ud83d\uddbc",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Generation/Production/PowerElectronics"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"A photovoltaic device or an aggregation of such devices.  "),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(i.a,{to:"/evolve/IEC61970/Base/Generation/Production/PowerElectronicsUnit",mdxType:"Link"},"PowerElectronicsUnit"))),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}d.isMDXComponent=!0}}]);