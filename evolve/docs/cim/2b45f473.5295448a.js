(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{2189:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),o=n(2189),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2192),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,p=e.isNavLink,d=e.to,f=e.href,O=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,C=void 0===g||g,h=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(s.b)().withBaseUrl,y=Object(a.useContext)(l),N=d||f,w=Object(o.a)(N),A=null==N?void 0:N.replace("pathname://",""),I=void 0!==A?(n=A,C&&function(e){return e.startsWith("/")}(n)?v(n):n):void 0,E=Object(a.useRef)(!1),T=p?i.e:i.c,U=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!U&&w&&window.docusaurus.prefetch(I),function(){U&&b&&b.disconnect()}}),[I,U,w]);var k=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,B=!I||!w||k;return I&&w&&!k&&!m&&y.collectLink(I),B?r.a.createElement("a",Object.assign({href:I},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(T,Object.assign({},h,{onMouseEnter:function(){E.current||(window.docusaurus.preload(I),E.current=!0)},innerRef:function(e){var t,n;U&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(I)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:I||""},p&&{isActive:j,activeClassName:O}))}},2192:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(2189);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},399:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(2190)),o=n(2191),c={title:"ControlAreaGeneratingUnit"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaGeneratingUnit",id:"cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaGeneratingUnit",isDocsHomePage:!1,title:"ControlAreaGeneratingUnit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\ControlArea\\ControlAreaGeneratingUnit.md",slug:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaGeneratingUnit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaGeneratingUnit",version:"current",sidebar:"docs",previous:{title:"ControlArea",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea"},next:{title:"ContingencyEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A control area generating unit. This class is needed so that alternate control area definitions may include the same generating unit.   It should be noted that only one instance within a control area should reference a specific generating unit.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaGeneratingUnit",mdxType:"Link"},"ControlAreaGeneratingUnit")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratingUnit",mdxType:"Link"},"GeneratingUnit")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ControlAreaGeneratingUnit"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ControlArea specifications for this generating unit."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"GeneratingUnit"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The generating unit specified for this control area.  Note that a control area should include a GeneratingUnit only once.")))))}b.isMDXComponent=!0}}]);