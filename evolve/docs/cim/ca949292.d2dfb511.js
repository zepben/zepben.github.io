(window.webpackJsonp=window.webpackJsonp||[]).push([[1652],{1710:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),c=(a(0),a(2146)),i={title:"SwitchPhase"},b={unversionedId:"Model/TC57CIM/IEC61970/Base/Wires/SwitchPhase",id:"Model/TC57CIM/IEC61970/Base/Wires/SwitchPhase",isDocsHomePage:!1,title:"SwitchPhase",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Base\\Wires\\SwitchPhase.md",slug:"/Model/TC57CIM/IEC61970/Base/Wires/SwitchPhase",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/SwitchPhase",version:"current",sidebar:"docs",previous:{title:"Switch",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/Switch"},next:{title:"SwitchSchedule",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Wires/SwitchSchedule"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Single phase of a multi-phase switch when its attributes might be different per phase."),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"closed"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The attribute tells if the switch is considered closed when used as input to topology processing.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"normalOpen"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Used in cases when no Measurement for the status value is present. If the SwitchPhase has a status measurement the Discrete.normalValue is expected to match with this value.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phaseSide1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind"}),"SinglePhaseKind")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase of this SwitchPhase on the side with terminal sequence number equal to 1. Should be a phase contained in that terminal\ufffds phases attribute.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phaseSide2"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind"}),"SinglePhaseKind")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase of this SwitchPhase on the side with terminal sequence number equal to 2.  Should be a phase contained in that terminal\ufffds Terminal.phases attribute.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedCurrent"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/CurrentFlow"}),"CurrentFlow")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The maximum continuous current carrying capacity in amps governed by the device material and construction. The attribute shall be a positive value.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Core/PowerSystemResource"}),"PowerSystemResource"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/SwitchPhase"}),"SwitchPhase")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The switch of the switch phase."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SwitchPhase"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The individual switch phases for the switch.")))))}o.isMDXComponent=!0},2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),o=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=o(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=o(a),d=r,h=p["".concat(i,".").concat(d)]||p[d]||O[d]||c;return a?n.a.createElement(h,b({ref:t},s,{components:a})):n.a.createElement(h,b({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);