(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{480:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},481:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(10),c=r(480),o=r(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=r(482),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};t.a=function(e){var t,{isNavLink:r,to:d,href:b,activeClassName:p,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),v=Object(n.useContext)(l),y=d||b,h=Object(c.a)(y),E=null==y?void 0:y.replace("pathname://",""),B=void 0!==E?(w=E,m&&(e=>e.startsWith("/"))(w)?g(w):w):void 0;var w;const P=Object(n.useRef)(!1),N=r?a.e:a.c,L=o.a.canUseIntersectionObserver;let S;Object(n.useEffect)((()=>(!L&&h&&window.docusaurus.prefetch(B),()=>{L&&S&&S.disconnect()})),[B,L,h]);const k=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,C=!B||!h||k;return B&&h&&!k&&!O&&v.collectLink(B),C?i.a.createElement("a",Object.assign({href:B},y&&!h&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(N,Object.assign({},j,{onMouseEnter:()=>{P.current||(window.docusaurus.preload(B),P.current=!0)},innerRef:e=>{var t,r;L&&e&&h&&(t=e,r=()=>{window.docusaurus.prefetch(B)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),r())}))})),S.observe(t))},to:B||""},r&&{isActive:f,activeClassName:p}))}},482:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var n=r(23),i=r(480);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},483:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||a;return r?i.a.createElement(f,o({ref:t},s,{components:r})):i.a.createElement(f,o({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),a=(r(0),r(483)),c=r(481),o={title:"BillingPeriodList"},l={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriodList",id:"2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriodList",isDocsHomePage:!1,title:"BillingPeriodList",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Billing\\BillingPeriodList.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriodList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriodList",version:"current",sidebar:"docs",previous:{title:"BillingPeriod",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriod"},next:{title:"BillingMeterReadingBase",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Billing/BillingMeterReadingBase"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"A List element to hold BillingPeriod objects.  "),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/SubscribableList",mdxType:"Link"},"SubscribableList"))),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(a.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(a.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(a.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(a.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriodList",mdxType:"Link"},"BillingPeriodList")),Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(a.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriod",mdxType:"Link"},"BillingPeriod")),Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*")),Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(a.a)(c.a,{to:"/2030-5/SmartGrid/Other/NotUsed/SubscribedResource",mdxType:"Link"},"SubscribedResource")),Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(a.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Billing/BillingPeriodList",mdxType:"Link"},"BillingPeriodList")),Object(a.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")))))}d.isMDXComponent=!0}}]);