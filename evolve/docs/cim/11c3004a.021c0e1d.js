(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{2199:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2200:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),b=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),O=b(a),u=n,d=O["".concat(i,".").concat(u)]||O[u]||p[u]||c;return a?r.a.createElement(d,o({ref:e},l,{components:a})):r.a.createElement(d,o({ref:e},l))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2201:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2199),o=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(2202),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,{isNavLink:a,to:p,href:O,activeClassName:u,isActive:d,"data-noBrokenLinkCheck":j,autoAddBaseUrl:f=!0}=t,m=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(l.b)(),g=Object(n.useContext)(s),w=p||O,y=Object(i.a)(w),v=null==w?void 0:w.replace("pathname://",""),N=void 0!==v?(C=v,f&&(t=>t.startsWith("/"))(C)?h(C):C):void 0;var C;const S=Object(n.useRef)(!1),I=a?c.e:c.c,A=o.a.canUseIntersectionObserver;let T;Object(n.useEffect)((()=>(!A&&y&&window.docusaurus.prefetch(N),()=>{A&&T&&T.disconnect()})),[N,A,y]);const E=null!==(e=null==N?void 0:N.startsWith("#"))&&void 0!==e&&e,k=!N||!y||E;return N&&y&&!E&&!j&&g.collectLink(N),k?r.a.createElement("a",Object.assign({href:N},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},m)):r.a.createElement(I,Object.assign({},m,{onMouseEnter:()=>{S.current||(window.docusaurus.preload(N),S.current=!0)},innerRef:t=>{var e,a;A&&t&&y&&(e=t,a=()=>{window.docusaurus.prefetch(N)},T=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(T.unobserve(e),T.disconnect(),a())}))})),T.observe(e))},to:N||""},a&&{isActive:d,activeClassName:u}))}},2202:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2199);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=c();return a(t,e)}},224:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return l})),a.d(e,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(2200)),i=a(2201),o={title:"SwitchAction",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61968/Operations/SwitchAction",id:"cim100/TC57CIM/IEC61968/Operations/SwitchAction",isDocsHomePage:!1,title:"SwitchAction",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Operations\\SwitchAction.mdx",slug:"/cim100/TC57CIM/IEC61968/Operations/SwitchAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchAction",version:"current",sidebar:"docs",previous:{title:"ServicePointOutageSummary",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/ServicePointOutageSummary"},next:{title:"SwitchActionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchActionKind"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function p(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Action on switch as a switching step.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchActionKind",mdxType:"Link"},"SwitchActionKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switching action to perform.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/Outage",mdxType:"Link"},"Outage")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchAction",mdxType:"Link"},"SwitchAction")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PlannedOutage"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Planned outage for whose scope this switch action applies."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PlannedSwitchActions"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All switch actions to apply within the scope of this planned outage. Each such action groups switches to which the action is to apply in order to produce the desired network state considered as outage.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchAction",mdxType:"Link"},"SwitchAction")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SwitchAction"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Action changing status of this switch."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperatedSwitch"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switch that is the object of this switch action.")))))}p.isMDXComponent=!0}}]);