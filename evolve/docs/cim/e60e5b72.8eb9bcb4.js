(window.webpackJsonp=window.webpackJsonp||[]).push([[1914],{1984:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(2190)),i=a(2191),o={title:"ResourceDispatchResults"},l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceDispatchResults",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceDispatchResults",isDocsHomePage:!1,title:"ResourceDispatchResults",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\MarketResults\\ResourceDispatchResults.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceDispatchResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceDispatchResults",version:"current",sidebar:"docs",previous:{title:"ResourceLoadFollowingInst",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceLoadFollowingInst"},next:{title:"ResourceDeploymentStatus",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceDeploymentStatus"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"The ResourceDispatchResults class provides market results that can be provided to a SC. The specific data provided consists of several indicators such as contingency flags, blocked start up, and RMR dispatch. It also provides the projected overall and the regulating status of the resource."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"blockedDispatch"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Blocked Dispatch Indicator (Yes/No)")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"blockedPublishDOP"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Block sending DOP to ADS (Y/N)")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"contingencyFlag"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo",mdxType:"Link"},"YesNo")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Contingent Operating Reserve Indicator (Yes/No).  Resource participating with AS capacity in contingency dispatch.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"limitIndicator"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"indicate which limit is the constraints")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lowerLimit"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"resource energy ramping lower limit")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maxRampRate"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maximum ramp rate")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"operatingLimitHigh"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The upper operating limit incorporating any derate used by the RTD for the Binding Interval.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"operatingLimitLow"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The lower operating limit incorporating any derate used by the RTD for the Binding Interval.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"penaltyDispatchIndicator"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo",mdxType:"Link"},"YesNo")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Penalty Dispatch Indicator (Yes / No) indicating an un-economic adjustment.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"regulatingLimitHigh"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The upper regulating limit incorporating any derate used by the RTD for the Binding Interval.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"regulatingLimitLow"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The lower regulating limit incorporating any derate used by the RTD for the Binding Interval.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"resourceStatus"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Unit Commitment Status (On/Off/Starting)")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"totalSchedule"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Resource total upward schedule.  total schedule = En + all AS per resource per interval")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateTimeStamp"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MQSCHGType",mdxType:"Link"},"MQSCHGType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updateUser"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"upperLimit"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"resource energy ramping upper limit")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketCommon/RegisteredResource",mdxType:"Link"},"RegisteredResource")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceDispatchResults",mdxType:"Link"},"ResourceDispatchResults")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RegisteredResource"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ResourceDispatchResults"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceClearing",mdxType:"Link"},"ResourceClearing")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceDispatchResults",mdxType:"Link"},"ResourceDispatchResults")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ResourceClearing"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ResourceDispatchResults"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0},2189:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))},2190:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var r=a(0),n=a.n(r);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=n.a.createContext({}),b=function(t){var e=n.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},O=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),O=b(a),m=r,j=O["".concat(i,".").concat(m)]||O[m]||p[m]||c;return a?n.a.createElement(j,o({ref:e},s,{components:a})):n.a.createElement(j,o({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2191:function(t,e,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2189),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),s=a(2192),b=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]])}return a};e.a=function(t){var e,a,p,O=t.isNavLink,m=t.to,j=t.href,d=t.activeClassName,u=t.isActive,f=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,N=void 0===g||g,y=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(s.b)().withBaseUrl,h=Object(r.useContext)(l),k=m||j,v=Object(i.a)(k),T=null==k?void 0:k.replace("pathname://",""),I=void 0!==T?(a=T,N&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,M=Object(r.useRef)(!1),R=O?c.e:c.c,D=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!D&&v&&window.docusaurus.prefetch(I),function(){D&&p&&p.disconnect()}}),[I,D,v]);var w=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,E=!I||!v||w;return I&&v&&!w&&!f&&h.collectLink(I),E?n.a.createElement("a",Object.assign({href:I},k&&!v&&{target:"_blank",rel:"noopener noreferrer"},y)):n.a.createElement(R,Object.assign({},y,{onMouseEnter:function(){M.current||(window.docusaurus.preload(I),M.current=!0)},innerRef:function(t){var e,a;D&&t&&v&&(e=t,a=function(){window.docusaurus.prefetch(I)},(p=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(e),p.disconnect(),a())}))}))).observe(e))},to:I||""},O&&{isActive:u,activeClassName:d}))}},2192:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var r=a(23),n=a(2189);function c(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return e+a;var b=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+b:b}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}}}]);