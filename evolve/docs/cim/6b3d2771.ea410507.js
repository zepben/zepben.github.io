(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,O=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?r.a.createElement(O,l({ref:t},o,{components:a})):r.a.createElement(O,l({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},940:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(2147)),c={title:"WindPlantUserDefined"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindPlantUserDefined",id:"cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindPlantUserDefined",isDocsHomePage:!1,title:"WindPlantUserDefined",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\UserDefinedModels\\WindPlantUserDefined.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindPlantUserDefined",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindPlantUserDefined",version:"current",sidebar:"docs",previous:{title:"WindType3or4UserDefined",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindType3or4UserDefined"},next:{title:"CSCUserDefined",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/CSCUserDefined"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"Wind plant function block whose dynamic behaviour is described by ",Object(i.b)("font",{color:"#0f0f0f"},"a user-defined model."),"  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"proprietary"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Behaviour is based on a proprietary model as opposed to a detailed model. true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes false = user-defined model is explicitly defined in terms of control blocks and their input and output signals.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics"}),"WindPlantDynamics"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindPlantUserDefined"}),"WindPlantUserDefined")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ProprietaryParameterDynamics"}),"ProprietaryParameterDynamics")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPlantUserDefined"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Proprietary user-defined model with which this parameter is associated."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProprietaryParameterDynamics"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter of this proprietary user-defined model.")))))}s.isMDXComponent=!0}}]);