(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{2198:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2199:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var b=r.a.createContext({}),p=function(t){var e=r.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},O={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},s=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),s=p(a),m=n,j=s["".concat(c,".").concat(m)]||s[m]||O[m]||i;return a?r.a.createElement(j,l({ref:e},b,{components:a})):r.a.createElement(j,l({ref:e},b))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,c=new Array(i);c[0]=s;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,c[1]=l;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2200:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2198),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2201),p=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,O,s=t.isNavLink,m=t.to,j=t.href,d=t.activeClassName,f=t.isActive,u=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,N=void 0===g||g,y=p(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(b.b)().withBaseUrl,h=Object(n.useContext)(o),A=m||j,C=Object(c.a)(A),w=null==A?void 0:A.replace("pathname://",""),M=void 0!==w?(a=w,N&&function(t){return t.startsWith("/")}(a)?v(a):a):void 0,I=Object(n.useRef)(!1),P=s?i.e:i.c,E=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&C&&window.docusaurus.prefetch(M),function(){E&&O&&O.disconnect()}}),[M,E,C]);var k=null!==(e=null==M?void 0:M.startsWith("#"))&&void 0!==e&&e,T=!M||!C||k;return M&&C&&!k&&!u&&h.collectLink(M),T?r.a.createElement("a",Object.assign({href:M},A&&!C&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(P,Object.assign({},y,{onMouseEnter:function(){I.current||(window.docusaurus.preload(M),I.current=!0)},innerRef:function(t){var e,a;E&&t&&C&&(e=t,a=function(){window.docusaurus.prefetch(M)},(O=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(O.unobserve(e),O.disconnect(),a())}))}))).observe(e))},to:M||""},s&&{isActive:f,activeClassName:d}))}},2201:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return c}));var n=a(23),r=a(2198);function i(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,l=void 0!==c&&c,o=i.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+p:p}(i,a,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},396:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return o})),a.d(e,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(2199)),c=(a(2200),{title:"OilAnalysisMetalsAnalogKind",hide_table_of_contents:!0}),l={unversionedId:"cim100/TC57CIM/IEC61968/AssetMeas/OilAnalysisMetalsAnalogKind",id:"cim100/TC57CIM/IEC61968/AssetMeas/OilAnalysisMetalsAnalogKind",isDocsHomePage:!1,title:"OilAnalysisMetalsAnalogKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\AssetMeas\\OilAnalysisMetalsAnalogKind.mdx",slug:"/cim100/TC57CIM/IEC61968/AssetMeas/OilAnalysisMetalsAnalogKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetMeas/OilAnalysisMetalsAnalogKind",version:"current",sidebar:"docs",previous:{title:"OilAnalysisGasAnalogKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetMeas/OilAnalysisGasAnalogKind"},next:{title:"OilAnalysisMoistureAnalogKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetMeas/OilAnalysisMoistureAnalogKind"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:o};function p(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Analogs representing oil metals and elements analysis result.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"magnesium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Magnesium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"nickel"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nickel concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phosphorus"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phosphorus concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"silicon"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Silicon concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"silver"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Silver concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"silverParticulate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Silver concentration of particles larger than 0.45 microns (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sodium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sodium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tin"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tin concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"titanium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Titanium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tungsten"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tungsten concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vanadium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Vanadium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"zinc"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Zinc concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"zincParticulate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Zinc concentration of particles larger than 0.45 microns (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aluminum"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Aluminum concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aluminumParticulate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Aluminum concentration of particles larger than 0.45 microns  (in ppb,specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"barium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Barium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boron"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Boron concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"calcium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calcium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cadmium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Cadmium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"chromium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Chromium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"copper"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Copper concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"copperParticulate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Copper concentration of particles larger than 0.45 microns  (in ppb,specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iron"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Iron concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ironParticulate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Iron concentration of particles larger than 0.45 microns (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lead"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"leadParticulate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead concentration of particles larger than 0.45 microns (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lithium"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lithium concentration (in ppb, specifically in microgram/litre).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"molybdenum"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Molybdenum concentration (in ppb, specifically in microgram/litre).")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0}}]);