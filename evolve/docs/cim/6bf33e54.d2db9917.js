(window.webpackJsonp=window.webpackJsonp||[]).push([[906],{2189:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2190:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,p=d["".concat(c,".").concat(f)]||d[f]||b[f]||o;return r?a.a.createElement(p,i({ref:t},s,{components:r})):a.a.createElement(p,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2191:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(10),c=r(2189),i=r(8),l=Object(n.createContext)({collectLink:function(){}}),s=r(2192),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,r,b,d=e.isNavLink,f=e.to,p=e.href,j=e.activeClassName,O=e.isActive,m=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,N=void 0===v||v,w=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(s.b)().withBaseUrl,h=Object(n.useContext)(l),g=f||p,y=Object(c.a)(g),I=null==g?void 0:g.replace("pathname://",""),P=void 0!==I?(r=I,N&&function(e){return e.startsWith("/")}(r)?C(r):r):void 0,k=Object(n.useRef)(!1),M=d?o.e:o.c,E=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&y&&window.docusaurus.prefetch(P),function(){E&&b&&b.disconnect()}}),[P,E,y]);var D=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,T=!P||!y||D;return P&&y&&!D&&!m&&h.collectLink(P),T?a.a.createElement("a",Object.assign({href:P},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},w)):a.a.createElement(M,Object.assign({},w,{onMouseEnter:function(){k.current||(window.docusaurus.preload(P),k.current=!0)},innerRef:function(e){var t,r;E&&e&&y&&(t=e,r=function(){window.docusaurus.prefetch(P)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),r())}))}))).observe(t))},to:P||""},d&&{isActive:O,activeClassName:j}))}},2192:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(23),a=r(2189);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+u:u}(o,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},975:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(2190)),c=r(2191),i={title:"NetworkModelProjectDocument"},l={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectDocument",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectDocument",isDocsHomePage:!1,title:"NetworkModelProjectDocument",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfPart303\\NetworkModelProjects\\NetworkModelProjectDocument.md",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectDocument",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectDocument",version:"current",sidebar:"docs",previous:{title:"ProjectDependency",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/ProjectDependency"},next:{title:"NetworkModelProject",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProject"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"None")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectComponent",mdxType:"Link"},"NetworkModelProjectComponent")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectDocument",mdxType:"Link"},"NetworkModelProjectDocument")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}b.isMDXComponent=!0}}]);