(window.webpackJsonp=window.webpackJsonp||[]).push([[814],{2199:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))},2200:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var r=a(0),n=a.n(r);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=n.a.createContext({}),b=function(t){var e=n.a.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},O=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),O=b(a),p=r,u=O["".concat(i,".").concat(p)]||O[p]||s[p]||c;return a?n.a.createElement(u,o({ref:e},d,{components:a})):n.a.createElement(u,o({ref:e},d))}));function p(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<c;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2201:function(t,e,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2199),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var d=a(2202),b=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]])}return a};e.a=function(t){var e,{isNavLink:a,to:s,href:O,activeClassName:p,isActive:u,"data-noBrokenLinkCheck":j,autoAddBaseUrl:f=!0}=t,m=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(d.b)(),N=Object(r.useContext)(l),C=s||O,h=Object(i.a)(C),y=null==C?void 0:C.replace("pathname://",""),P=void 0!==y?(I=y,f&&(t=>t.startsWith("/"))(I)?g(I):I):void 0;var I;const v=Object(r.useRef)(!1),k=a?c.e:c.c,B=o.a.canUseIntersectionObserver;let M;Object(r.useEffect)((()=>(!B&&h&&window.docusaurus.prefetch(P),()=>{B&&M&&M.disconnect()})),[P,B,h]);const T=null!==(e=null==P?void 0:P.startsWith("#"))&&void 0!==e&&e,w=!P||!h||T;return P&&h&&!T&&!j&&N.collectLink(P),w?n.a.createElement("a",Object.assign({href:P},C&&!h&&{target:"_blank",rel:"noopener noreferrer"},m)):n.a.createElement(k,Object.assign({},m,{onMouseEnter:()=>{v.current||(window.docusaurus.preload(P),v.current=!0)},innerRef:t=>{var e,a;B&&t&&h&&(e=t,a=()=>{window.docusaurus.prefetch(P)},M=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.unobserve(e),M.disconnect(),a())}))})),M.observe(e))},to:P||""},a&&{isActive:u,activeClassName:p}))}},2202:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var r=a(23),n=a(2199);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(t,e,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+i:i}(e,t,a,r)}}function i(t,e={}){const{withBaseUrl:a}=c();return a(t,e)}},885:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return d})),a.d(e,"default",(function(){return s}));var r=a(3),n=a(7),c=(a(0),a(2200)),i=a(2201),o={title:"ProductBid",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",isDocsHomePage:!1,title:"ProductBid",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\ParticipantInterfaces\\ProductBid.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",version:"current",sidebar:"docs",previous:{title:"PumpingCostSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/PumpingCostSchedule"},next:{title:"OpenTieSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/OpenTieSchedule"}},d=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:d};function s(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Component of a bid that pertains to one market product."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MarketProduct"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBids"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",mdxType:"Link"},"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidPriceSchedule",mdxType:"Link"},"BidPriceSchedule")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSchedule"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidDistributionFactor",mdxType:"Link"},"BidDistributionFactor")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidDistributionFactor"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Bid",mdxType:"Link"},"Bid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBids"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A bid comprises one or more product bids of market products"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Bid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A bid comprises one or more product bids of market products")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidHourlyProductSchedule",mdxType:"Link"},"BidHourlyProductSchedule")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidHourlyProductSchedule"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}s.isMDXComponent=!0}}]);