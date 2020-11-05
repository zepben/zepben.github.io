(window.webpackJsonp=window.webpackJsonp||[]).push([[1113],{1171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return f}));var n=a(2),r=a(6),i=(a(0),a(2147)),c={title:"ConsumptionTariffInterval"},l={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",id:"cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",isDocsHomePage:!1,title:"ConsumptionTariffInterval",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\ConsumptionTariffInterval.md",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",version:"current",sidebar:"docs",previous:{title:"Cheque",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Cheque"},next:{title:"MerchantAccount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:b};function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"One of a sequence of intervals defined in terms of consumption quantity of a service such as electricity, water, gas, etc. It is typically used in association with TariffProfile to define the steps or blocks in a step tariff structure, where startValue simultaneously defines the entry value of this step and the closing value of the previous step. Where consumption is >= startValue it falls within this interval and where consumption is < startValue it falls within the previous interval.  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sequenceNumber"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A sequential reference that defines the identity of this interval and its relative position with respect to other intervals in a sequence of intervals.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"startValue"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The lowest level of consumption that defines the starting point of this interval. The interval extends to the start of the next interval or until it is reset to the start of the first interval by TariffProfile.tariffCycle.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"None")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/TariffProfile"}),"TariffProfile"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"}),"ConsumptionTariffInterval")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/ReadingType"}),"ReadingType")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All tariff intervals with consumption described by this reading type."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reading type for 'startValue'.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"}),"ConsumptionTariffInterval")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/Charge"}),"Charge")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tariff intervals to which this consumption-based charge has to be levied."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Charges"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All charges used to define this consumption tariff interval.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"}),"ConsumptionTariffInterval")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval"}),"TimeTariffInterval")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All consumption tariff intervals that introduce variation in this time of use tariff interval; allows to express e.g., peak hour prices that are different with different consumption blocks."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TouTariffIntervals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All time of use tariff intervals influenced by this consumption tariff interval.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/TariffProfile"}),"TariffProfile")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"}),"ConsumptionTariffInterval")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All tariff profiles defined by this consumption tariff interval."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All consumption tariff intervals used to define this tariff profile.")))))}f.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),f=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=f(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=f(a),O=n,m=s["".concat(c,".").concat(O)]||s[O]||p[O]||i;return a?r.a.createElement(m,l({ref:t},o,{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);