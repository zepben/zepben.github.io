(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{2181:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,m=b["".concat(c,".").concat(p)]||b[p]||u[p]||i;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),c=n(2181),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2184),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,u,b=e.isNavLink,p=e.to,m=e.href,y=e.activeClassName,O=e.isActive,f=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,h=void 0===j||j,g=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(l.b)().withBaseUrl,T=Object(a.useContext)(s),C=p||m,D=Object(c.a)(C),N=null==C?void 0:C.replace("pathname://",""),w=void 0!==N?(n=N,h&&function(e){return e.startsWith("/")}(n)?v(n):n):void 0,I=Object(a.useRef)(!1),W=b?i.e:i.c,M=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!M&&D&&window.docusaurus.prefetch(w),function(){M&&u&&u.disconnect()}}),[w,M,D]);var E=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,k=!w||!D||E;return w&&D&&!E&&!f&&T.collectLink(w),k?r.a.createElement("a",Object.assign({href:w},C&&!D&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(W,Object.assign({},g,{onMouseEnter:function(){I.current||(window.docusaurus.preload(w),I.current=!0)},innerRef:function(e){var t,n;M&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(w)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:w||""},b&&{isActive:O,activeClassName:y}))}},2184:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2181);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},402:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(2182)),c=n(2183),o={title:"WindTurbineType1or2Dynamics"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",isDocsHomePage:!1,title:"WindTurbineType1or2Dynamics",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\WindDynamics\\WindTurbineType1or2Dynamics.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",version:"current",sidebar:"docs",previous:{title:"WindPlantDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics"},next:{title:"WindTurbineType3or4Dynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType3or4Dynamics"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Parent class supporting relationships to wind turbines type 1 and type 2 and their control models.  Generator model for wind turbine of type 1 or type 2 is a standard asynchronous generator model."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",mdxType:"Link"},"DynamicsFunctionBlock"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2IEC",mdxType:"Link"},"WindTurbineType1or2IEC")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindType1or2UserDefined",mdxType:"Link"},"WindType1or2UserDefined"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",mdxType:"Link"},"WindTurbineType1or2Dynamics")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardInterconnections/RemoteInputSignal",mdxType:"Link"},"RemoteInputSignal")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"WindTurbineType1or2Dynamics"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Wind generator type 1 or type 2 model using this remote input signal."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"RemoteInputSignal"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Remote input signal used by this wind generator type 1 or type 2 model.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",mdxType:"Link"},"WindTurbineType1or2Dynamics")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",mdxType:"Link"},"AsynchronousMachineDynamics")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"WindTurbineType1or2Dynamics"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Wind generator type 1 or type 2 model associated with this asynchronous machine model."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"AsynchronousMachineDynamics"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Asynchronous machine model with which this wind generator type 1 or type 2 model is associated.")))))}u.isMDXComponent=!0}}]);