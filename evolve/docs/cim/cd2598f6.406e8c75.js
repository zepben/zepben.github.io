(window.webpackJsonp=window.webpackJsonp||[]).push([[1690],{1761:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return O}));var i=a(3),n=a(7),r=(a(0),a(2160)),c={title:"OperationalLimitType"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",id:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",isDocsHomePage:!1,title:"OperationalLimitType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\OperationalLimits\\OperationalLimitType.md",slug:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",version:"current",sidebar:"docs",previous:{title:"OperationalLimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet"},next:{title:"TopologicalIsland",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:o};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.a)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"The operational meaning of a category of limits."),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"acceptableDuration"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The nominal acceptable duration of the limit. Limits are commonly expressed in terms of the time limit for which the limit is normally acceptable. The actual acceptable duration of a specific limit may depend on other local factors such as temperature or wind speed. The attribute has meaning only if the flag isInfiniteDuration is set to false, hence it shall not be exchanged when isInfiniteDuration is set to true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"direction"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitDirectionKind"}),"OperationalLimitDirectionKind")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The direction of the limit.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"isInfiniteDuration"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Defines if the operational limit type has infinite duration. If true, the limit has infinite duration. If false, the limit has definite duration which is defined by the attribute acceptableDuration.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit"}),"OperationalLimit")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}),"OperationalLimitType")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"OperationalLimit"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The operational limits associated with this type of limit."),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"OperationalLimitType"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The limit type associated with this limit.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling"}),"OperatonalLimitTypeScaling")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}),"OperationalLimitType")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"SourceOperationalLimitTypeScaling"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"SourceOperationalLimitType"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling"}),"OperatonalLimitTypeScaling")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}),"OperationalLimitType")),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"TargetOperationalLimitmTypeScaling"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"TargetOperationalLimit"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),O=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=O(a),s=i,j=m["".concat(c,".").concat(s)]||m[s]||b[s]||r;return a?n.a.createElement(j,l({ref:t},p,{components:a})):n.a.createElement(j,l({ref:t},p))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);