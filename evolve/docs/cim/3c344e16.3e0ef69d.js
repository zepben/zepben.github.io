(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{2175:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))},2176:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),m=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(a),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return a?c.a.createElement(h,o({ref:t},l,{components:a})):c.a.createElement(h,o({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2177:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(10),i=a(2175),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2178),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){var t,a,d,u=e.isNavLink,b=e.to,h=e.href,y=e.activeClassName,O=e.isActive,p=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,f=void 0===j||j,M=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),D=Object(l.b)().withBaseUrl,g=Object(n.useContext)(s),v=b||h,C=Object(i.a)(v),N=null==v?void 0:v.replace("pathname://",""),A=void 0!==N?(a=N,f&&function(e){return e.startsWith("/")}(a)?D(a):a):void 0,T=Object(n.useRef)(!1),w=u?r.e:r.c,I=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!I&&C&&window.docusaurus.prefetch(A),function(){I&&d&&d.disconnect()}}),[A,I,C]);var E=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,k=!A||!C||E;return A&&C&&!E&&!p&&g.collectLink(A),k?c.a.createElement("a",Object.assign({href:A},v&&!C&&{target:"_blank",rel:"noopener noreferrer"},M)):c.a.createElement(w,Object.assign({},M,{onMouseEnter:function(){T.current||(window.docusaurus.preload(A),T.current=!0)},innerRef:function(e){var t,a;I&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:A||""},u&&{isActive:O,activeClassName:y}))}},2178:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(23),c=a(2175);function r(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,i=r.forcePrependBaseUrl,o=void 0!==i&&i,s=r.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(o)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+m:m}(r,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},570:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),c=a(7),r=(a(0),a(2176)),i=a(2177),o={title:"AsynchronousMachineDynamics"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",isDocsHomePage:!1,title:"AsynchronousMachineDynamics",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\AsynchronousMachineDynamics\\AsynchronousMachineDynamics.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",version:"current",sidebar:"docs",previous:{title:"RotorKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/RotorKind"},next:{title:"AsynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineTimeConstantReactance"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:l};function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Asynchronous machine whose behaviour is described by reference to a standard model expressed in either time constant reactance form or equivalent circuit form ",Object(r.a)("font",{color:"#0f0f0f"},"or by definition of a user-defined model.")),Object(r.a)("p",null,"Parameter details:"),Object(r.a)("ol",null,Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"<li>Asynchronous machine parameters such as <i>Xl, Xs,</i> etc. are actually used as inductances in the model, but are commonly referred to as reactances since, at nominal frequency, the PU values are the same. However, some references use the symbol <i>L</i> instead of <i>X</i>.</li>\n"))),"### Attributes",Object(r.a)("p",null,"None  "),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/RotatingMachineDynamics",mdxType:"Link"},"RotatingMachineDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",mdxType:"Link"},"AsynchronousMachineEquivalentCircuit")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineTimeConstantReactance",mdxType:"Link"},"AsynchronousMachineTimeConstantReactance")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/AsynchronousMachineUserDefined",mdxType:"Link"},"AsynchronousMachineUserDefined"))),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/MechanicalLoadDynamics/MechanicalLoadDynamics",mdxType:"Link"},"MechanicalLoadDynamics")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",mdxType:"Link"},"AsynchronousMachineDynamics")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MechanicalLoadDynamics"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Mechanical load model associated with this asynchronous machine model."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine model with which this mechanical load model is associated. MechanicalLoadDynamics shall have either an association to SynchronousMachineDynamics or to AsynchronousMachineDynamics.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",mdxType:"Link"},"AsynchronousMachineDynamics")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/AsynchronousMachine",mdxType:"Link"},"AsynchronousMachine")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine dynamics model used to describe dynamic behaviour of this asynchronous machine."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachine"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine to which this asynchronous machine dynamics model applies.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",mdxType:"Link"},"AsynchronousMachineDynamics")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TurbineGovernorDynamics"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine-governor model associated with this asynchronous machine model."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine model with which this turbine-governor model is associated. TurbineGovernorDynamics shall have either an association to SynchronousMachineDynamics or to AsynchronousMachineDynamics.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",mdxType:"Link"},"WindTurbineType1or2Dynamics")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",mdxType:"Link"},"AsynchronousMachineDynamics")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindTurbineType1or2Dynamics"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind generator type 1 or type 2 model associated with this asynchronous machine model."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine model with which this wind generator type 1 or type 2 model is associated.")))))}d.isMDXComponent=!0}}]);