(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{480:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},481:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(480),o=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var d=a(482),l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:p,activeClassName:O,isActive:m,"data-noBrokenLinkCheck":j,autoAddBaseUrl:u=!0}=e,f=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:E}=Object(d.b)(),v=Object(n.useContext)(s),g=b||p,y=Object(c.a)(g),N=null==g?void 0:g.replace("pathname://",""),h=void 0!==N?(D=N,u&&(e=>e.startsWith("/"))(D)?E(D):D):void 0;var D;const k=Object(n.useRef)(!1),L=a?i.e:i.c,w=o.a.canUseIntersectionObserver;let S;Object(n.useEffect)((()=>(!w&&y&&window.docusaurus.prefetch(h),()=>{w&&S&&S.disconnect()})),[h,w,y]);const T=null!==(t=null==h?void 0:h.startsWith("#"))&&void 0!==t&&t,I=!h||!y||T;return h&&y&&!T&&!j&&v.collectLink(h),I?r.a.createElement("a",Object.assign({href:h},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(L,Object.assign({},f,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(h),k.current=!0)},innerRef:e=>{var t,a;w&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(h)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),a())}))})),S.observe(t))},to:h||""},a&&{isActive:m,activeClassName:O}))}},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),O=n,m=p["".concat(c,".").concat(O)]||p[O]||b[O]||i;return a?r.a.createElement(m,o({ref:t},d,{components:a})):r.a.createElement(m,o({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var d=2;d<i;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(483)),c=a(481),o={title:"EndDevice"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",id:"2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",isDocsHomePage:!1,title:"EndDevice",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\EndDevice\\EndDevice.md",slug:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",version:"current",sidebar:"docs",previous:{title:"DeviceStatus",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/EndDevice/DeviceStatus"},next:{title:"EndDeviceList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDeviceList"}},d=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Asset container that performs one or more end device functions. Contains information about individual devices in the network.   "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"changedTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeType",mdxType:"Link"},"TimeType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The time at which this resource was last modified or created.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"enabled"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/XSD/boolean",mdxType:"Link"},"boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"This attribute indicates whether or not an EndDevice is enabled, or registered, on the server. If a server sets this attribute to false, the device is no longer registered. It should be noted that servers can delete EndDevice instances, but using this attribute for some time is more convenient for clients.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"postRate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"POST rate, or how often EndDevice and subordinate resources should be POSTed, in seconds. A client MAY indicate a preferred postRate when POSTing EndDevice. A server MAY add or modify postRate to indicate its preferred posting rate.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/AbstractDevice",mdxType:"Link"},"AbstractDevice"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Links/FlowReservationRequestListLink",mdxType:"Link"},"FlowReservationRequestListLink")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Links/FlowReservationResponseListLink",mdxType:"Link"},"FlowReservationResponseListLink")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Links/FunctionSetAssignmentsListLink",mdxType:"Link"},"FunctionSetAssignmentsListLink")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Links/RegistrationLink",mdxType:"Link"},"RegistrationLink")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Links/SubscriptionListLink",mdxType:"Link"},"SubscriptionListLink")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDeviceList",mdxType:"Link"},"EndDeviceList")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/Other/NotUsed/SubscribedResource",mdxType:"Link"},"SubscribedResource")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/EndDevice/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1")))))}b.isMDXComponent=!0}}]);