(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{2146:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?n.a.createElement(f,c({ref:t},l,{components:r})):n.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},266:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),i=(r(0),r(2146)),o={title:"PowerSystemStabilizerUserDefined"},c={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/PowerSystemStabilizerUserDefined",id:"Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/PowerSystemStabilizerUserDefined",isDocsHomePage:!1,title:"PowerSystemStabilizerUserDefined",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\UserDefinedModels\\PowerSystemStabilizerUserDefined.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/PowerSystemStabilizerUserDefined",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/PowerSystemStabilizerUserDefined",version:"current",sidebar:"docs",previous:{title:"UnderexcitationLimiterUserDefined",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/UnderexcitationLimiterUserDefined"},next:{title:"DiscontinuousExcitationControlUserDefined",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/DiscontinuousExcitationControlUserDefined"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("font",{color:"#0f0f0f"},"Power system stabilizer")," function block whose dynamic behaviour is described by ",Object(i.b)("font",{color:"#0f0f0f"},"a user-defined model."),"### Attributes | Name        | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                             | |:------------|:-------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | proprietary | [Boolean](/Model/TC57CIM/IEC61970/Base/Domain/Boolean) | Behaviour is based on a proprietary model as opposed to a detailed model. true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes false = user-defined model is explicitly defined in terms of control blocks and their input and output signals. | ### Relationships __Inherits from__ - [PowerSystemStabilizerDynamics](/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics)",Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ProprietaryParameterDynamics"}),"ProprietaryParameterDynamics"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ProprietaryParameterDynamics"}),"ProprietaryParameterDynamics")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Dynamics/UserDefinedModels/PowerSystemStabilizerUserDefined"}),"PowerSystemStabilizerUserDefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ProprietaryParameterDynamics"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Parameter of this proprietary user-defined model."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PowerSystemStabilizerUserDefined"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Proprietary user-defined model with which this parameter is associated.")))))}b.isMDXComponent=!0}}]);