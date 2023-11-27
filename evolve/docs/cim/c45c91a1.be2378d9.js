(window.webpackJsonp=window.webpackJsonp||[]).push([[1622],{1693:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var r=a(3),n=a(7),i=(a(0),a(2208)),c=a(2209),o={title:"LoadBid",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",isDocsHomePage:!1,title:"LoadBid",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\ParticipantInterfaces\\LoadBid.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",version:"current",sidebar:"docs",previous:{title:"LoadFollowingInst",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadFollowingInst"},next:{title:"InterTieDispatchResponse",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/InterTieDispatchResponse"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:b};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Offer to supply energy/ancillary services from a load resource (participating load reduces consumption).  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"dropRampRate"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePowerChangeRate",mdxType:"Link"},"ActivePowerChangeRate")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum rate that load can be reduced (MW/minute)")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"loadRedInitiationCost"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"load reduction initiation cost")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"loadRedInitiationTime"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"load reduction initiation time")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"marketDate"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The date represents the NextMarketDate for which the load response bids apply to.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"meteredValue"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Flag indicated that the load reduction is metered. (See above) If priceSetting and meteredValue both equal 1, then the facility is eligible to set LMP in the real time market.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minLoad"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Minimum MW load below which it may not be reduced.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minLoadReduction"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Minimum MW for a load reduction (e.g. MW rating of a discrete pump.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minLoadReductionCost"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cost in $ at the minimum reduced load")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minLoadReductionInterval"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Shortest period load reduction shall be maintained before load can be restored to normal levels.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minTimeBetLoadRed"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Shortest time that load shall be left at normal levels before a new load reduction.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pickUpRampRate"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePowerChangeRate",mdxType:"Link"},"ActivePowerChangeRate")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum rate load may be restored (MW/minute)")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"priceSetting"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Flag to indicate that the facility can set LMP Works in tandem with Metered Value.  Greater chance of this being dynamic than the Metered Value, however, it is requested that Price Setting and Metered Value stay at the same source.  Currently no customers have implemented the metering capability, but if this option is implemented, then Price Setting could become dynamic.  However, Metered Value will remain static.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"reqNoticeTime"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Time period that is required from an order to reduce a load to the time that it takes to get to the minimum load reduction.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"shutdownCost"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The fixed cost associated with committing a load reduction.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid",mdxType:"Link"},"ResourceBid"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/RampRateCurve",mdxType:"Link"},"RampRateCurve")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LoadBid"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RampRateCurve"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadReductionPriceCurve",mdxType:"Link"},"LoadReductionPriceCurve")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LoadBid"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LoadReductionPriceCurve"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid",mdxType:"Link"},"AreaLoadBid")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AreaLoadBid"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LoadBid"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/RegisteredLoad",mdxType:"Link"},"RegisteredLoad")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RegisteredLoad"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LoadBids"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0},2207:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),d=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,s=p["".concat(c,".").concat(m)]||p[m]||O[m]||i;return a?n.a.createElement(s,o({ref:t},b,{components:a})):n.a.createElement(s,o({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(2207),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var b=a(2210),d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:O,href:p,activeClassName:m,isActive:s,"data-noBrokenLinkCheck":j,autoAddBaseUrl:f=!0}=e,u=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(b.b)(),N=Object(r.useContext)(l),C=O||p,y=Object(c.a)(C),h=null==C?void 0:C.replace("pathname://",""),I=void 0!==h?(v=h,f&&(e=>e.startsWith("/"))(v)?g(v):v):void 0;var v;const T=Object(r.useRef)(!1),M=a?i.e:i.c,L=o.a.canUseIntersectionObserver;let k;Object(r.useEffect)((()=>(!L&&y&&window.docusaurus.prefetch(I),()=>{L&&k&&k.disconnect()})),[I,L,y]);const w=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,B=!I||!y||w;return I&&y&&!w&&!j&&N.collectLink(I),B?n.a.createElement("a",Object.assign({href:I},C&&!y&&{target:"_blank",rel:"noopener noreferrer"},u)):n.a.createElement(M,Object.assign({},u,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(I),T.current=!0)},innerRef:e=>{var t,a;L&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(I)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),a())}))})),k.observe(t))},to:I||""},a&&{isActive:s,activeClassName:m}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}}}]);