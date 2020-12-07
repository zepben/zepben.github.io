(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{2147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=m(n),u=i,p=b["".concat(a,".").concat(u)]||b[u]||d[u]||c;return n?r.a.createElement(p,o({ref:t},s,{components:n})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<c;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},668:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var i=n(2),r=n(6),c=(n(0),n(2147)),a={title:"UnderexcLimX1"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",isDocsHomePage:!1,title:"UnderexcLimX1",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\UnderexcitationLimiterDynamics\\UnderexcLimX1.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1",version:"current",sidebar:"docs",previous:{title:"UnderexcLim2Simplified",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLim2Simplified"},next:{title:"UnderexcLimX2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("font",{color:"#0f0f0f"},"Allis-Chalmers minimum excitation limiter."),"### Attributes | Name   | Type                                                    | Description                                                                     | |:-------|:--------------------------------------------------------|:--------------------------------------------------------------------------------| | k      | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit slope (",Object(c.b)("i",null,"K"),") (> 0).                             | | kf2    | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU)           | Differential gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"F2")),").                               | | km     | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"M")),").                    | | melmax | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU)           | Minimum excitation limit value (",Object(c.b)("i",null,"MELMAX"),").                                 | | tf2    | [Seconds](/cim100/TC57CIM/IEC61970/Base/Domain/Seconds) | Differential time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"F2")),") (>= 0).            | | tm     | [Seconds](/cim100/TC57CIM/IEC61970/Base/Domain/Seconds) | Minimum excitation limit time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"M")),") (>= 0). | ### Relationships __Inherits from__ - [UnderexcitationLimiterDynamics](/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcitationLimiterDynamics)",Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}m.isMDXComponent=!0}}]);