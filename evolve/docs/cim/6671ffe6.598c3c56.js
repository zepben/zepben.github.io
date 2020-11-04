(window.webpackJsonp=window.webpackJsonp||[]).push([[818],{2146:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,p=m["".concat(c,".").concat(u)]||m[u]||b[u]||a;return n?r.a.createElement(p,o({ref:t},s,{components:n})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},876:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(2146)),c={title:"UnderexcLimX1"},o={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",id:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",isDocsHomePage:!1,title:"UnderexcLimX1",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\UnderexcitationLimiterDynamics\\UnderexcLimX1.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",version:"current",sidebar:"docs",previous:{title:"UnderexcLim2Simplified",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLim2Simplified"},next:{title:"UnderexcLimX2",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"class-description"},"Class Description"),Object(a.b)("font",{color:"#0f0f0f"},"Allis-Chalmers minimum excitation limiter."),"### Attributes | Name   | Type                                                   | Description                                                                     | |:-------|:-------------------------------------------------------|:--------------------------------------------------------------------------------| | k      | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit slope (",Object(a.b)("i",null,"K"),") (> 0).                             | | kf2    | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Differential gain (",Object(a.b)("i",null,"K"),Object(a.b)("i",null,Object(a.b)("sub",null,"F2")),").                               | | km     | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit gain (",Object(a.b)("i",null,"K"),Object(a.b)("i",null,Object(a.b)("sub",null,"M")),").                    | | melmax | [PU](/Model/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit value (",Object(a.b)("i",null,"MELMAX"),").                                 | | tf2    | [Seconds](/Model/TC57CIM/IEC61970/Base/Domain/Seconds) | Differential time constant (",Object(a.b)("i",null,"T"),Object(a.b)("i",null,Object(a.b)("sub",null,"F2")),") (>= 0).            | | tm     | [Seconds](/Model/TC57CIM/IEC61970/Base/Domain/Seconds) | Minimum excitation limit time constant (",Object(a.b)("i",null,"T"),Object(a.b)("i",null,Object(a.b)("sub",null,"M")),") (>= 0). | ### Relationships __Inherits from__ - [UnderexcitationLimiterDynamics](/Model/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcitationLimiterDynamics)",Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.b)("h3",{id:"associations"},"Associations"),Object(a.b)("p",null,"None"))}d.isMDXComponent=!0}}]);