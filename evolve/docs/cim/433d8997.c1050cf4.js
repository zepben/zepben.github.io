(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{2160:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return a?n.a.createElement(f,o({ref:t},l,{components:a})):n.a.createElement(f,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2160),o=a(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=a(2163),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:b,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),y=Object(r.useContext)(s),C=p||b,h=Object(i.a)(C),g=null==C?void 0:C.replace("pathname://",""),k=void 0!==g?(w=g,m&&(e=>e.startsWith("/"))(w)?v(w):w):void 0;var w;const D=Object(r.useRef)(!1),I=a?c.e:c.c,N=o.a.canUseIntersectionObserver;let E;Object(r.useEffect)((()=>(!N&&h&&window.docusaurus.prefetch(k),()=>{N&&E&&E.disconnect()})),[k,N,h]);const M=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,x=!k||!h||M;return k&&h&&!M&&!O&&y.collectLink(k),x?n.a.createElement("a",Object.assign({href:k},C&&!h&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(I,Object.assign({},j,{onMouseEnter:()=>{D.current||(window.docusaurus.preload(k),D.current=!0)},innerRef:e=>{var t,a;N&&e&&h&&(t=e,a=()=>{window.docusaurus.prefetch(k)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:k||""},a&&{isActive:f,activeClassName:d}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,r)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},633:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(2161)),i=a(2162),o={title:"DefaultBidCurveData"},s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/DefaultBidCurveData",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/DefaultBidCurveData",isDocsHomePage:!1,title:"DefaultBidCurveData",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\ExternalInputs\\DefaultBidCurveData.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/DefaultBidCurveData",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/DefaultBidCurveData",version:"current",sidebar:"docs",previous:{title:"DefaultConstraintLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/DefaultConstraintLimit"},next:{title:"DefaultBidCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/DefaultBidCurve"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Curve data for default bid curve and startup cost curve."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"bidSegmentCalcType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/BidCalculationBasis",mdxType:"Link"},"BidCalculationBasis")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Type of calculation basis used to define the default bid segment curve.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/CurveData",mdxType:"Link"},"CurveData"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}p.isMDXComponent=!0}}]);