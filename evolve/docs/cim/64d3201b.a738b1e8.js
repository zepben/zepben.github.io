(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{2207:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i}))},2208:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var n=a(0),i=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=i.a.createContext({}),b=function(t){var e=i.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},u=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=b(a),O=n,d=u["".concat(c,".").concat(O)]||u[O]||p[O]||r;return a?i.a.createElement(d,l({ref:e},s,{components:a})):i.a.createElement(d,l({ref:e},s))}));function O(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,c=new Array(r);c[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,c[1]=l;for(var s=2;s<r;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2209:function(t,e,a){"use strict";var n=a(0),i=a.n(n),r=a(10),c=a(2207),l=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var s=a(2210),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(a[n[i]]=t[n[i]])}return a};e.a=function(t){var e,{isNavLink:a,to:p,href:u,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=t,m=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(s.b)(),y=Object(n.useContext)(o),v=p||u,g=Object(c.a)(v),C=null==v?void 0:v.replace("pathname://",""),I=void 0!==C?(N=C,j&&(t=>t.startsWith("/"))(N)?h(N):N):void 0;var N;const w=Object(n.useRef)(!1),E=a?r.e:r.c,T=l.a.canUseIntersectionObserver;let A;Object(n.useEffect)((()=>(!T&&g&&window.docusaurus.prefetch(I),()=>{T&&A&&A.disconnect()})),[I,T,g]);const S=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,P=!I||!g||S;return I&&g&&!S&&!f&&y.collectLink(I),P?i.a.createElement("a",Object.assign({href:I},v&&!g&&{target:"_blank",rel:"noopener noreferrer"},m)):i.a.createElement(E,Object.assign({},m,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(I),w.current=!0)},innerRef:t=>{var e,a;T&&t&&g&&(e=t,a=()=>{window.docusaurus.prefetch(I)},A=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.unobserve(e),A.disconnect(),a())}))})),A.observe(e))},to:I||""},a&&{isActive:d,activeClassName:O}))}},2210:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return c}));var n=a(23),i=a(2207);function r(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(n)return e+a;const c=a.startsWith(e)?a:e+a.replace(/^\//,"");return r?t+c:c}(e,t,a,n)}}function c(t,e={}){const{withBaseUrl:a}=r();return a(t,e)}},922:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(2208)),c=a(2209),l={title:"UnavailabilitySwitchAction",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",isDocsHomePage:!1,title:"UnavailabilitySwitchAction",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfAvailabilityPlans\\UnavailabilitySwitchAction.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",version:"current",sidebar:"docs",previous:{title:"EquipmentUnavailabilitySchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/EquipmentUnavailabilitySchedule"},next:{title:"UnavailabilityScheduleDependency",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilityScheduleDependency"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(t){var e=t.components,a=Object(i.a)(t,["components"]);return Object(r.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Relevant switching action for supporting the availability (or unavailability) plans.  This could open or close a switch that is not directly connected to the unavailable equipment .  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"open"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The switch is to be open during the scheduled period.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",mdxType:"Link"},"UnavailabilitySwitchAction")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",mdxType:"Link"},"UnavailabilitySwitchAction")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/EquipmentUnavailabilitySchedule",mdxType:"Link"},"EquipmentUnavailabilitySchedule")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);