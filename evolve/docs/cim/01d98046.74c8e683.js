(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2160:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},2161:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return r?n.a.createElement(f,o({ref:t},l,{components:r})):n.a.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2162:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(10),c=r(2160),o=r(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=r(2163),u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t,{isNavLink:r,to:b,href:p,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),h=Object(a.useContext)(s),v=b||p,N=Object(c.a)(v),y=null==v?void 0:v.replace("pathname://",""),C=void 0!==y?(w=y,m&&(e=>e.startsWith("/"))(w)?g(w):w):void 0;var w;const I=Object(a.useRef)(!1),E=r?i.e:i.c,T=o.a.canUseIntersectionObserver;let P;Object(a.useEffect)((()=>(!T&&N&&window.docusaurus.prefetch(C),()=>{T&&P&&P.disconnect()})),[C,T,N]);const k=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,x=!C||!N||k;return C&&N&&!k&&!O&&h.collectLink(C),x?n.a.createElement("a",Object.assign({href:C},v&&!N&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(E,Object.assign({},j,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(C),I.current=!0)},innerRef:e=>{var t,r;T&&e&&N&&(t=e,r=()=>{window.docusaurus.prefetch(C)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),r())}))})),P.observe(t))},to:C||""},r&&{isActive:f,activeClassName:d}))}},2163:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var a=r(23),n=r(2160);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(a)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,a)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(2161)),c=(r(2162),{title:"NotificationTriggerKind"}),o={unversionedId:"cim100/TC57CIM/IEC61968/Customers/NotificationTriggerKind",id:"cim100/TC57CIM/IEC61968/Customers/NotificationTriggerKind",isDocsHomePage:!1,title:"NotificationTriggerKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Customers\\NotificationTriggerKind.md",slug:"/cim100/TC57CIM/IEC61968/Customers/NotificationTriggerKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/NotificationTriggerKind",version:"current",sidebar:"docs",previous:{title:"IncidentHazard",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/IncidentHazard"},next:{title:"PricingStructure",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/PricingStructure"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Kind of trigger to notify customer.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"initialEtr"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Notify customer for the first time that estimated restoration time is available.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"etrChange"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Notify customer if estimated restoration time changes.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"powerRestored"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Notify customer when power has been restored.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"powerOut"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Notify customer of planned outage.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"informDispatched"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Notify customer that a crew has been dispatched to investigate the problem.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}u.isMDXComponent=!0}}]);