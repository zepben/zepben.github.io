(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{2197:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2198:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return a?n.a.createElement(m,o({ref:t},s,{components:a})):n.a.createElement(m,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2199:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2197),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),s=a(2200),p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,b,u=e.isNavLink,d=e.to,m=e.href,O=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,g=void 0===h||h,v=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(s.b)().withBaseUrl,y=Object(r.useContext)(l),N=d||m,w=Object(i.a)(N),T=null==N?void 0:N.replace("pathname://",""),S=void 0!==T?(a=T,g&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,I=Object(r.useRef)(!1),V=u?c.e:c.c,E=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&w&&window.docusaurus.prefetch(S),function(){E&&b&&b.disconnect()}}),[S,E,w]);var k=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,x=!S||!w||k;return S&&w&&!k&&!j&&y.collectLink(S),x?n.a.createElement("a",Object.assign({href:S},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):n.a.createElement(V,Object.assign({},v,{onMouseEnter:function(){I.current||(window.docusaurus.preload(S),I.current=!0)},innerRef:function(e){var t,a;E&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(S)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:S||""},u&&{isActive:f,activeClassName:O}))}},2200:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2197);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+p:p}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},329:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(2198)),i=a(2199),o={title:"StaticVarCompensator",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",id:"cim100/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",isDocsHomePage:!1,title:"StaticVarCompensator",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\StaticVarCompensator.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",version:"current",sidebar:"docs",previous:{title:"Switch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/Switch"},next:{title:"CoolantType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/CoolantType"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A facility for providing variable and controllable shunt reactive power. The SVC typically consists of a stepdown transformer, filter, thyristor-controlled reactor, and thyristor-switched capacitor arms."),Object(c.a)("p",null,"The SVC may operate in fixed MVar output mode or in voltage control mode. When in voltage control mode, the output of the SVC will be proportional to the deviation of voltage at the controlled bus from the voltage setpoint.  The SVC characteristic slope defines the proportion.  If the voltage at the controlled bus is equal to the voltage setpoint, the SVC MVar output is zero.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"capacitiveRating"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Capacitive reactance at maximum capacitive reactive power.  Shall always be positive.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"inductiveRating"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Inductive reactance at maximum inductive reactive power.  Shall always be negative.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"slope"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/VoltagePerReactivePower",mdxType:"Link"},"VoltagePerReactivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The characteristics slope of an SVC defines how the reactive power output changes in proportion to the difference between the regulated bus voltage and the voltage setpoint. The attribute shall be a positive value or zero.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"sVCControlMode"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SVCControlMode",mdxType:"Link"},"SVCControlMode")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SVC control mode.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"voltageSetPoint"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The reactive power output of the SVC is proportional to the difference between the voltage at the regulated bus and the voltage setpoint.  When the regulated bus voltage is equal to the voltage setpoint, the reactive power output is zero.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reactive power injection. Load sign convention is used, i.e. positive sign means flow out from a node. Starting value for a steady state solution.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingCondEq",mdxType:"Link"},"RegulatingCondEq"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/StaticVarCompensatorDynamics/StaticVarCompensatorDynamics",mdxType:"Link"},"StaticVarCompensatorDynamics")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator",mdxType:"Link"},"StaticVarCompensator")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"StaticVarCompensatorDynamics"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Static Var Compensator dynamics model used to describe dynamic behaviour of this Static Var Compensator."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"StaticVarCompensator"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Static Var Compensator to which Static Var Compensator dynamics model applies.")))))}b.isMDXComponent=!0}}]);