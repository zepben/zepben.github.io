(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2179:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2180:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=r.a.createContext({}),u=function(t){var e=r.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(a),p=n,O=d["".concat(i,".").concat(p)]||d[p]||b[p]||c;return a?r.a.createElement(O,o({ref:e},s,{components:a})):r.a.createElement(O,o({ref:e},s))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2181:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2179),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2182),u=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,b,d=t.isNavLink,p=t.to,O=t.href,f=t.activeClassName,j=t.isActive,m=t["data-noBrokenLinkCheck"],C=t.autoAddBaseUrl,h=void 0===C||C,v=u(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(s.b)().withBaseUrl,y=Object(n.useContext)(l),N=p||O,w=Object(i.a)(N),I=null==N?void 0:N.replace("pathname://",""),T=void 0!==I?(a=I,h&&function(t){return t.startsWith("/")}(a)?g(a):a):void 0,M=Object(n.useRef)(!1),E=d?c.e:c.c,A=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!A&&w&&window.docusaurus.prefetch(T),function(){A&&b&&b.disconnect()}}),[T,A,w]);var S=null!==(e=null==T?void 0:T.startsWith("#"))&&void 0!==e&&e,k=!T||!w||S;return T&&w&&!S&&!m&&y.collectLink(T),k?r.a.createElement("a",Object.assign({href:T},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(E,Object.assign({},v,{onMouseEnter:function(){M.current||(window.docusaurus.preload(T),M.current=!0)},innerRef:function(t){var e,a;A&&t&&w&&(e=t,a=function(){window.docusaurus.prefetch(T)},(b=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(b.unobserve(e),b.disconnect(),a())}))}))).observe(e))},to:T||""},d&&{isActive:j,activeClassName:f}))}},2182:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2179);function c(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return e+a;var u=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+u:u}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},71:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(2180)),i=a(2181),o={title:"StatisticalCalculation"},l={unversionedId:"cim100/TC57CIM/IEC61968/AssetMeas/StatisticalCalculation",id:"cim100/TC57CIM/IEC61968/AssetMeas/StatisticalCalculation",isDocsHomePage:!1,title:"StatisticalCalculation",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\AssetMeas\\StatisticalCalculation.md",slug:"/cim100/TC57CIM/IEC61968/AssetMeas/StatisticalCalculation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetMeas/StatisticalCalculation",version:"current",sidebar:"docs",previous:{title:"PeriodicStatisticalCalculation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetMeas/PeriodicStatisticalCalculation"},next:{title:"AssetStringKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetMeas/AssetStringKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},u,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Description of statistical calculation performed.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"calculationMode"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetMeas/CalculationModeKind",mdxType:"Link"},"CalculationModeKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calculation mode.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"calculationTechnique"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetMeas/CalculationTechniqueKind",mdxType:"Link"},"CalculationTechniqueKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kind of statistical calculation, specifying how the measurement value is calculated.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetMeas/PeriodicStatisticalCalculation",mdxType:"Link"},"PeriodicStatisticalCalculation"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetMeas/StatisticalCalculation",mdxType:"Link"},"StatisticalCalculation")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetMeas/CalculationMethodOrder",mdxType:"Link"},"CalculationMethodOrder")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"StatisicalCalculation"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The statistical calculation done at this order."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CalculationMethodOrder"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The order in which this statistical calculation is done.")))))}b.isMDXComponent=!0}}]);