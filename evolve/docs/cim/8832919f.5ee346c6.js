(window.webpackJsonp=window.webpackJsonp||[]).push([[1126],{1195:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return d})),a.d(e,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(2195)),o=a(2196),i={title:"LoadMotor",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",isDocsHomePage:!1,title:"LoadMotor",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\LoadDynamics\\LoadMotor.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",version:"current",sidebar:"docs",previous:{title:"LoadStatic",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadStatic"},next:{title:"GenericNonLinearLoadModelKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/GenericNonLinearLoadModelKind"}},d=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:d};function b(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,'Aggregate induction motor load. This model is used to represent a fraction of an ordinary load as "induction motor load".  It allows a load that is treated as an ordinary constant power in power flow analysis to be represented by an induction motor in dynamic simulation. This model is intended for representation of aggregations of many motors dispersed through a load represented at a high voltage bus but where there is no information on the characteristics of individual motors.'),Object(c.a)("p",null,'Either a "one-cage" or "two-cage" model of the induction machine can be modelled. Magnetic saturation is not modelled.'),Object(c.a)("p",null,"This model treats a fraction of the constant power part of a load as a motor. During initialisation, the initial power drawn by the motor is set equal to ",Object(c.a)("i",null,"Pfrac")," times the constant ",Object(c.a)("i",null,"P")," part of the static load.  The remainder of the load is left as a static load."),Object(c.a)("p",null,"The reactive power demand of the motor is calculated during initialisation as a function of voltage at the load bus. This reactive power demand can be less than or greater than the constant ",Object(c.a)("i",null,"Q")," component of the load.  If the motor's reactive demand is greater than the constant ",Object(c.a)("i",null,"Q")," component of the load, the model inserts a shunt capacitor at the terminal of the motor to bring its reactive demand down to equal the constant ",Object(c.a)("i",null,"Q")," reactive load.  "),Object(c.a)("p",null,"If an induction motor load model and a static load model are both present for a load, the motor ",Object(c.a)("i",null,"Pfrac")," is assumed to be subtracted from the power flow constant ",Object(c.a)("i",null,"P")," load before the static load model is applied.  The remainder of the load, if any, is then represented by the static load model.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"d"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Damping factor (",Object(c.a)("i",null,"D"),").  Unit = delta ",Object(c.a)("i",null,"P"),"/delta speed.  Typical value = 2.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"h"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Inertia constant (",Object(c.a)("i",null,"H"),") (",">","= 0).  Typical value = 0,4.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lfac"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Loading factor (",Object(c.a)("i",null,"Lfac"),"). The ratio of initial ",Object(c.a)("i",null,"P")," to motor MVA base.  Typical value = 0,8.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transient reactance (",Object(c.a)("i",null,"Lp"),").  Typical value = 0,15.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lpp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Subtransient reactance (",Object(c.a)("i",null,"Lpp"),").  Typical value = 0,15.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ls"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Synchronous reactance (",Object(c.a)("i",null,"Ls"),").  Typical value = 3,2.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pfrac"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Fraction of constant-power load to be represented by this motor model (",Object(c.a)("i",null,"Pfrac"),") (",">","= 0,0 and ","<","= 1,0).  Typical value = 0,3.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ra"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stator resistance (",Object(c.a)("i",null,"Ra"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tbkr"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Circuit breaker operating time (",Object(c.a)("i",null,"Tbkr"),") (",">","= 0).  Typical value = 0,08.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transient rotor time constant (",Object(c.a)("i",null,"Tpo"),") (",">","= 0).  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tppo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Subtransient rotor time constant (",Object(c.a)("i",null,"Tppo"),") (",">","= 0).  Typical value = 0,02.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tv"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage trip pickup time (",Object(c.a)("i",null,"Tv"),") (",">","= 0).  Typical value = 0,1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vt"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage threshold for tripping (",Object(c.a)("i",null,"Vt"),").  Typical value = 0,7.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",mdxType:"Link"},"LoadMotor")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadAggregate",mdxType:"Link"},"LoadAggregate")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LoadMotor"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Aggregate motor (dynamic) load associated with this aggregate load."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LoadAggregate"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Aggregate load to which this aggregate motor (dynamic) load belongs.")))))}b.isMDXComponent=!0},2194:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2195:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=r.a.createContext({}),s=function(t){var e=r.a.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i({},e,{},t)),a},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},p=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=s(a),m=n,O=p["".concat(o,".").concat(m)]||p[m]||b[m]||c;return a?r.a.createElement(O,i({ref:e},d,{components:a})):r.a.createElement(O,i({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,o=new Array(c);o[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<c;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2196:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),o=a(2194),i=a(8),l=Object(n.createContext)({collectLink:function(){}}),d=a(2197),s=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,b,p=t.isNavLink,m=t.to,O=t.href,j=t.activeClassName,u=t.isActive,f=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,y=void 0===g||g,h=s(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(d.b)().withBaseUrl,v=Object(n.useContext)(l),C=m||O,T=Object(o.a)(C),I=null==C?void 0:C.replace("pathname://",""),L=void 0!==I?(a=I,y&&function(t){return t.startsWith("/")}(a)?N(a):a):void 0,w=Object(n.useRef)(!1),M=p?c.e:c.c,D=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!D&&T&&window.docusaurus.prefetch(L),function(){D&&b&&b.disconnect()}}),[L,D,T]);var E=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,k=!L||!T||E;return L&&T&&!E&&!f&&v.collectLink(L),k?r.a.createElement("a",Object.assign({href:L},C&&!T&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(M,Object.assign({},h,{onMouseEnter:function(){w.current||(window.docusaurus.preload(L),w.current=!0)},innerRef:function(t){var e,a;D&&t&&T&&(e=t,a=function(){window.docusaurus.prefetch(L)},(b=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(b.unobserve(e),b.disconnect(),a())}))}))).observe(e))},to:L||""},p&&{isActive:u,activeClassName:j}))}},2197:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return o}));var n=a(23),r=a(2194);function c(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,i=void 0!==o&&o,l=c.absolute,d=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return e+a;var s=a.startsWith(e)?a:e+a.replace(/^\//,"");return d?t+s:s}(c,a,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}}}]);