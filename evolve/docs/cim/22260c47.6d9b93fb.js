(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{2194:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2195:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,p=m["".concat(o,".").concat(u)]||m[u]||b[u]||i;return a?r.a.createElement(p,c({ref:t},s,{components:a})):r.a.createElement(p,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),o=a(2194),c=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2197),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,b,m=e.isNavLink,u=e.to,p=e.href,O=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,C=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,v=Object(n.useContext)(l),N=u||p,I=Object(o.a)(N),T=null==N?void 0:N.replace("pathname://",""),L=void 0!==T?(a=T,h&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,w=Object(n.useRef)(!1),E=m?i.e:i.c,R=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!R&&I&&window.docusaurus.prefetch(L),function(){R&&b&&b.disconnect()}}),[L,R,I]);var x=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,D=!L||!I||x;return L&&I&&!x&&!j&&v.collectLink(L),D?r.a.createElement("a",Object.assign({href:L},N&&!I&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(E,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(L),w.current=!0)},innerRef:function(e){var t,a;R&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(L)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:L||""},m&&{isActive:f,activeClassName:O}))}},2197:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(2194);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+d:d}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},378:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(2195)),o=a(2196),c={title:"RegisteredControllableLoad",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/InfIEC62325/InfReferenceData/RegisteredControllableLoad",id:"cim100/TC57CIM/IEC62325/InfIEC62325/InfReferenceData/RegisteredControllableLoad",isDocsHomePage:!1,title:"RegisteredControllableLoad",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\InfIEC62325\\InfReferenceData\\RegisteredControllableLoad.mdx",slug:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfReferenceData/RegisteredControllableLoad",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfReferenceData/RegisteredControllableLoad",version:"current",sidebar:"docs",previous:{title:"MarketRoleKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfMarketOpCommon/MarketRoleKind"},next:{title:"LoadReductionTimeCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfReferenceData/LoadReductionTimeCurve"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Temporary holding for load reduction attributes removed from RegisteredLoad. Use for future use case when developing the RegisteredDistributedResource specialized classes.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxBaseLoad"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum Base Load (MW), per Participating Load Resource")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxDeploymentTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum Deployment time (seconds)")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxLoadRedTimesPerDay"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum Number of Daily Load Curtailments")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxLoadReduction"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maximum load reduction")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxReductionTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maxiimum Load Reduction Time (min), per Participating Load Resource")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxWeeklyDeployment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum weekly deployments")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minLoadReduction"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum MW for a load reduction (e.g., MW rating of a discrete pump.  This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minLoadReductionCost"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CostPerEnergyUnit",mdxType:"Link"},"CostPerEnergyUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minimum load reduction cost. Single number for the load")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minLoadReductionInterval"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shortest period load reduction shall be maintained before load can be restored to normal levels.  This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minReductionTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum Load Reduction Time (min), per Participating Load Resource")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minTimeBetLoadRed"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shortest time that load shall be left at normal levels before a new load reduction.  This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reqNoticeTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time period that is required from an order to reduce a load to the time that it takes to get to the minimum load reduction.  This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}b.isMDXComponent=!0}}]);