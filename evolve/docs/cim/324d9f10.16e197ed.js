(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{2179:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},2180:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),O=u(r),b=a,f=O["".concat(c,".").concat(b)]||O[b]||p[b]||i;return r?n.a.createElement(f,o({ref:t},l,{components:r})):n.a.createElement(f,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=O;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},2181:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(10),c=r(2179),o=r(8),s=Object(a.createContext)({collectLink:function(){}}),l=r(2182),u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t,r,p,O=e.isNavLink,b=e.to,f=e.href,d=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,C=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,h=Object(a.useContext)(s),k=b||f,I=Object(c.a)(k),M=null==k?void 0:k.replace("pathname://",""),N=void 0!==M?(r=M,v&&function(e){return e.startsWith("/")}(r)?y(r):r):void 0,w=Object(a.useRef)(!1),D=O?i.e:i.c,P=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&I&&window.docusaurus.prefetch(N),function(){P&&p&&p.disconnect()}}),[N,P,I]);var T=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,E=!N||!I||T;return N&&I&&!T&&!j&&h.collectLink(N),E?n.a.createElement("a",Object.assign({href:N},k&&!I&&{target:"_blank",rel:"noopener noreferrer"},C)):n.a.createElement(D,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(N),w.current=!0)},innerRef:function(e){var t,r;P&&e&&I&&(t=e,r=function(){window.docusaurus.prefetch(N)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),r())}))}))).observe(t))},to:N||""},O&&{isActive:m,activeClassName:d}))}},2182:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var a=r(23),n=r(2179);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(o)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(i,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},481:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(2180)),c=r(2181),o={title:"InstructionClearingDOP"},s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP",isDocsHomePage:!1,title:"InstructionClearingDOP",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\MarketResults\\InstructionClearingDOP.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP",version:"current",sidebar:"docs",previous:{title:"InstructionClearingDOT",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOT"},next:{title:"InstructionClearing",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearing"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Model of market clearing, related to Dispatch Operating Point. Identifies interval."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",mdxType:"Link"},"MarketFactors"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP",mdxType:"Link"},"InstructionClearingDOP")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/DopInstruction",mdxType:"Link"},"DopInstruction")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"InstructionClearingDOP"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"DopInstruction"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);