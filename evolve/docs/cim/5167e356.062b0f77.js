(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{2207:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2208:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||c;return r?a.a.createElement(d,o({ref:t},l,{components:r})):a.a.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2209:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(10),i=r(2207),o=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(2210),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:b,activeClassName:f,isActive:d,"data-noBrokenLinkCheck":O,autoAddBaseUrl:j=!0}=e,m=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),h=Object(n.useContext)(s),y=p||b,g=Object(i.a)(y),C=null==y?void 0:y.replace("pathname://",""),I=void 0!==C?(w=C,j&&(e=>e.startsWith("/"))(w)?v(w):w):void 0;var w;const N=Object(n.useRef)(!1),E=r?c.e:c.c,S=o.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!S&&g&&window.docusaurus.prefetch(I),()=>{S&&k&&k.disconnect()})),[I,S,g]);const T=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,A=!I||!g||T;return I&&g&&!T&&!O&&h.collectLink(I),A?a.a.createElement("a",Object.assign({href:I},y&&!g&&{target:"_blank",rel:"noopener noreferrer"},m)):a.a.createElement(E,Object.assign({},m,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(I),N.current=!0)},innerRef:e=>{var t,r;S&&e&&g&&(t=e,r=()=>{window.docusaurus.prefetch(I)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),r())}))})),k.observe(t))},to:I||""},r&&{isActive:d,activeClassName:f}))}},2210:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=r(23),a=r(2207);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},757:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(2208)),i=(r(2209),{title:"StructureSupportKind",hide_table_of_contents:!0}),o={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/StructureSupportKind",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/StructureSupportKind",isDocsHomePage:!1,title:"StructureSupportKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfAssets\\StructureSupportKind.mdx",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/StructureSupportKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/StructureSupportKind",version:"current",sidebar:"docs",previous:{title:"StructureMaterialKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/StructureMaterialKind"},next:{title:"Tower",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/Tower"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Kind of structure support.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"anchor"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"guy"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}u.isMDXComponent=!0}}]);