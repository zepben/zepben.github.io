(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{2175:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2176:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),O=r,m=d["".concat(c,".").concat(O)]||d[O]||p[O]||o;return a?n.a.createElement(m,i({ref:t},b,{components:a})):n.a.createElement(m,i({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2177:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(10),c=a(2175),i=a(8),l=Object(r.createContext)({collectLink:function(){}}),b=a(2178),s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,p,d=e.isNavLink,O=e.to,m=e.href,j=e.activeClassName,u=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,h=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,C=Object(r.useContext)(l),v=O||m,w=Object(c.a)(v),P=null==v?void 0:v.replace("pathname://",""),T=void 0!==P?(a=P,y&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,I=Object(r.useRef)(!1),k=d?o.e:o.c,E=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&w&&window.docusaurus.prefetch(T),function(){E&&p&&p.disconnect()}}),[T,E,w]);var x=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,B=!T||!w||x;return T&&w&&!x&&!f&&C.collectLink(T),B?n.a.createElement("a",Object.assign({href:T},v&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(k,Object.assign({},h,{onMouseEnter:function(){I.current||(window.docusaurus.preload(T),I.current=!0)},innerRef:function(e){var t,a;E&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(T)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:T||""},d&&{isActive:u,activeClassName:j}))}},2178:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2175);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(i)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+s:s}(o,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},350:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(2176)),c=a(2177),i={title:"HydroPowerPlant"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",id:"cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",isDocsHomePage:!1,title:"HydroPowerPlant",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Generation\\Production\\HydroPowerPlant.md",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",version:"current",sidebar:"docs",previous:{title:"AirCompressor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/AirCompressor"},next:{title:"GeneratorControlSource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratorControlSource"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"A hydro power station which can generate or pump. When generating, the generator turbines receive water from an upper reservoir. When pumping, the pumps receive their water from a lower reservoir.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"dischargeTravelDelay"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Water travel delay from tailbay to next downstream hydro power station.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"genRatedP"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The hydro plant's generating rating active power for rated head conditions. The attribute shall be a positive value.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"hydroPlantStorageType"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPlantStorageKind",mdxType:"Link"},"HydroPlantStorageKind")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The type of hydro power plant water storage.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"penstockType"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Type and configuration of hydro plant penstock(s).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"plantDischargeCapacity"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/VolumeFlowRate",mdxType:"Link"},"VolumeFlowRate")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Total plant discharge capacity.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"plantRatedHead"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Length",mdxType:"Link"},"Length")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The plant's rated gross head. The attribute shall be a positive value.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pumpRatedP"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The hydro plant's pumping rating active power for rated head conditions. The attribute shall be a positive value.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"surgeTankCode"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A code describing the type (or absence) of surge tank that is associated with the hydro power plant.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"surgeTankCrestLevel"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/WaterLevel",mdxType:"Link"},"WaterLevel")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The level at which the surge tank spills.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroGeneratingUnit",mdxType:"Link"},"HydroGeneratingUnit")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HydroPowerPlant"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The hydro generating unit belongs to a hydro power plant."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HydroGeneratingUnits"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The hydro generating unit belongs to a hydro power plant.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",mdxType:"Link"},"HydroPump")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HydroPowerPlant"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The hydro pump may be a member of a pumped storage plant or a pump for distributing water."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HydroPumps"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The hydro pump may be a member of a pumped storage plant or a pump for distributing water.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/Reservoir",mdxType:"Link"},"Reservoir")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HydroPowerPlants"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generators discharge water to or pumps are supplied water from a downstream reservoir."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reservoir"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generators discharge water to or pumps are supplied water from a downstream reservoir.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/Reservoir",mdxType:"Link"},"Reservoir")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UpstreamFromHydroPowerPlants"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generators are supplied water from or pumps discharge water to an upstream reservoir."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GenSourcePumpDischargeReservoir"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generators are supplied water from or pumps discharge water to an upstream reservoir.")))))}p.isMDXComponent=!0}}]);