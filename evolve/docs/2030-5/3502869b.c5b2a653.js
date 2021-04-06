(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(483)),i=a(481),c={title:"DrResponse"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",id:"2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",isDocsHomePage:!1,title:"DrResponse",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Response\\DrResponse.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",version:"current",sidebar:"docs",previous:{title:"AppliedTargetReduction",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Response/AppliedTargetReduction"},next:{title:"PriceResponse",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Response/PriceResponse"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"A response to a Demand Response Load Control (EndDeviceControl) message.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"overrideDuration"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates the amount of time, in seconds, that the client partially opts-out during the demand response event. When overriding within the allowed override duration, the client SHALL send a partial opt-out (Response status code 8) for partial opt-out upon completion, with the total time the event was overridden (this attribute) populated. The client SHALL send a no participation status response (status type 10) if the user partially opts-out for longer than EndDeviceControl.overrideDuration.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Response/Response",mdxType:"Link"},"Response"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",mdxType:"Link"},"DrResponse")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Response/AppliedTargetReduction",mdxType:"Link"},"AppliedTargetReduction")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",mdxType:"Link"},"DrResponse")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DRLC/ApplianceLoadReduction",mdxType:"Link"},"ApplianceLoadReduction")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",mdxType:"Link"},"DrResponse")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DRLC/DutyCycle",mdxType:"Link"},"DutyCycle")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",mdxType:"Link"},"DrResponse")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DRLC/Offset",mdxType:"Link"},"Offset")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Response/DrResponse",mdxType:"Link"},"DrResponse")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DRLC/SetPoint",mdxType:"Link"},"SetPoint")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")))))}d.isMDXComponent=!0},480:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},481:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),i=a(480),c=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(482),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:d,href:b,activeClassName:u,isActive:O,"data-noBrokenLinkCheck":j,autoAddBaseUrl:m=!0}=e,f=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),E=Object(n.useContext)(s),g=d||b,v=Object(i.a)(g),h=null==g?void 0:g.replace("pathname://",""),N=void 0!==h?(R=h,m&&(e=>e.startsWith("/"))(R)?y(R):R):void 0;var R;const D=Object(n.useRef)(!1),w=a?o.e:o.c,S=c.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!S&&v&&window.docusaurus.prefetch(N),()=>{S&&k&&k.disconnect()})),[N,S,v]);const C=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,L=!N||!v||C;return N&&v&&!C&&!j&&E.collectLink(N),L?r.a.createElement("a",Object.assign({href:N},g&&!v&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(w,Object.assign({},f,{onMouseEnter:()=>{D.current||(window.docusaurus.preload(N),D.current=!0)},innerRef:e=>{var t,a;S&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(N)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),a())}))})),k.observe(t))},to:N||""},a&&{isActive:O,activeClassName:u}))}},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(480);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,O=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(O,c({ref:t},l,{components:a})):r.a.createElement(O,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);