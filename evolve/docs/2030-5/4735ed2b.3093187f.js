(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(483)),o=n(481),c={title:"DataQualifierType"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/Types/DataQualifierType",id:"2030-5/SmartGrid/IEEE2030-5/Common/Types/DataQualifierType",isDocsHomePage:!1,title:"DataQualifierType",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\Types\\DataQualifierType.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/DataQualifierType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/DataQualifierType",version:"current",sidebar:"docs",previous:{title:"CurrencyCode",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/CurrencyCode"},next:{title:"DateTimeInterval",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/DateTimeInterval"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"0 = Not Applicable (default, if not specified)"),Object(i.a)("p",null,"2 = Average"),Object(i.a)("p",null,"8 = Maximum"),Object(i.a)("p",null,"9 = Minimum"),Object(i.a)("p",null,"12 = Normal"),Object(i.a)("p",null,"29 = Standard Deviation of a Population (typically indicated by a lower case sigma)"),Object(i.a)("p",null,"30 = Standard Deviation of a Sample Drawn from a Population (typically indicated by a lower case 's')"),Object(i.a)("p",null,"All other values reserved.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt8",mdxType:"Link"},"UInt8"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},481:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(480),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(482),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:f,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),j=Object(r.useContext)(s),h=p||d,w=Object(o.a)(h),E=null==h?void 0:h.replace("pathname://",""),g=void 0!==E?(C=E,O&&(e=>e.startsWith("/"))(C)?v(C):C):void 0;var C;const T=Object(r.useRef)(!1),D=n?i.e:i.c,P=c.a.canUseIntersectionObserver;let k;Object(r.useEffect)((()=>(!P&&w&&window.docusaurus.prefetch(g),()=>{P&&k&&k.disconnect()})),[g,P,w]);const I=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,N=!g||!w||I;return g&&w&&!I&&!m&&j.collectLink(g),N?a.a.createElement("a",Object.assign({href:g},h&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(D,Object.assign({},y,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(g),T.current=!0)},innerRef:e=>{var t,n;P&&e&&w&&(t=e,n=()=>{window.docusaurus.prefetch(g)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:g||""},n&&{isActive:b,activeClassName:f}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);