(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{2198:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2199:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||c;return n?a.a.createElement(b,i({ref:t},u,{components:n})):a.a.createElement(b,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2200:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(10),o=n(2198),i=n(8),s=Object(r.createContext)({collectLink:function(){}}),u=n(2201),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,b=e.href,O=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,h=void 0===j||j,y=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=Object(u.b)().withBaseUrl,C=Object(r.useContext)(s),g=f||b,I=Object(o.a)(g),E=null==g?void 0:g.replace("pathname://",""),N=void 0!==E?(n=E,h&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,k=Object(r.useRef)(!1),D=p?c.e:c.c,B=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!B&&I&&window.docusaurus.prefetch(N),function(){B&&d&&d.disconnect()}}),[N,B,I]);var P=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,T=!N||!I||P;return N&&I&&!P&&!v&&C.collectLink(N),T?a.a.createElement("a",Object.assign({href:N},g&&!I&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(D,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:function(e){var t,n;B&&e&&I&&(t=e,n=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:N||""},p&&{isActive:m,activeClassName:O}))}},2201:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(2198);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,o=c.forcePrependBaseUrl,i=void 0!==o&&o,s=c.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},473:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),c=(n(0),n(2199)),o=n(2200),i={title:"GroundDisconnector",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/GroundDisconnector",id:"cim100/TC57CIM/IEC61970/Base/Wires/GroundDisconnector",isDocsHomePage:!1,title:"GroundDisconnector",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\GroundDisconnector.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/GroundDisconnector",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/GroundDisconnector",version:"current",sidebar:"docs",previous:{title:"Breaker",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/Breaker"},next:{title:"SwitchSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SwitchSchedule"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A manually operated or motor operated mechanical switching device used for isolating a circuit or equipment from ground.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}d.isMDXComponent=!0}}]);