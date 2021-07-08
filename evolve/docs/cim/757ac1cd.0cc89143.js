(window.webpackJsonp=window.webpackJsonp||[]).push([[968],{1037:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),c=(a(0),a(2195)),i=a(2196),l={title:"BidSelfSched",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",isDocsHomePage:!1,title:"BidSelfSched",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\ParticipantInterfaces\\BidSelfSched.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",version:"current",sidebar:"docs",previous:{title:"BidSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSet"},next:{title:"BidPriceSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidPriceSchedule"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Defines self schedule values to be used for specified time intervals.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"balancingFlag"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo",mdxType:"Link"},"YesNo")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"This is a Y/N flag for a self-schedule of a resource per market per date and hour, using a specific TR ID. It indicates whether a self-schedule using a TR is balanced with another self-schedule using the same TR ID.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"bidType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/BidTypeRMR",mdxType:"Link"},"BidTypeRMR")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"bidType has two types as the required output of requirements and qualified pre-dispatch.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"priorityFlag"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo",mdxType:"Link"},"YesNo")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"This is a Y/N flag for a self-schedule of a resource per market per date and hour, using a specific TR ID. It indicates whether a self-schedule using a TR has scheduling priority in DAM/RTM.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pumpSelfSchedMw"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Contains the PriceTaker, ExistingTransmissionContract, TransmissionOwnershipRights pumping self schedule quantity. If this value is not null, then the unit is in pumping mode.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"referenceType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/SelfSchedReferenceType",mdxType:"Link"},"SelfSchedReferenceType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Indication of which type of self schedule is being referenced.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"selfSchedMw"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Self scheduled value")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"selfSchedSptResource"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Price Taker Export Self Sched Support Resource")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"selfSchedType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MarketProductSelfSchedType",mdxType:"Link"},"MarketProductSelfSchedType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'This attribute is used to specify if a bid includes a self sched bid. If so what self sched type is it. The possible values are shown as follow but not limited to:  \'ETC\' - Existing transmission contract \'TOR\' - Transmission ownership right \'RMR\' - Reliability must run \'RGMR\' - Regulatory must run "RMT" - Relaiability must take "PT" - Price taker "LPT" - Low price taker "SP" - Self provision "RA" - Resource adequacy  This attribute is originally defined in the BidSelfSched class')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MQSCHGType",mdxType:"Link"},"MQSCHGType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"wheelingTransactionReference"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A unique identifier of a wheeling transaction. A wheeling transaction is a balanced Energy exchange among Supply and Demand Resources.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule",mdxType:"Link"},"RegularIntervalSchedule"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",mdxType:"Link"},"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SubControlArea",mdxType:"Link"},"SubControlArea")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",mdxType:"Link"},"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SubControlArea"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/HostControlArea",mdxType:"Link"},"HostControlArea")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",mdxType:"Link"},"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HostControlArea"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/ContractRight",mdxType:"Link"},"ContractRight")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",mdxType:"Link"},"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransmissionContractRight"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/AdjacentCASet",mdxType:"Link"},"AdjacentCASet")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",mdxType:"Link"},"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AdjacentCASet"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}d.isMDXComponent=!0},2194:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2195:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),O=r,f=p["".concat(i,".").concat(O)]||p[O]||d[O]||c;return a?n.a.createElement(f,l({ref:t},b,{components:a})):n.a.createElement(f,l({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2196:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2194),l=a(8),o=Object(r.createContext)({collectLink:function(){}}),b=a(2197),s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,d,p=e.isNavLink,O=e.to,f=e.href,j=e.activeClassName,m=e.isActive,u=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,N=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(b.b)().withBaseUrl,y=Object(r.useContext)(o),T=O||f,S=Object(i.a)(T),I=null==T?void 0:T.replace("pathname://",""),v=void 0!==I?(a=I,h&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,k=Object(r.useRef)(!1),M=p?c.e:c.c,w=l.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!w&&S&&window.docusaurus.prefetch(v),function(){w&&d&&d.disconnect()}}),[v,w,S]);var E=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,R=!v||!S||E;return v&&S&&!E&&!u&&y.collectLink(v),R?n.a.createElement("a",Object.assign({href:v},T&&!S&&{target:"_blank",rel:"noopener noreferrer"},N)):n.a.createElement(M,Object.assign({},N,{onMouseEnter:function(){k.current||(window.docusaurus.preload(v),k.current=!0)},innerRef:function(e){var t,a;w&&e&&S&&(t=e,a=function(){window.docusaurus.prefetch(v)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:v||""},p&&{isActive:m,activeClassName:j}))}},2197:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2194);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,l=void 0!==i&&i,o=c.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(l)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+s:s}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);