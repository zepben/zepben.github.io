(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{2189:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}))},2190:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n(0),r=n.n(a);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),u=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o({},e,{},t)),n},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),b=u(n),O=a,f=b["".concat(i,".").concat(O)]||b[O]||p[O]||c;return n?r.a.createElement(f,o({ref:e},l,{components:n})):r.a.createElement(f,o({ref:e},l))}));function O(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2191:function(t,e,n){"use strict";var a=n(0),r=n.n(a),c=n(10),i=n(2189),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2192),u=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n};e.a=function(t){var e,n,p,b=t.isNavLink,O=t.to,f=t.href,d=t.activeClassName,m=t.isActive,j=t["data-noBrokenLinkCheck"],h=t.autoAddBaseUrl,v=void 0===h||h,g=u(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(l.b)().withBaseUrl,y=Object(a.useContext)(s),N=O||f,w=Object(i.a)(N),I=null==N?void 0:N.replace("pathname://",""),E=void 0!==I?(n=I,v&&function(t){return t.startsWith("/")}(n)?C(n):n):void 0,T=Object(a.useRef)(!1),S=b?c.e:c.c,A=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!A&&w&&window.docusaurus.prefetch(E),function(){A&&p&&p.disconnect()}}),[E,A,w]);var k=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,P=!E||!w||k;return E&&w&&!k&&!j&&y.collectLink(E),P?r.a.createElement("a",Object.assign({href:E},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(S,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(E),T.current=!0)},innerRef:function(t){var e,n;A&&t&&w&&(e=t,n=function(){window.docusaurus.prefetch(E)},(p=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(e),p.disconnect(),n())}))}))).observe(e))},to:E||""},b&&{isActive:m,activeClassName:d}))}},2192:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var a=n(23),r=n(2189);function c(){var t=Object(a.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var c=void 0===a?{}:a,i=c.forcePrependBaseUrl,o=void 0!==i&&i,s=c.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+u:u}(c,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},814:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(2190)),i=n(2191),o={title:"ShuntCompensatorAction"},s={unversionedId:"cim100/TC57CIM/IEC61968/Operations/ShuntCompensatorAction",id:"cim100/TC57CIM/IEC61968/Operations/ShuntCompensatorAction",isDocsHomePage:!1,title:"ShuntCompensatorAction",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Operations\\ShuntCompensatorAction.md",slug:"/cim100/TC57CIM/IEC61968/Operations/ShuntCompensatorAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/ShuntCompensatorAction",version:"current",sidebar:"docs",previous:{title:"PlannedOutageNotification",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/PlannedOutageNotification"},next:{title:"SwitchingEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingEvent"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/TempEquipActionKind",mdxType:"Link"},"TempEquipActionKind")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Switching action to perform")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator",mdxType:"Link"},"ShuntCompensator")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Operations/ShuntCompensatorAction",mdxType:"Link"},"ShuntCompensatorAction")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ShuntCompensator"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ShuntCompensatorAction"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);