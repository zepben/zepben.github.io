(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{2197:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2198:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=r.a.createContext({}),b=function(t){var e=r.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=b(a),d=n,p=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return a?r.a.createElement(p,o({ref:e},s,{components:a})):r.a.createElement(p,o({ref:e},s))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2199:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2197),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2200),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,u,m=t.isNavLink,d=t.to,p=t.href,O=t.activeClassName,j=t.isActive,f=t["data-noBrokenLinkCheck"],y=t.autoAddBaseUrl,v=void 0===y||y,g=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(s.b)().withBaseUrl,N=Object(n.useContext)(l),E=d||p,h=Object(i.a)(E),x=null==E?void 0:E.replace("pathname://",""),T=void 0!==x?(a=x,v&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,I=Object(n.useRef)(!1),D=m?c.e:c.c,w=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!w&&h&&window.docusaurus.prefetch(T),function(){w&&u&&u.disconnect()}}),[T,w,h]);var M=null!==(e=null==T?void 0:T.startsWith("#"))&&void 0!==e&&e,A=!T||!h||M;return T&&h&&!M&&!f&&N.collectLink(T),A?r.a.createElement("a",Object.assign({href:T},E&&!h&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(D,Object.assign({},g,{onMouseEnter:function(){I.current||(window.docusaurus.preload(T),I.current=!0)},innerRef:function(t){var e,a;w&&t&&h&&(e=t,a=function(){window.docusaurus.prefetch(T)},(u=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),a())}))}))).observe(e))},to:T||""},m&&{isActive:j,activeClassName:O}))}},2200:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2197);function c(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return e+a;var b=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+b:b}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},693:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(2198)),i=a(2199),o={title:"ExcAC4A",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC4A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC4A",isDocsHomePage:!1,title:"ExcAC4A",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcAC4A.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC4A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC4A",version:"current",sidebar:"docs",previous:{title:"ExcAC3A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC3A"},next:{title:"ExcAC5A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC5A"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Modified IEEE AC4A alternator-supplied rectifier excitation system with different minimum controller output.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(c.a)("i",null,"Ka"),") (",">"," 0).  Typical value = 200.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(c.a)("i",null,"Kc"),") (",">","= 0).  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Ta"),") (",">"," 0).  Typical value = 0,015.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Tb"),") (",">","= 0).  Typical value = 10.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Tc"),") (",">","= 0).  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vimax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator input limit (",Object(c.a)("i",null,"Vimax"),")  (",">"," 0).  Typical value = 10.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vimin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator input limit (",Object(c.a)("i",null,"Vimin"),") (","<"," 0).  Typical value = -10.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(c.a)("i",null,"Vrmax"),") (",">"," 0).  Typical value = 5,64.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(c.a)("i",null,"Vrmin"),") (","<"," 0).  Typical value = -4,53.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}u.isMDXComponent=!0}}]);