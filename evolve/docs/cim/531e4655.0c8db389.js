(window.webpackJsonp=window.webpackJsonp||[]).push([[705],{2198:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},2199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,b=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return n?o.a.createElement(b,c({ref:t},s,{components:n})):o.a.createElement(b,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2200:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(10),i=n(2198),c=n(8),l=Object(r.createContext)({collectLink:function(){}}),s=n(2201),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,p=e.to,b=e.href,m=e.activeClassName,O=e.isActive,v=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,C=void 0===j||j,I=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,h=Object(r.useContext)(l),w=p||b,M=Object(i.a)(w),g=null==w?void 0:w.replace("pathname://",""),E=void 0!==g?(n=g,C&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,N=Object(r.useRef)(!1),T=f?a.e:a.c,k=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!k&&M&&window.docusaurus.prefetch(E),function(){k&&d&&d.disconnect()}}),[E,k,M]);var P=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,D=!E||!M||P;return E&&M&&!P&&!v&&h.collectLink(E),D?o.a.createElement("a",Object.assign({href:E},w&&!M&&{target:"_blank",rel:"noopener noreferrer"},I)):o.a.createElement(T,Object.assign({},I,{onMouseEnter:function(){N.current||(window.docusaurus.preload(E),N.current=!0)},innerRef:function(e){var t,n;k&&e&&M&&(t=e,n=function(){window.docusaurus.prefetch(E)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:E||""},f&&{isActive:O,activeClassName:m}))}},2201:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(23),o=n(2198);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},774:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(2199)),i=n(2200),c={title:"ModelToBeDeleted",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelToBeDeleted",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelToBeDeleted",isDocsHomePage:!1,title:"ModelToBeDeleted",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfPart303\\NetworkModelFrames\\ModelToBeDeleted.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelToBeDeleted",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelToBeDeleted",version:"current",sidebar:"docs",previous:{title:"ModelAuthority",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelAuthority"},next:{title:"CompleteModelToBeDeleted",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/CompleteModelToBeDeleted"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"A Model is a collection of Datasets.  "),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/CompleteModelToBeDeleted",mdxType:"Link"},"CompleteModelToBeDeleted")),Object(a.a)("li",{parentName:"ul"},Object(a.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartVersion",mdxType:"Link"},"ModelPartVersion"))),Object(a.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}d.isMDXComponent=!0}}]);