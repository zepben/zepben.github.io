(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{2179:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2180:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?r.a.createElement(f,i({ref:t},l,{components:n})):r.a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2181:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(10),o=n(2179),i=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2182),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,b=e.isNavLink,d=e.to,f=e.href,m=e.activeClassName,O=e.isActive,h=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,v=void 0===j||j,C=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,g=Object(a.useContext)(s),N=d||f,w=Object(o.a)(N),P=null==N?void 0:N.replace("pathname://",""),I=void 0!==P?(n=P,v&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,E=Object(a.useRef)(!1),S=b?c.e:c.c,k=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&w&&window.docusaurus.prefetch(I),function(){k&&p&&p.disconnect()}}),[I,k,w]);var T=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,L=!I||!w||T;return I&&w&&!T&&!h&&g.collectLink(I),L?r.a.createElement("a",Object.assign({href:I},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(S,Object.assign({},C,{onMouseEnter:function(){E.current||(window.docusaurus.preload(I),E.current=!0)},innerRef:function(e){var t,n;k&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(I)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:I||""},b&&{isActive:O,activeClassName:m}))}},2182:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(2179);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,i=void 0!==o&&o,s=c.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},836:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(2180)),o=n(2181),i={title:"LinearShuntCompensatorPhase"},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",id:"cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",isDocsHomePage:!1,title:"LinearShuntCompensatorPhase",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\LinearShuntCompensatorPhase.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",version:"current",sidebar:"docs",previous:{title:"NonlinearShuntCompensatorPoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPoint"},next:{title:"NonlinearShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A per phase linear shunt compensator has banks or sections with equal admittance values.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"gPerSection"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Conductance per section for this phase if shunt compensator is wye connected.  Conductance per section phase to phase if shunt compensator is delta connected.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"bPerSection"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Susceptance per section of the phase if shunt compensator is wye connected.   Susceptance per section phase to phase if shunt compensator is delta connected.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",mdxType:"Link"},"ShuntCompensatorPhase"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}p.isMDXComponent=!0}}]);