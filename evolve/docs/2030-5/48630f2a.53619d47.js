(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(483)),a=n(481),c={title:"TimeOffsetType"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeOffsetType",id:"2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeOffsetType",isDocsHomePage:!1,title:"TimeOffsetType",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\Types\\TimeOffsetType.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeOffsetType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeOffsetType",version:"current",sidebar:"docs",previous:{title:"SubscribableType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/SubscribableType"},next:{title:"TimeType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeType"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A signed time offset, typically applied to a Time value, expressed in seconds.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(a.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/Int32",mdxType:"Link"},"Int32"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},481:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(10),a=n(480),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(482),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:f,activeClassName:d,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,y=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(u.b)(),j=Object(r.useContext)(s),h=p||f,E=Object(a.a)(h),T=null==h?void 0:h.replace("pathname://",""),w=void 0!==T?(g=T,O&&(e=>e.startsWith("/"))(g)?v(g):g):void 0;var g;const C=Object(r.useRef)(!1),k=n?i.e:i.c,P=c.a.canUseIntersectionObserver;let I;Object(r.useEffect)((()=>(!P&&E&&window.docusaurus.prefetch(w),()=>{P&&I&&I.disconnect()})),[w,P,E]);const x=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!E||x;return w&&E&&!x&&!m&&j.collectLink(w),S?o.a.createElement("a",Object.assign({href:w},h&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(k,Object.assign({},y,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(w),C.current=!0)},innerRef:e=>{var t,n;P&&e&&E&&(t=e,n=()=>{window.docusaurus.prefetch(w)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))})),I.observe(t))},to:w||""},n&&{isActive:b,activeClassName:d}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(23),o=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,b=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(b,c({ref:t},u,{components:n})):o.a.createElement(b,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);