(window.webpackJsonp=window.webpackJsonp||[]).push([[1035],{1104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(2160)),i={title:"BidSelfSched"},l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",isDocsHomePage:!1,title:"BidSelfSched",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\ParticipantInterfaces\\BidSelfSched.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",version:"current",sidebar:"docs",previous:{title:"BidSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSet"},next:{title:"BidPriceSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidPriceSchedule"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Defines self schedule values to be used for specified time intervals.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"balancingFlag"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo"}),"YesNo")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"This is a Y/N flag for a self-schedule of a resource per market per date and hour, using a specific TR ID. It indicates whether a self-schedule using a TR is balanced with another self-schedule using the same TR ID.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"bidType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/BidTypeRMR"}),"BidTypeRMR")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"bidType has two types as the required output of requirements and qualified pre-dispatch.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"priorityFlag"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo"}),"YesNo")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"This is a Y/N flag for a self-schedule of a resource per market per date and hour, using a specific TR ID. It indicates whether a self-schedule using a TR has scheduling priority in DAM/RTM.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pumpSelfSchedMw"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Contains the PriceTaker, ExistingTransmissionContract, TransmissionOwnershipRights pumping self schedule quantity. If this value is not null, then the unit is in pumping mode.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"referenceType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/SelfSchedReferenceType"}),"SelfSchedReferenceType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Indication of which type of self schedule is being referenced.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"selfSchedMw"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Self scheduled value")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"selfSchedSptResource"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Price Taker Export Self Sched Support Resource")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"selfSchedType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MarketProductSelfSchedType"}),"MarketProductSelfSchedType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'This attribute is used to specify if a bid includes a self sched bid. If so what self sched type is it. The possible values are shown as follow but not limited to:  \'ETC\' - Existing transmission contract \'TOR\' - Transmission ownership right \'RMR\' - Reliability must run \'RGMR\' - Regulatory must run "RMT" - Relaiability must take "PT" - Price taker "LPT" - Low price taker "SP" - Self provision "RA" - Resource adequacy  This attribute is originally defined in the BidSelfSched class')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MQSCHGType"}),"MQSCHGType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"wheelingTransactionReference"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A unique identifier of a wheeling transaction. A wheeling transaction is a balanced Energy exchange among Supply and Demand Resources.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule"}),"RegularIntervalSchedule"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid"}),"ProductBid")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched"}),"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProductBid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SubControlArea"}),"SubControlArea")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched"}),"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SubControlArea"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/HostControlArea"}),"HostControlArea")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched"}),"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HostControlArea"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/ContractRight"}),"ContractRight")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched"}),"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransmissionContractRight"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/AdjacentCASet"}),"AdjacentCASet")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched"}),"BidSelfSched")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AdjacentCASet"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BidSelfSched"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),p=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,O=b(e,["components","mdxType","originalType","parentName"]),o=p(a),j=r,s=o["".concat(i,".").concat(j)]||o[j]||d[j]||c;return a?n.a.createElement(s,l({ref:t},O,{components:a})):n.a.createElement(s,l({ref:t},O))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=o;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var O=2;O<c;O++)i[O]=a[O];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);