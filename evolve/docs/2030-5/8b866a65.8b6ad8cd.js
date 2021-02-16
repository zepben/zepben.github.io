(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(483)),o=n(481),c={title:"ConsumptionTariffInterval"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffInterval",id:"2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffInterval",isDocsHomePage:!1,title:"ConsumptionTariffInterval",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Pricing\\ConsumptionTariffInterval.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffInterval",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffInterval",version:"current",sidebar:"docs",previous:{title:"UsagePointList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Metering/UsagePointList"},next:{title:"ConsumptionTariffIntervalList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffIntervalList"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"One of a sequence of thresholds defined in terms of consumption quantity of a service such as electricity, water, gas, etc. It defines the steps or blocks in a step tariff structure, where startValue simultaneously defines the entry value of this step and the closing value of the previous step. Where consumption is greater than startValue, it falls within this block and where consumption is less than or equal to startValue, it falls within one of the previous blocks.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"consumptionBlock"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/ConsumptionBlockType",mdxType:"Link"},"ConsumptionBlockType")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'Indicates the consumption block related to the reading. If not specified, is assumed to be "0 - N/A".')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"price"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/Int32",mdxType:"Link"},"Int32")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The charge for this rate component, per unit of measure defined by the associated ReadingType, in currency specified in TariffProfile.   The Pricing service provider determines the appropriate price attribute value based on its applicable regulatory rules. For example, price could be net or inclusive of applicable taxes, fees, or levies.  The Billing function set provides the ability to represent billing information in a more detailed manner.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"startValue"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt48",mdxType:"Link"},"UInt48")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'The lowest level of consumption that defines the starting point of this consumption step or block. Thresholds start at zero for each billing period.      If specified, the first ConsumptionTariffInterval.startValue for a TimeTariffInteral instance SHALL begin at "0." Subsequent ConsumptionTariffInterval.startValue elements SHALL be greater than the previous one.')))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/Resource",mdxType:"Link"},"Resource"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pricing/EnvironmentalCost",mdxType:"Link"},"EnvironmentalCost")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffIntervalList",mdxType:"Link"},"ConsumptionTariffIntervalList")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*")))))}u.isMDXComponent=!0},480:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},481:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),o=n(480),c=n(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(482),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:u,href:f,activeClassName:b,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,j=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),h=Object(a.useContext)(s),g=u||f,y=Object(o.a)(g),E=null==g?void 0:g.replace("pathname://",""),N=void 0!==E?(T=E,O&&(e=>e.startsWith("/"))(T)?v(T):T):void 0;var T;const I=Object(a.useRef)(!1),C=n?i.e:i.c,w=c.a.canUseIntersectionObserver;let k;Object(a.useEffect)((()=>(!w&&y&&window.docusaurus.prefetch(N),()=>{w&&k&&k.disconnect()})),[N,w,y]);const P=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,S=!N||!y||P;return N&&y&&!P&&!m&&h.collectLink(N),S?r.a.createElement("a",Object.assign({href:N},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(C,Object.assign({},j,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(N),I.current=!0)},innerRef:e=>{var t,n;w&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(N)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:N||""},n&&{isActive:d,activeClassName:b}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),b=a,d=f["".concat(o,".").concat(b)]||f[b]||u[b]||i;return n?r.a.createElement(d,c({ref:t},l,{components:n})):r.a.createElement(d,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);