(window.webpackJsonp=window.webpackJsonp||[]).push([[1852],{1921:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(7),a=(n(0),n(2180)),c=n(2181),o={title:"OverexcLim2"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",isDocsHomePage:!1,title:"OverexcLim2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\OverexcitationLimiterDynamics\\OverexcLim2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2",version:"current",sidebar:"docs",previous:{title:"OverexcLimIEEE",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE"},next:{title:"OverexcLimX1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimX1"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"Different from LimIEEEOEL, LimOEL2 has a fixed pickup threshold and reduces the excitation set-point by means of a non-windup integral regulator."),Object(a.a)("i",null,"Irated")," is the rated machine excitation current (calculated from nameplate conditions: ",Object(a.a)("i",null,"V"),Object(a.a)("i",null,Object(a.a)("sub",null,"nom")),", ",Object(a.a)("i",null,"P"),Object(a.a)("i",null,Object(a.a)("sub",null,"nom")),", ",Object(a.a)("i",null,"CosPhi"),Object(a.a)("i",null,Object(a.a)("sub",null,"nom")),"). ### Attributes | Name   | Type                                                         | Description                                                                                               | |:-------|:-------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------| | ifdlim | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Limit value of rated field current (",Object(a.a)("i",null,"I"),Object(a.a)("i",null,Object(a.a)("sub",null,"FDLIM")),").  Typical value = 1,05.              | | koi    | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Gain Over excitation limiter (",Object(a.a)("i",null,"K"),Object(a.a)("i",null,Object(a.a)("sub",null,"OI")),").  Typical value = 0,1.                        | | voimax | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum error signal (",Object(a.a)("i",null,"V"),Object(a.a)("i",null,Object(a.a)("sub",null,"OIMAX")),") (> OverexcLim2.voimin).  Typical value = 0.     | | voimin | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum error signal (",Object(a.a)("i",null,"V"),Object(a.a)("i",null,Object(a.a)("sub",null,"OIMIN")),") (< OverexcLim2.voimax).  Typical value = -9999. | ### Relationships __Inherits from__ - ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcitationLimiterDynamics",mdxType:"Link"},"OverexcitationLimiterDynamics"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}m.isMDXComponent=!0},2179:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},2180:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),O=r,b=d["".concat(c,".").concat(O)]||d[O]||m[O]||a;return n?i.a.createElement(b,o({ref:t},l,{components:n})):i.a.createElement(b,o({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2181:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(10),c=n(2179),o=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(2182),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,m,d=e.isNavLink,O=e.to,b=e.href,p=e.activeClassName,f=e.isActive,v=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,y=void 0===j||j,C=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),x=Object(l.b)().withBaseUrl,h=Object(r.useContext)(s),L=O||b,I=Object(c.a)(L),g=null==L?void 0:L.replace("pathname://",""),E=void 0!==g?(n=g,y&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0,w=Object(r.useRef)(!1),D=d?a.e:a.c,M=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!M&&I&&window.docusaurus.prefetch(E),function(){M&&m&&m.disconnect()}}),[E,M,I]);var T=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,P=!E||!I||T;return E&&I&&!T&&!v&&h.collectLink(E),P?i.a.createElement("a",Object.assign({href:E},L&&!I&&{target:"_blank",rel:"noopener noreferrer"},C)):i.a.createElement(D,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(E),w.current=!0)},innerRef:function(e){var t,n;M&&e&&I&&(t=e,n=function(){window.docusaurus.prefetch(E)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())}))}))).observe(t))},to:E||""},d&&{isActive:f,activeClassName:p}))}},2182:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(23),i=n(2179);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,c=a.forcePrependBaseUrl,o=void 0!==c&&c,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}}}]);