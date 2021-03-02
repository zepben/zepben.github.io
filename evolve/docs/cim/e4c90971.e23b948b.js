(window.webpackJsonp=window.webpackJsonp||[]).push([[1895],{1964:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(2180)),c=a(2181),o={title:"WindProtectionIEC"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC",isDocsHomePage:!1,title:"WindProtectionIEC",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\WindDynamics\\WindProtectionIEC.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC",version:"current",sidebar:"docs",previous:{title:"WindContPitchAngleIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContPitchAngleIEC"},next:{title:"WindPlantReactiveControlIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC"}},d=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:d};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The grid protection model includes protection against over- and under-voltage, and against over- and under-frequency."),Object(i.a)("p",null,"Reference: IEC 61400-27-1:2015, 5.6.6.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dfimax"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum rate of change of frequency (",Object(i.a)("i",null,"dF"),Object(i.a)("i",null,Object(i.a)("sub",null,"max")),"). It is a type-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fover"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbine over frequency protection activation threshold (",Object(i.a)("i",null,"f"),Object(i.a)("i",null,Object(i.a)("sub",null,"over")),"). It is a project-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"funder"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbine under frequency protection activation threshold (",Object(i.a)("i",null,"f"),Object(i.a)("i",null,Object(i.a)("sub",null,"under")),"). It is a project-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mzc"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Zero crossing measurement mode (",Object(i.a)("i",null,"Mzc"),").  It is a type-dependent parameter.  true = WT protection system uses zero crossings to detect frequency (1 in the IEC model) false = WT protection system does not use zero crossings to detect frequency (0 in the IEC model).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tfma"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time interval of moving average window (",Object(i.a)("i",null,"TfMA"),") (",">","= 0).  It is a type-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uover"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbine over voltage protection activation threshold (",Object(i.a)("i",null,"u"),Object(i.a)("i",null,Object(i.a)("sub",null,"over")),"). It is a project-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uunder"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbine under voltage protection activation threshold (",Object(i.a)("i",null,"u"),Object(i.a)("i",null,Object(i.a)("sub",null,"under")),"). It is a project-dependent parameter.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC",mdxType:"Link"},"WindProtectionIEC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType1or2IEC",mdxType:"Link"},"WindTurbineType1or2IEC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindProtectionIEC"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbune protection model associated with this wind generator type 1 or type 2 model."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindTurbineType1or2IEC"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind generator type 1 or type 2 model with which this wind turbine protection model is associated.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC",mdxType:"Link"},"WindProtectionIEC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType3or4IEC",mdxType:"Link"},"WindTurbineType3or4IEC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindProtectionIEC"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbune protection model associated with this wind generator type 3 or type 4 model."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindTurbineType3or4IEC"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind generator type 3 or type 4 model with which this wind turbine protection model is associated.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable",mdxType:"Link"},"WindDynamicsLookupTable")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC",mdxType:"Link"},"WindProtectionIEC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindDynamicsLookupTable"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The wind dynamics lookup table associated with this grid protection model."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindProtectionIEC"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The grid protection model with which this wind dynamics lookup table is associated.")))))}s.isMDXComponent=!0},2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=b(a),O=n,m=p["".concat(c,".").concat(O)]||p[O]||s[O]||i;return a?r.a.createElement(m,o({ref:t},d,{components:a})):r.a.createElement(m,o({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var d=2;d<i;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2179),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),d=a(2182),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,s,p=e.isNavLink,O=e.to,m=e.href,j=e.activeClassName,u=e.isActive,f=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,C=void 0===y||y,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(d.b)().withBaseUrl,N=Object(n.useContext)(l),v=O||m,I=Object(c.a)(v),T=null==v?void 0:v.replace("pathname://",""),E=void 0!==T?(a=T,C&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,W=Object(n.useRef)(!1),w=p?i.e:i.c,D=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!D&&I&&window.docusaurus.prefetch(E),function(){D&&s&&s.disconnect()}}),[E,D,I]);var P=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,M=!E||!I||P;return E&&I&&!P&&!f&&N.collectLink(E),M?r.a.createElement("a",Object.assign({href:E},v&&!I&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(w,Object.assign({},g,{onMouseEnter:function(){W.current||(window.docusaurus.preload(E),W.current=!0)},innerRef:function(e){var t,a;D&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(E)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),a())}))}))).observe(t))},to:E||""},p&&{isActive:u,activeClassName:j}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2179);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,d=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return d?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);