(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{2197:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2198:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),m=r,p=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?n.a.createElement(p,c({ref:t},s,{components:a})):n.a.createElement(p,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2199:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),o=a(2197),c=a(8),l=Object(r.createContext)({collectLink:function(){}}),s=a(2200),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,u,d=e.isNavLink,m=e.to,p=e.href,O=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,y=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,N=Object(r.useContext)(l),D=m||p,w=Object(o.a)(D),C=null==D?void 0:D.replace("pathname://",""),E=void 0!==C?(a=C,v&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,L=Object(r.useRef)(!1),k=d?i.e:i.c,I=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!I&&w&&window.docusaurus.prefetch(E),function(){I&&u&&u.disconnect()}}),[E,I,w]);var x=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,T=!E||!w||x;return E&&w&&!x&&!j&&N.collectLink(E),T?n.a.createElement("a",Object.assign({href:E},D&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):n.a.createElement(k,Object.assign({},y,{onMouseEnter:function(){L.current||(window.docusaurus.preload(E),L.current=!0)},innerRef:function(e){var t,a;I&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(E)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:E||""},d&&{isActive:f,activeClassName:O}))}},2200:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var r=a(23),n=a(2197);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},935:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(2198)),o=a(2199),c={title:"Diagram",hide_table_of_contents:!0},l={unversionedId:"evolve/IEC61970/Base/DiagramLayout/Diagram",id:"evolve/IEC61970/Base/DiagramLayout/Diagram",isDocsHomePage:!1,title:"Diagram",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\DiagramLayout\\Diagram.mdx",slug:"/evolve/IEC61970/Base/DiagramLayout/Diagram",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram",version:"current",sidebar:"docs",previous:{title:"DiagramObject",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"},next:{title:"DiagramStyle",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramStyle"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The diagram being exchanged. The coordinate system is a standard Cartesian coordinate system and the orientation attribute defines the orientation. The initial view related attributes can be used to specify an initial view with the x,y coordinates of the diagonal points.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"orientation"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/OrientationKind",mdxType:"Link"},"OrientationKind")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Coordinate system orientation of the diagram. A positive orientation gives standard \u201cright-hand\u201d orientation, with negative orientation indicating a \u201cleft-hand\u201d orientation. For 2D diagrams, a positive orientation will result in X values increasing from left to right and Y values increasing from bottom to top. A negative orientation gives the \u201cleft-hand\u201d orientation (favoured by computer graphics displays) with X values increasing from left to right and Y values increasing from top to bottom.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"True"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/DiagramObject",mdxType:"Link"},"DiagramObject")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/Diagram",mdxType:"Link"},"Diagram")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DiagramElements"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A diagram is made up of multiple diagram objects."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Diagram"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A diagram object is part of a diagram.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/DiagramStyle",mdxType:"Link"},"DiagramStyle")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/Diagram",mdxType:"Link"},"Diagram")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DiagramStyle"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A Diagram may have a DiagramStyle."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Diagram"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A DiagramStyle can be used by many Diagrams.")))))}u.isMDXComponent=!0}}]);