(window.webpackJsonp=window.webpackJsonp||[]).push([[855],{2174:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),O=n,f=p["".concat(o,".").concat(O)]||p[O]||u[O]||i;return a?r.a.createElement(f,c({ref:t},s,{components:a})):r.a.createElement(f,c({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),o=a(2174),c=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2177),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,p=e.isNavLink,O=e.to,f=e.href,d=e.activeClassName,j=e.isActive,g=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,v=void 0===m||m,h=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(n.useContext)(l),C=O||f,w=Object(o.a)(C),R=null==C?void 0:C.replace("pathname://",""),E=void 0!==R?(a=R,v&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,S=Object(n.useRef)(!1),k=p?i.e:i.c,I=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!I&&w&&window.docusaurus.prefetch(E),function(){I&&u&&u.disconnect()}}),[E,I,w]);var B=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,T=!E||!w||B;return E&&w&&!B&&!g&&N.collectLink(E),T?r.a.createElement("a",Object.assign({href:E},C&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(k,Object.assign({},h,{onMouseEnter:function(){S.current||(window.docusaurus.preload(E),S.current=!0)},innerRef:function(e){var t,a;I&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(E)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:E||""},p&&{isActive:j,activeClassName:d}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(2174);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},924:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(2175)),o=a(2176),c={title:"SubGeographicalRegion"},l={unversionedId:"evolve/IEC61970/Base/Core/SubGeographicalRegion",id:"evolve/IEC61970/Base/Core/SubGeographicalRegion",isDocsHomePage:!1,title:"SubGeographicalRegion",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Core\\SubGeographicalRegion.md",slug:"/evolve/IEC61970/Base/Core/SubGeographicalRegion",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/SubGeographicalRegion",version:"current",sidebar:"docs",previous:{title:"GeographicalRegion",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/GeographicalRegion"},next:{title:"Name",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/Name"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A subset of a geographical region of a power system network model."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/GeographicalRegion",mdxType:"Link"},"GeographicalRegion")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/SubGeographicalRegion",mdxType:"Link"},"SubGeographicalRegion")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Region"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The geographical region which this sub-geographical region is within."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regions"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All sub-geographical regions within this geographical region.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/SubGeographicalRegion",mdxType:"Link"},"SubGeographicalRegion")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/Substation",mdxType:"Link"},"Substation")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Region"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The SubGeographicalRegion containing the substation."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Substations"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The substations in this sub-geographical region.")))))}u.isMDXComponent=!0}}]);