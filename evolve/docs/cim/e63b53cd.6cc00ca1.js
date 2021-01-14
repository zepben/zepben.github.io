(window.webpackJsonp=window.webpackJsonp||[]).push([[1894],{1963:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),c=(a(0),a(2160)),l={title:"TurbLCFB1"},i={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",isDocsHomePage:!1,title:"TurbLCFB1",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\TurbineLoadControllerDynamics\\TurbLCFB1.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",version:"current",sidebar:"docs",previous:{title:"TurbineLoadControllerDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics"},next:{title:"MechanicalLoadDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/MechanicalLoadDynamics/MechanicalLoadDynamics"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Turbine load controller model developed by WECC.  This model represents a supervisory turbine load controller that acts to maintain turbine power at a set value by continuous adjustment of the turbine governor speed-load reference. This model is intended to represent slow reset 'outer loop' controllers managing the action of the turbine governor.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"db"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Controller deadband (",Object(c.a)("i",null,"db"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"emax"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum control error (",Object(c.a)("i",null,"Emax"),") (see parameter detail 4).  Typical value = 0,02.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"fb"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Frequency bias gain (",Object(c.a)("i",null,"Fb"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"fbf"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Frequency bias flag (",Object(c.a)("i",null,"Fbf"),"). true = enable frequency bias false = disable frequency bias. Typical value = false.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"irmax"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum turbine speed/load reference bias (",Object(c.a)("i",null,"Irmax"),") (see parameter detail 3).  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ki"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Integral gain (",Object(c.a)("i",null,"Ki"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"kp"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Proportional gain (",Object(c.a)("i",null,"Kp"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"mwbase"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Base for power values (",Object(c.a)("i",null,"MWbase"),") (",">"," 0).  Unit = MW.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pbf"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Power controller flag (",Object(c.a)("i",null,"Pbf"),"). true = enable load controller false = disable load controller. Typical value = false.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pmwset"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Power controller setpoint (",Object(c.a)("i",null,"Pmwset"),") (see parameter detail 1).  Unit = MW. Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"speedReferenceGovernor"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Type of turbine governor reference (",Object(c.a)("i",null,"Type"),"). true = speed reference governor false = load reference governor. Typical value = true.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tpelec"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Power transducer time constant (",Object(c.a)("i",null,"Tpelec"),") (",">","= 0).  Typical value = 0.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics"}),"TurbineLoadControllerDynamics"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}s.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,O=m["".concat(l,".").concat(p)]||m[p]||d[p]||c;return a?n.a.createElement(O,i({ref:t},b,{components:a})):n.a.createElement(O,i({ref:t},b))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);