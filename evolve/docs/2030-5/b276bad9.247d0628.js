(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{362:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(483)),i=r(481),c={title:"Error"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/Objects/Error",id:"2030-5/SmartGrid/IEEE2030-5/Common/Objects/Error",isDocsHomePage:!1,title:"Error",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\Objects\\Error.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/Objects/Error",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Objects/Error",version:"current",sidebar:"docs",previous:{title:"SubscribableResource",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Identification/SubscribableResource"},next:{title:"Event",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Objects/Event"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Contains information about the nature of an error if a request could not be completed successfully.   "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxRetryDuration"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Contains the number of seconds the client SHOULD wait before retrying the request.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reasonCode"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Code indicating the reason for failure.  0 - Invalid request format 1 - Invalid request values (e.g. invalid threshold values) 2 - Resource limit reached 3 - Conditional subscription field not supported 4 - Maximum request frequency exceeded All other values reserved")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"None")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}b.isMDXComponent=!0},480:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},481:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(10),i=r(480),c=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(482),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:b,href:p,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),y=Object(n.useContext)(s),h=b||p,E=Object(i.a)(h),g=null==h?void 0:h.replace("pathname://",""),w=void 0!==g?(C=g,O&&(e=>e.startsWith("/"))(C)?v(C):C):void 0;var C;const N=Object(n.useRef)(!1),I=r?o.e:o.c,k=c.a.canUseIntersectionObserver;let x;Object(n.useEffect)((()=>(!k&&E&&window.docusaurus.prefetch(w),()=>{k&&x&&x.disconnect()})),[w,k,E]);const P=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!E||P;return w&&E&&!P&&!m&&y.collectLink(w),S?a.a.createElement("a",Object.assign({href:w},h&&!E&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(I,Object.assign({},j,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(w),N.current=!0)},innerRef:e=>{var t,r;k&&e&&E&&(t=e,r=()=>{window.docusaurus.prefetch(w)},x=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),r())}))})),x.observe(t))},to:w||""},r&&{isActive:f,activeClassName:d}))}},482:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(23),a=r(480);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},483:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,c({ref:t},l,{components:r})):a.a.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);