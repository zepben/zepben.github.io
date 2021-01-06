(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=p(a),s=i,j=m["".concat(c,".").concat(s)]||m[s]||O[s]||n;return a?r.a.createElement(j,l({ref:t},o,{components:a})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,c=new Array(n);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<n;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},703:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var i=a(2),r=a(6),n=(a(0),a(2147)),c={title:"OperationalLimit"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",id:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",isDocsHomePage:!1,title:"OperationalLimit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\OperationalLimits\\OperationalLimit.md",slug:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",version:"current",sidebar:"docs",previous:{title:"CurrentLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/CurrentLimit"},next:{title:"OperationalLimitDirectionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitDirectionKind"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"class-description"},"Class Description"),Object(n.b)("p",null,"A value and normal value associated with a specific kind of limit. "),Object(n.b)("p",null,"The sub class value and normalValue attributes vary inversely to the associated OperationalLimitType.acceptableDuration (acceptableDuration for short).  "),Object(n.b)("p",null,"If a particular piece of equipment has multiple operational limits of the same kind (apparent power, current, etc.), the limit with the greatest acceptableDuration shall have the smallest limit value and the limit with the smallest acceptableDuration shall have the largest limit value.  Note: A large current can only be allowed to flow through a piece of equipment for a short duration without causing damage, but a lesser current can be allowed to flow for a longer duration.   "),Object(n.b)("h3",{id:"attributes"},"Attributes"),Object(n.b)("p",null,"None  "),Object(n.b)("h3",{id:"relationships"},"Relationships"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/ActivePowerLimit"}),"ActivePowerLimit"),"  "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/ApparentPowerLimit"}),"ApparentPowerLimit"),"  "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/CurrentLimit"}),"CurrentLimit"),"  "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitScalingLimit"}),"LimitScalingLimit"),"  "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/VoltageLimit"}),"VoltageLimit"),"  ")),Object(n.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(n.b)("h3",{id:"associations"},"Associations"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(n.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit"}),"OperationalLimit")),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}),"OperationalLimitType")),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"OperationalLimit"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The operational limits associated with this type of limit."),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"OperationalLimitType"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The limit type associated with this limit.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit"}),"OperationalLimit")),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency"}),"LimitDependency")),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"OperationalLimit"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The operational limits to which this limit dependency model applies."),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"LimitDependencyModel"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The limit dependency models which are used to calculate this limit.   If no limit dependencies are specified then the native limit value is used.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitScalingLimit"}),"LimitScalingLimit")),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(i.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit"}),"OperationalLimit")),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"1"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"LimitScalingLimit"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"})),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"SourceOperationalLimit"),Object(n.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);