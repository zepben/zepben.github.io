(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{2189:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,d=b["".concat(i,".").concat(p)]||b[p]||f[p]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2191:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),i=n(2189),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(2192),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,b=e.isNavLink,p=e.to,d=e.href,O=e.activeClassName,v=e.isActive,j=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,h=void 0===m||m,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(l.b)().withBaseUrl,I=Object(r.useContext)(s),w=p||d,C=Object(i.a)(w),N=null==w?void 0:w.replace("pathname://",""),E=void 0!==N?(n=N,h&&function(e){return e.startsWith("/")}(n)?g(n):n):void 0,k=Object(r.useRef)(!1),A=b?o.e:o.c,x=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&C&&window.docusaurus.prefetch(E),function(){x&&f&&f.disconnect()}}),[E,x,C]);var W=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,P=!E||!C||W;return E&&C&&!W&&!j&&I.collectLink(E),P?a.a.createElement("a",Object.assign({href:E},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(A,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(E),k.current=!0)},innerRef:function(e){var t,n;x&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(E)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:E||""},b&&{isActive:v,activeClassName:O}))}},2192:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(23),a=n(2189);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},364:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),o=(n(0),n(2190)),i=n(2191),c={title:"WireInfo"},s={unversionedId:"evolve/IEC61968/AssetInfo/WireInfo",id:"evolve/IEC61968/AssetInfo/WireInfo",isDocsHomePage:!1,title:"WireInfo",description:"Class Description",source:"@site/docs\\evolve\\IEC61968\\AssetInfo\\WireInfo.md",slug:"/evolve/IEC61968/AssetInfo/WireInfo",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/WireInfo",version:"current",sidebar:"docs",previous:{title:"CableInfo",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/CableInfo"},next:{title:"OverheadWireInfo",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/OverheadWireInfo"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Wire data that can be specified per line segment phase, or for the line segment as a whole in case its phases all have the same wire characteristics."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedCurrent"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Current carrying capacity of the wire under stated thermal conditions.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"material"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61968/AssetInfo/WireMaterialKind",mdxType:"Link"},"WireMaterialKind")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Conductor material.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/evolve/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/evolve/IEC61968/AssetInfo/CableInfo",mdxType:"Link"},"CableInfo")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/evolve/IEC61968/AssetInfo/OverheadWireInfo",mdxType:"Link"},"OverheadWireInfo"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}f.isMDXComponent=!0}}]);