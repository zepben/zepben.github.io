(window.webpackJsonp=window.webpackJsonp||[]).push([[880],{2160:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2161:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?a.a.createElement(b,i({ref:t},l,{components:r})):a.a.createElement(b,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2162:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(10),c=r(2160),i=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(2163),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:d,activeClassName:f,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),h=Object(n.useContext)(s),y=p||d,w=Object(c.a)(y),C=null==y?void 0:y.replace("pathname://",""),g=void 0!==C?(k=C,O&&(e=>e.startsWith("/"))(k)?v(k):k):void 0;var k;const I=Object(n.useRef)(!1),N=r?o.e:o.c,T=i.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!T&&w&&window.docusaurus.prefetch(g),()=>{T&&E&&E.disconnect()})),[g,T,w]);const P=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,R=!g||!w||P;return g&&w&&!P&&!m&&h.collectLink(g),R?a.a.createElement("a",Object.assign({href:g},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(N,Object.assign({},j,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(g),I.current=!0)},innerRef:e=>{var t,r;T&&e&&w&&(t=e,r=()=>{window.docusaurus.prefetch(g)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:g||""},r&&{isActive:b,activeClassName:f}))}},2163:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(23),a=r(2160);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},951:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(2161)),c=(r(2162),{title:"TransformerRepairItemKind"}),i={unversionedId:"cim100/TC57CIM/IEC61968/Work/TransformerRepairItemKind",id:"cim100/TC57CIM/IEC61968/Work/TransformerRepairItemKind",isDocsHomePage:!1,title:"TransformerRepairItemKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Work\\TransformerRepairItemKind.md",slug:"/cim100/TC57CIM/IEC61968/Work/TransformerRepairItemKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/TransformerRepairItemKind",version:"current",sidebar:"docs",previous:{title:"WorkTimeScheduleKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/WorkTimeScheduleKind"},next:{title:"AccountNotification",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/AccountNotification"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Transformer components and problem areas which can be the focus of a repair work task."),Object(o.a)("p",null,"WorkTimeScheduleKind enumeration"),Object(o.a)("p",null,"Kind of work schedule.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"None")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}u.isMDXComponent=!0}}]);