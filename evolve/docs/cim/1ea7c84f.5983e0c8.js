(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{2195:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2196:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(b,c({ref:t},u,{components:n})):a.a.createElement(b,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2197:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(2195),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),u=n(2198),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,f=e.to,b=e.href,m=e.activeClassName,O=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,j=void 0===y||y,h=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=Object(u.b)().withBaseUrl,C=Object(r.useContext)(s),g=f||b,I=Object(o.a)(g),E=null==g?void 0:g.replace("pathname://",""),x=void 0!==E?(n=E,j&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,N=Object(r.useRef)(!1),k=d?i.e:i.c,A=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&I&&window.docusaurus.prefetch(x),function(){A&&p&&p.disconnect()}}),[x,A,I]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,T=!x||!I||P;return x&&I&&!P&&!v&&C.collectLink(x),T?a.a.createElement("a",Object.assign({href:x},g&&!I&&{target:"_blank",rel:"noopener noreferrer"},h)):a.a.createElement(k,Object.assign({},h,{onMouseEnter:function(){N.current||(window.docusaurus.preload(x),N.current=!0)},innerRef:function(e){var t,n;A&&e&&I&&(t=e,n=function(){window.docusaurus.prefetch(x)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:O,activeClassName:m}))}},2198:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(2195);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(2196)),o=n(2197),c={title:"FaultIndicator",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator",id:"cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator",isDocsHomePage:!1,title:"FaultIndicator",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\AuxiliaryEquipment\\FaultIndicator.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator",version:"current",sidebar:"docs",previous:{title:"AuxiliaryEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment"},next:{title:"CurrentRelay",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Protection/CurrentRelay"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,'A FaultIndicator is typically only an indicator (which may or may not be remotely monitored), and not a piece of equipment that actually initiates a protection event. It is used for FLISR (Fault Location, Isolation and Restoration) purposes, assisting with the dispatch of crews to "most likely" part of the network (i.e. assists with determining circuit section where the fault most likely happened).  '),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",mdxType:"Link"},"AuxiliaryEquipment"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0}}]);