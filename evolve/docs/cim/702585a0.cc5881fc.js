(window.webpackJsonp=window.webpackJsonp||[]).push([[935],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},O=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=s(a),p=n,m=O["".concat(l,".").concat(p)]||O[p]||j[p]||c;return a?r.a.createElement(m,b({ref:t},o,{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},993:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=(a(0),a(2147)),l={title:"AnalogValue"},b={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",id:"cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",isDocsHomePage:!1,title:"AnalogValue",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Meas\\AnalogValue.md",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",version:"current",sidebar:"docs",previous:{title:"AnalogLimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/AnalogLimitSet"},next:{title:"Command",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Command"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"AnalogValue represents an analog MeasurementValue.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The value to supervise.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValue"}),"MeasurementValue"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/ControlArea/AltGeneratingUnitMeas"}),"AltGeneratingUnitMeas"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/ControlArea/AltTieMeas"}),"AltTieMeas"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/Analog"}),"Analog"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/Analog"}),"Analog")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue"}),"AnalogValue")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Analog"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement to which this value is connected."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValues"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The values connected to this measurement.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue"}),"AnalogValue")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogControl"}),"AnalogControl")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValue"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The MeasurementValue that is controlled."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogControl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Control variable associated with the MeasurementValue.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ControlArea/AltGeneratingUnitMeas"}),"AltGeneratingUnitMeas")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue"}),"AnalogValue")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AltGeneratingUnit"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The alternate generating unit for which this measurement value applies."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValue"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The specific analog value used as a source.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ControlArea/AltTieMeas"}),"AltTieMeas")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue"}),"AnalogValue")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AltTieMeas"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The usage of the measurement within the control area specification."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValue"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The specific analog value used as a source.")))))}s.isMDXComponent=!0}}]);