(window.webpackJsonp=window.webpackJsonp||[]).push([[1192],{1250:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(2146)),c={title:"ShuntCompensator"},b={unversionedId:"Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensator",id:"Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensator",isDocsHomePage:!1,title:"ShuntCompensator",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Base\\Wires\\ShuntCompensator.md",slug:"/Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensator",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensator",version:"current",sidebar:"docs",previous:{title:"ShortCircuitRotorKind",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/ShortCircuitRotorKind"},next:{title:"ShuntCompensatorPhase",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"class-description"},"Class Description"),Object(o.b)("p",null,"A shunt capacitor or reactor or switchable bank of shunt capacitors or reactors. A section of a shunt compensator is an individual capacitor or reactor.  A negative value for reactivePerSection indicates that the compensator is a reactor. ShuntCompensator is a single terminal device.  Ground is implied.  "),Object(o.b)("h3",{id:"attributes"},"Attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aVRDelay"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An automatic voltage regulation delay (AVRDelay) which is the time delay from a change in voltage to when the capacitor is allowed to change state. This filters out temporary changes in voltage.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"grounded"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Used for Yn and Zn connections. True if the neutral is solidly grounded.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maximumSections"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum number of sections that may be switched in.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"nomU"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Voltage"}),"Voltage")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The voltage at which the nominal reactive power may be calculated. This should normally be within 10% of the voltage at which the capacitor is connected to the network.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"normalSections"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The normal number of sections switched in. The value shall be between zero and ShuntCompensator.maximumSections.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phaseConnection"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/PhaseShuntConnectionKind"}),"PhaseShuntConnectionKind")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of phase connection, such as wye or delta.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sections"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shunt compensator sections in use. Starting value for steady state solution. The attribute shall be a positive value or zero. Non integer values are allowed to support continuous variables. The reasons for continuous value are to support study cases where no discrete shunt compensators has yet been designed, a solutions where a narrow voltage band force the sections to oscillate or accommodate for a continuous solution as input.  For LinearShuntConpensator the value shall be between zero and ShuntCompensator.maximumSections. At value zero the shunt compensator conductance and admittance is zero. Linear interpolation of conductance and admittance between the previous and next integer section is applied in case of non-integer values. For NonlinearShuntCompensator-s shall only be set to one of the NonlinearShuntCompenstorPoint.sectionNumber. There is no interpolation between NonlinearShuntCompenstorPoint-s.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"switchOnCount"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The switch on count since the capacitor count was last reset or initialized.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"switchOnDate"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The date and time when the capacitor bank was last switched on.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"voltageSensitivity"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/VoltagePerReactivePower"}),"VoltagePerReactivePower")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage sensitivity required for the device to regulate the bus voltage, in voltage/reactive power.")))),Object(o.b)("h3",{id:"relationships"},"Relationships"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/RegulatingCondEq"}),"RegulatingCondEq"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensator"}),"LinearShuntCompensator"),"  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/MktShuntCompensator"}),"MktShuntCompensator"),"  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensator"}),"NonlinearShuntCompensator"),"  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfWiresExt/SVC"}),"SVC"),"  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/StateVariables/SvShuntCompensatorSections"}),"SvShuntCompensatorSections"),"  ")),Object(o.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.b)("h3",{id:"associations"},"Associations"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"}),"ShuntCompensator")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase"}),"ShuntCompensatorPhase")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensator"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shunt compensator of this shunt compensator phase."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensatorPhase"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The individual phases models for the shunt compensator.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"}),"ShuntCompensator")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/ShuntCompensatorAction"}),"ShuntCompensatorAction")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensator"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensatorAction"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/StateVariables/SvShuntCompensatorSections"}),"SvShuntCompensatorSections")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"}),"ShuntCompensator")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SvShuntCompensatorSections"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The state for the number of shunt compensator sections in service."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensator"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The shunt compensator for which the state applies.")))))}s.isMDXComponent=!0},2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(a),O=n,j=p["".concat(c,".").concat(O)]||p[O]||m[O]||o;return a?r.a.createElement(j,b({ref:t},l,{components:a})):r.a.createElement(j,b({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);