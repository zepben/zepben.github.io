(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{2160:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2161:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?a.a.createElement(b,i({ref:t},l,{components:r})):a.a.createElement(b,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2162:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(10),c=r(2160),i=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(2163),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:f,activeClassName:d,isActive:b,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),C=Object(n.useContext)(s),h=p||f,y=Object(c.a)(h),w=null==h?void 0:h.replace("pathname://",""),g=void 0!==w?(k=w,m&&(e=>e.startsWith("/"))(k)?j(k):k):void 0;var k;const M=Object(n.useRef)(!1),x=r?o.e:o.c,I=i.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!I&&y&&window.docusaurus.prefetch(g),()=>{I&&E&&E.disconnect()})),[g,I,y]);const N=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,D=!g||!y||N;return g&&y&&!N&&!O&&C.collectLink(g),D?a.a.createElement("a",Object.assign({href:g},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(x,Object.assign({},v,{onMouseEnter:()=>{M.current||(window.docusaurus.preload(g),M.current=!0)},innerRef:e=>{var t,r;I&&e&&y&&(t=e,r=()=>{window.docusaurus.prefetch(g)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:g||""},r&&{isActive:b,activeClassName:d}))}},2163:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(23),a=r(2160);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},657:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2161)),c=r(2162),i={title:"MaxStartUpCostCurve"},s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/MaxStartUpCostCurve",id:"cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/MaxStartUpCostCurve",isDocsHomePage:!1,title:"MaxStartUpCostCurve",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\ReferenceData\\MaxStartUpCostCurve.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/MaxStartUpCostCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/MaxStartUpCostCurve",version:"current",sidebar:"docs",previous:{title:"Pnode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/Pnode"},next:{title:"MarketSkill",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/MarketSkill"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"The maximum Startup costs and time as a function of down time.  Relationship between unit startup cost (Y1-axis) vs. unit elapsed down time (X-axis). This is used to validate the information provided in the Bid."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Curve",mdxType:"Link"},"Curve"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0}}]);