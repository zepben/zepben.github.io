(window.webpackJsonp=window.webpackJsonp||[]).push([[1343],{1401:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),o=(r(0),r(2146)),c={title:"PFVArType2Common1"},l={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2Common1",id:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2Common1",isDocsHomePage:!1,title:"PFVArType2Common1",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PFVArControllerType2Dynamics\\PFVArType2Common1.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2Common1",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2Common1",version:"current",sidebar:"docs",previous:{title:"PFVArType2IEEEVArController",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController"},next:{title:"VoltageCompensatorDynamics",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VoltageCompensatorDynamics"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={rightToc:i};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"class-description"},"Class Description"),Object(o.b)("p",null,"Power factor / reactive power regulator. This model represents the power factor or reactive power controller such as the Basler SCP-250. The controller measures power factor or reactive power (PU on generator rated power) and compares it with the operator's set point."),Object(o.b)("p",null,"[Footnote: Basler SCP-250 is an example of a suitable product available commercially. This information is given for the convenience of users of this document and does not constitute an endorsement by IEC of this product.]","  "),Object(o.b)("h3",{id:"attributes"},"Attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"j"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Selector (",Object(o.b)("i",null,"J"),"). true = control mode for reactive power false = control mode for power factor.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ki"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Reset gain (",Object(o.b)("i",null,"Ki"),").")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"kp"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Proportional gain (",Object(o.b)("i",null,"Kp"),").")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"max"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Output limit (",Object(o.b)("i",null,"max"),").")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ref"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Reference value of reactive power or power factor (",Object(o.b)("i",null,"Ref"),"). The reference value is initialised by this model. This initialisation can override the value exchanged by this attribute to represent a plant operator's change of the reference setting.")))),Object(o.b)("h3",{id:"relationships"},"Relationships"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics"}),"PFVArControllerType2Dynamics"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.b)("h3",{id:"associations"},"Associations"),Object(o.b)("p",null,"None"))}s.isMDXComponent=!0},2146:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,O=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.a.createElement(O,l({ref:t},b,{components:r})):n.a.createElement(O,l({ref:t},b))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<o;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);