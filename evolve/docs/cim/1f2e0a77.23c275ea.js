(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{2189:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2190:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=O(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||j[m]||c;return a?r.a.createElement(d,l({ref:t},o,{components:a})):r.a.createElement(d,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2189),l=a(8),b=Object(n.createContext)({collectLink:function(){}}),o=a(2192),O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,j,p=e.isNavLink,m=e.to,d=e.href,s=e.activeClassName,u=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,N=O(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(o.b)().withBaseUrl,C=Object(n.useContext)(b),T=m||d,I=Object(i.a)(T),P=null==T?void 0:T.replace("pathname://",""),D=void 0!==P?(a=P,y&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,U=Object(n.useRef)(!1),M=p?c.e:c.c,k=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&I&&window.docusaurus.prefetch(D),function(){k&&j&&j.disconnect()}}),[D,k,I]);var h=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,E=!D||!I||h;return D&&I&&!h&&!f&&C.collectLink(D),E?r.a.createElement("a",Object.assign({href:D},T&&!I&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(M,Object.assign({},N,{onMouseEnter:function(){U.current||(window.docusaurus.preload(D),U.current=!0)},innerRef:function(e){var t,a;k&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(D)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),a())}))}))).observe(t))},to:D||""},p&&{isActive:u,activeClassName:s}))}},2192:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2189);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,l=void 0!==i&&i,b=c.absolute,o=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var O=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+O:O}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},303:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return j}));var n=a(3),r=a(7),c=(a(0),a(2190)),i=a(2191),l={title:"GovHydroPID"},b={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",isDocsHomePage:!1,title:"GovHydroPID",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\TurbineGovernorDynamics\\GovHydroPID.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",version:"current",sidebar:"docs",previous:{title:"GovHydroPelton",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPelton"},next:{title:"GovHydroPID2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID2"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:o};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"PID governor and turbine.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aturb"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine numerator multiplier (",Object(c.a)("i",null,"Aturb"),") (see parameter detail 3).  Typical value -1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bturb"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine denominator multiplier (",Object(c.a)("i",null,"Bturb"),") (see parameter detail 3).  Typical value = 0,5.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"db1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Intentional dead-band width (",Object(c.a)("i",null,"db1"),").  Unit = Hz.  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"db2"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Unintentional dead-band (",Object(c.a)("i",null,"db2"),").  Unit = MW.  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eps"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Intentional db hysteresis (",Object(c.a)("i",null,"eps"),").  Unit = Hz.  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 1, PU gv (",Object(c.a)("i",null,"Gv1"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv2"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 2, PU gv (",Object(c.a)("i",null,"Gv2"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv3"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 3, PU gv (",Object(c.a)("i",null,"Gv3"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv4"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 4, PU gv (",Object(c.a)("i",null,"Gv4"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv5"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 5, PU gv (",Object(c.a)("i",null,"Gv5"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv6"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 6, PU gv (",Object(c.a)("i",null,"Gv6"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inputSignal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input signal switch (",Object(c.a)("i",null,"Flag"),").  true = ",Object(c.a)("i",null,"Pe")," input is used false = feedback is received from ",Object(c.a)("i",null,"CV"),". ",Object(c.a)("i",null,"Flag")," is normally dependent on ",Object(c.a)("i",null,"Tt"),".  If ",Object(c.a)("i",null,"Tt "),"is zero, ",Object(c.a)("i",null,"Flag")," is set to false. If ",Object(c.a)("i",null,"Tt")," is not zero, ",Object(c.a)("i",null,"Flag")," is set to true.   Typical value = true.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Derivative gain (",Object(c.a)("i",null,"Kd"),").  Typical value = 1,11.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kg"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate servo gain (",Object(c.a)("i",null,"Kg"),").  Typical value = 2,5.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ki"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Integral gain (",Object(c.a)("i",null,"Ki"),").  Typical value = 0,36.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Proportional gain (",Object(c.a)("i",null,"Kp"),").  Typical value = 0,1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mwbase"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Base for power values (",Object(c.a)("i",null,"MWbase"),") (",">"," 0).  Unit = MW.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 1, PU power (",Object(c.a)("i",null,"Pgv1"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv2"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 2, PU power (",Object(c.a)("i",null,"Pgv2"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv3"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 3, PU power (",Object(c.a)("i",null,"Pgv3"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv4"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 4, PU power (",Object(c.a)("i",null,"Pgv4"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv5"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 5, PU power (",Object(c.a)("i",null,"Pgv5"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv6"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 6, PU power (",Object(c.a)("i",null,"Pgv6"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate opening, PU of MWbase (",Object(c.a)("i",null,"Pmax"),") (",">"," GovHydroPID.pmin).  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum gate opening, PU of MWbase (",Object(c.a)("i",null,"Pmin"),") (","<"," GovHydroPID.pmax).  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Steady state droop (",Object(c.a)("i",null,"R"),").  Typical value = 0,05.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"td"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input filter time constant (",Object(c.a)("i",null,"Td"),") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Washout time constant (",Object(c.a)("i",null,"Tf"),") (",">","= 0).  Typical value = 0,1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate servo time constant (",Object(c.a)("i",null,"Tp"),") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0,35.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tt"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Power feedback time constant (",Object(c.a)("i",null,"Tt"),") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0,02.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tturb"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine time constant (",Object(c.a)("i",null,"Tturb"),") (",">","= 0). See Parameter detail 3.  Typical value = 0,8.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"velcl"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate closing velocity (",Object(c.a)("i",null,"Velcl"),").  Unit = PU / s.  Typical value = -0,14.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"velop"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate opening velocity (",Object(c.a)("i",null,"Velop"),").  Unit = PU / s.  Typical value = 0,09.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}j.isMDXComponent=!0}}]);