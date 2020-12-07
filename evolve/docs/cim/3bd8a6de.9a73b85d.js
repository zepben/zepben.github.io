(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=d(a),O=n,p=s["".concat(b,".").concat(O)]||s[O]||m[O]||c;return a?r.a.createElement(p,o({ref:t},l,{components:a})):r.a.createElement(p,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var l=2;l<c;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},550:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(2147)),b={title:"LoadMotor"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",isDocsHomePage:!1,title:"LoadMotor",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\LoadDynamics\\LoadMotor.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",version:"current",sidebar:"docs",previous:{title:"LoadStatic",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadStatic"},next:{title:"GenericNonLinearLoadModelKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/GenericNonLinearLoadModelKind"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,'Aggregate induction motor load. This model is used to represent a fraction of an ordinary load as "induction motor load".  It allows a load that is treated as an ordinary constant power in power flow analysis to be represented by an induction motor in dynamic simulation. This model is intended for representation of aggregations of many motors dispersed through a load represented at a high voltage bus but where there is no information on the characteristics of individual motors.'),Object(c.b)("p",null,'Either a "one-cage" or "two-cage" model of the induction machine can be modelled. Magnetic saturation is not modelled.'),Object(c.b)("p",null,"This model treats a fraction of the constant power part of a load as a motor. During initialisation, the initial power drawn by the motor is set equal to ",Object(c.b)("i",null,"Pfrac")," times the constant ",Object(c.b)("i",null,"P")," part of the static load.  The remainder of the load is left as a static load."),Object(c.b)("p",null,"The reactive power demand of the motor is calculated during initialisation as a function of voltage at the load bus. This reactive power demand can be less than or greater than the constant ",Object(c.b)("i",null,"Q")," component of the load.  If the motor's reactive demand is greater than the constant ",Object(c.b)("i",null,"Q")," component of the load, the model inserts a shunt capacitor at the terminal of the motor to bring its reactive demand down to equal the constant ",Object(c.b)("i",null,"Q")," reactive load.  "),Object(c.b)("p",null,"If an induction motor load model and a static load model are both present for a load, the motor ",Object(c.b)("i",null,"Pfrac")," is assumed to be subtracted from the power flow constant ",Object(c.b)("i",null,"P")," load before the static load model is applied.  The remainder of the load, if any, is then represented by the static load model.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"d"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Damping factor (",Object(c.b)("i",null,"D"),").  Unit = delta ",Object(c.b)("i",null,"P"),"/delta speed.  Typical value = 2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"h"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Inertia constant (",Object(c.b)("i",null,"H"),") (",">","= 0).  Typical value = 0,4.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lfac"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Loading factor (",Object(c.b)("i",null,"Lfac"),"). The ratio of initial ",Object(c.b)("i",null,"P")," to motor MVA base.  Typical value = 0,8.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lp"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transient reactance (",Object(c.b)("i",null,"Lp"),").  Typical value = 0,15.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lpp"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Subtransient reactance (",Object(c.b)("i",null,"Lpp"),").  Typical value = 0,15.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ls"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Synchronous reactance (",Object(c.b)("i",null,"Ls"),").  Typical value = 3,2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pfrac"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Fraction of constant-power load to be represented by this motor model (",Object(c.b)("i",null,"Pfrac"),") (",">","= 0,0 and ","<","= 1,0).  Typical value = 0,3.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ra"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stator resistance (",Object(c.b)("i",null,"Ra"),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tbkr"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Circuit breaker operating time (",Object(c.b)("i",null,"Tbkr"),") (",">","= 0).  Typical value = 0,08.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpo"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transient rotor time constant (",Object(c.b)("i",null,"Tpo"),") (",">","= 0).  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tppo"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Subtransient rotor time constant (",Object(c.b)("i",null,"Tppo"),") (",">","= 0).  Typical value = 0,02.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tv"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage trip pickup time (",Object(c.b)("i",null,"Tv"),") (",">","= 0).  Typical value = 0,1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage threshold for tripping (",Object(c.b)("i",null,"Vt"),").  Typical value = 0,7.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor"}),"LoadMotor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadAggregate"}),"LoadAggregate")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LoadMotor"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Aggregate motor (dynamic) load associated with this aggregate load."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LoadAggregate"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Aggregate load to which this aggregate motor (dynamic) load belongs.")))))}d.isMDXComponent=!0}}]);