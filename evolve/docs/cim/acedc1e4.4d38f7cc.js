(window.webpackJsonp=window.webpackJsonp||[]).push([[1431],{1489:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),b=(a(0),a(2147)),c={title:"UnplannedOutage"},i={unversionedId:"cim100/TC57CIM/IEC61968/Operations/UnplannedOutage",id:"cim100/TC57CIM/IEC61968/Operations/UnplannedOutage",isDocsHomePage:!1,title:"UnplannedOutage",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Operations\\UnplannedOutage.md",slug:"/cim100/TC57CIM/IEC61968/Operations/UnplannedOutage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/UnplannedOutage",version:"current",sidebar:"docs",previous:{title:"Outage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/Outage"},next:{title:"OutagePlan",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/OutagePlan"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:l};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"Document describing the consequence of an unplanned outage in a part of the electrical network. For the purposes of this model, an unplanned outage refers to a state where energy is not delivered; such as, customers out of service, a street light is not served, etc."),Object(b.b)("p",null,"A unplanned outage may be created upon:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"impacts the SAIDI calculation")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"a breaker trip,")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"a fault indicator status change,")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"a meter event indicating customer outage,")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"a reception of one or more customer trouble calls, or")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"an operator command, reflecting information obtained from the field crew."))),Object(b.b)("p",null,"Outage restoration may be performed using a switching plan which complements the outage information with detailed switching activities, including the relationship to the crew and work."),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cause"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The cause of this outage.  This is the cause that is used to present to external entities.  That is, the cause is weather, equipment failure, etc.  Note: At present, this is a free text; could be replaced with a separate associated class in case we have multiple causes (e.g. OutageCauseType, inheriting from IdentifiedObject).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"causeKind"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/OutageCauseKind"}),"OutageCauseKind")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reportedStartTime"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The earliest start time of the Outage - as reported by some system or individual")))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Operations/Outage"}),"Outage"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Common/FieldDispatchHistory"}),"FieldDispatchHistory"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Operations/Incident"}),"Incident"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Common/FieldDispatchHistory"}),"FieldDispatchHistory")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/UnplannedOutage"}),"UnplannedOutage")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"FieldDispatchHistory"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UnplannedOutage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/Incident"}),"Incident")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/UnplannedOutage"}),"UnplannedOutage")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Incident"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UnplannedOutage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/UnplannedOutage"}),"UnplannedOutage")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/TroubleOrder"}),"TroubleOrder")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UnplannedOutage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TroubleOrder"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Operations/UnplannedOutage"}),"UnplannedOutage")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/TroubleTicket"}),"TroubleTicket")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UnplannedOutage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TroubleTicket"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}o.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),o=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=o(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),p=o(a),j=n,d=p["".concat(c,".").concat(j)]||p[j]||s[j]||b;return a?r.a.createElement(d,i({ref:t},O,{components:a})):r.a.createElement(d,i({ref:t},O))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var O=2;O<b;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);