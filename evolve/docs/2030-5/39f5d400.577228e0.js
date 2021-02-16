(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(483)),c=a(481),o={title:"CreditRegister"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditRegister",id:"2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditRegister",isDocsHomePage:!1,title:"CreditRegister",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Prepayment\\CreditRegister.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditRegister",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditRegister",version:"current",sidebar:"docs",previous:{title:"AccountingUnit",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Prepayment/AccountingUnit"},next:{title:"CreditRegisterList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditRegisterList"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"CreditRegister instances define a credit-modifying transaction. Typically this would be a credit-adding transaction, but may be a subtracting transaction (perhaps in response to an out-of-band debt signal).  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"creditAmount"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Prepayment/AccountingUnit",mdxType:"Link"},"AccountingUnit")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CreditAmount is the amount of credit being added by a particular CreditRegister transaction. Negative values indicate that credit is being subtracted.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"creditType"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditTypeType",mdxType:"Link"},"CreditTypeType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CreditType indicates whether the credit transaction applies to regular or emergency credit.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"effectiveTime"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeType",mdxType:"Link"},"TimeType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EffectiveTime identifies the time at which the credit transaction goes into effect. For credit addition transactions, this is typically the moment at which the transaction takes place. For credit subtraction transactions, (e.g., non-fuel debt recovery transactions initiated from a back-haul or ESI) this may be a future time at which credit is deducted.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"token"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/String32",mdxType:"Link"},"String32")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Token is security data that authenticates the legitimacy of the transaction. The details of this token are not defined by IEEE 2030.5. How a Prepayment server handles this field is left as vendor specific implementation or will be defined by one or more other standards.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditRegisterList",mdxType:"Link"},"CreditRegisterList")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Prepayment/CreditRegister",mdxType:"Link"},"CreditRegister")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*")))))}b.isMDXComponent=!0},480:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},481:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(480),o=a(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=a(482),d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:p,activeClassName:u,isActive:m,"data-noBrokenLinkCheck":f,autoAddBaseUrl:O=!0}=e,j=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),g=Object(r.useContext)(s),h=b||p,v=Object(c.a)(h),E=null==h?void 0:h.replace("pathname://",""),N=void 0!==E?(w=E,O&&(e=>e.startsWith("/"))(w)?y(w):w):void 0;var w;const C=Object(r.useRef)(!1),T=a?i.e:i.c,k=o.a.canUseIntersectionObserver;let P;Object(r.useEffect)((()=>(!k&&v&&window.docusaurus.prefetch(N),()=>{k&&P&&P.disconnect()})),[N,k,v]);const I=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,S=!N||!v||I;return N&&v&&!I&&!f&&g.collectLink(N),S?n.a.createElement("a",Object.assign({href:N},h&&!v&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(T,Object.assign({},j,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(N),C.current=!0)},innerRef:e=>{var t,a;k&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(N)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),a())}))})),P.observe(t))},to:N||""},a&&{isActive:m,activeClassName:u}))}},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||b[u]||i;return a?n.a.createElement(m,o({ref:t},l,{components:a})):n.a.createElement(m,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);