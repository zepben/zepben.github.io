(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(a),O=n,j=p["".concat(i,".").concat(O)]||p[O]||m[O]||c;return a?r.a.createElement(j,l({ref:t},o,{components:a})):r.a.createElement(j,l({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},865:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(2160)),i={title:"PhaseImpedanceData"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",id:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",isDocsHomePage:!1,title:"PhaseImpedanceData",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\PhaseImpedanceData.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",version:"current",sidebar:"docs",previous:{title:"RegulatingControl",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl"},next:{title:"ShuntCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Impedance and conductance matrix element values. "),Object(c.a)("p",null,"The diagonal elements are described by the elements having the same toPhase and fromPhase value and the off diagonal elements have different toPhase and fromPhase values.  The matrix can also be stored in symmetric lower triangular format using the row and column attributes, which map to ACLineSegmentPhase.sequenceNumber.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"b"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/SusceptancePerLength"}),"SusceptancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Susceptance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/ResistancePerLength"}),"ResistancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Resistance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/ReactancePerLength"}),"ReactancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"g"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/ConductancePerLength"}),"ConductancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Conductance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fromPhase"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind"}),"SinglePhaseKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Refer to the class description.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toPhase"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind"}),"SinglePhaseKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Refer to the class description.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"row"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The matrix element\u2019s row number, in the range 1 to PerLengthPhaseImpedance.conductorCount. Only the lower triangle needs to be stored. This row number matches ACLineSegmentPhase.sequenceNumber.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"column"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The matrix element's column number, in the range 1 to row. Only the lower triangle needs to be stored. This column number matches ACLineSegmentPhase.sequenceNumber.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/PerLengthPhaseImpedance"}),"PerLengthPhaseImpedance")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData"}),"PhaseImpedanceData")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PhaseImpedance"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Conductor phase impedance to which this data belongs."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PhaseImpedanceData"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All data that belong to this conductor phase impedance.")))))}s.isMDXComponent=!0}}]);