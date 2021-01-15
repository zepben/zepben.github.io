(window.webpackJsonp=window.webpackJsonp||[]).push([[1995],{2067:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(2160)),c={title:"LimitSet"},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/LimitSet",id:"cim100/TC57CIM/IEC61970/Base/Meas/LimitSet",isDocsHomePage:!1,title:"LimitSet",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Meas\\LimitSet.md",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/LimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/LimitSet",version:"current",sidebar:"docs",previous:{title:"ValueAliasSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet"},next:{title:"MeasurementValueQuality",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueQuality"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Specifies a set of Limits that are associated with a Measurement. A Measurement may have several LimitSets corresponding to seasonal or other changing conditions. The condition is captured in the name and description attributes. The same LimitSet may be used for several Measurements. In particular percentage limits are used this way.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isPercentageLimits"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tells if the limit values are in percentage of normalValue or the specified Unit for Measurements and Controls.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/AccumulatorLimitSet"}),"AccumulatorLimitSet"),"  "),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogLimitSet"}),"AnalogLimitSet"),"  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,O=u["".concat(c,".").concat(b)]||u[b]||m[b]||i;return a?r.a.createElement(O,o({ref:t},l,{components:a})):r.a.createElement(O,o({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);