(window.webpackJsonp=window.webpackJsonp||[]).push([[517],{2194:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2195:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=r.a.createContext({}),b=function(t){var e=r.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),O=b(a),u=n,d=O["".concat(i,".").concat(u)]||O[u]||p[u]||c;return a?r.a.createElement(d,o({ref:e},s,{components:a})):r.a.createElement(d,o({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2196:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2194),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2197),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,p,O=t.isNavLink,u=t.to,d=t.href,j=t.activeClassName,f=t.isActive,m=t["data-noBrokenLinkCheck"],v=t.autoAddBaseUrl,y=void 0===v||v,g=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(s.b)().withBaseUrl,N=Object(n.useContext)(l),h=u||d,T=Object(i.a)(h),w=null==h?void 0:h.replace("pathname://",""),M=void 0!==w?(a=w,y&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,R=Object(n.useRef)(!1),k=O?c.e:c.c,E=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&T&&window.docusaurus.prefetch(M),function(){E&&p&&p.disconnect()}}),[M,E,T]);var I=null!==(e=null==M?void 0:M.startsWith("#"))&&void 0!==e&&e,x=!M||!T||I;return M&&T&&!I&&!m&&N.collectLink(M),x?r.a.createElement("a",Object.assign({href:M},h&&!T&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(k,Object.assign({},g,{onMouseEnter:function(){R.current||(window.docusaurus.preload(M),R.current=!0)},innerRef:function(t){var e,a;E&&t&&T&&(e=t,a=function(){window.docusaurus.prefetch(M)},(p=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(e),p.disconnect(),a())}))}))).observe(e))},to:M||""},O&&{isActive:f,activeClassName:j}))}},2197:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2194);function c(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return e+a;var b=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+b:b}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},586:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return l})),a.d(e,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(2195)),i=(a(2196),{title:"ContractType",hide_table_of_contents:!0}),o={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/ContractType",id:"cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/ContractType",isDocsHomePage:!1,title:"ContractType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MktDomain\\ContractType.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/ContractType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/ContractType",version:"current",sidebar:"docs",previous:{title:"ConstraintRampType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/ConstraintRampType"},next:{title:"CostBasis",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/CostBasis"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function b(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Transmission Contract Type, For example:"),Object(c.a)("p",null,"O - Other "),Object(c.a)("p",null,"TE - Transmission Export "),Object(c.a)("p",null,"TI - Transmission Import "),Object(c.a)("p",null,"ETC - Existing Transmission Contract "),Object(c.a)("p",null,"RMT - RMT Contract "),Object(c.a)("p",null,"TOR - Transmission Ownership Right  "),Object(c.a)("p",null,"RMR - Reliability Must Run Contract "),Object(c.a)("p",null,"CVR - Converted contract"),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ETC"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ETC - Existing Transmission Contract")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TOR"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TOR - Transmission Ownership Right")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RMR"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RMR - Reliability Must Run Contract")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RMT"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RMT - RMT Contract")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"O"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"O - Other")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TE"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TE - Transmission Export")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TI"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TI - Transmission Import")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CVR"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CVR - Converted contract.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}b.isMDXComponent=!0}}]);