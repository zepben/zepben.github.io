(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{2199:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},2200:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),O=a,f=b["".concat(o,".").concat(O)]||b[O]||p[O]||c;return r?n.a.createElement(f,s({ref:t},l,{components:r})):n.a.createElement(f,s({ref:t},l))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2201:function(e,t,r){"use strict";var a=r(0),n=r.n(a),c=r(10),o=r(2199),s=r(8);const i=Object(a.createContext)({collectLink:()=>{}});var l=r(2202),u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:b,activeClassName:O,isActive:f,"data-noBrokenLinkCheck":d,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),g=Object(a.useContext)(i),v=p||b,h=Object(o.a)(v),k=null==v?void 0:v.replace("pathname://",""),C=void 0!==k?(M=k,m&&(e=>e.startsWith("/"))(M)?y(M):M):void 0;var M;const N=Object(a.useRef)(!1),E=r?c.e:c.c,w=s.a.canUseIntersectionObserver;let R;Object(a.useEffect)((()=>(!w&&h&&window.docusaurus.prefetch(C),()=>{w&&R&&R.disconnect()})),[C,w,h]);const P=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,x=!C||!h||P;return C&&h&&!P&&!d&&g.collectLink(C),x?n.a.createElement("a",Object.assign({href:C},v&&!h&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(E,Object.assign({},j,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(C),N.current=!0)},innerRef:e=>{var t,r;w&&e&&h&&(t=e,r=()=>{window.docusaurus.prefetch(C)},R=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(R.unobserve(t),R.disconnect(),r())}))})),R.observe(t))},to:C||""},r&&{isActive:f,activeClassName:O}))}},2202:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var a=r(23),n=r(2199);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(a)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+o:o}(t,e,r,a)}}function o(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},334:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),c=(r(0),r(2200)),o=r(2201),s={title:"ExPostResource",hide_table_of_contents:!0},i={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostResource",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostResource",isDocsHomePage:!1,title:"ExPostResource",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\MarketResults\\ExPostResource.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostResource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostResource",version:"current",sidebar:"docs",previous:{title:"AncillaryServiceClearing",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/AncillaryServiceClearing"},next:{title:"ExPostPricingResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostPricingResults"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Model of ex-post pricing of resources.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",mdxType:"Link"},"MarketFactors"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostResourceResults",mdxType:"Link"},"ExPostResourceResults")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostResource",mdxType:"Link"},"ExPostResource")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ExPostResourceResults"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ExPostResource"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);