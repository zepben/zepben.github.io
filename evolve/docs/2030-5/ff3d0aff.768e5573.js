(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{475:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(483)),o=(r(481),{title:"HexBinary8"}),c={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/HexBinary8",id:"2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/HexBinary8",isDocsHomePage:!1,title:"HexBinary8",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\PrimitiveTypes\\HexBinary8.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/HexBinary8",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/HexBinary8",version:"current",sidebar:"docs",previous:{title:"GPSLocationType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/GPSLocationType"},next:{title:"HexBinary16",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/HexBinary16"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,'An 8-bit field encoded as a hex string (2 hex characters). Where applicable, bit 0, or the least significant bit, goes on the right. Note that hexBinary requires pairs of hex characters, so an odd number of characters requires a leading "0".   '),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"None")),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}l.isMDXComponent=!0},480:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},481:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(10),o=r(480),c=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var u=r(482),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:d,activeClassName:f,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,v=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(u.b)(),h=Object(n.useContext)(s),j=p||d,g=Object(o.a)(j),w=null==j?void 0:j.replace("pathname://",""),E=void 0!==w?(x=w,O&&(e=>e.startsWith("/"))(x)?y(x):x):void 0;var x;const P=Object(n.useRef)(!1),C=r?a.e:a.c,k=c.a.canUseIntersectionObserver;let B;Object(n.useEffect)((()=>(!k&&g&&window.docusaurus.prefetch(E),()=>{k&&B&&B.disconnect()})),[E,k,g]);const N=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,T=!E||!g||N;return E&&g&&!N&&!m&&h.collectLink(E),T?i.a.createElement("a",Object.assign({href:E},j&&!g&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(C,Object.assign({},v,{onMouseEnter:()=>{P.current||(window.docusaurus.preload(E),P.current=!0)},innerRef:e=>{var t,r;k&&e&&g&&(t=e,r=()=>{window.docusaurus.prefetch(E)},B=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),r())}))})),B.observe(t))},to:E||""},r&&{isActive:b,activeClassName:f}))}},482:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r(23),i=r(480);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},483:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return r?i.a.createElement(b,c({ref:t},u,{components:r})):i.a.createElement(b,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);