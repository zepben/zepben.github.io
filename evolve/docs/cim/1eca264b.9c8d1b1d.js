(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{2175:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2176:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),f=r,O=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return a?n.a.createElement(O,c({ref:t},s,{components:a})):n.a.createElement(O,c({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2177:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(10),i=a(2175),c=a(8),l=Object(r.createContext)({collectLink:function(){}}),s=a(2178),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,b,p=e.isNavLink,f=e.to,O=e.href,d=e.activeClassName,j=e.isActive,g=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,m=void 0===v||v,h=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(r.useContext)(l),w=f||O,C=Object(i.a)(w),E=null==w?void 0:w.replace("pathname://",""),R=void 0!==E?(a=E,m&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,k=Object(r.useRef)(!1),I=p?o.e:o.c,B=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!B&&C&&window.docusaurus.prefetch(R),function(){B&&b&&b.disconnect()}}),[R,B,C]);var x=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,P=!R||!C||x;return R&&C&&!x&&!g&&N.collectLink(R),P?n.a.createElement("a",Object.assign({href:R},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(I,Object.assign({},h,{onMouseEnter:function(){k.current||(window.docusaurus.preload(R),k.current=!0)},innerRef:function(e){var t,a;B&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(R)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:R||""},p&&{isActive:j,activeClassName:d}))}},2178:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2175);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},296:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(2176)),i=a(2177),c={title:"GeographicalRegion"},l={unversionedId:"evolve/IEC61970/Base/Core/GeographicalRegion",id:"evolve/IEC61970/Base/Core/GeographicalRegion",isDocsHomePage:!1,title:"GeographicalRegion",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Core\\GeographicalRegion.md",slug:"/evolve/IEC61970/Base/Core/GeographicalRegion",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/GeographicalRegion",version:"current",sidebar:"docs",previous:{title:"Substation",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/Substation"},next:{title:"SubGeographicalRegion",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/SubGeographicalRegion"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"A geographical region of a power system network model."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"True"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Core/GeographicalRegion",mdxType:"Link"},"GeographicalRegion")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Core/SubGeographicalRegion",mdxType:"Link"},"SubGeographicalRegion")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Region"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The geographical region which this sub-geographical region is within."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Regions"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All sub-geographical regions within this geographical region.")))))}b.isMDXComponent=!0}}]);