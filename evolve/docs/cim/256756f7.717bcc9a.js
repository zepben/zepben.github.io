(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{2197:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2198:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),j=m(a),d=n,p=j["".concat(c,".").concat(d)]||j[d]||O[d]||i;return a?r.a.createElement(p,l({ref:t},b,{components:a})):r.a.createElement(p,l({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},2199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2197),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2200),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,O,j=e.isNavLink,d=e.to,p=e.href,s=e.activeClassName,u=e.isActive,g=e["data-noBrokenLinkCheck"],f=e.autoAddBaseUrl,h=void 0===f||f,N=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(b.b)().withBaseUrl,y=Object(n.useContext)(o),T=d||p,v=Object(c.a)(T),I=null==T?void 0:T.replace("pathname://",""),G=void 0!==I?(a=I,h&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,E=Object(n.useRef)(!1),P=j?i.e:i.c,U=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!U&&v&&window.docusaurus.prefetch(G),function(){U&&O&&O.disconnect()}}),[G,U,v]);var k=null!==(t=null==G?void 0:G.startsWith("#"))&&void 0!==t&&t,A=!G||!v||k;return G&&v&&!k&&!g&&y.collectLink(G),A?r.a.createElement("a",Object.assign({href:G},T&&!v&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(P,Object.assign({},N,{onMouseEnter:function(){E.current||(window.docusaurus.preload(G),E.current=!0)},innerRef:function(e){var t,a;U&&e&&v&&(t=e,a=function(){window.docusaurus.prefetch(G)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),a())}))}))).observe(t))},to:G||""},j&&{isActive:u,activeClassName:s}))}},2200:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2197);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,l=void 0!==c&&c,o=i.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+m:m}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},405:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),i=(a(0),a(2198)),c=a(2199),l={title:"ThermalGeneratingUnit",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",id:"cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",isDocsHomePage:!1,title:"ThermalGeneratingUnit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Generation\\Production\\ThermalGeneratingUnit.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",version:"current",sidebar:"docs",previous:{title:"EmissionType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionType"},next:{title:"NuclearGeneratingUnit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/NuclearGeneratingUnit"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:b};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A generating unit whose prime mover could be a steam turbine, combustion turbine, or diesel engine."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"oMCost"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CostPerHeatUnit",mdxType:"Link"},"CostPerHeatUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Operating and maintenance cost for the thermal unit.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratingUnit",mdxType:"Link"},"GeneratingUnit"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/MktThermalGeneratingUnit",mdxType:"Link"},"MktThermalGeneratingUnit"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HeatInputCurve",mdxType:"Link"},"HeatInputCurve")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HeatInputCurve"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a heat input curve."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a heat input curve.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionAccount",mdxType:"Link"},"EmissionAccount")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EmmissionAccounts"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have one or more emission allowance accounts."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have one or more emission allowance accounts.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HeatRateCurve",mdxType:"Link"},"HeatRateCurve")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HeatRateCurve"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a heat rate curve."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a heat rate curve.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/CAESPlant",mdxType:"Link"},"CAESPlant")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CAESPlant"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may be a member of a compressed air energy storage plant."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may be a member of a compressed air energy storage plant.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionCurve",mdxType:"Link"},"EmissionCurve")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EmissionCurves"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have  one or more emission curves."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have  one or more emission curves.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ShutdownCurve",mdxType:"Link"},"ShutdownCurve")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShutdownCurve"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a shutdown curve."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a shutdown curve.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/FuelAllocationSchedule",mdxType:"Link"},"FuelAllocationSchedule")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"FuelAllocationSchedules"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have one or more fuel allocation schedules."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have one or more fuel allocation schedules.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/CombinedCyclePlant",mdxType:"Link"},"CombinedCyclePlant")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CombinedCyclePlant"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may be a member of a combined cycle plant."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnits"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may be a member of a combined cycle plant.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/IncrementalHeatRateCurve",mdxType:"Link"},"IncrementalHeatRateCurve")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IncrementalHeatRateCurve"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have an incremental heat rate curve."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have an incremental heat rate curve.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/FossilFuel",mdxType:"Link"},"FossilFuel")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"FossilFuels"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have one or more fossil fuels."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have one or more fossil fuels.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/CogenerationPlant",mdxType:"Link"},"CogenerationPlant")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CogenerationPlant"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may be a member of a cogeneration plant."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnits"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may be a member of a cogeneration plant.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/StartupModel",mdxType:"Link"},"StartupModel")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"StartupModel"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a startup model."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ThermalGeneratingUnit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A thermal generating unit may have a startup model.")))))}O.isMDXComponent=!0}}]);