(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(483)),a=n(481),c={title:"UInt32"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",id:"2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",isDocsHomePage:!1,title:"UInt32",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\PrimitiveTypes\\UInt32.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",version:"current",sidebar:"docs",previous:{title:"UInt16",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16"},next:{title:"UInt40",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt40"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Unsigned integer, max inclusive 4294967295 (2^32-1)  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"None")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(a.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/PENType",mdxType:"Link"},"PENType")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(a.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/PINType",mdxType:"Link"},"PINType"))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},481:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(10),a=n(480),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(482),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:f,isActive:m,"data-noBrokenLinkCheck":b,autoAddBaseUrl:O=!0}=e,v=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(u.b)(),j=Object(r.useContext)(s),E=p||d,h=Object(a.a)(E),w=null==E?void 0:E.replace("pathname://",""),g=void 0!==w?(I=w,O&&(e=>e.startsWith("/"))(I)?y(I):I):void 0;var I;const P=Object(r.useRef)(!1),C=n?o.e:o.c,T=c.a.canUseIntersectionObserver;let k;Object(r.useEffect)((()=>(!T&&h&&window.docusaurus.prefetch(g),()=>{T&&k&&k.disconnect()})),[g,T,h]);const N=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,U=!g||!h||N;return g&&h&&!N&&!b&&j.collectLink(g),U?i.a.createElement("a",Object.assign({href:g},E&&!h&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(C,Object.assign({},v,{onMouseEnter:()=>{P.current||(window.docusaurus.preload(g),P.current=!0)},innerRef:e=>{var t,n;T&&e&&h&&(t=e,n=()=>{window.docusaurus.prefetch(g)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:g||""},n&&{isActive:m,activeClassName:f}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(23),i=n(480);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return n?i.a.createElement(m,c({ref:t},u,{components:n})):i.a.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);