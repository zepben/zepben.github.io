(window.webpackJsonp=window.webpackJsonp||[]).push([[1280],{1338:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),c=(a(0),a(2147)),b={title:"DopInstruction"},i={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DopInstruction",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DopInstruction",isDocsHomePage:!1,title:"DopInstruction",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\MarketResults\\DopInstruction.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DopInstruction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DopInstruction",version:"current",sidebar:"docs",previous:{title:"ConstraintResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ConstraintResults"},next:{title:"DotInstruction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DotInstruction"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Provides the necessary information (on a resource basis) to capture the Dispatch Operating Point (DOP) results on a Dispatch interval. This information is only relevant to the RT interval market."),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"mwDOP"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Dispatched Operating Point (MW)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"plotPriority"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A value used to establish priority of the DOP when plotting.  This is only applicable when two DOPs exist for the same time, but with different MW values.  E.g. when indicating a step in the curve.  Its used to determine if the curve steps up or down.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"runIndicatorDOP"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo"}),"YesNo")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Indication of DOP validity.   Shows the DOP is calculated from the latest run (YES). A NO indicator shows that the DOP is copied from a previous execution.  Up to 2 intervals can be missed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"timestampDOP"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DOP time stamp")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateTimeStamp"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateType"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/MarketOperations/MktDomain/MQSCHGType"}),"MQSCHGType")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateUser"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"None")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP"}),"InstructionClearingDOP"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC62325/MarketCommon/RegisteredResource"}),"RegisteredResource"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/MarketCommon/RegisteredResource"}),"RegisteredResource")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DopInstruction"}),"DopInstruction")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RegisteredResouce"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DopInstruction"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP"}),"InstructionClearingDOP")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DopInstruction"}),"DopInstruction")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"InstructionClearingDOP"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DopInstruction"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}s.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=s(a),j=r,m=O["".concat(b,".").concat(j)]||O[j]||p[j]||c;return a?n.a.createElement(m,i({ref:t},l,{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=j;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);