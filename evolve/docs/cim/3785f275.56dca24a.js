(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{2207:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2208:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=r.a.createContext({}),b=function(t){var e=r.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),O=b(a),p=n,d=O["".concat(i,".").concat(p)]||O[p]||m[p]||c;return a?r.a.createElement(d,o({ref:e},s,{components:a})):r.a.createElement(d,o({ref:e},s))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2209:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2207),o=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2210),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,{isNavLink:a,to:m,href:O,activeClassName:p,isActive:d,"data-noBrokenLinkCheck":j,autoAddBaseUrl:u=!0}=t,f=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:C}=Object(s.b)(),v=Object(n.useContext)(l),y=m||O,g=Object(i.a)(y),h=null==y?void 0:y.replace("pathname://",""),N=void 0!==h?(I=h,u&&(t=>t.startsWith("/"))(I)?C(I):I):void 0;var I;const E=Object(n.useRef)(!1),T=a?c.e:c.c,A=o.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!A&&g&&window.docusaurus.prefetch(N),()=>{A&&k&&k.disconnect()})),[N,A,g]);const w=null!==(e=null==N?void 0:N.startsWith("#"))&&void 0!==e&&e,M=!N||!g||w;return N&&g&&!w&&!j&&v.collectLink(N),M?r.a.createElement("a",Object.assign({href:N},y&&!g&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(T,Object.assign({},f,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(N),E.current=!0)},innerRef:t=>{var e,a;A&&t&&g&&(e=t,a=()=>{window.docusaurus.prefetch(N)},k=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(k.unobserve(e),k.disconnect(),a())}))})),k.observe(e))},to:N||""},a&&{isActive:d,activeClassName:p}))}},2210:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2207);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=c();return a(t,e)}},539:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return m}));var n=a(3),r=a(7),c=(a(0),a(2208)),i=a(2209),o={title:"ActivityRecord",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/Common/ActivityRecord",id:"cim100/TC57CIM/IEC61968/Common/ActivityRecord",isDocsHomePage:!1,title:"ActivityRecord",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Common\\ActivityRecord.mdx",slug:"/cim100/TC57CIM/IEC61968/Common/ActivityRecord",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/ActivityRecord",version:"current",sidebar:"docs",previous:{title:"Version",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Version"},next:{title:"Agreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Agreement"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function m(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Records activity for an entity at a point in time; activity may be for an event that has already occurred or for a planned activity.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"createdDateTime"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and time this activity record has been created (different from the 'status.dateTime', which is the time of a status change of the associated object, if applicable).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reason"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reason for event resulting in this activity record, typically supplied when user initiated.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"severity"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Severity level of event resulting in this activity record.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"status"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/Status",mdxType:"Link"},"Status")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Information on consequence of event resulting in this activity record.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of event resulting in this activity record.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetHealthEvent",mdxType:"Link"},"AssetHealthEvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCustomers/ComplianceEvent",mdxType:"Link"},"ComplianceEvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/ConfigurationEvent",mdxType:"Link"},"ConfigurationEvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceEvent",mdxType:"Link"},"EndDeviceEvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",mdxType:"Link"},"EnvironmentalEvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/FailureEvent",mdxType:"Link"},"FailureEvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MktActivityRecord",mdxType:"Link"},"MktActivityRecord")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/PSREvent",mdxType:"Link"},"PSREvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingEvent",mdxType:"Link"},"SwitchingEvent")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Work/WorkActivityRecord",mdxType:"Link"},"WorkActivityRecord"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/Author",mdxType:"Link"},"Author")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/ActivityRecord",mdxType:"Link"},"ActivityRecord")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Author"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Author of this activity record."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ActivityRecords"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All activity records with this author.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Asset",mdxType:"Link"},"Asset")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/ActivityRecord",mdxType:"Link"},"ActivityRecord")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Assets"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All assets for which this activity record has been created."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ActivityRecords"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All activity records created for this asset.")))))}m.isMDXComponent=!0}}]);