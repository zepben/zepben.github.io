(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=O(e,["components","mdxType","originalType","parentName"]),j=o(a),m=n,s=j["".concat(l,".").concat(m)]||j[m]||p[m]||c;return a?r.a.createElement(s,i({ref:t},b,{components:a})):r.a.createElement(s,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=j;var i={};for(var O in t)hasOwnProperty.call(t,O)&&(i[O]=t[O]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},453:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return O})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),c=(a(0),a(2160)),l={title:"OutagePlan"},i={unversionedId:"cim100/TC57CIM/IEC61968/Operations/OutagePlan",id:"cim100/TC57CIM/IEC61968/Operations/OutagePlan",isDocsHomePage:!1,title:"OutagePlan",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Operations\\OutagePlan.md",slug:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/OutagePlan",version:"current",sidebar:"docs",previous:{title:"UnplannedOutage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/UnplannedOutage"},next:{title:"PSREvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/PSREvent"}},O=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:O};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Document containing the definition of planned outages of equipment and/or usage points. It will reference switching plans that are used to execute the planned outage.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"approvedDateTime"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The date and time the outage plan was approved")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cancelledDateTime"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and Time the planned outage was canceled.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"plannedPeriod"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval"}),"DateTimeInterval")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"planned start and end time of the planned outage.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose of  this outage plan, such as whether it is to replace equipment or perform maintenance or repairs or to reconfigure network topology.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Common/Document"}),"Document"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan"}),"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/OutageOrder"}),"OutageOrder")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutageOrder"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan"}),"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/PlannedOutage"}),"PlannedOutage")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Outage plan for executing a planned outage."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PlannedOutage"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The outage resulting from the execution of the outage plan.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/SwitchingPlan"}),"SwitchingPlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan"}),"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SwitchingPlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The swiching plan that is associated with the outage plan."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The outage plan for which the switching plan is defined.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/Customer"}),"Customer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan"}),"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Customer"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The customers that are affected by this planned outage."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The outage plan that identifies the customers that are affected.")))))}o.isMDXComponent=!0}}]);