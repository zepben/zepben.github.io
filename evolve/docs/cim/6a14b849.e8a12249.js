(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,O=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.a.createElement(O,i({ref:t},l,{components:a})):n.a.createElement(O,i({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},908:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),o=(a(0),a(2146)),c={title:"StaticVarCompensator"},i={unversionedId:"Model/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",id:"Model/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",isDocsHomePage:!1,title:"StaticVarCompensator",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Base\\Wires\\StaticVarCompensator.md",slug:"/Model/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",version:"current",sidebar:"docs",previous:{title:"SinglePhaseKind",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind"},next:{title:"SVCControlMode",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/SVCControlMode"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"class-description"},"Class Description"),Object(o.b)("p",null,"A facility for providing variable and controllable shunt reactive power. The SVC typically consists of a stepdown transformer, filter, thyristor-controlled reactor, and thyristor-switched capacitor arms."),Object(o.b)("p",null,"The SVC may operate in fixed MVar output mode or in voltage control mode. When in voltage control mode, the output of the SVC will be proportional to the deviation of voltage at the controlled bus from the voltage setpoint.  The SVC characteristic slope defines the proportion.  If the voltage at the controlled bus is equal to the voltage setpoint, the SVC MVar output is zero.  "),Object(o.b)("h3",{id:"attributes"},"Attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"capacitiveRating"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Reactance"}),"Reactance")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Capacitive reactance at maximum capacitive reactive power.  Shall always be positive.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"inductiveRating"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Reactance"}),"Reactance")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Inductive reactance at maximum inductive reactive power.  Shall always be negative.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/ReactivePower"}),"ReactivePower")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reactive power injection. Load sign convention is used, i.e. positive sign means flow out from a node. Starting value for a steady state solution.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"slope"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/VoltagePerReactivePower"}),"VoltagePerReactivePower")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The characteristics slope of an SVC defines how the reactive power output changes in proportion to the difference between the regulated bus voltage and the voltage setpoint. The attribute shall be a positive value or zero.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"sVCControlMode"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/SVCControlMode"}),"SVCControlMode")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SVC control mode.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"voltageSetPoint"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Voltage"}),"Voltage")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The reactive power output of the SVC is proportional to the difference between the voltage at the regulated bus and the voltage setpoint.  When the regulated bus voltage is equal to the voltage setpoint, the reactive power output is zero.")))),Object(o.b)("h3",{id:"relationships"},"Relationships"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/RegulatingCondEq"}),"RegulatingCondEq"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/StaticVarCompensatorDynamics/StaticVarCompensatorDynamics"}),"StaticVarCompensatorDynamics"),"  ")),Object(o.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.b)("h3",{id:"associations"},"Associations"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/StaticVarCompensatorDynamics/StaticVarCompensatorDynamics"}),"StaticVarCompensatorDynamics")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator"}),"StaticVarCompensator")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"StaticVarCompensatorDynamics"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Static Var Compensator dynamics model used to describe dynamic behaviour of this Static Var Compensator."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"StaticVarCompensator"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Static Var Compensator to which Static Var Compensator dynamics model applies.")))))}s.isMDXComponent=!0}}]);