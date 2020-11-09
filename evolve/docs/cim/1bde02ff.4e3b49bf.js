(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=d(a),m=n,j=O["".concat(c,".").concat(m)]||O[m]||p[m]||b;return a?r.a.createElement(j,i({ref:t},o,{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},254:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),b=(a(0),a(2147)),c={title:"WindPitchContPowerIEC"},i={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",isDocsHomePage:!1,title:"WindPitchContPowerIEC",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\WindDynamics\\WindPitchContPowerIEC.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",version:"current",sidebar:"docs",previous:{title:"WindMechIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindMechIEC"},next:{title:"WindContRotorRIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContRotorRIEC"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"Pitch control power model."),Object(b.b)("p",null,"Reference: IEC 61400-27-1:2015, 5.6.5.1.  "),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dpmax"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rate limit for increasing power (",Object(b.b)("i",null,"dp"),Object(b.b)("i",null,Object(b.b)("sub",null,"max")),") (",">"," WindPitchContPowerIEC.dpmin). It is a type-dependent parameter.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dpmin"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rate limit for decreasing power (",Object(b.b)("i",null,"dp"),Object(b.b)("i",null,Object(b.b)("sub",null,"min")),") (","<"," WindPitchContPowerIEC.dpmax). It is a type-dependent parameter.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmin"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum power setting (",Object(b.b)("i",null,"p"),Object(b.b)("i",null,Object(b.b)("sub",null,"min")),"). It is a type-dependent parameter.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pset"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("i",null,"p"),Object(b.b)("i",null,Object(b.b)("sub",null,"init")),Object(b.b)("sub",null," "),"<"," ",Object(b.b)("i",null,"p"),Object(b.b)("i",null,Object(b.b)("sub",null,"set")),Object(b.b)("sub",null," "),"then power will be ramped down to ",Object(b.b)("i",null,"p"),Object(b.b)("i",null,Object(b.b)("sub",null,"min")),". It is (",Object(b.b)("i",null,"p"),Object(b.b)("i",null,Object(b.b)("sub",null,"set")),") in the IEC 61400-27-1:2015. It is a type-dependent parameter.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant (",Object(b.b)("i",null,"T"),Object(b.b)("i",null,Object(b.b)("sub",null,"1")),") (",">","= 0). It is a type-dependent parameter.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tr"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage measurement time constant (",Object(b.b)("i",null,"T"),Object(b.b)("i",null,Object(b.b)("sub",null,"r")),") (",">","= 0). It is a type-dependent parameter.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uuvrt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Dip detection threshold (",Object(b.b)("i",null,"u"),Object(b.b)("i",null,Object(b.b)("sub",null,"UVRT")),"). It is a type-dependent parameter.")))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable"}),"WindDynamicsLookupTable"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindGenTurbineType1bIEC"}),"WindGenTurbineType1bIEC"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindGenTurbineType1bIEC"}),"WindGenTurbineType1bIEC")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC"}),"WindPitchContPowerIEC")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindGenTurbineType1bIEC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbine type 1B model with which this pitch control power model is associated."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPitchContPowerIEC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pitch control power model associated with this wind turbine type 1B model.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC"}),"WindPitchContPowerIEC")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindGenTurbineType2IEC"}),"WindGenTurbineType2IEC")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPitchContPowerIEC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pitch control power model associated with this wind turbine type 2 model."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindGenTurbineType2IEC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbine type 2 model with which this pitch control power model is associated.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable"}),"WindDynamicsLookupTable")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC"}),"WindPitchContPowerIEC")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindDynamicsLookupTable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The wind dynamics lookup table associated with this pitch control power model."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPitchContPowerIEC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The pitch control power model with which this wind dynamics lookup table is associated.")))))}d.isMDXComponent=!0}}]);