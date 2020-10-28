(window.webpackJsonp=window.webpackJsonp||[]).push([[743],{2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),O=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},j=function(e){var t=O(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),j=O(a),p=r,g=j["".concat(i,".").concat(p)]||j[p]||d[p]||b;return a?n.a.createElement(g,c({ref:t},o,{components:a})):n.a.createElement(g,c({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},801:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return O}));var r=a(2),n=a(6),b=(a(0),a(2146)),i={title:"UsagePoint"},c={unversionedId:"Model/TC57CIM/IEC61968/Metering/UsagePoint",id:"Model/TC57CIM/IEC61968/Metering/UsagePoint",isDocsHomePage:!1,title:"UsagePoint",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61968\\Metering\\UsagePoint.md",slug:"/Model/TC57CIM/IEC61968/Metering/UsagePoint",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/Metering/UsagePoint",version:"current",sidebar:"docs",previous:{title:"SimpleEndDeviceFunction",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/Metering/SimpleEndDeviceFunction"},next:{title:"UsagePointGroup",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/Metering/UsagePointGroup"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"Logical or physical point in the network to which readings or events may be attributed. Used at the place where a physical or virtual meter may be located; however, it is not required that a meter be present.  "),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phaseCode"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/PhaseCode"}),"PhaseCode")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase code. Number of wires and specific nominal phases can be deduced from enumeration literal values. For example, ABCN is three-phase, four-wire, s12n (splitSecondary12N) is single-phase, three-wire, and s1n and s2n are single-phase, two-wire.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phaseCount"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Number of potential phases the Usage Point supports, typically 0, 1 or 3.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"physicalConnectionCapacity"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DecimalQuantity"}),"DecimalQuantity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Quantitative information about the maximum physical capacity of the connection for the usage point.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedCurrent"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/CurrentFlow"}),"CurrentFlow")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Current flow that this usage point is configured to deliver.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedPower"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Active power that this usage point is configured to deliver.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"readCycle"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cycle day on which the meter for this usage point will normally be read.  Usually correlated with the billing cycle.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"readRoute"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Identifier of the route to which this usage point is assigned for purposes of meter reading. Typically used to configure hand held meter reading systems prior to collection of reads.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"serviceDeliveryRemark"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Remarks about this usage point, for example the reason for it being rated with a non-nominal priority.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"servicePriority"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Priority of service for this usage point. Note that usage points at the same service location can have different priorities.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"amiBillingReady"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/AmiBillingReadyKind"}),"AmiBillingReadyKind")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tracks the lifecycle of the metering installation at a usage point with respect to readiness for billing via advanced metering infrastructure reads.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"checkBilling"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"True if as a result of an inspection or otherwise, there is a reason to suspect that a previous billing may have been performed with erroneous data. Value should be reset once this potential discrepancy has been resolved.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"connectionCategory"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A code used to specify the connection category, e.g., low voltage or low pressure, where the usage point is defined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"connectionState"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePointConnectedKind"}),"UsagePointConnectedKind")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"State of the usage point with respect to connection to the network.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"disconnectionMethod"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Is an indication of how the usage point is physically connected or disconnected.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"estimatedLoad"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/CurrentFlow"}),"CurrentFlow")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Estimated load.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"grounded"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"True if grounded.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"isSdp"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If true, this usage point is a service delivery point, i.e., a usage point where the ownership of the service changes hands.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"isVirtual"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If true, this usage point is virtual, i.e., no physical location exists in the network where a meter could be located to collect the meter readings. For example, one may define a virtual usage point to serve as an aggregation of usage for all of a company's premises distributed widely across the distribution territory. Otherwise, the usage point is physical, i.e., there is a logical point in the network where a meter could be located to collect meter readings.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minimalUsageExpected"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If true, minimal or zero usage is expected at this usage point for situations such as premises vacancy, logical or physical disconnect. It is used for readings validation and estimation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"nominalServiceVoltage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Voltage"}),"Voltage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Nominal service voltage.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"outageRegion"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Outage region in which this usage point is located.")))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/EndDeviceControl"}),"EndDeviceControl"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/EndDeviceEvent"}),"EndDeviceEvent"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC62325/MarketCommon/EnvironmentalMonitoringStation"}),"EnvironmentalMonitoringStation"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC62325/MarketManagement/MarketEvaluationPoint"}),"MarketEvaluationPoint"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/MeterReading"}),"MeterReading"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/MeterWorkTask"}),"MeterWorkTask"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/MetrologyRequirement"}),"MetrologyRequirement"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Operations/Outage"}),"Outage"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Operations/Outage"}),"Outage"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/PricingStructure"}),"PricingStructure"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/ServiceLocation"}),"ServiceLocation"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ServiceSupplier"}),"ServiceSupplier"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePointGroup"}),"UsagePointGroup"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePointLocation"}),"UsagePointLocation"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/Outage"}),"Outage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Outage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All outages at this usage point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EnergizedUsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All energized usage points associated with this outage.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/Outage"}),"Outage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Outage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DeEnergizedUsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"all deenergized useage points associated with the outage.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer agreement regulating this service delivery point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All service delivery points regulated by this customer agreement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/PricingStructure"}),"PricingStructure")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PricingStructures"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All pricing structures applicable to this service delivery point (with prepayment meter running as a stand-alone device, with no CustomerAgreement or Customer)."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All service delivery points (with prepayment meter running as a stand-alone device, with no CustomerAgreement or Customer) to which this pricing structure applies.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/ServiceLocation"}),"ServiceLocation")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceLocation"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Service location where the service delivered by this usage point is consumed."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points delivering service (of the same type) to this service location.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/EndDeviceControl"}),"EndDeviceControl")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EndDeviceControls"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All end device controls sending commands to this usage point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points receiving commands from this end device control.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/EndDeviceEvent"}),"EndDeviceEvent")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EndDeviceEvents"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All end device events reported for this usage point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage point for which this end device event is reported.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/MeterReading"}),"MeterReading")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MeterReadings"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All meter readings obtained from this usage point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage point from which this meter reading (set of values) has been obtained.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/MeterWorkTask"}),"MeterWorkTask")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MeterServiceWorkTasks"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All meter service work tasks at this usage point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage point to which this meter service work task applies.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/MetrologyRequirement"}),"MetrologyRequirement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MetrologyRequirements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All metrology requirements for this usage point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points having this metrology requirement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points connected to the electrical grid through this equipment."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All equipment connecting this usage point to the electrical grid.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Common/ConfigurationEvent"}),"ConfigurationEvent")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ChangedUsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage point whose change resulted in this configuration event."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ConfigurationEvents"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All configuration events created for this usage point.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/ServiceCategory"}),"ServiceCategory")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points that deliver this category of service."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceCategory"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Service category delivered by this usage point.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/EndDevice"}),"EndDevice")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage point to which this end device belongs."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All end devices at this usage point.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/Register"}),"Register")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage Point"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Register"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/ServiceMultiplier"}),"ServiceMultiplier")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Usage point applying this multiplier."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceMultipliers"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All multipliers applied at this usage point.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePointGroup"}),"UsagePointGroup")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePointGroups"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All groups to which this usage point belongs."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points in this group.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePointLocation"}),"UsagePointLocation")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePointLocation"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Location of this usage point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points at this location.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ServiceSupplier"}),"ServiceSupplier")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceSupplier"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceSupplier (utility) utilising this usage point to deliver a service."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All usage points this service supplier utilises to deliver a service.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/MarketCommon/EnvironmentalMonitoringStation"}),"EnvironmentalMonitoringStation")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EnvironmentalMonitoringStation"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoint"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);