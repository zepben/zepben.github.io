(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{2198:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2199:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),o=n(2198),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2201),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,u=e.isNavLink,m=e.to,f=e.href,d=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,C=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,y=Object(a.useContext)(l),N=m||f,E=Object(o.a)(N),I=null==N?void 0:N.replace("pathname://",""),w=void 0!==I?(n=I,v&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,T=Object(a.useRef)(!1),k=u?i.e:i.c,M=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!M&&E&&window.docusaurus.prefetch(w),function(){M&&b&&b.disconnect()}}),[w,M,E]);var x=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,R=!w||!E||x;return w&&E&&!x&&!j&&y.collectLink(w),R?r.a.createElement("a",Object.assign({href:w},N&&!E&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(k,Object.assign({},C,{onMouseEnter:function(){T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:function(e){var t,n;M&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(w)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:w||""},u&&{isActive:O,activeClassName:d}))}},2201:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(2198);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},553:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(2199)),o=n(2200),c={title:"ReportingCapability",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/ReportingCapability",id:"cim100/TC57CIM/IEC62325/Environmental/ReportingCapability",isDocsHomePage:!1,title:"ReportingCapability",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\ReportingCapability.mdx",slug:"/cim100/TC57CIM/IEC62325/Environmental/ReportingCapability",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/ReportingCapability",version:"current",sidebar:"docs",previous:{title:"SpaceAnalog",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/SpaceAnalog"},next:{title:"PhenomenonClassification",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("font",{color:"#0f0f0f"},"Definition of one set of reporting capabilities for this monitoring station. The associated EnvironmentalValueSets describe the maximum range of possible environmental values the station is capable of returning.  This attribute is intended primarily to assist a utility in managing its stations. "),"### Attributes | Name                    | Type                                                                                                         | Description                                             | |:------------------------|:-------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------| | reportingIntervalPeriod | ",Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer"),"                                       | Number of units of time making up reporting period.     | | reportingIntervalType   | ",Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/AssetMeas/CalculationIntervalUnitKind",mdxType:"Link"},"CalculationIntervalUnitKind")," | Unit of time in which reporting period is expressed.    | | reportingMethod         | ",Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/ReportingMethodKind",mdxType:"Link"},"ReportingMethodKind"),"   | Indicates how the weather station reports observations. | ### Relationships __Inherits from__ - None",Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ReportingCapability",mdxType:"Link"},"ReportingCapability")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/MarketCommon/EnvironmentalMonitoringStation",mdxType:"Link"},"EnvironmentalMonitoringStation")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ReportingCapability"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"One of the reporting capabilities of this monitoring station."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalMonitoringStation"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The environmental monitoring station to which this set of reporting capabilities belong.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",mdxType:"Link"},"EnvironmentalAnalog")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ReportingCapability",mdxType:"Link"},"ReportingCapability")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAnalog"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"One of the environmental value sets expressing one of the reporting capabilities."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ReportingCapability"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The reporting capability this environmental value set helps define.")))))}b.isMDXComponent=!0}}]);