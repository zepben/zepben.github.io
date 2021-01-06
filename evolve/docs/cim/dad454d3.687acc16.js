(window.webpackJsonp=window.webpackJsonp||[]).push([[1810],{1867:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),c=(a(0),a(2147)),b={title:"TransformerEnd"},o={unversionedId:"evolve/IEC61970/Base/Wires/TransformerEnd",id:"evolve/IEC61970/Base/Wires/TransformerEnd",isDocsHomePage:!1,title:"TransformerEnd",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Wires\\TransformerEnd.md",slug:"/evolve/IEC61970/Base/Wires/TransformerEnd",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/TransformerEnd",version:"current",sidebar:"docs",previous:{title:"TapChanger",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/TapChanger"},next:{title:"WindingConnection",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/WindingConnection"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"A conducting connection point of a power transformer. It corresponds to a physical transformer winding terminal.  In earlier CIM versions, the TransformerWinding class served a similar purpose, but this class is more flexible because it associates to terminal but is not a specialization of ConductingEquipment.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"endNumber"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Number for this transformer end, corresponding to the end's order in the power transformer vector group or phase angle clock number.  Highest voltage winding should be 1.  Each end within a power transformer should have a unique subsequent end number.   Note the transformer end number need not match the terminal sequence number.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"grounded"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(for Yn and Zn connections) True if the neutral is solidly grounded.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rground"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Domain/Resistance"}),"Resistance")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(for Yn and Zn connections) Resistance part of neutral impedance where 'grounded' is true.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"xground"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Domain/Reactance"}),"Reactance")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(for Yn and Zn connections) Reactive part of neutral impedance where 'grounded' is true.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/evolve/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/evolve/IEC61970/Base/Wires/PowerTransformerEnd"}),"PowerTransformerEnd"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Wires/TransformerEnd"}),"TransformerEnd")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Core/BaseVoltage"}),"BaseVoltage")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransformerEnds"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transformer ends at the base voltage.  This is essential for PU calculation."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Base voltage of the transformer end.  This is essential for PU calculation.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Wires/TransformerEnd"}),"TransformerEnd")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Core/Terminal"}),"Terminal")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransformerEnd"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All transformer ends connected at this terminal."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Terminal of the power transformer to which this transformer end belongs.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Wires/TransformerEnd"}),"TransformerEnd")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/Wires/RatioTapChanger"}),"RatioTapChanger")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransformerEnd"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transformer end to which this ratio tap changer belongs."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RatioTapChanger"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Ratio tap changer associated with this transformer end.")))))}s.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},O=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=s(a),d=r,m=O["".concat(b,".").concat(d)]||O[d]||p[d]||c;return a?n.a.createElement(m,o({ref:t},l,{components:a})):n.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);