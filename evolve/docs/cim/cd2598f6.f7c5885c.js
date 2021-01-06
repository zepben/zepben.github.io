(window.webpackJsonp=window.webpackJsonp||[]).push([[1692],{1749:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var i=a(2),n=a(6),r=(a(0),a(2147)),c={title:"OperationalLimitType"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",id:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",isDocsHomePage:!1,title:"OperationalLimitType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\OperationalLimits\\OperationalLimitType.md",slug:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",version:"current",sidebar:"docs",previous:{title:"OperationalLimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet"},next:{title:"VoltageLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/VoltageLimit"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"The operational meaning of a category of limits."),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"acceptableDuration"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The nominal acceptable duration of the limit. Limits are commonly expressed in terms of the time limit for which the limit is normally acceptable. The actual acceptable duration of a specific limit may depend on other local factors such as temperature or wind speed. The attribute has meaning only if the flag isInfiniteDuration is set to false, hence it shall not be exchanged when isInfiniteDuration is set to true.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"direction"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitDirectionKind"}),"OperationalLimitDirectionKind")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The direction of the limit.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"isInfiniteDuration"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Defines if the operational limit type has infinite duration. If true, the limit has infinite duration. If false, the limit has definite duration which is defined by the attribute acceptableDuration.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit"}),"OperationalLimit"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling"}),"OperatonalLimitTypeScaling"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling"}),"OperatonalLimitTypeScaling"),"  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit"}),"OperationalLimit")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}),"OperationalLimitType")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"OperationalLimit"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The operational limits associated with this type of limit."),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"OperationalLimitType"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The limit type associated with this limit.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling"}),"OperatonalLimitTypeScaling")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}),"OperationalLimitType")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"TargetOperationalLimitmTypeScaling"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"TargetOperationalLimit"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling"}),"OperatonalLimitTypeScaling")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}),"OperationalLimitType")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"SourceOperationalLimitTypeScaling"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"SourceOperationalLimitType"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),O=p(a),s=i,j=O["".concat(c,".").concat(s)]||O[s]||m[s]||r;return a?n.a.createElement(j,l({ref:t},o,{components:a})):n.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,c=new Array(r);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);