(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{2197:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),b=a,y=u["".concat(c,".").concat(b)]||u[b]||d[b]||r;return n?i.a.createElement(y,o({ref:t},l,{components:n})):i.a.createElement(y,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2199:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(10),c=n(2197),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2200),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,d,u=e.isNavLink,b=e.to,y=e.href,p=e.activeClassName,O=e.isActive,C=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,f=void 0===j||j,D=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),T=Object(l.b)().withBaseUrl,v=Object(a.useContext)(s),I=b||y,M=Object(c.a)(I),h=null==I?void 0:I.replace("pathname://",""),g=void 0!==h?(n=h,f&&function(e){return e.startsWith("/")}(n)?T(n):n):void 0,k=Object(a.useRef)(!1),N=u?r.e:r.c,E=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!E&&M&&window.docusaurus.prefetch(g),function(){E&&d&&d.disconnect()}}),[g,E,M]);var x=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,L=!g||!M||x;return g&&M&&!x&&!C&&v.collectLink(g),L?i.a.createElement("a",Object.assign({href:g},I&&!M&&{target:"_blank",rel:"noopener noreferrer"},D)):i.a.createElement(N,Object.assign({},D,{onMouseEnter:function(){k.current||(window.docusaurus.preload(g),k.current=!0)},innerRef:function(e){var t,n;E&&e&&M&&(t=e,n=function(){window.docusaurus.prefetch(g)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:g||""},u&&{isActive:O,activeClassName:p}))}},2200:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(23),i=n(2197);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,c=r.forcePrependBaseUrl,o=void 0!==c&&c,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+m:m}(r,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(2198)),c=n(2199),o={title:"DynamicsFunctionBlock",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",isDocsHomePage:!1,title:"DynamicsFunctionBlock",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\DynamicsFunctionBlock.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",version:"current",sidebar:"docs",previous:{title:"LookUpTableFunctionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/InfHVDCDynamics/LookUpTableFunctionKind"},next:{title:"RotatingMachineDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/RotatingMachineDynamics"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Abstract parent class for all Dynamics function blocks.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"enabled"),Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Function block used indicator. true = use of function block is enabled false = use of function block is disabled.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/CrossCompoundTurbineGovernorDynamics",mdxType:"Link"},"CrossCompoundTurbineGovernorDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscontinuousExcitationControlDynamics",mdxType:"Link"},"DiscontinuousExcitationControlDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/HVDCDynamics/HVDCDynamics",mdxType:"Link"},"HVDCDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/MechanicalLoadDynamics/MechanicalLoadDynamics",mdxType:"Link"},"MechanicalLoadDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcitationLimiterDynamics",mdxType:"Link"},"OverexcitationLimiterDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArControllerType1Dynamics",mdxType:"Link"},"PFVArControllerType1Dynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics",mdxType:"Link"},"PFVArControllerType2Dynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics",mdxType:"Link"},"PowerSystemStabilizerDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/RotatingMachineDynamics",mdxType:"Link"},"RotatingMachineDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/StaticVarCompensatorDynamics/StaticVarCompensatorDynamics",mdxType:"Link"},"StaticVarCompensatorDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics",mdxType:"Link"},"TurbineLoadControllerDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcitationLimiterDynamics",mdxType:"Link"},"UnderexcitationLimiterDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VoltageAdjusterDynamics",mdxType:"Link"},"VoltageAdjusterDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VoltageCompensatorDynamics",mdxType:"Link"},"VoltageCompensatorDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics",mdxType:"Link"},"WindPlantDynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2Dynamics",mdxType:"Link"},"WindTurbineType1or2Dynamics")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType3or4Dynamics",mdxType:"Link"},"WindTurbineType3or4Dynamics"))),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}d.isMDXComponent=!0}}]);