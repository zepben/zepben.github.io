(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{2174:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.a.createElement(b,i({ref:t},l,{components:a})):r.a.createElement(b,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a(2174),i=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2177),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,u=e.isNavLink,m=e.to,b=e.href,f=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,C=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(l.b)().withBaseUrl,E=Object(n.useContext)(s),h=m||b,I=Object(c.a)(h),N=null==h?void 0:h.replace("pathname://",""),T=void 0!==N?(a=N,v&&function(e){return e.startsWith("/")}(a)?g(a):a):void 0,w=Object(n.useRef)(!1),D=u?o.e:o.c,M=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!M&&I&&window.docusaurus.prefetch(T),function(){M&&d&&d.disconnect()}}),[T,M,I]);var k=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,P=!T||!I||k;return T&&I&&!k&&!j&&E.collectLink(T),P?r.a.createElement("a",Object.assign({href:T},h&&!I&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(D,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(T),w.current=!0)},innerRef:function(e){var t,a;M&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(T)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:T||""},u&&{isActive:O,activeClassName:f}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2174);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,s=o.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+p:p}(o,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},643:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(2175)),c=a(2176),i={title:"VCompIEEEType1"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",isDocsHomePage:!1,title:"VCompIEEEType1",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\VoltageCompensatorDynamics\\VCompIEEEType1.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",version:"current",sidebar:"docs",previous:{title:"VoltageCompensatorDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VoltageCompensatorDynamics"},next:{title:"VCompIEEEType2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType2"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("font",{color:"#0f0f0f"},"Terminal voltage transducer and load compensator as defined in IEEE 421.5-2005, 4. This model is common to all excitation system models described in the IEEE Standard. "),Object(o.a)("font",{color:"#0f0f0f"},"Parameter details:"),Object(o.a)("ol",null,Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),'<li><font color="#0f0f0f">If <i>Rc</i> and <i>Xc</i> are set to zero, the l</font>oad compensation is not employed and the behaviour is as a simple sensing circuit.</li>\n'))),Object(o.a)("ol",null,Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"<li>If all parameters (<i>Rc</i>, <i>Xc</i> and <i>Tr</i>) are set to zero, the standard model VCompIEEEType1 is bypassed.</li>\n"))),Object(o.a)("p",null,"Reference: IEEE 421.5-2005 4.   "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rc"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)("font",{color:"#0f0f0f"},"Resistive component of compensation of a generator (",Object(o.a)("i",null,"Rc"),") (",">","= 0)."))),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tr"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)("font",{color:"#0f0f0f"},"Time constant which is used for the combined voltage sensing and compensation signal (",Object(o.a)("i",null,"Tr"),") (",">","= 0)."))),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xc"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)("font",{color:"#0f0f0f"},"Reactive component of compensation of a generator (",Object(o.a)("i",null,"Xc"),") (",">","= 0)."))))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VoltageCompensatorDynamics",mdxType:"Link"},"VoltageCompensatorDynamics"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}d.isMDXComponent=!0}}]);