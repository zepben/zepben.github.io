(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return o}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),j=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=j(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=O(e,["components","mdxType","originalType","parentName"]),d=j(a),p=r,o=d["".concat(c,".").concat(p)]||d[p]||m[p]||b;return a?n.a.createElement(o,i({ref:t},l,{components:a})):n.a.createElement(o,i({ref:t},l))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=p;var i={};for(var O in t)hasOwnProperty.call(t,O)&&(i[O]=t[O]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},474:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return j}));var r=a(2),n=a(6),b=(a(0),a(2147)),c={title:"Trade"},i={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade",isDocsHomePage:!1,title:"Trade",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\ParticipantInterfaces\\Trade.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade",version:"current",sidebar:"docs",previous:{title:"StartUpTimeCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/StartUpTimeCurve"},next:{title:"TradeError",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/TradeError"}},O=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:O};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"Inter Scheduling Coordinator Trades to model financial trades which may impact settlement."),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"adjustedTradeQuantity"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The validated and current market accepted trade amount of a physical energy trade.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"counterTradeQuantity"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MW quantity submitted by counter SC for the same trade")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"dependOnTradeName"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Depend On IST Name points to the unique IST Name in the chain of physical energy trades.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lastModified"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Time and date the trade was last modified.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"marketType"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MarketType"}),"MarketType")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"startTime"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Start time and date for which trade applies.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"stopTime"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Stop time and date for which trade is applicable.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"submitFromTimeStamp"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Timestamp of submittal of submit From Scheduling Coordinator Trade to Market Participant Bid Submittal")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"submitFromUser"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Userid of the submit From Scheduling Coordinator trade")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"submitToTimeStamp"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Timestamp of submittal of submit To Scheduling Coordinator Trade to Market Participant Bid Submittal")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"submitToUser"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Userid of the submit To Scheduling Coordinator trade")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tradeQuantity"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tradeQuantity:  If tradeType = IST, The amount of an Energy Trade.   If tradeType = AST, The amount of an Ancillary Service Obligation Trade.   If tradeType = UCT, The amount of a Unit Commitment Obligation Trade.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tradeStatus"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Resulting status of the trade following the rule engine processing.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateTimeStamp"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateUser"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ActionRequest"}),"ActionRequest"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/Pnode"}),"Pnode"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/RegisteredGenerator"}),"RegisteredGenerator"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/TradeProduct"}),"TradeProduct"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ActionRequest"}),"ActionRequest")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ActionRequest"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Trade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/TradeError"}),"TradeError")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Trade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TradeError"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/TradeProduct"}),"TradeProduct")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TradeProduct"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Trade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/Pnode"}),"Pnode")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Pnode"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Trade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/RegisteredGenerator"}),"RegisteredGenerator")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RegisteredGenerator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Trade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"From_SC"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"FromSCTrade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"submitToSchedulingCoordinator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SubmitToSCTrade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"submitFromSchedulingCoordinator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SubmitFromSCTrade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SchedulingCoordinator"}),"SchedulingCoordinator")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Trade"}),"Trade")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"To_SC"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ToSCTrade"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}j.isMDXComponent=!0}}]);