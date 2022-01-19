(window.webpackJsonp=window.webpackJsonp||[]).push([[1051],{1120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(2198)),i=n(2199),l={title:"AsynchronousMachineEquivalentCircuit",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",isDocsHomePage:!1,title:"AsynchronousMachineEquivalentCircuit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\AsynchronousMachineDynamics\\AsynchronousMachineEquivalentCircuit.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",version:"current",sidebar:"docs",previous:{title:"AsynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineTimeConstantReactance"},next:{title:"GovHydroR",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroR"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"The electrical equations of all variations of the asynchronous model are based on the AsynchronousEquivalentCircuit diagram for the direct- and quadrature- axes, with two equivalent rotor windings in each axis.  "),Object(c.a)("p",null,"Equations for conversion between equivalent circuit and time constant reactance forms:"),Object(c.a)("i",null,"Xs")," = ",Object(c.a)("i",null,"Xm")," + ",Object(c.a)("i",null,"Xl"),Object(c.a)("i",null,"X'")," = ",Object(c.a)("i",null,"Xl")," + ",Object(c.a)("i",null,"Xm")," x ",Object(c.a)("i",null,"Xlr1 "),"/ (",Object(c.a)("i",null,"Xm "),"+ ",Object(c.a)("i",null,"Xlr1"),")",Object(c.a)("i",null,"X''")," = ",Object(c.a)("i",null,"Xl")," + ",Object(c.a)("i",null,"Xm")," x ",Object(c.a)("i",null,"Xlr1")," x ",Object(c.a)("i",null,"Xlr2")," / (",Object(c.a)("i",null,"Xm")," x ",Object(c.a)("i",null,"Xlr1")," + ",Object(c.a)("i",null,"Xm")," x ",Object(c.a)("i",null,"Xlr2")," + ",Object(c.a)("i",null,"Xlr1")," x ",Object(c.a)("i",null,"Xlr2"),")",Object(c.a)("i",null,"T'o")," = (",Object(c.a)("i",null,"Xm")," + ",Object(c.a)("i",null,"Xlr1"),") / (",Object(c.a)("i",null,"omega"),Object(c.a)("i",null,Object(c.a)("sub",null,"0"))," x ",Object(c.a)("i",null,"Rr1"),")",Object(c.a)("i",null,"T''o")," = (",Object(c.a)("i",null,"Xm")," x ",Object(c.a)("i",null,"Xlr1")," + ",Object(c.a)("i",null,"Xm")," x ",Object(c.a)("i",null,"Xlr2")," + ",Object(c.a)("i",null,"Xlr1")," x ",Object(c.a)("i",null,"Xlr2"),") / (",Object(c.a)("i",null,"omega"),Object(c.a)("i",null,Object(c.a)("sub",null,"0"))," x ",Object(c.a)("i",null,"Rr2")," x (",Object(c.a)("i",null,"Xm")," + ",Object(c.a)("i",null,"Xlr1"),")",Object(c.a)("p",null,'Same equations using CIM attributes from AsynchronousMachineTimeConstantReactance class on left of "=" and AsynchronousMachineEquivalentCircuit class on right (except as noted):'),Object(c.a)("p",null,"xs = xm + RotatingMachineDynamics.statorLeakageReactance"),Object(c.a)("p",null,"xp = RotatingMachineDynamics.statorLeakageReactance + xm x xlr1 / (xm + xlr1)"),Object(c.a)("p",null,"xpp = RotatingMachineDynamics.statorLeakageReactance + xm x xlr1 x xlr2 / (xm x xlr1 + xm x xlr2 + xlr1 x xlr2)"),Object(c.a)("p",null,"tpo = (xm + xlr1) / (2 x pi x nominal frequency x rr1)"),Object(c.a)("p",null,"tppo = (xm x xlr1 + xm x xlr2 + xlr1 x xlr2) / (2 x pi x nominal frequency x rr2 x (xm + xlr1).  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"rr1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Damper 1 winding resistance.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"rr2"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Damper 2 winding resistance.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"xlr1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Damper 1 winding leakage reactance.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"xlr2"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Damper 2 winding leakage reactance.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"xm"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Magnetizing reactance.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",mdxType:"Link"},"AsynchronousMachineDynamics"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}b.isMDXComponent=!0},2197:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),O=u(n),m=a,d=O["".concat(i,".").concat(m)]||O[m]||b[m]||c;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},2199:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(10),i=n(2197),l=n(8),o=Object(a.createContext)({collectLink:function(){}}),s=n(2200),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,O=e.isNavLink,m=e.to,d=e.href,p=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,h=void 0===y||y,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),x=Object(s.b)().withBaseUrl,g=Object(a.useContext)(o),C=m||d,M=Object(i.a)(C),N=null==C?void 0:C.replace("pathname://",""),w=void 0!==N?(n=N,h&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0,D=Object(a.useRef)(!1),E=O?c.e:c.c,I=l.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!I&&M&&window.docusaurus.prefetch(w),function(){I&&b&&b.disconnect()}}),[w,I,M]);var T=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,X=!w||!M||T;return w&&M&&!T&&!f&&g.collectLink(w),X?r.a.createElement("a",Object.assign({href:w},C&&!M&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(E,Object.assign({},v,{onMouseEnter:function(){D.current||(window.docusaurus.preload(w),D.current=!0)},innerRef:function(e){var t,n;I&&e&&M&&(t=e,n=function(){window.docusaurus.prefetch(w)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:w||""},O&&{isActive:j,activeClassName:p}))}},2200:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2197);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,i=c.forcePrependBaseUrl,l=void 0!==i&&i,o=c.absolute,s=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);