(window.webpackJsonp=window.webpackJsonp||[]).push([[1835],{1906:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(2161)),c=n(2162),o={title:"OverexcLim2"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",isDocsHomePage:!1,title:"OverexcLim2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\OverexcitationLimiterDynamics\\OverexcLim2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",version:"current",sidebar:"docs",previous:{title:"OverexcLimIEEE",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE"},next:{title:"OverexcLimX1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimX1"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Different from LimIEEEOEL, LimOEL2 has a fixed pickup threshold and reduces the excitation set-point by means of a non-windup integral regulator."),Object(i.a)("i",null,"Irated")," is the rated machine excitation current (calculated from nameplate conditions: ",Object(i.a)("i",null,"V"),Object(i.a)("i",null,Object(i.a)("sub",null,"nom")),", ",Object(i.a)("i",null,"P"),Object(i.a)("i",null,Object(i.a)("sub",null,"nom")),", ",Object(i.a)("i",null,"CosPhi"),Object(i.a)("i",null,Object(i.a)("sub",null,"nom")),"). ### Attributes | Name   | Type                                                         | Description                                                                                               | |:-------|:-------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------| | ifdlim | ",Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Limit value of rated field current (",Object(i.a)("i",null,"I"),Object(i.a)("i",null,Object(i.a)("sub",null,"FDLIM")),").  Typical value = 1,05.              | | koi    | ",Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Gain Over excitation limiter (",Object(i.a)("i",null,"K"),Object(i.a)("i",null,Object(i.a)("sub",null,"OI")),").  Typical value = 0,1.                        | | voimax | ",Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum error signal (",Object(i.a)("i",null,"V"),Object(i.a)("i",null,Object(i.a)("sub",null,"OIMAX")),") (> OverexcLim2.voimin).  Typical value = 0.     | | voimin | ",Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum error signal (",Object(i.a)("i",null,"V"),Object(i.a)("i",null,Object(i.a)("sub",null,"OIMIN")),") (< OverexcLim2.voimax).  Typical value = -9999. | ### Relationships __Inherits from__ - ",Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcitationLimiterDynamics",mdxType:"Link"},"OverexcitationLimiterDynamics"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}m.isMDXComponent=!0},2160:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2161:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),O=u(n),d=r,b=O["".concat(c,".").concat(d)]||O[d]||m[d]||i;return n?a.a.createElement(b,o({ref:t},l,{components:n})):a.a.createElement(b,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=O;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},2162:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),c=n(2160),o=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(2163),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:m,href:O,activeClassName:d,isActive:b,"data-noBrokenLinkCheck":p,autoAddBaseUrl:f=!0}=e,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),y=Object(r.useContext)(s),C=m||O,x=Object(c.a)(C),h=null==C?void 0:C.replace("pathname://",""),L=void 0!==h?(I=h,f&&(e=>e.startsWith("/"))(I)?j(I):I):void 0;var I;const g=Object(r.useRef)(!1),E=n?i.e:i.c,w=o.a.canUseIntersectionObserver;let D;Object(r.useEffect)((()=>(!w&&x&&window.docusaurus.prefetch(L),()=>{w&&D&&D.disconnect()})),[L,w,x]);const M=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,T=!L||!x||M;return L&&x&&!M&&!p&&y.collectLink(L),T?a.a.createElement("a",Object.assign({href:L},C&&!x&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(E,Object.assign({},v,{onMouseEnter:()=>{g.current||(window.docusaurus.preload(L),g.current=!0)},innerRef:e=>{var t,n;w&&e&&x&&(t=e,n=()=>{window.docusaurus.prefetch(L)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:L||""},n&&{isActive:b,activeClassName:d}))}},2163:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(23),a=n(2160);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}}}]);