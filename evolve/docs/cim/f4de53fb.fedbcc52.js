(window.webpackJsonp=window.webpackJsonp||[]).push([[2023],{2093:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=(a(0),a(2195)),i=a(2196),o={title:"GovHydro1",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydro1",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydro1",isDocsHomePage:!1,title:"GovHydro1",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\TurbineGovernorDynamics\\GovHydro1.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydro1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydro1",version:"current",sidebar:"docs",previous:{title:"GovGASTWD",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovGASTWD"},next:{title:"GovHydro2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydro2"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Basic hydro turbine governor.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"at"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine gain (",Object(c.a)("i",null,"At"),") (",">"," 0).  Typical value = 1,2.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dturb"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine damping factor (",Object(c.a)("i",null,"Dturb"),") (",">","= 0).  Typical value = 0,5.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate opening (",Object(c.a)("i",null,"Gmax"),") (",">"," 0 and ",">"," GovHydro.gmin).  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum gate opening (",Object(c.a)("i",null,"Gmin"),") (",">","= 0 and ","<"," GovHydro1.gmax).  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hdam"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine nominal head (",Object(c.a)("i",null,"hdam"),").  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mwbase"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Base for power values (",Object(c.a)("i",null,"MWbase"),") (",">"," 0).  Unit = MW.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qnl"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No-load flow at nominal head (",Object(c.a)("i",null,"qnl"),") (",">","= 0).  Typical value = 0,08.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rperm"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Permanent droop (",Object(c.a)("i",null,"R"),") (",">"," 0).  Typical value = 0,04.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rtemp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Temporary droop (",Object(c.a)("i",null,"r"),") (",">"," GovHydro1.rperm).  Typical value = 0,3.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Filter time constant (",Object(c.a)("i",null,"Tf"),") (",">"," 0).  Typical value = 0,05.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tg"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate servo time constant (",Object(c.a)("i",null,"Tg"),") (",">"," 0).  Typical value = 0,5.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tr"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Washout time constant (",Object(c.a)("i",null,"Tr"),") (",">"," 0).  Typical value = 5.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Water inertia time constant (",Object(c.a)("i",null,"Tw"),") (",">"," 0).  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"velm"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate velocity (",Object(c.a)("i",null,"Vlem"),") (",">"," 0).  Typical value = 0,2.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}d.isMDXComponent=!0},2194:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2195:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=s(a),O=n,p=m["".concat(i,".").concat(O)]||m[O]||d[O]||c;return a?r.a.createElement(p,o({ref:t},b,{components:a})):r.a.createElement(p,o({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2194),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),b=a(2197),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,m=e.isNavLink,O=e.to,p=e.href,u=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,g=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,C=Object(n.useContext)(l),T=O||p,h=Object(i.a)(T),I=null==T?void 0:T.replace("pathname://",""),D=void 0!==I?(a=I,v&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,w=Object(n.useRef)(!1),M=m?c.e:c.c,E=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&h&&window.docusaurus.prefetch(D),function(){E&&d&&d.disconnect()}}),[D,E,h]);var P=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,x=!D||!h||P;return D&&h&&!P&&!f&&C.collectLink(D),x?r.a.createElement("a",Object.assign({href:D},T&&!h&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(M,Object.assign({},g,{onMouseEnter:function(){w.current||(window.docusaurus.preload(D),w.current=!0)},innerRef:function(e){var t,a;E&&e&&h&&(t=e,a=function(){window.docusaurus.prefetch(D)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:D||""},m&&{isActive:j,activeClassName:u}))}},2197:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2194);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+s:s}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);