(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{2160:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2161:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,O=b["".concat(c,".").concat(f)]||b[f]||u[f]||i;return r?a.a.createElement(O,o({ref:t},l,{components:r})):a.a.createElement(O,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2162:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(10),c=r(2160),o=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(2163),p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:u,href:b,activeClassName:f,isActive:O,"data-noBrokenLinkCheck":d,autoAddBaseUrl:m=!0}=e,j=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(l.b)(),E=Object(n.useContext)(s),I=u||b,v=Object(c.a)(I),C=null==I?void 0:I.replace("pathname://",""),g=void 0!==C?(y=C,m&&(e=>e.startsWith("/"))(y)?h(y):y):void 0;var y;const N=Object(n.useRef)(!1),w=r?i.e:i.c,R=o.a.canUseIntersectionObserver;let P;Object(n.useEffect)((()=>(!R&&v&&window.docusaurus.prefetch(g),()=>{R&&P&&P.disconnect()})),[g,R,v]);const T=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,S=!g||!v||T;return g&&v&&!T&&!d&&E.collectLink(g),S?a.a.createElement("a",Object.assign({href:g},I&&!v&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(w,Object.assign({},j,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(g),N.current=!0)},innerRef:e=>{var t,r;R&&e&&v&&(t=e,r=()=>{window.docusaurus.prefetch(g)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),r())}))})),P.observe(t))},to:g||""},r&&{isActive:O,activeClassName:f}))}},2163:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(23),a=r(2160);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},713:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(2161)),c=r(2162),o={title:"ErpRequisition"},s={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpRequisition",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpRequisition",isDocsHomePage:!1,title:"ErpRequisition",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfERPSupport\\ErpRequisition.md",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpRequisition",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpRequisition",version:"current",sidebar:"docs",previous:{title:"ErpReqLineItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpReqLineItem"},next:{title:"ErpSalesOrder",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpSalesOrder"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"General information that applies to a utility requisition that is a request for the purchase of goods or services. Typically, a requisition leads to the creation of a purchase order to a specific supplier.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpDocument",mdxType:"Link"},"ErpDocument"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpReqLineItem",mdxType:"Link"},"ErpReqLineItem")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpRequisition",mdxType:"Link"},"ErpRequisition")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ErpReqLineItems"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ErpRequisition"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}u.isMDXComponent=!0}}]);