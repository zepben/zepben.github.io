(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{2147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=m(n),u=i,p=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(p,o({ref:t},s,{components:n})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var i=n(2),r=n(6),a=(n(0),n(2147)),c={title:"UnderexcLimX2"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",isDocsHomePage:!1,title:"UnderexcLimX2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\UnderexcitationLimiterDynamics\\UnderexcLimX2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",version:"current",sidebar:"docs",previous:{title:"UnderexcLimX1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1"},next:{title:"PowerSystemStabilizerDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"class-description"},"Class Description"),Object(a.b)("font",{color:"#0f0f0f"},"Westinghouse minimum excitation limiter."),"### Attributes | Name   | Type                                                   | Description                                                                     | |:-------|:-------------------------------------------------------|:--------------------------------------------------------------------------------| | kf2    | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Differential gain (",Object(a.b)("i",null,"K"),Object(a.b)("i",null,Object(a.b)("sub",null,"F2")),").                               | | km     | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit gain (",Object(a.b)("i",null,"K"),Object(a.b)("i",null,Object(a.b)("sub",null,"M")),").                    | | melmax | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit value (",Object(a.b)("i",null,"MELMAX"),").                                 | | qo     | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Excitation centre setting (",Object(a.b)("i",null,"Q"),Object(a.b)("i",null,Object(a.b)("sub",null,"O")),").                        | | r      | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Excitation radius (",Object(a.b)("i",null,"R"),").                                                   | | tf2    | [Seconds](/Model/TC57CIM/IEC61970/Base/Domain/Seconds) | Differential time constant (",Object(a.b)("i",null,"T"),Object(a.b)("i",null,Object(a.b)("sub",null,"F2")),") (>= 0).            | | tm     | [Seconds](/Model/TC57CIM/IEC61970/Base/Domain/Seconds) | Minimum excitation limit time constant (",Object(a.b)("i",null,"T"),Object(a.b)("i",null,Object(a.b)("sub",null,"M")),") (>= 0). | ### Relationships __Inherits from__ - [UnderexcitationLimiterDynamics](/Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcitationLimiterDynamics)",Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.b)("h3",{id:"associations"},"Associations"),Object(a.b)("p",null,"None"))}m.isMDXComponent=!0}}]);