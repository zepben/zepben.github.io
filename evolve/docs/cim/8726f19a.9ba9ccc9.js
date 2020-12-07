(window.webpackJsonp=window.webpackJsonp||[]).push([[1109],{1167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(2147)),c={title:"ShuntCompensatorPhase"},i={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",id:"cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",isDocsHomePage:!1,title:"ShuntCompensatorPhase",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\ShuntCompensatorPhase.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",version:"current",sidebar:"docs",previous:{title:"ShuntCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"},next:{title:"SinglePhaseKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"class-description"},"Class Description"),Object(o.b)("p",null,"Single phase of a multi-phase shunt compensator when its attributes might be different per phase.  "),Object(o.b)("h3",{id:"attributes"},"Attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maximumSections"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum number of sections that may be switched in for this phase.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"normalSections"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"For the capacitor phase, the normal number of sections switched in. The value shall be between zero and ShuntCompensatorPhase.maximumSections.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phase"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind"}),"SinglePhaseKind")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phase of this shunt compensator component.   If the shunt compensator is wye connected, the connection is from the indicated phase to the central ground or neutral point.  If the shunt compensator is delta connected, the phase indicates a shunt compensator connected from the indicated phase to the next logical non-neutral phase.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sections"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shunt compensator sections in use. Starting value for steady state solution. The attribute shall be a positive value or zero. Non integer values are allowed to support continuous variables. The reasons for continuous value are to support study cases where no discrete shunt compensators has yet been designed, a solutions where a narrow voltage band force the sections to oscillate or accommodate for a continuous solution as input. For LinearShuntConpensator the value shall be between zero and ShuntCompensatorPhase.maximumSections. At value zero the shunt compensator conductance and admittance is zero. Linear interpolation of conductance and admittance between the previous and next integer section is applied in case of non-integer values. For NonlinearShuntCompensator-s shall only be set to one of the NonlinearShuntCompenstorPhasePoint.sectionNumber. There is no interpolation between NonlinearShuntCompenstorPhasePoint-s.")))),Object(o.b)("h3",{id:"relationships"},"Relationships"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource"}),"PowerSystemResource"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase"}),"LinearShuntCompensatorPhase"),"  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase"}),"NonlinearShuntCompensatorPhase"),"  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"}),"ShuntCompensator"),"  ")),Object(o.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.b)("h3",{id:"associations"},"Associations"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"}),"ShuntCompensator")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase"}),"ShuntCompensatorPhase")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensator"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shunt compensator of this shunt compensator phase."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensatorPhase"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The individual phases models for the shunt compensator.")))))}l.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?r.a.createElement(h,i({ref:t},b,{components:a})):r.a.createElement(h,i({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);