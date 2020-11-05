(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),O=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=O(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=O(a),d=n,m=j["".concat(c,".").concat(d)]||j[d]||s[d]||r;return a?b.a.createElement(m,l({ref:t},o,{components:a})):b.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},250:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),b=a(6),r=(a(0),a(2147)),c={title:"Pss2ST"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2ST",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2ST",isDocsHomePage:!1,title:"Pss2ST",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PowerSystemStabilizerDynamics\\Pss2ST.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2ST",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2ST",version:"current",sidebar:"docs",previous:{title:"InputSignalKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/InputSignalKind"},next:{title:"Pss5",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"PTI microprocessor-based stabilizer type 1.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inputSignal1Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/InputSignalKind"}),"InputSignalKind")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of input signal #1 (rotorAngularFrequencyDeviation, busFrequencyDeviation, generatorElectricalPower, generatorAcceleratingPower, busVoltage, or busVoltageDerivative - shall be different than Pss2ST.inputSignal2Type).  Typical value = rotorAngularFrequencyDeviation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inputSignal2Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/InputSignalKind"}),"InputSignalKind")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of input signal #2 (rotorAngularFrequencyDeviation, busFrequencyDeviation, generatorElectricalPower, generatorAcceleratingPower, busVoltage, or busVoltageDerivative - shall be different than Pss2ST.inputSignal1Type).  Typical value = busVoltageDerivative.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.b)("i",null,"K"),Object(r.b)("i",null,Object(r.b)("sub",null,"1")),").")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.b)("i",null,"K"),Object(r.b)("i",null,Object(r.b)("sub",null,"2")),").")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lsmax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limiter (",Object(r.b)("i",null,"L"),Object(r.b)("i",null,Object(r.b)("sub",null,"SMAX")),") (",">"," Pss2ST.lsmin).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lsmin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limiter (",Object(r.b)("i",null,"L"),Object(r.b)("i",null,Object(r.b)("sub",null,"SMIN")),") (","<"," Pss2ST.lsmax).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"1")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t10"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"10")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"2")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"3")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"4")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"5")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"6")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"7")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"8")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"9")),") (",">","= 0).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vcl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Cutoff limiter (",Object(r.b)("i",null,"V"),Object(r.b)("i",null,Object(r.b)("sub",null,"CL")),").")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vcu"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Cutoff limiter (",Object(r.b)("i",null,"V"),Object(r.b)("i",null,Object(r.b)("sub",null,"CU")),").")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}),"PowerSystemStabilizerDynamics"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("p",null,"None"))}O.isMDXComponent=!0}}]);