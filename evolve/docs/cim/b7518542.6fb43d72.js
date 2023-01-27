(window.webpackJsonp=window.webpackJsonp||[]).push([[1519],{1590:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return l})),a.d(e,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(2208)),c=a(2209),o={title:"TransmissionCapacity",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",isDocsHomePage:!1,title:"TransmissionCapacity",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\ExternalInputs\\TransmissionCapacity.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",version:"current",sidebar:"docs",previous:{title:"TransmissionInterfaceRightEntitlement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionInterfaceRightEntitlement"},next:{title:"TransferInterfaceSolution",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransferInterfaceSolution"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function b(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"This class models the transmission (either a transmission interface or a POR/POD pair) capacity including Total Transfer Capacity (TTC), Operating Transfer Capacity (OTC), and Capacity Benefit Margin (CBM)."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"capacityBenefitMargin"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Capacity Benefit Margin (CBM) is used by Markets to calculate the transmission interface limits. This number could be manually or procedurally determined. The CBM is defined per transmission interface (branch group).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"operationalTransmissionCapacity"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Operational Transmission Capacity (OTC) is the transmission capacity under the operating condition during a specific time period, incorporating the effects of derates and current settings of operation controls. The OTCs for all transmission interface (branch group) are always provided regardless of outage or switching conditions.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OTC15min_emergency"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Operational Transmission Capacity (OTC) 15 minute Emergency Limit")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OTCemergency"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Operational Transmission Capacity (OTC) Emergency Limit.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"POD"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"point of delivery")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"POR"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"point of receipt")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"startOperatingDate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Operating date ","&"," hour when the entitlement applies")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"totalTransmissionCapacity"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Total Transmission Capacity")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/GenericConstraints",mdxType:"Link"},"GenericConstraints")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",mdxType:"Link"},"TransmissionCapacity")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GenericConstraints"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransmissionCapacity"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/Flowgate",mdxType:"Link"},"Flowgate")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",mdxType:"Link"},"TransmissionCapacity")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flowgate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransmissionCapacity"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}b.isMDXComponent=!0},2207:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2208:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),p=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),O=p(a),m=n,j=O["".concat(c,".").concat(m)]||O[m]||b[m]||i;return a?r.a.createElement(j,o({ref:e},l,{components:a})):r.a.createElement(j,o({ref:e},l))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,c=new Array(i);c[0]=O;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2209:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2207),o=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(2210),p=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,{isNavLink:a,to:b,href:O,activeClassName:m,isActive:j,"data-noBrokenLinkCheck":d,autoAddBaseUrl:u=!0}=t,f=p(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),y=Object(n.useContext)(s),C=b||O,N=Object(c.a)(C),T=null==C?void 0:C.replace("pathname://",""),h=void 0!==T?(v=T,u&&(t=>t.startsWith("/"))(v)?g(v):v):void 0;var v;const I=Object(n.useRef)(!1),k=a?i.e:i.c,M=o.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!M&&N&&window.docusaurus.prefetch(h),()=>{M&&E&&E.disconnect()})),[h,M,N]);const w=null!==(e=null==h?void 0:h.startsWith("#"))&&void 0!==e&&e,x=!h||!N||w;return h&&N&&!w&&!d&&y.collectLink(h),x?r.a.createElement("a",Object.assign({href:h},C&&!N&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(k,Object.assign({},f,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(h),I.current=!0)},innerRef:t=>{var e,a;M&&t&&N&&(e=t,a=()=>{window.docusaurus.prefetch(h)},E=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(E.unobserve(e),E.disconnect(),a())}))})),E.observe(e))},to:h||""},a&&{isActive:j,activeClassName:m}))}},2210:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return c}));var n=a(23),r=a(2207);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return e+a;const c=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+c:c}(e,t,a,n)}}function c(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}}}]);