(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{2174:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2175:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),r=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),b=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=b(a),p=n,O=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return a?r.a.createElement(O,o({ref:e},l,{components:a})):r.a.createElement(O,o({ref:e},l))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2176:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2174),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2177),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,u,d=t.isNavLink,p=t.to,O=t.href,f=t.activeClassName,j=t.isActive,m=t["data-noBrokenLinkCheck"],v=t.autoAddBaseUrl,y=void 0===v||v,g=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(l.b)().withBaseUrl,h=Object(n.useContext)(s),C=p||O,w=Object(c.a)(C),E=null==C?void 0:C.replace("pathname://",""),I=void 0!==E?(a=E,y&&function(t){return t.startsWith("/")}(a)?N(a):a):void 0,P=Object(n.useRef)(!1),T=d?i.e:i.c,A=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!A&&w&&window.docusaurus.prefetch(I),function(){A&&u&&u.disconnect()}}),[I,A,w]);var k=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,D=!I||!w||k;return I&&w&&!k&&!m&&h.collectLink(I),D?r.a.createElement("a",Object.assign({href:I},C&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(T,Object.assign({},g,{onMouseEnter:function(){P.current||(window.docusaurus.preload(I),P.current=!0)},innerRef:function(t){var e,a;A&&t&&w&&(e=t,a=function(){window.docusaurus.prefetch(I)},(u=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),a())}))}))).observe(e))},to:I||""},d&&{isActive:j,activeClassName:f}))}},2177:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return c}));var n=a(23),r=a(2174);function i(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return e+a;var b=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+b:b}(i,a,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},535:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(2175)),c=(a(2176),{title:"FacilityKind"}),o={unversionedId:"cim100/TC57CIM/IEC61968/Assets/FacilityKind",id:"cim100/TC57CIM/IEC61968/Assets/FacilityKind",isDocsHomePage:!1,title:"FacilityKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\FacilityKind.md",slug:"/cim100/TC57CIM/IEC61968/Assets/FacilityKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/FacilityKind",version:"current",sidebar:"docs",previous:{title:"EPAStandardKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/EPAStandardKind"},next:{title:"IECStandardEditionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/IECStandardEditionKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:s};function b(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Types of facilities at which an asset can be deployed.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"substationHydroPlant"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Hydro plant substation.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"substationFossilPlant"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Fossil plant substation.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"substationNuclearPlant"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nuclear plant substation.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"substationTransmission"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transmission substation.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"substationSubTransmission"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Subtransmission substation.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"substationDistribution"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Distribution substation.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"distributionPoleTop"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Distribution pole top.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}b.isMDXComponent=!0}}]);