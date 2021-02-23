(window.webpackJsonp=window.webpackJsonp||[]).push([[1627],{1696:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),r=(a(0),a(2175)),o=a(2176),i={title:"ConnectDisconnectFunction"},l={unversionedId:"cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",id:"cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",isDocsHomePage:!1,title:"ConnectDisconnectFunction",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\LoadControl\\ConnectDisconnectFunction.md",slug:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",version:"current",sidebar:"docs",previous:{title:"UsagePointLocation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/UsagePointLocation"},next:{title:"RemoteConnectDisconnectInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"A function that will disconnect and reconnect the customer's load under defined conditions."),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eventCount"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Running cumulative count of connect or disconnect events, for the lifetime of this function or until the value is cleared.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isConnected"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if this function is in the connected state.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isDelayedDiscon"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If set true, the switch may disconnect the service at the end of a specified time delay after the disconnect signal has been given. If set false, the switch may disconnect the service immediately after the disconnect signal has been given. This is typically the case for over current circuit-breakers which are classified as either instantaneous or slow acting.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isLocalAutoDisconOp"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If set true and if disconnection can be operated locally, the operation happens automatically. Otherwise it happens manually.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isLocalAutoReconOp"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If set true and if reconnection can be operated locally, then the operation happens automatically. Otherwise, it happens manually.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isRemoteAutoDisconOp"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If set true and if disconnection can be operated remotely, then the operation happens automatically. If set false and if disconnection can be operated remotely, then the operation happens manually.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isRemoteAutoReconOp"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If set true and if reconnection can be operated remotely, then the operation happens automatically. If set false and if reconnection can be operated remotely, then the operation happens manually.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rcdInfo"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo",mdxType:"Link"},"RemoteConnectDisconnectInfo")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Information on remote connect disconnect switch.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceFunction",mdxType:"Link"},"EndDeviceFunction"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",mdxType:"Link"},"ConnectDisconnectFunction")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConnectDisconnectFunctions"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switches"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0},2174:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,O=d["".concat(o,".").concat(u)]||d[u]||p[u]||r;return a?c.a.createElement(O,i({ref:t},s,{components:a})):c.a.createElement(O,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(10),o=a(2174),i=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2177),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){var t,a,p,d=e.isNavLink,u=e.to,O=e.href,f=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,C=void 0===h||h,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(n.useContext)(l),v=u||O,I=Object(o.a)(v),w=null==v?void 0:v.replace("pathname://",""),T=void 0!==w?(a=w,C&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,D=Object(n.useRef)(!1),E=d?r.e:r.c,L=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!L&&I&&window.docusaurus.prefetch(T),function(){L&&p&&p.disconnect()}}),[T,L,I]);var k=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,B=!T||!I||k;return T&&I&&!k&&!j&&N.collectLink(T),B?c.a.createElement("a",Object.assign({href:T},v&&!I&&{target:"_blank",rel:"noopener noreferrer"},g)):c.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){D.current||(window.docusaurus.preload(T),D.current=!0)},innerRef:function(e){var t,a;L&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(T)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:T||""},d&&{isActive:m,activeClassName:f}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=a(23),c=a(2174);function r(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,o=r.forcePrependBaseUrl,i=void 0!==o&&o,l=r.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(i)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(r,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}}}]);