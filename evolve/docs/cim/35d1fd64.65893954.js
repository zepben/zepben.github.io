(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),O=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=O(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=O(a),s=r,d=j["".concat(c,".").concat(s)]||j[s]||p[s]||b;return a?n.a.createElement(d,l({ref:t},o,{components:a})):n.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},500:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var r=a(2),n=a(6),b=(a(0),a(2147)),c={title:"PhaseCode"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",id:"cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",isDocsHomePage:!1,title:"PhaseCode",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Core\\PhaseCode.md",slug:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",version:"current",sidebar:"docs",previous:{title:"PSRType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/PSRType"},next:{title:"PowerSystemResource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"An unordered enumeration of phase identifiers.  Allows designation of phases for both transmission and distribution equipment, circuits and loads.   The enumeration, by itself, does not describe how the phases are connected together or connected to ground.  Ground is not explicitly denoted as a phase."),Object(b.b)("p",null,"Residential and small commercial loads are often served from single-phase, or split-phase, secondary circuits. For the example of s12N, phases 1 and 2 refer to hot wires that are 180 degrees out of phase, while N refers to the neutral wire. Through single-phase transformer connections, these secondary circuits may be served from one or two of the primary phases A, B, and C. For three-phase loads, use the A, B, C phase codes instead of s12N."),Object(b.b)("p",null,"The integer values are from IEC 61968-9 to support revenue metering applications.  "),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ABCN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases A, B, C, and N.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ABC"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases A, B, and C.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ABN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases A, B, and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ACN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases A, C and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BCN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases B, C, and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases A and B.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AC"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases A and C.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BC"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases B and C.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases A and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases B and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phases C and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase A.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"B"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase B.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"C"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase C.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Neutral phase.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"s1N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Secondary phase 1 and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"s2N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Secondary phase 2 and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"s12N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Secondary phases 1, 2, and neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"s1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Secondary phase 1.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"s2"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Secondary phase 2.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"s12"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Secondary phase 1 and 2.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"none"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"No phases specified.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"X"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Unknown non-neutral phase.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"XY"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Two unknown non-neutral phases.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"XN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Unknown non-neutral phase plus neutral.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"XYN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Two unknown non-neutral phases plus neutral.")))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"None")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("p",null,"None"))}O.isMDXComponent=!0}}]);