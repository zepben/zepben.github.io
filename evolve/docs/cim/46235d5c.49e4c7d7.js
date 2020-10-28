(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(a),j=n,d=s["".concat(c,".").concat(j)]||s[j]||O[j]||i;return a?r.a.createElement(d,l({ref:t},o,{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=j;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},638:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(2146)),c={title:"UnavailabilitySwitchAction"},l={unversionedId:"Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",id:"Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",isDocsHomePage:!1,title:"UnavailabilitySwitchAction",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\InfIEC61970\\InfAvailabilityPlans\\UnavailabilitySwitchAction.md",slug:"/Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",version:"current",sidebar:"docs",previous:{title:"UnavailabilityScheduleDependency",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilityScheduleDependency"},next:{title:"UnavailablitySchedule",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailablitySchedule"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"Relevant switching action for supporting the availability (or unavailability) plans.  This could open or close a switch that is not directly connected to the unavailable equipment .  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"open"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The switch is to be open during the scheduled period.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction"}),"UnavailabilitySwitchAction")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction"}),"UnavailabilitySwitchAction")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/EquipmentUnavailabilitySchedule"}),"EquipmentUnavailabilitySchedule")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);