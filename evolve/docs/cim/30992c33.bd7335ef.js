(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{2160:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),b=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,O=o(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,j=p["".concat(i,".").concat(u)]||p[u]||s[u]||c;return a?r.a.createElement(j,l({ref:t},O,{components:a})):r.a.createElement(j,l({ref:t},O))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var O=2;O<c;O++)i[O]=a[O];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2160),l=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var O=a(2163),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:s,href:p,activeClassName:u,isActive:j,"data-noBrokenLinkCheck":d,autoAddBaseUrl:m=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(O.b)(),h=Object(n.useContext)(o),N=s||p,C=Object(i.a)(N),y=null==N?void 0:N.replace("pathname://",""),v=void 0!==y?(T=y,m&&(e=>e.startsWith("/"))(T)?g(T):T):void 0;var T;const I=Object(n.useRef)(!1),w=a?c.e:c.c,P=l.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!P&&C&&window.docusaurus.prefetch(v),()=>{P&&E&&E.disconnect()})),[v,P,C]);const k=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,D=!v||!C||k;return v&&C&&!k&&!d&&h.collectLink(v),D?r.a.createElement("a",Object.assign({href:v},N&&!C&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(w,Object.assign({},f,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(v),I.current=!0)},innerRef:e=>{var t,a;P&&e&&C&&(t=e,a=()=>{window.docusaurus.prefetch(v)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:v||""},a&&{isActive:j,activeClassName:u}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},453:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return O})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(2161)),i=a(2162),l={title:"OutagePlan"},o={unversionedId:"cim100/TC57CIM/IEC61968/Operations/OutagePlan",id:"cim100/TC57CIM/IEC61968/Operations/OutagePlan",isDocsHomePage:!1,title:"OutagePlan",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Operations\\OutagePlan.md",slug:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/OutagePlan",version:"current",sidebar:"docs",previous:{title:"UnplannedOutage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/UnplannedOutage"},next:{title:"PSREvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/PSREvent"}},O=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:O};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Document containing the definition of planned outages of equipment and/or usage points. It will reference switching plans that are used to execute the planned outage.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"approvedDateTime"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The date and time the outage plan was approved")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cancelledDateTime"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and Time the planned outage was canceled.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"plannedPeriod"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"planned start and end time of the planned outage.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose of  this outage plan, such as whether it is to replace equipment or perform maintenance or repairs or to reconfigure network topology.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan",mdxType:"Link"},"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/OutageOrder",mdxType:"Link"},"OutageOrder")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutageOrder"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan",mdxType:"Link"},"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/PlannedOutage",mdxType:"Link"},"PlannedOutage")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Outage plan for executing a planned outage."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PlannedOutage"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The outage resulting from the execution of the outage plan.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingPlan",mdxType:"Link"},"SwitchingPlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan",mdxType:"Link"},"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SwitchingPlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The swiching plan that is associated with the outage plan."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The outage plan for which the switching plan is defined.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Customers/Customer",mdxType:"Link"},"Customer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/OutagePlan",mdxType:"Link"},"OutagePlan")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Customer"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The customers that are affected by this planned outage."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutagePlan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The outage plan that identifies the customers that are affected.")))))}s.isMDXComponent=!0}}]);