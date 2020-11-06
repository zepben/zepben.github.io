(window.webpackJsonp=window.webpackJsonp||[]).push([[2075],{2134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),c=(a(0),a(2147)),l={title:"PFVArType1IEEEPFController"},b={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArType1IEEEPFController",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArType1IEEEPFController",isDocsHomePage:!1,title:"PFVArType1IEEEPFController",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PFVArControllerType1Dynamics\\PFVArType1IEEEPFController.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArType1IEEEPFController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArType1IEEEPFController",version:"current",sidebar:"docs",previous:{title:"PFVArControllerType1Dynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArControllerType1Dynamics"},next:{title:"PFVArType1IEEEVArController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArType1IEEEVArController"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],i={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"IEEE PF controller type 1 which operates by moving the voltage reference directly."),Object(c.b)("p",null,"Reference: IEEE 421.5-2005, 11.2.   "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ovex"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Overexcitation Flag (",Object(c.b)("i",null,"OVEX"),") true = overexcited false = underexcited.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tpfc"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PF controller time delay (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"PFC")),") (",">","= 0).  Typical value = 5.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vitmin"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Minimum machine terminal current needed to enable pf/var controller (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"ITMIN")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vpf"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Synchronous machine power factor (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"PF")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vpfcbw"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PF controller deadband (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"PFC_BW")),").  Typical value = 0,05.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vpfref"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PF controller reference (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"PFREF")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vvtmax"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum machine terminal voltage needed for pf/var controller to be enabled (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"VTMAX")),") (",">"," PFVArType1IEEEPFController.vvtmin).")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vvtmin"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Minimum machine terminal voltage needed to enable pf/var controller (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"VTMIN")),") (","<"," PFVArType1IEEEPFController.vvtmax).")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArControllerType1Dynamics"}),"PFVArControllerType1Dynamics"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}p.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),s=r,j=O["".concat(l,".").concat(s)]||O[s]||m[s]||c;return a?n.a.createElement(j,b({ref:t},i,{components:a})):n.a.createElement(j,b({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<c;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);