(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{2189:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2190:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),O=u(a),d=n,m=O["".concat(c,".").concat(d)]||O[d]||b[d]||i;return a?r.a.createElement(m,o({ref:t},s,{components:a})):r.a.createElement(m,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2189),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2192),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,b,O=e.isNavLink,d=e.to,m=e.href,p=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,h=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(s.b)().withBaseUrl,E=Object(n.useContext)(l),C=d||m,N=Object(c.a)(C),I=null==C?void 0:C.replace("pathname://",""),L=void 0!==I?(a=I,y&&function(e){return e.startsWith("/")}(a)?g(a):a):void 0,x=Object(n.useRef)(!1),w=O?i.e:i.c,D=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!D&&N&&window.docusaurus.prefetch(L),function(){D&&b&&b.disconnect()}}),[L,D,N]);var T=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,k=!L||!N||T;return L&&N&&!T&&!j&&E.collectLink(L),k?r.a.createElement("a",Object.assign({href:L},C&&!N&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(w,Object.assign({},h,{onMouseEnter:function(){x.current||(window.docusaurus.preload(L),x.current=!0)},innerRef:function(e){var t,a;D&&e&&N&&(t=e,a=function(){window.docusaurus.prefetch(L)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:L||""},O&&{isActive:f,activeClassName:p}))}},2192:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2189);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+u:u}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},223:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(2190)),c=a(2191),o={title:"OverexcLimIEEE"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",isDocsHomePage:!1,title:"OverexcLimIEEE",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\OverexcitationLimiterDynamics\\OverexcLimIEEE.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",version:"current",sidebar:"docs",previous:{title:"OverexcitationLimiterDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcitationLimiterDynamics"},next:{title:"OverexcLim2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The over excitation limiter model is intended to represent the significant features of OELs necessary for some large-scale system studies. It is the result of a pragmatic approach to obtain a model that can be widely applied with attainable data from generator owners. An attempt to include all variations in the functionality of OELs and duplicate how they interact with the rest of the excitation systems would likely result in a level of application insufficient for the studies for which they are intended."),Object(i.a)("p",null,"Reference: IEEE OEL 421.5-2005, 9.   "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hyst"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OEL pickup/drop-out hysteresis (",Object(i.a)("i",null,"HYST"),").  Typical value = 0,03.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ifdlim"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OEL timed field current limit (",Object(i.a)("i",null,"I"),Object(i.a)("i",null,Object(i.a)("sub",null,"FDLIM")),").  Typical value = 1,05.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ifdmax"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OEL instantaneous field current limit (",Object(i.a)("i",null,"I"),Object(i.a)("i",null,Object(i.a)("sub",null,"FDMAX")),").  Typical value = 1,5.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"itfpu"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OEL timed field current limiter pickup level (",Object(i.a)("i",null,"I"),Object(i.a)("i",null,Object(i.a)("sub",null,"TFPU")),").  Typical value = 1,05.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kcd"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OEL cooldown gain (",Object(i.a)("i",null,"K"),Object(i.a)("i",null,Object(i.a)("sub",null,"CD")),").  Typical value = 1.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kramp"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OEL ramped limit rate (",Object(i.a)("i",null,"K"),Object(i.a)("i",null,Object(i.a)("sub",null,"RAMP")),").  Unit = PU / s.  Typical value = 10.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcitationLimiterDynamics",mdxType:"Link"},"OverexcitationLimiterDynamics"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}b.isMDXComponent=!0}}]);