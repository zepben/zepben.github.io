(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{2194:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2195:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,O=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?r.a.createElement(O,i({ref:t},s,{components:n})):r.a.createElement(O,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2196:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n(2194),i=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2197),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,p=e.isNavLink,f=e.to,O=e.href,d=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,h=void 0===v||v,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,C=Object(a.useContext)(l),N=f||O,w=Object(c.a)(N),A=null==N?void 0:N.replace("pathname://",""),D=void 0!==A?(n=A,h&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,E=Object(a.useRef)(!1),R=p?o.e:o.c,k=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&w&&window.docusaurus.prefetch(D),function(){k&&b&&b.disconnect()}}),[D,k,w]);var P=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,I=!D||!w||P;return D&&w&&!P&&!j&&C.collectLink(D),I?r.a.createElement("a",Object.assign({href:D},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(R,Object.assign({},g,{onMouseEnter:function(){E.current||(window.docusaurus.preload(D),E.current=!0)},innerRef:function(e){var t,n;k&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(D)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:D||""},p&&{isActive:m,activeClassName:d}))}},2197:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2194);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},898:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(2195)),c=n(2196),i={title:"RemoteControl",hide_table_of_contents:!0},l={unversionedId:"evolve/IEC61970/Base/SCADA/RemoteControl",id:"evolve/IEC61970/Base/SCADA/RemoteControl",isDocsHomePage:!1,title:"RemoteControl",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\SCADA\\RemoteControl.mdx",slug:"/evolve/IEC61970/Base/SCADA/RemoteControl",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/SCADA/RemoteControl",version:"current",sidebar:"docs",previous:{title:"DiagramLayout \ud83d\udd39",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramLayout"},next:{title:"RemotePoint",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/SCADA/RemotePoint"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Remote controls are outputs that are sent by the remote unit to actuators in the process.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/SCADA/RemotePoint",mdxType:"Link"},"RemotePoint"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"True"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/SCADA/RemoteControl",mdxType:"Link"},"RemoteControl")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Meas/Control",mdxType:"Link"},"Control")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"RemoteControl"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The remote point controlling the physical actuator."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Control"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The Control for the RemoteControl point.")))))}b.isMDXComponent=!0}}]);