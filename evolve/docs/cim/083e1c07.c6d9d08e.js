(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),c=(a(0),a(2147)),b={title:"TapChangerControl"},i={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/TapChangerControl",id:"cim100/TC57CIM/IEC61970/Base/Wires/TapChangerControl",isDocsHomePage:!1,title:"TapChangerControl",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\TapChangerControl.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChangerControl",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TapChangerControl",version:"current",sidebar:"docs",previous:{title:"TapChanger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger"},next:{title:"TapChangerTablePoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TapChangerTablePoint"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Describes behaviour specific to tap changers, e.g. how the voltage at the end of a line varies with the load level and compensation of the voltage drop by tap adjustment.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"limitVoltage"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage"}),"Voltage")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum allowed regulated voltage on the PT secondary, regardless of line drop compensation. Sometimes referred to as first-house protection.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lineDropCompensation"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If true, the line drop compensation is to be applied.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lineDropR"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance"}),"Resistance")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Line drop compensator resistance setting for normal (forward) power flow.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lineDropX"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance"}),"Reactance")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Line drop compensator reactance setting for normal (forward) power flow.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"reverseLineDropR"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance"}),"Resistance")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Line drop compensator resistance setting for reverse power flow.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"reverseLineDropX"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance"}),"Reactance")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Line drop compensator reactance setting for reverse power flow.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl"}),"RegulatingControl"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger"}),"TapChanger"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger"}),"TapChanger")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChangerControl"}),"TapChangerControl")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapChanger"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The tap changers that participates in this regulating tap control scheme."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapChangerControl"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The regulating control scheme in which this tap changer participates.")))))}p.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(a),j=r,m=s["".concat(b,".").concat(j)]||s[j]||O[j]||c;return a?n.a.createElement(m,i({ref:t},l,{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=j;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);