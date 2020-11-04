(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{2146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||a;return n?r.a.createElement(d,s({ref:t},l,{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},771:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(6),a=(n(0),n(2146)),o={title:"SeriesEquipmentDependentLimit"},s={unversionedId:"Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",id:"Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",isDocsHomePage:!1,title:"SeriesEquipmentDependentLimit",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\InfIEC61970\\InfOperationalLimits\\SeriesEquipmentDependentLimit.md",slug:"/Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",version:"current",sidebar:"docs",previous:{title:"ScheduledVoltageLimitValue",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledVoltageLimitValue"},next:{title:"TemperatureDependentLimitPoint",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperatureDependentLimitPoint"}},c=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"class-description"},"Class Description"),Object(a.b)("p",null,"Limit based on most restrictive series equipment limit."),Object(a.b)("p",null,"A specification of  of equipment that determines the calculated operational limit values based upon other equipment and their ratings.  The most restrictive limit connected in series within the group is used.   The physical connection based on switch status for example may also impact which elements in the group are considered. Any equipment in the group that are presently connected in series with the equipment of the directly associated operational limit are used.   This provides a means to indicate which potentially series equipment limits are considered for a computed operational limit. The operational limit of the same operational limit type is assumed to be used from the grouped equipment.   It is also possible to make assumptions or calculations regarding how flow might split if the equipment is not simply in series.  "),Object(a.b)("h3",{id:"attributes"},"Attributes"),Object(a.b)("p",null,"None  "),Object(a.b)("h3",{id:"relationships"},"Relationships"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency"}),"LimitDependency"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent"}),"EquipmentLimitSeriesComponent"),"  ")),Object(a.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.b)("h3",{id:"associations"},"Associations"),Object(a.b)("p",null,"None"))}p.isMDXComponent=!0}}]);