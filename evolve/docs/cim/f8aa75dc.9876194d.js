(window.webpackJsonp=window.webpackJsonp||[]).push([[2039],{2109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(2175)),i=a(2176),s={title:"Measurement"},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/Measurement",id:"cim100/TC57CIM/IEC61970/Base/Meas/Measurement",isDocsHomePage:!1,title:"Measurement",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Meas\\Measurement.md",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",version:"current",sidebar:"docs",previous:{title:"Command",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Command"},next:{title:"Analog",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Analog"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A Measurement represents any measured, calculated or non-measured non-calculated quantity. Any piece of equipment may contain Measurements, e.g. a substation may have temperature measurements and door open indications, a transformer may have oil temperature and tank pressure measurements, a bay may contain a number of power flow measurements and a Breaker may contain a switch status measurement. "),Object(c.a)("p",null,"The PSR - Measurement association is intended to capture this use of Measurement and is included in the naming hierarchy based on EquipmentContainer. The naming hierarchy typically has Measurements as leaves, e.g. Substation-VoltageLevel-Bay-Switch-Measurement."),Object(c.a)("p",null,"Some Measurements represent quantities related to a particular sensor location in the network, e.g. a voltage transformer (VT) or potential transformer (PT) at a busbar or a current transformer (CT) at the bar between a breaker and an isolator. The sensing position is not captured in the PSR - Measurement association. Instead it is captured by the Measurement - Terminal association that is used to define the sensing location in the network topology. The location is defined by the connection of the Terminal to ConductingEquipment. "),Object(c.a)("p",null,"If both a Terminal and PSR are associated, and the PSR is of type ConductingEquipment, the associated Terminal should belong to that ConductingEquipment instance."),Object(c.a)("p",null,"When the sensor location is needed both Measurement-PSR and Measurement-Terminal are used. The Measurement-Terminal association is never used alone.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"measurementType"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Specifies the type of measurement.  For example, this specifies if the measurement represents an indoor temperature, outdoor temperature, bus voltage, line flow, etc. When the measurementType is set to "Specialization", the type of Measurement is defined in more detail by the specialized class which inherits from Measurement.')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phases"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",mdxType:"Link"},"PhaseCode")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates to which phases the measurement applies and avoids the need to use 'measurementType' to also encode phase information (which would explode the types). The phase information in Measurement, along with 'measurementType' and 'phases' uniquely defines a Measurement for a device, based on normal network phase. Their meaning will not change when the computed energizing phasing is changed due to jumpers or other reasons. If the attribute is missing three phases (ABC) shall be assumed.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unitMultiplier"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitMultiplier",mdxType:"Link"},"UnitMultiplier")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The unit multiplier of the measured quantity.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unitSymbol"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol",mdxType:"Link"},"UnitSymbol")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The unit of measure of the measured quantity.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Accumulator",mdxType:"Link"},"Accumulator")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Analog",mdxType:"Link"},"Analog")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Discrete",mdxType:"Link"},"Discrete")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MktMeasurement",mdxType:"Link"},"MktMeasurement")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/StringMeasurement",mdxType:"Link"},"StringMeasurement"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PowerSystemResource"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The power system resource that contains the measurement."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurements"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The measurements associated with this power system resource.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ACDCTerminal",mdxType:"Link"},"ACDCTerminal")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurements"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurements associated with this terminal defining  where the measurement is placed in the network topology.  It may be used, for instance, to capture the sensor position, such as a voltage transformer (PT) at a busbar or a current transformer (CT) at the bar between a breaker and an isolator."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"One or more measurements may be associated with a terminal in the network.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionAdjustment",mdxType:"Link"},"ProtectiveActionAdjustment")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The measurement is used to control the operation of an equipment."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProtectiveActionAdjustment"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetMeas/CalculationMethodHierarchy",mdxType:"Link"},"CalculationMethodHierarchy")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement to which this calculation method hierarchy applies."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CalculationMethodHierarchy"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calculation method hierarchy which applies to this analog.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/MeasurementCalculatorInput",mdxType:"Link"},"MeasurementCalculatorInput")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MeasurementCalculatorInput"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement used as input to a calculation.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinMeasurement",mdxType:"Link"},"PinMeasurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PinMeasurement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Measurement that should be used in compare.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/Location",mdxType:"Link"},"Location")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Locations"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurements"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/MeasurementAction",mdxType:"Link"},"MeasurementAction")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MeasurementAction"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Asset",mdxType:"Link"},"Asset")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asset"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurements"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement related to this asset.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Procedure",mdxType:"Link"},"Procedure")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Procedures"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurements are specified in types of documents, such as procedures."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurements"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Document containing this measurement.")))))}b.isMDXComponent=!0},2174:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=m(a),O=n,p=u["".concat(i,".").concat(O)]||u[O]||b[O]||c;return a?r.a.createElement(p,s({ref:t},l,{components:a})):r.a.createElement(p,s({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2174),s=a(8),o=Object(n.createContext)({collectLink:function(){}}),l=a(2177),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,b,u=e.isNavLink,O=e.to,p=e.href,d=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,C=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(l.b)().withBaseUrl,M=Object(n.useContext)(o),y=O||p,T=Object(i.a)(y),I=null==y?void 0:y.replace("pathname://",""),v=void 0!==I?(a=I,h&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,w=Object(n.useRef)(!1),k=u?c.e:c.c,E=s.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&T&&window.docusaurus.prefetch(v),function(){E&&b&&b.disconnect()}}),[v,E,T]);var x=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,L=!v||!T||x;return v&&T&&!x&&!f&&M.collectLink(v),L?r.a.createElement("a",Object.assign({href:v},y&&!T&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(k,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(v),w.current=!0)},innerRef:function(e){var t,a;E&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(v)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:v||""},u&&{isActive:j,activeClassName:d}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2174);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,s=void 0!==i&&i,o=c.absolute,l=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+m:m}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);