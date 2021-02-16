(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(483)),o=n(481),c={title:"EnvironmentalCost"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Pricing/EnvironmentalCost",id:"2030-5/SmartGrid/IEEE2030-5/Pricing/EnvironmentalCost",isDocsHomePage:!1,title:"EnvironmentalCost",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Pricing\\EnvironmentalCost.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Pricing/EnvironmentalCost",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pricing/EnvironmentalCost",version:"current",sidebar:"docs",previous:{title:"ConsumptionTariffIntervalList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffIntervalList"},next:{title:"CostKindType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pricing/CostKindType"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Provides alternative or secondary price information for the relevant RateComponent. Supports jurisdictions that seek to convey the environmental price per unit of the specified commodity not expressed in currency."),Object(i.a)("p",null,"Implementers and consumers can use this attribute to prioritize operations of their HAN devices (e.g., PEV charging during times of high availability of renewable electricity resources).  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"amount"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The estimated or actual environmental or other cost, per commodity unit defined by the ReadingType, for this RateComponent (e.g., grams of carbon dioxide emissions each per kWh).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"costKind"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pricing/CostKindType",mdxType:"Link"},"CostKindType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The kind of cost referred to in the amount.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"costLevel"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt8",mdxType:"Link"},"UInt8")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'The relative level of the amount attribute.  In conjunction with numCostLevels, this attribute informs a device of the relative scarcity of the amount attribute (e.g., a high or low availability of renewable generation).  numCostLevels and costLevel values SHALL ascend in order of scarcity, where "0" signals the lowest relative cost and higher values signal increasing cost.  For example, if numCostLevels is equal to \u201c3,\u201d then if the lowest relative costLevel were equal to \u201c0,\u201d devices would assume this is the lowest relative period to operate.  Likewise, if the costLevel in the next TimeTariffInterval instance is equal to \u201c1,\u201d then the device would assume it is relatively more expensive, in environmental terms, to operate during this TimeTariffInterval instance than the previous one.  There is no limit to the number of relative price levels other than that indicated in the attribute type, but for practicality, service providers should strive for simplicity and recognize the diminishing returns derived from increasing the numCostLevel value greater than four.')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"numCostLevels"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt8",mdxType:"Link"},"UInt8")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The number of all relative cost levels.   In conjunction with costLevel, numCostLevels signals the relative scarcity of the commodity for the duration of the TimeTariffInterval instance (e.g., a relative indication of cost). This is useful in providing context for nominal cost signals to consumers or devices that might see a range of amount values from different service providres or from the same service provider.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pricing/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pricing/EnvironmentalCost",mdxType:"Link"},"EnvironmentalCost")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*")))))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},481:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(480),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(482),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:m,isActive:b,"data-noBrokenLinkCheck":f,autoAddBaseUrl:v=!0}=e,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),h=Object(r.useContext)(s),g=p||d,y=Object(o.a)(g),E=null==g?void 0:g.replace("pathname://",""),N=void 0!==E?(w=E,v&&(e=>e.startsWith("/"))(w)?j(w):w):void 0;var w;const C=Object(r.useRef)(!1),T=n?i.e:i.c,I=c.a.canUseIntersectionObserver;let P;Object(r.useEffect)((()=>(!I&&y&&window.docusaurus.prefetch(N),()=>{I&&P&&P.disconnect()})),[N,I,y]);const L=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,k=!N||!y||L;return N&&y&&!L&&!f&&h.collectLink(N),k?a.a.createElement("a",Object.assign({href:N},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(T,Object.assign({},O,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(N),C.current=!0)},innerRef:e=>{var t,n;I&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(N)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))})),P.observe(t))},to:N||""},n&&{isActive:b,activeClassName:m}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);