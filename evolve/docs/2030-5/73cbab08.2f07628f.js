(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{260:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(483)),o=a(481),c={title:"Subscription"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Subscription",id:"2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Subscription",isDocsHomePage:!1,title:"Subscription",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Pub-Sub\\Subscription.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Subscription",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Subscription",version:"current",sidebar:"docs",previous:{title:"Condition",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Condition"},next:{title:"SubscriptionList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/SubscriptionList"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Holds the information related to a client subscription to receive updates to a resource automatically.   "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"encoding"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt8",mdxType:"Link"},"UInt8")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0 - application/sep+xml 1 - application/sep-exi 2-255 - reserved")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"level"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/String16",mdxType:"Link"},"String16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'Contains the preferred schema and extensibility level indication such as "+S1"')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"limit"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"This element is used to indicate the maximum number of list items that should be included in a notification when the subscribed resource changes. This limit is meant to be functionally equivalent to the \u2018limit\u2019 query string parameter, but applies to both list resources as well as other resources.  For list resources, if a limit of \u20180\u2019 is specified, then notifications SHALL contain a list resource with results=\u20190\u2019 (equivalent to a simple change notification).  For list resources, if a limit greater than \u20180\u2019 is specified, then notifications SHALL contain a list resource with results equal to the limit specified (or less, should the list contain fewer items than the limit specified or should the server be unable to provide the requested number of items for any reason) and follow the same rules for list resources (e.g., ordering).  For non-list resources, if a limit of \u20180\u2019 is specified, then notifications SHALL NOT contain a resource representation (equivalent to a simple change notification).  For non-list resources, if a limit greater than \u20180\u2019 is specified, then notifications SHALL contain the representation of the changed resource.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"notificationURI"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/XSD/anyURI",mdxType:"Link"},"anyURI")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The resource to which to post the notifications about the requested subscribed resource. Because this URI will exist on a server other than the one being POSTed to, this attribute SHALL be a fully-qualified absolute URI, not a relative reference.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/SubscriptionBase",mdxType:"Link"},"SubscriptionBase"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Subscription",mdxType:"Link"},"Subscription")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Condition",mdxType:"Link"},"Condition")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/SubscriptionList",mdxType:"Link"},"SubscriptionList")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Pub-Sub/Subscription",mdxType:"Link"},"Subscription")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*")))))}b.isMDXComponent=!0},480:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},481:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),o=a(480),c=a(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=a(482),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:p,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(l.b)(),y=Object(r.useContext)(s),g=b||p,v=Object(o.a)(g),S=null==g?void 0:g.replace("pathname://",""),E=void 0!==S?(N=S,O&&(e=>e.startsWith("/"))(N)?h(N):N):void 0;var N;const w=Object(r.useRef)(!1),P=a?i.e:i.c,I=c.a.canUseIntersectionObserver;let L;Object(r.useEffect)((()=>(!I&&v&&window.docusaurus.prefetch(E),()=>{I&&L&&L.disconnect()})),[E,I,v]);const x=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,C=!E||!v||x;return E&&v&&!x&&!m&&y.collectLink(E),C?n.a.createElement("a",Object.assign({href:E},g&&!v&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(P,Object.assign({},j,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(E),w.current=!0)},innerRef:e=>{var t,a;I&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(E)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),a())}))})),L.observe(t))},to:E||""},a&&{isActive:f,activeClassName:d}))}},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var r=a(23),n=a(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,r)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return a?n.a.createElement(f,c({ref:t},l,{components:a})):n.a.createElement(f,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);