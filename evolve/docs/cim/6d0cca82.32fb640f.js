(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{2170:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2171:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,p=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(p,c({ref:t},s,{components:n})):a.a.createElement(p,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2172:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),i=n(2170),c=n(8),l=Object(r.createContext)({collectLink:function(){}}),s=n(2173),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,b=e.isNavLink,m=e.to,p=e.href,f=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,C=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,g=Object(r.useContext)(l),T=m||p,D=Object(i.a)(T),N=null==T?void 0:T.replace("pathname://",""),L=void 0!==N?(n=N,v&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,w=Object(r.useRef)(!1),I=b?o.e:o.c,M=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!M&&D&&window.docusaurus.prefetch(L),function(){M&&d&&d.disconnect()}}),[L,M,D]);var E=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,k=!L||!D||E;return L&&D&&!E&&!j&&g.collectLink(L),k?a.a.createElement("a",Object.assign({href:L},T&&!D&&{target:"_blank",rel:"noopener noreferrer"},C)):a.a.createElement(I,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(L),w.current=!0)},innerRef:function(e){var t,n;M&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(L)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:L||""},b&&{isActive:O,activeClassName:f}))}},2173:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(23),a=n(2170);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},983:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(2171)),i=n(2172),c={title:"TurbineLoadControllerDynamics"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics",isDocsHomePage:!1,title:"TurbineLoadControllerDynamics",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\TurbineLoadControllerDynamics\\TurbineLoadControllerDynamics.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics",version:"current",sidebar:"docs",previous:{title:"GovHydroPID2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID2"},next:{title:"TurbLCFB1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Turbine load controller function block whose behaviour is described by reference to a standard model ",Object(o.a)("font",{color:"#0f0f0f"},"or by definition of a user-defined model."),"  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",mdxType:"Link"},"DynamicsFunctionBlock"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",mdxType:"Link"},"TurbLCFB1")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/TurbineLoadControllerUserDefined",mdxType:"Link"},"TurbineLoadControllerUserDefined"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics",mdxType:"Link"},"TurbineLoadControllerDynamics")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TurbineLoadControllerDynamics"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Turbine load controller providing input to this turbine-governor."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TurbineGovernorDynamics"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Turbine-governor controlled by this turbine load controller.")))))}d.isMDXComponent=!0}}]);