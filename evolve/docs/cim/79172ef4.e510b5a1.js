(window.webpackJsonp=window.webpackJsonp||[]).push([[996],{1054:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var c=a(2),n=a(6),r=(a(0),a(2147)),i={title:"Switch"},b={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/Switch",id:"cim100/TC57CIM/IEC61970/Base/Wires/Switch",isDocsHomePage:!1,title:"Switch",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\Switch.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/Switch",version:"current",sidebar:"docs",previous:{title:"SVCControlMode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SVCControlMode"},next:{title:"SwitchPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"A generic device designed to close, or open, or both, one or more electric circuits.  All switches are two terminal devices including grounding switches. The ACDCTerminal.connected at the two sides of the switch shall not be considered for assessing switch connectivity, i.e. only Switch.open, .normalOpen and .locked are relevant.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"locked"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"If true, the switch is locked. The resulting switch state is a combination of locked and Switch.open attributes as follows: ",Object(r.b)("ul",null," \t",Object(r.b)("li",null,"locked=true and Switch.open=true. The resulting state is open and locked;")," \t",Object(r.b)("li",null,"locked=false and Switch.open=true. The resulting state is open;")," \t",Object(r.b)("li",null,"locked=false and Switch.open=false. The resulting state is closed.")," "))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"normalOpen"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The attribute is used in cases when no Measurement for the status value is present. If the Switch has a status measurement the Discrete.normalValue is expected to match with the Switch.normalOpen.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"open"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The attribute tells if the switch is considered open when used as input to topology processing.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"ratedCurrent"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow"}),"CurrentFlow")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The maximum continuous current carrying capacity in amps governed by the device material and construction. The attribute shall be a positive value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"retained"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Branch is retained in the topological solution.  The flow through retained switches will normally be calculated in power flow.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"switchOnCount"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The switch on count since the switch was last reset or initialized.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"switchOnDate"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The date and time when the switch was last switched on.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment"}),"ConductingEquipment"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/CompositeSwitch"}),"CompositeSwitch"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction"}),"ConnectDisconnectFunction"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Cut"}),"Cut"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Disconnector"}),"Disconnector"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Fuse"}),"Fuse"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/GroundDisconnector"}),"GroundDisconnector"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Jumper"}),"Jumper"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/MktSwitch"}),"MktSwitch"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/ProtectedSwitch"}),"ProtectedSwitch"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Sectionaliser"}),"Sectionaliser"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvSwitch"}),"SvSwitch"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Operations/SwitchAction"}),"SwitchAction"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction"}),"UnavailabilitySwitchAction"),"  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/CompositeSwitch"}),"CompositeSwitch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"CompositeSwitch"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Composite switch to which this Switch belongs."),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Switches"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Switches contained in this Composite switch.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase"}),"SwitchPhase")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The switch of the switch phase."),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"SwitchPhase"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The individual switch phases for the switch.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/SwitchSchedule"}),"SwitchSchedule")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"A SwitchSchedule is associated with a Switch."),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"SwitchSchedules"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"A Switch can be associated with SwitchSchedules.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvSwitch"}),"SvSwitch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"SvSwitch"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The switch state associated with the switch."),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The switch associated with the switch state.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction"}),"UnavailabilitySwitchAction")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/SwitchAction"}),"SwitchAction")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"SwitchAction"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Action changing status of this switch."),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"OperatedSwitch"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Switch that is the object of this switch action.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction"}),"ConnectDisconnectFunction")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(c.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"ConnectDisconnectFunctions"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"Switches"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}))))))}o.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var c=a(0),n=a.n(c);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),o=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=o(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(c.forwardRef)((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),s=o(a),m=c,p=s["".concat(i,".").concat(m)]||s[m]||j[m]||r;return a?n.a.createElement(p,b({ref:t},O,{components:a})):n.a.createElement(p,b({ref:t},O))}));function p(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,i=new Array(r);i[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:c,i[1]=b;for(var O=2;O<r;O++)i[O]=a[O];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);