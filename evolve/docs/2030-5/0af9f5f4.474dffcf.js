(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},481:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(10),a=n(480),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(482),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:f,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,v=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(u.b)(),j=Object(r.useContext)(s),h=p||d,E=Object(a.a)(h),w=null==h?void 0:h.replace("pathname://",""),g=void 0!==w?(S=w,O&&(e=>e.startsWith("/"))(S)?y(S):S):void 0;var S;const T=Object(r.useRef)(!1),C=n?o.e:o.c,I=c.a.canUseIntersectionObserver;let k;Object(r.useEffect)((()=>(!I&&E&&window.docusaurus.prefetch(g),()=>{I&&k&&k.disconnect()})),[g,I,E]);const D=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,P=!g||!E||D;return g&&E&&!D&&!m&&j.collectLink(g),P?i.a.createElement("a",Object.assign({href:g},h&&!E&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(C,Object.assign({},v,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(g),T.current=!0)},innerRef:e=>{var t,n;I&&e&&E&&(t=e,n=()=>{window.docusaurus.prefetch(g)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:g||""},n&&{isActive:b,activeClassName:f}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(23),i=n(480);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return n?i.a.createElement(b,c({ref:t},u,{components:n})):i.a.createElement(b,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(483)),a=n(481),c={title:"SFDIType"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/Types/SFDIType",id:"2030-5/SmartGrid/IEEE2030-5/Common/Types/SFDIType",isDocsHomePage:!1,title:"SFDIType",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\Types\\SFDIType.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/SFDIType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/SFDIType",version:"current",sidebar:"docs",previous:{title:"ServiceKind",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/ServiceKind"},next:{title:"SubscribableType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/SubscribableType"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Unsigned integer, max inclusive 687194767359, which is 2^36-1 (68719476735), with added check digit. See Section 8.3.2 for check digit calculation.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(a.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt40",mdxType:"Link"},"UInt40"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0}}]);