(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return a?r.a.createElement(b,o({ref:t},p,{components:a})):r.a.createElement(b,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2179),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),p=a(2182),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,s,d=e.isNavLink,m=e.to,b=e.href,O=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,g=void 0===h||h,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(p.b)().withBaseUrl,N=Object(n.useContext)(l),C=m||b,w=Object(c.a)(C),P=null==C?void 0:C.replace("pathname://",""),T=void 0!==P?(a=P,g&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,I=Object(n.useRef)(!1),E=d?i.e:i.c,M=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!M&&w&&window.docusaurus.prefetch(T),function(){M&&s&&s.disconnect()}}),[T,M,w]);var k=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,x=!T||!w||k;return T&&w&&!k&&!f&&N.collectLink(T),x?r.a.createElement("a",Object.assign({href:T},C&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(E,Object.assign({},y,{onMouseEnter:function(){I.current||(window.docusaurus.preload(T),I.current=!0)},innerRef:function(e){var t,a;M&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(T)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),a())}))}))).observe(t))},to:T||""},d&&{isActive:j,activeClassName:O}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2179);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,p=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+u:u}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},298:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(2180)),c=a(2181),o={title:"HydroPump"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",id:"cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",isDocsHomePage:!1,title:"HydroPump",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Generation\\Production\\HydroPump.md",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",version:"current",sidebar:"docs",previous:{title:"SteamSendoutSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/SteamSendoutSchedule"},next:{title:"HydroEnergyConversionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroEnergyConversionKind"}},p=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A synchronous motor-driven pump, typically associated with a pumped storage plant.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pumpDischAtMaxHead"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/VolumeFlowRate",mdxType:"Link"},"VolumeFlowRate")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The pumping discharge under maximum head conditions, usually at full gate.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pumpDischAtMinHead"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/VolumeFlowRate",mdxType:"Link"},"VolumeFlowRate")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The pumping discharge under minimum head conditions, usually at full gate.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pumpPowerAtMaxHead"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The pumping power under maximum head conditions, usually at full gate.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pumpPowerAtMinHead"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The pumping power under minimum head conditions, usually at full gate.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RotatingMachine",mdxType:"Link"},"RotatingMachine")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",mdxType:"Link"},"HydroPump")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RotatingMachine"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The synchronous machine drives the turbine which moves the water from a low elevation to a higher elevation. The direction of machine rotation for pumping may or may not be the same as for generating."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HydroPump"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The synchronous machine drives the turbine which moves the water from a low elevation to a higher elevation. The direction of machine rotation for pumping may or may not be the same as for generating.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",mdxType:"Link"},"HydroPump")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HydroPowerPlant"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The hydro pump may be a member of a pumped storage plant or a pump for distributing water."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HydroPumps"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The hydro pump may be a member of a pumped storage plant or a pump for distributing water.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPumpOpSchedule",mdxType:"Link"},"HydroPumpOpSchedule")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",mdxType:"Link"},"HydroPump")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HydroPumpOpSchedule"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The hydro pump has a pumping schedule over time, indicating when pumping is to occur."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HydroPump"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The hydro pump has a pumping schedule over time, indicating when pumping is to occur.")))))}s.isMDXComponent=!0}}]);