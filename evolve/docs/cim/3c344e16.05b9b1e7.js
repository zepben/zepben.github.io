(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{2147:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return y}));var n=t(0),c=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),l=function(e){var a=c.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):s({},a,{},e)),t},m=function(e){var a=l(e.components);return c.a.createElement(b.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},h=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=l(t),h=n,y=m["".concat(i,".").concat(h)]||m[h]||d[h]||r;return t?c.a.createElement(y,s({ref:a},b,{components:t})):c.a.createElement(y,s({ref:a},b))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var b=2;b<r;b++)i[b]=t[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},553:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return l}));var n=t(2),c=t(6),r=(t(0),t(2147)),i={title:"AsynchronousMachineDynamics"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",isDocsHomePage:!1,title:"AsynchronousMachineDynamics",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\AsynchronousMachineDynamics\\AsynchronousMachineDynamics.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",version:"current",sidebar:"docs",previous:{title:"RotorKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/RotorKind"},next:{title:"AsynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineTimeConstantReactance"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={rightToc:o};function l(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"Asynchronous machine whose behaviour is described by reference to a standard model expressed in either time constant reactance form or equivalent circuit form ",Object(r.b)("font",{color:"#0f0f0f"},"or by definition of a user-defined model.")),Object(r.b)("p",null,"Parameter details:"),Object(r.b)("ol",null,Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"<li>Asynchronous machine parameters such as <i>Xl, Xs,</i> etc. are actually used as inductances in the model, but are commonly referred to as reactances since, at nominal frequency, the PU values are the same. However, some references use the symbol <i>L</i> instead of <i>X</i>.</li>\n"))),"### Attributes",Object(r.b)("p",null,"None  "),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/RotatingMachineDynamics"}),"RotatingMachineDynamics"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit"}),"AsynchronousMachineEquivalentCircuit"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineTimeConstantReactance"}),"AsynchronousMachineTimeConstantReactance"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/AsynchronousMachineUserDefined"}),"AsynchronousMachineUserDefined"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/MechanicalLoadDynamics/MechanicalLoadDynamics"}),"MechanicalLoadDynamics"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics"}),"TurbineGovernorDynamics"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics"}),"WindTurbineType1or2Dynamics"),"  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics"}),"AsynchronousMachineDynamics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/AsynchronousMachine"}),"AsynchronousMachine")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine dynamics model used to describe dynamic behaviour of this asynchronous machine."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachine"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine to which this asynchronous machine dynamics model applies.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics"}),"TurbineGovernorDynamics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics"}),"AsynchronousMachineDynamics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TurbineGovernorDynamics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine-governor model associated with this asynchronous machine model."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine model with which this turbine-governor model is associated. TurbineGovernorDynamics shall have either an association to SynchronousMachineDynamics or to AsynchronousMachineDynamics.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/MechanicalLoadDynamics/MechanicalLoadDynamics"}),"MechanicalLoadDynamics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics"}),"AsynchronousMachineDynamics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MechanicalLoadDynamics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Mechanical load model associated with this asynchronous machine model."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine model with which this mechanical load model is associated. MechanicalLoadDynamics shall have either an association to SynchronousMachineDynamics or to AsynchronousMachineDynamics.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics"}),"WindTurbineType1or2Dynamics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics"}),"AsynchronousMachineDynamics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindTurbineType1or2Dynamics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind generator type 1 or type 2 model associated with this asynchronous machine model."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine model with which this wind generator type 1 or type 2 model is associated.")))))}l.isMDXComponent=!0}}]);