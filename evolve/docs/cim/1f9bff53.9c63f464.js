(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{2198:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2199:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,d=m["".concat(c,".").concat(p)]||m[p]||b[p]||i;return a?r.a.createElement(d,o({ref:t},l,{components:a})):r.a.createElement(d,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2198),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2201),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,b,m=e.isNavLink,p=e.to,d=e.href,O=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,v=void 0===C||C,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(l.b)().withBaseUrl,y=Object(n.useContext)(s),N=p||d,k=Object(c.a)(N),I=null==N?void 0:N.replace("pathname://",""),w=void 0!==I?(a=I,v&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,T=Object(n.useRef)(!1),A=m?i.e:i.c,E=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&k&&window.docusaurus.prefetch(w),function(){E&&b&&b.disconnect()}}),[w,E,k]);var L=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,P=!w||!k||L;return w&&k&&!L&&!j&&y.collectLink(w),P?r.a.createElement("a",Object.assign({href:w},N&&!k&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(A,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:function(e){var t,a;E&&e&&k&&(t=e,a=function(){window.docusaurus.prefetch(w)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:w||""},m&&{isActive:f,activeClassName:O}))}},2201:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2198);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+u:u}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},357:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(2199)),c=a(2200),o={title:"CommunicationLink",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink",id:"cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink",isDocsHomePage:!1,title:"CommunicationLink",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\SCADA\\CommunicationLink.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink",version:"current",sidebar:"docs",previous:{title:"RemoteControl",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/SCADA/RemoteControl"},next:{title:"RemoteUnit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/SCADA/RemoteUnit"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The connection to remote units is through one or more communication links. Reduntant links may exist. The CommunicationLink class inherits PowerSystemResource. The intention is to allow CommunicationLinks to have Measurements. These Measurements can be used to model link status as operational, out of service, unit failure etc.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/IPAccessPoint",mdxType:"Link"},"IPAccessPoint"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink",mdxType:"Link"},"CommunicationLink")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/SCADA/RemoteUnit",mdxType:"Link"},"RemoteUnit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CommunicationLinks"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RTUs may be attached to communication links."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RemoteUnits"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RTUs may be attached to communication links.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink",mdxType:"Link"},"CommunicationLink")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..n"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor",mdxType:"Link"},"BilateralExchangeActor")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CommunicationLink"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Communication addressing for a Bilateral Table used by a ICCP data provider or consumer."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BilateralExchangeActor"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ICCP data provider or consumer using communication addressing for a Bilateral table.")))))}b.isMDXComponent=!0}}]);