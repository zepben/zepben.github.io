(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{2174:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2175:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,O=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(O,c({ref:t},s,{components:n})):r.a.createElement(O,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2176:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),o=n(2174),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2177),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,b=e.isNavLink,d=e.to,O=e.href,f=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,C=void 0===v||v,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(s.b)().withBaseUrl,h=Object(a.useContext)(l),N=d||O,E=Object(o.a)(N),w=null==N?void 0:N.replace("pathname://",""),k=void 0!==w?(n=w,C&&function(e){return e.startsWith("/")}(n)?g(n):n):void 0,I=Object(a.useRef)(!1),B=b?i.e:i.c,x=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!x&&E&&window.docusaurus.prefetch(k),function(){x&&p&&p.disconnect()}}),[k,x,E]);var L=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,T=!k||!E||L;return k&&E&&!L&&!m&&h.collectLink(k),T?r.a.createElement("a",Object.assign({href:k},N&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(B,Object.assign({},y,{onMouseEnter:function(){I.current||(window.docusaurus.preload(k),I.current=!0)},innerRef:function(e){var t,n;x&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(k)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:k||""},b&&{isActive:j,activeClassName:f}))}},2177:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(2174);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},428:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(2175)),o=n(2176),c={title:"EquipmentContainer"},l={unversionedId:"evolve/IEC61970/Base/Core/EquipmentContainer",id:"evolve/IEC61970/Base/Core/EquipmentContainer",isDocsHomePage:!1,title:"EquipmentContainer",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Core\\EquipmentContainer.md",slug:"/evolve/IEC61970/Base/Core/EquipmentContainer",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/EquipmentContainer",version:"current",sidebar:"docs",previous:{title:"ConnectivityNodeContainer",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/ConnectivityNodeContainer"},next:{title:"Feeder",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/Feeder"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A modelling construct to provide a root class for containing equipment.   "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/ConnectivityNodeContainer",mdxType:"Link"},"ConnectivityNodeContainer"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/Feeder",mdxType:"Link"},"Feeder")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Wires/Line",mdxType:"Link"},"Line")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/Substation",mdxType:"Link"},"Substation"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/EquipmentContainer",mdxType:"Link"},"EquipmentContainer")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EquipmentContainer"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Container of this equipment."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Contained equipment.")))))}p.isMDXComponent=!0}}]);