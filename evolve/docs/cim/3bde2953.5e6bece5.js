(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{2160:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},2161:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return r?n.a.createElement(f,i({ref:t},l,{components:r})):n.a.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2162:function(e,t,r){"use strict";var a=r(0),n=r.n(a),c=r(10),o=r(2160),i=r(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=r(2163),u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t,{isNavLink:r,to:b,href:p,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),h=Object(a.useContext)(s),g=b||p,y=Object(o.a)(g),C=null==g?void 0:g.replace("pathname://",""),w=void 0!==C?(N=C,m&&(e=>e.startsWith("/"))(N)?v(N):N):void 0;var N;const I=Object(a.useRef)(!1),T=r?c.e:c.c,P=i.a.canUseIntersectionObserver;let E;Object(a.useEffect)((()=>(!P&&y&&window.docusaurus.prefetch(w),()=>{P&&E&&E.disconnect()})),[w,P,y]);const k=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!y||k;return w&&y&&!k&&!O&&h.collectLink(w),S?n.a.createElement("a",Object.assign({href:w},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(T,Object.assign({},j,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(w),I.current=!0)},innerRef:e=>{var t,r;P&&e&&y&&(t=e,r=()=>{window.docusaurus.prefetch(w)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:w||""},r&&{isActive:f,activeClassName:d}))}},2163:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var a=r(23),n=r(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(a)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+o:o}(t,e,r,a)}}function o(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},564:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),c=(r(0),r(2161)),o=r(2162),i={title:"InflowForecast"},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/Production/InflowForecast",id:"cim100/TC57CIM/IEC61970/Base/Generation/Production/InflowForecast",isDocsHomePage:!1,title:"InflowForecast",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Generation\\Production\\InflowForecast.md",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/InflowForecast",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/InflowForecast",version:"current",sidebar:"docs",previous:{title:"GeneratorControlSource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratorControlSource"},next:{title:"SteamSendoutSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/SteamSendoutSchedule"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Natural water inflow to a reservoir, usually forecasted from predicted rain and snowmelt. Typically in one hour increments for up to 10 days. The forecast is given in average cubic meters per second over the time increment.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule",mdxType:"Link"},"RegularIntervalSchedule"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/InflowForecast",mdxType:"Link"},"InflowForecast")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/Reservoir",mdxType:"Link"},"Reservoir")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"InflowForecasts"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'A reservoir may have a "natural" inflow forecast.'),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Reservoir"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'A reservoir may have a "natural" inflow forecast.')))))}b.isMDXComponent=!0}}]);