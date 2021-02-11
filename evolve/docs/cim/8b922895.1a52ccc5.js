(window.webpackJsonp=window.webpackJsonp||[]).push([[1163],{1232:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(2172)),c=(r(2173),{title:"VsPpccControlKind"}),i={unversionedId:"cim100/TC57CIM/IEC61970/Base/DC/VsPpccControlKind",id:"cim100/TC57CIM/IEC61970/Base/DC/VsPpccControlKind",isDocsHomePage:!1,title:"VsPpccControlKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\DC\\VsPpccControlKind.md",slug:"/cim100/TC57CIM/IEC61970/Base/DC/VsPpccControlKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/VsPpccControlKind",version:"current",sidebar:"docs",previous:{title:"CsConverter",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/CsConverter"},next:{title:"VsConverter",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/VsConverter"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Types applicable to the control of real power and/or DC voltage by voltage source converter.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"pPcc"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control is real power at point of common coupling. The target value is provided by ACDCConverter.targetPpcc.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"udc"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control is DC voltage  with target value provided by ACDCConverter.targetUdc.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"pPccAndUdcDroop"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control is active power at point of common coupling and local DC voltage, with the droop. Target values are provided by ACDCConverter.targetPpcc, ACDCConverter.targetUdc and VsConverter.droop.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"pPccAndUdcDroopWithCompensation"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control is active power at point of common coupling and compensated DC voltage, with the droop. Compensation factor is the resistance, as an approximation of the DC voltage of a common (real or virtual) node in the DC network. Targets are provided by ACDCConverter.targetPpcc, ACDCConverter.targetUdc, VsConverter.droop and VsConverter.droopCompensation.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"pPccAndUdcDroopPilot"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control is active power at point of common coupling and the pilot DC voltage, with the droop. The mode is used for Multi Terminal High Voltage DC (MTDC) systems where multiple HVDC Substations are connected to the HVDC transmission lines. The pilot voltage is then used to coordinate the control the DC voltage across the HVDC substations. Targets are provided by ACDCConverter.targetPpcc, ACDCConverter.targetUdc and  VsConverter.droop.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"phasePcc"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control is phase at point of common coupling. Target is provided by VsConverter.targetPhasePcc.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"None")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0},2171:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},2172:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?n.a.createElement(f,i({ref:t},s,{components:r})):n.a.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2173:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(10),c=r(2171),i=r(8),l=Object(a.createContext)({collectLink:function(){}}),s=r(2174),p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t,r,d,u=e.isNavLink,b=e.to,f=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,C=void 0===v||v,g=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,y=Object(a.useContext)(l),N=b||f,w=Object(c.a)(N),D=null==N?void 0:N.replace("pathname://",""),P=void 0!==D?(r=D,C&&function(e){return e.startsWith("/")}(r)?h(r):r):void 0,T=Object(a.useRef)(!1),I=u?o.e:o.c,E=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!E&&w&&window.docusaurus.prefetch(P),function(){E&&d&&d.disconnect()}}),[P,E,w]);var A=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,k=!P||!w||A;return P&&w&&!A&&!j&&y.collectLink(P),k?n.a.createElement("a",Object.assign({href:P},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(I,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(P),T.current=!0)},innerRef:function(e){var t,r;E&&e&&w&&(t=e,r=function(){window.docusaurus.prefetch(P)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),r())}))}))).observe(t))},to:P||""},u&&{isActive:m,activeClassName:O}))}},2174:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var a=r(23),n=r(2171);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var o=void 0===a?{}:a,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(i)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+p:p}(o,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}}}]);