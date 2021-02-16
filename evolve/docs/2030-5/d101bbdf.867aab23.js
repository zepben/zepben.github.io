(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(483)),o=n(481),c={title:"SignedRealEnergy"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/Types/SignedRealEnergy",id:"2030-5/SmartGrid/IEEE2030-5/Common/Types/SignedRealEnergy",isDocsHomePage:!1,title:"SignedRealEnergy",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\Types\\SignedRealEnergy.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/SignedRealEnergy",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/SignedRealEnergy",version:"current",sidebar:"docs",previous:{title:"VersionType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/VersionType"},next:{title:"GPSLocationType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/GPSLocationType"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Real electrical energy, signed.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"multiplier"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/PowerOfTenMultiplierType",mdxType:"Link"},"PowerOfTenMultiplierType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Multiplier for 'unit'.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"value"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/Int48",mdxType:"Link"},"Int48")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Value of the energy in Watt-hours. (uom 72)")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},481:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(480),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(482),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:b,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),v=Object(r.useContext)(s),g=p||d,E=Object(o.a)(g),h=null==g?void 0:g.replace("pathname://",""),w=void 0!==h?(N=h,O&&(e=>e.startsWith("/"))(N)?j(N):N):void 0;var N;const T=Object(r.useRef)(!1),C=n?i.e:i.c,S=c.a.canUseIntersectionObserver;let P;Object(r.useEffect)((()=>(!S&&E&&window.docusaurus.prefetch(w),()=>{S&&P&&P.disconnect()})),[w,S,E]);const k=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,I=!w||!E||k;return w&&E&&!k&&!m&&v.collectLink(w),I?a.a.createElement("a",Object.assign({href:w},g&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(C,Object.assign({},y,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:e=>{var t,n;S&&e&&E&&(t=e,n=()=>{window.docusaurus.prefetch(w)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))})),P.observe(t))},to:w||""},n&&{isActive:f,activeClassName:b}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);