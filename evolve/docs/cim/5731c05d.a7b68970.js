(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{2207:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2208:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(f,o({ref:t},l,{components:r})):a.a.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2209:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(10),c=r(2207),o=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(2210),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:b,href:p,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),g=Object(n.useContext)(s),h=b||p,y=Object(c.a)(h),N=null==h?void 0:h.replace("pathname://",""),C=void 0!==N?(w=N,m&&(e=>e.startsWith("/"))(w)?v(w):w):void 0;var w;const M=Object(n.useRef)(!1),I=r?i.e:i.c,E=o.a.canUseIntersectionObserver;let T;Object(n.useEffect)((()=>(!E&&y&&window.docusaurus.prefetch(C),()=>{E&&T&&T.disconnect()})),[C,E,y]);const P=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,k=!C||!y||P;return C&&y&&!P&&!O&&g.collectLink(C),k?a.a.createElement("a",Object.assign({href:C},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(I,Object.assign({},j,{onMouseEnter:()=>{M.current||(window.docusaurus.preload(C),M.current=!0)},innerRef:e=>{var t,r;E&&e&&y&&(t=e,r=()=>{window.docusaurus.prefetch(C)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),r())}))})),T.observe(t))},to:C||""},r&&{isActive:f,activeClassName:d}))}},2210:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(23),a=r(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},813:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(2208)),c=(r(2209),{title:"ServiceMultiplierKind",hide_table_of_contents:!0}),o={unversionedId:"cim100/TC57CIM/IEC61968/Metering/ServiceMultiplierKind",id:"cim100/TC57CIM/IEC61968/Metering/ServiceMultiplierKind",isDocsHomePage:!1,title:"ServiceMultiplierKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\ServiceMultiplierKind.mdx",slug:"/cim100/TC57CIM/IEC61968/Metering/ServiceMultiplierKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/ServiceMultiplierKind",version:"current",sidebar:"docs",previous:{title:"ReadingReasonKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/ReadingReasonKind"},next:{title:"TransmissionModeKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/TransmissionModeKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Kind of service multiplier."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ctRatio"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Current transformer ratio used to convert associated quantities to real measurements.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ptRatio"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage transformer ratio used to convert associated quantities to real measurements.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"transformerRatio"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Product of the CT ratio and PT ratio.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}u.isMDXComponent=!0}}]);