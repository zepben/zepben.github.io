(window.webpackJsonp=window.webpackJsonp||[]).push([[1837],{1906:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(2160)),c={title:"OverexcLim2"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",isDocsHomePage:!1,title:"OverexcLim2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\OverexcitationLimiterDynamics\\OverexcLim2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",version:"current",sidebar:"docs",previous:{title:"OverexcLimIEEE",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE"},next:{title:"OverexcLimX1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimX1"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Different from LimIEEEOEL, LimOEL2 has a fixed pickup threshold and reduces the excitation set-point by means of a non-windup integral regulator."),Object(r.a)("i",null,"Irated")," is the rated machine excitation current (calculated from nameplate conditions: ",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"nom")),", ",Object(r.a)("i",null,"P"),Object(r.a)("i",null,Object(r.a)("sub",null,"nom")),", ",Object(r.a)("i",null,"CosPhi"),Object(r.a)("i",null,Object(r.a)("sub",null,"nom")),"). ### Attributes | Name   | Type                                          | Description                                                                                               | |:-------|:----------------------------------------------|:----------------------------------------------------------------------------------------------------------| | ifdlim | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU) | Limit value of rated field current (",Object(r.a)("i",null,"I"),Object(r.a)("i",null,Object(r.a)("sub",null,"FDLIM")),").  Typical value = 1,05.              | | koi    | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU) | Gain Over excitation limiter (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"OI")),").  Typical value = 0,1.                        | | voimax | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU) | Maximum error signal (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"OIMAX")),") (> OverexcLim2.voimin).  Typical value = 0.     | | voimin | [PU](/cim100/TC57CIM/IEC61970/Base/Domain/PU) | Minimum error signal (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"OIMIN")),") (< OverexcLim2.voimax).  Typical value = -9999. | ### Relationships __Inherits from__ - [OverexcitationLimiterDynamics](/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcitationLimiterDynamics)",Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}m.isMDXComponent=!0},2160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),m=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),O=m(n),p=a,d=O["".concat(c,".").concat(p)]||O[p]||u[p]||r;return n?i.a.createElement(d,o({ref:t},s,{components:n})):i.a.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);