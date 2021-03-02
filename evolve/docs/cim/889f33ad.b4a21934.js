(window.webpackJsonp=window.webpackJsonp||[]).push([[1140],{1209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(2180)),c=a(2181),o={title:"SynchronousMachineDetailed"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed",isDocsHomePage:!1,title:"SynchronousMachineDetailed",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\SynchronousMachineDynamics\\SynchronousMachineDetailed.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed",version:"current",sidebar:"docs",previous:{title:"SynchronousMachineSimplified",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified"},next:{title:"SynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"All synchronous machine detailed types use a subset of the same data parameters and input/output variables.  "),Object(i.a)("p",null,"The several variations differ in the following ways:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"the number of  equivalent windings that are included;")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"the way in which saturation is incorporated into the model;")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"whether or not \u201csubtransient saliency\u201d (",Object(i.a)("i",null,"X''q")," not = ",Object(i.a)("i",null,"X''d"),") is represented."))),Object(i.a)("p",null,"It is not necessary for each simulation tool to have separate models for each of the model types.  The same model can often be used for several types by alternative logic within the model.  Also, differences in saturation representation might not result in significant model performance differences so model substitutions are often acceptable.   "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efdBaseRatio"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Ratio (exciter voltage/generator voltage) of ",Object(i.a)("i",null,"Efd")," bases of exciter and generator models (",">"," 0). Typical value = 1.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ifdBaseType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/IfdBaseKind",mdxType:"Link"},"IfdBaseKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation base system mode. It should be equal to the value of ",Object(i.a)("i",null,"WLMDV")," given by the user. ",Object(i.a)("i",null,"WLMDV")," is the PU ratio between the field voltage and the excitation current: ",Object(i.a)("i",null,"Efd")," = ",Object(i.a)("i",null,"WLMDV")," x ",Object(i.a)("i",null,"Ifd"),". Typical value = ifag.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"saturationFactor120QAxis"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis saturation factor at 120% of rated terminal voltage (",Object(i.a)("i",null,"S12q"),") (",">","= SynchonousMachineDetailed.saturationFactorQAxis).  Typical value = 0,12.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"saturationFactorQAxis"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis saturation factor at rated terminal voltage (",Object(i.a)("i",null,"S1q"),") (",">","= 0). Typical value = 0,02.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDynamics",mdxType:"Link"},"SynchronousMachineDynamics"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",mdxType:"Link"},"SynchronousMachineEquivalentCircuit")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance",mdxType:"Link"},"SynchronousMachineTimeConstantReactance"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}d.isMDXComponent=!0},2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return a?r.a.createElement(m,o({ref:t},l,{components:a})):r.a.createElement(m,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2179),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2182),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,b=e.isNavLink,p=e.to,m=e.href,f=e.activeClassName,O=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,j=void 0===y||y,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(l.b)().withBaseUrl,C=Object(n.useContext)(s),M=p||m,D=Object(c.a)(M),N=null==M?void 0:M.replace("pathname://",""),S=void 0!==N?(a=N,j&&function(e){return e.startsWith("/")}(a)?g(a):a):void 0,w=Object(n.useRef)(!1),I=b?i.e:i.c,T=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!T&&D&&window.docusaurus.prefetch(S),function(){T&&d&&d.disconnect()}}),[S,T,D]);var E=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,x=!S||!D||E;return S&&D&&!E&&!h&&C.collectLink(S),x?r.a.createElement("a",Object.assign({href:S},M&&!D&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(I,Object.assign({},v,{onMouseEnter:function(){w.current||(window.docusaurus.preload(S),w.current=!0)},innerRef:function(e){var t,a;T&&e&&D&&(t=e,a=function(){window.docusaurus.prefetch(S)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:S||""},b&&{isActive:O,activeClassName:f}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2179);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+u:u}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);