(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{2181:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2182:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||c;return n?r.a.createElement(d,o({ref:t},s,{components:n})):r.a.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(10),i=n(2181),o=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2184),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,p=e.isNavLink,f=e.to,d=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,C=Object(a.useContext)(l),N=f||d,w=Object(i.a)(N),I=null==N?void 0:N.replace("pathname://",""),T=void 0!==I?(n=I,y&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,A=Object(a.useRef)(!1),E=p?c.e:c.c,D=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!D&&w&&window.docusaurus.prefetch(T),function(){D&&b&&b.disconnect()}}),[T,D,w]);var R=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,k=!T||!w||R;return T&&w&&!R&&!j&&C.collectLink(T),k?r.a.createElement("a",Object.assign({href:T},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){A.current||(window.docusaurus.preload(T),A.current=!0)},innerRef:function(e){var t,n;D&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(T)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:T||""},p&&{isActive:m,activeClassName:O}))}},2184:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2181);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},934:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(2182)),i=(n(2183),{title:"RemoteUnitType"}),o={unversionedId:"cim100/TC57CIM/IEC61970/Base/SCADA/RemoteUnitType",id:"cim100/TC57CIM/IEC61970/Base/SCADA/RemoteUnitType",isDocsHomePage:!1,title:"RemoteUnitType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\SCADA\\RemoteUnitType.md",slug:"/cim100/TC57CIM/IEC61970/Base/SCADA/RemoteUnitType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/SCADA/RemoteUnitType",version:"current",sidebar:"docs",previous:{title:"RemoteUnit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/SCADA/RemoteUnit"},next:{title:"RemoteSource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/SCADA/RemoteSource"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Type of remote unit."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"RTU"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Remote terminal unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"SubstationControlSystem"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Substation control system.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ControlCenter"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control centre.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"IED"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Intelligent electronic device (IED).")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}u.isMDXComponent=!0}}]);