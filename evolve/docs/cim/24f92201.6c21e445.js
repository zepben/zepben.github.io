(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{2179:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),f=a,d=b["".concat(c,".").concat(f)]||b[f]||p[f]||i;return n?r.a.createElement(d,o({ref:t},u,{components:n})):r.a.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2181:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),c=n(2179),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),u=n(2182),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,b=e.isNavLink,f=e.to,d=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,g=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(u.b)().withBaseUrl,C=Object(a.useContext)(s),N=f||d,w=Object(c.a)(N),k=null==N?void 0:N.replace("pathname://",""),M=void 0!==k?(n=k,y&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,T=Object(a.useRef)(!1),I=b?i.e:i.c,D=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!D&&w&&window.docusaurus.prefetch(M),function(){D&&p&&p.disconnect()}}),[M,D,w]);var E=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,R=!M||!w||E;return M&&w&&!E&&!j&&C.collectLink(M),R?r.a.createElement("a",Object.assign({href:M},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(I,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(M),T.current=!0)},innerRef:function(e){var t,n;D&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(M)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:M||""},b&&{isActive:m,activeClassName:O}))}},2182:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2179);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},348:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(2180)),c=(n(2181),{title:"RampCurveType"}),o={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/RampCurveType",id:"cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/RampCurveType",isDocsHomePage:!1,title:"RampCurveType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MktDomain\\RampCurveType.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/RampCurveType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/RampCurveType",version:"current",sidebar:"docs",previous:{title:"PurposeFlagType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/PurposeFlagType"},next:{title:"RampRateCondition",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/RampRateCondition"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"For example:"),Object(i.a)("p",null,"0 - Fixed ramp rate independent of rate function unit MW output"),Object(i.a)("p",null,"1 - Static ramp rates as a function of unit MW output only "),Object(i.a)("p",null,"2 - Dynamic ramp rates as a function of unit MW output and ramping time"),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"0"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Fixed ramp rate independent of rate function unit MW output")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Static ramp rates as a function of unit MW output only")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"2"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Dynamic ramp rates as a function of unit MW output and ramping time")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}l.isMDXComponent=!0}}]);