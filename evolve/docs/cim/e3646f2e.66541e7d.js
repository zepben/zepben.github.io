(window.webpackJsonp=window.webpackJsonp||[]).push([[1891],{1960:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a(3),c=a(7),i=(a(0),a(2190)),r=a(2191),l={title:"SynchronousMachineEquivalentCircuit"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",isDocsHomePage:!1,title:"SynchronousMachineEquivalentCircuit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\SynchronousMachineDynamics\\SynchronousMachineEquivalentCircuit.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",version:"current",sidebar:"docs",previous:{title:"SynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance"},next:{title:"IfdBaseKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/IfdBaseKind"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:u};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The electrical equations for all variations of the synchronous models are based on the SynchronousEquivalentCircuit diagram for the direct- and quadrature- axes."),Object(i.a)("p",null,"Equations for conversion between equivalent circuit and time constant reactance forms:"),Object(i.a)("i",null,"Xd")," = ",Object(i.a)("i",null,"Xad "),"+",Object(i.a)("i",null," Xl"),Object(i.a)("i",null,"X\u2019d")," = ",Object(i.a)("i",null,"Xl")," + ",Object(i.a)("i",null,"Xad")," x ",Object(i.a)("i",null,"Xfd")," / (",Object(i.a)("i",null,"Xad")," + ",Object(i.a)("i",null,"Xfd"),")",Object(i.a)("i",null,"X\u201dd")," = ",Object(i.a)("i",null,"Xl")," + ",Object(i.a)("i",null,"Xad")," x ",Object(i.a)("i",null,"Xfd")," x ",Object(i.a)("i",null,"X1d")," / (",Object(i.a)("i",null,"Xad")," x ",Object(i.a)("i",null,"Xfd")," + ",Object(i.a)("i",null,"Xad")," x ",Object(i.a)("i",null,"X1d")," + ",Object(i.a)("i",null,"Xfd")," x ",Object(i.a)("i",null,"X1d"),")",Object(i.a)("i",null,"Xq")," = ",Object(i.a)("i",null,"Xaq")," + ",Object(i.a)("i",null,"Xl"),Object(i.a)("i",null,"X\u2019q")," = ",Object(i.a)("i",null,"Xl")," + ",Object(i.a)("i",null,"Xaq")," x ",Object(i.a)("i",null,"X1q")," / (",Object(i.a)("i",null,"Xaq")," + ",Object(i.a)("i",null,"X1q"),")",Object(i.a)("i",null,"X\u201dq")," = ",Object(i.a)("i",null,"Xl")," + ",Object(i.a)("i",null,"Xaq")," x ",Object(i.a)("i",null,"X1q")," x ",Object(i.a)("i",null,"X2q")," / (",Object(i.a)("i",null,"Xaq")," x ",Object(i.a)("i",null,"X1q")," + ",Object(i.a)("i",null,"Xaq")," x ",Object(i.a)("i",null,"X2q")," + ",Object(i.a)("i",null,"X1q")," x ",Object(i.a)("i",null,"X2q"),")",Object(i.a)("i",null,"T\u2019do")," = (",Object(i.a)("i",null,"Xad")," + ",Object(i.a)("i",null,"Xfd"),") / (",Object(i.a)("i",null,"omega"),Object(i.a)("i",null,Object(i.a)("sub",null,"0"))," x ",Object(i.a)("i",null,"Rfd"),")",Object(i.a)("i",null,"T\u201ddo")," = (",Object(i.a)("i",null,"Xad")," x ",Object(i.a)("i",null,"Xfd")," + ",Object(i.a)("i",null,"Xad")," x ",Object(i.a)("i",null,"X1d")," + ",Object(i.a)("i",null,"Xfd")," x ",Object(i.a)("i",null,"X1d"),") / (",Object(i.a)("i",null,"omega"),Object(i.a)("i",null,Object(i.a)("sub",null,"0"))," x ",Object(i.a)("i",null,"R1d")," x (",Object(i.a)("i",null,"Xad")," + ",Object(i.a)("i",null,"Xfd"),")",Object(i.a)("i",null,"T\u2019qo")," = (",Object(i.a)("i",null,"Xaq")," + ",Object(i.a)("i",null,"X1q"),") / (",Object(i.a)("i",null,"omega"),Object(i.a)("i",null,Object(i.a)("sub",null,"0"))," x ",Object(i.a)("i",null,"R1q"),")",Object(i.a)("i",null,"T\u201dqo")," = (",Object(i.a)("i",null,"Xaq")," x ",Object(i.a)("i",null,"X1q")," + ",Object(i.a)("i",null,"Xaq")," x ",Object(i.a)("i",null,"X2q")," + ",Object(i.a)("i",null,"X1q")," x ",Object(i.a)("i",null,"X2q"),") / (",Object(i.a)("i",null,"omega"),Object(i.a)("i",null,Object(i.a)("sub",null,"0"))," x ",Object(i.a)("i",null,"R2q")," x (",Object(i.a)("i",null,"Xaq")," + ",Object(i.a)("i",null,"X1q"),")",Object(i.a)("p",null,'Same equations using CIM attributes from SynchronousMachineTimeConstantReactance class on left of "=" and SynchronousMachineEquivalentCircuit class on right (except as noted):'),Object(i.a)("p",null,"xDirectSync = xad + RotatingMachineDynamics.statorLeakageReactance"),Object(i.a)("p",null,"xDirectTrans = RotatingMachineDynamics.statorLeakageReactance + xad x xfd / (xad + xfd)"),Object(i.a)("p",null,"xDirectSubtrans = RotatingMachineDynamics.statorLeakageReactance + xad x xfd x x1d / (xad x xfd + xad x x1d + xfd x x1d)"),Object(i.a)("p",null,"xQuadSync = xaq + RotatingMachineDynamics.statorLeakageReactance"),Object(i.a)("p",null,"xQuadTrans = RotatingMachineDynamics.statorLeakageReactance + xaq x x1q / (xaq+ x1q)"),Object(i.a)("p",null,"xQuadSubtrans = RotatingMachineDynamics.statorLeakageReactance + xaq x x1q x x2q / (xaq x x1q + xaq x x2q + x1q x x2q) "),Object(i.a)("p",null,"tpdo = (xad + xfd) / (2 x pi x nominal frequency x rfd)"),Object(i.a)("p",null,"tppdo = (xad x xfd + xad x x1d + xfd x x1d) / (2 x pi x nominal frequency x r1d x (xad + xfd)"),Object(i.a)("p",null,"tpqo = (xaq + x1q) / (2 x pi x nominal frequency x r1q)"),Object(i.a)("p",null,"tppqo = (xaq x x1q + xaq x x2q + x1q x x2q) / (2 x pi x nominal frequency x r2q x (xaq + x1q)"),Object(i.a)("p",null,'These are only valid for a simplified model where "Canay" reactance is zero.  '),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r1d"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Direct-axis damper 1 winding resistance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r1q"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 1 winding resistance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r2q"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 2 winding resistance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rfd"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field winding resistance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x1d"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Direct-axis damper 1 winding leakage reactance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x1q"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 1 winding leakage reactance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x2q"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 2 winding leakage reactance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xad"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Direct-axis mutual reactance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xaq"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis mutual reactance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xf1d"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Differential mutual (\u201cCanay\u201d) reactance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xfd"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field winding leakage reactance.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed",mdxType:"Link"},"SynchronousMachineDetailed"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}s.isMDXComponent=!0},2189:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))},2190:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),c=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var u=c.a.createContext({}),b=function(e){var t=c.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=b(a),O=n,j=d["".concat(r,".").concat(O)]||d[O]||s[O]||i;return a?c.a.createElement(j,l({ref:t},u,{components:a})):c.a.createElement(j,l({ref:t},u))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2191:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(10),r=a(2189),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),u=a(2192),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){var t,a,s,d=e.isNavLink,O=e.to,j=e.href,m=e.activeClassName,p=e.isActive,f=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,y=void 0===x||x,h=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(u.b)().withBaseUrl,C=Object(n.useContext)(o),v=O||j,q=Object(r.a)(v),N=null==v?void 0:v.replace("pathname://",""),X=void 0!==N?(a=N,y&&function(e){return e.startsWith("/")}(a)?g(a):a):void 0,M=Object(n.useRef)(!1),D=d?i.e:i.c,T=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!T&&q&&window.docusaurus.prefetch(X),function(){T&&s&&s.disconnect()}}),[X,T,q]);var I=null!==(t=null==X?void 0:X.startsWith("#"))&&void 0!==t&&t,w=!X||!q||I;return X&&q&&!I&&!f&&C.collectLink(X),w?c.a.createElement("a",Object.assign({href:X},v&&!q&&{target:"_blank",rel:"noopener noreferrer"},h)):c.a.createElement(D,Object.assign({},h,{onMouseEnter:function(){M.current||(window.docusaurus.preload(X),M.current=!0)},innerRef:function(e){var t,a;T&&e&&q&&(t=e,a=function(){window.docusaurus.prefetch(X)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),a())}))}))).observe(t))},to:X||""},d&&{isActive:p,activeClassName:m}))}},2192:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(23),c=a(2189);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,r=i.forcePrependBaseUrl,l=void 0!==r&&r,o=i.absolute,u=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(l)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+b:b}(i,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);