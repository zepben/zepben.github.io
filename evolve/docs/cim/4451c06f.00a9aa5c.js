(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{2181:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,o({ref:t},l,{components:n})):r.a.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),c=n(2181),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2184),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,p=e.isNavLink,d=e.to,f=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,h=void 0===v||v,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,C=Object(a.useContext)(s),N=d||f,k=Object(c.a)(N),w=null==N?void 0:N.replace("pathname://",""),I=void 0!==w?(n=w,h&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,T=Object(a.useRef)(!1),E=p?i.e:i.c,M=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!M&&k&&window.docusaurus.prefetch(I),function(){M&&b&&b.disconnect()}}),[I,M,k]);var L=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,x=!I||!k||L;return I&&k&&!L&&!j&&C.collectLink(I),x?r.a.createElement("a",Object.assign({href:I},N&&!k&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(I),T.current=!0)},innerRef:function(e){var t,n;M&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(I)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:I||""},p&&{isActive:m,activeClassName:O}))}},2184:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2181);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},652:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(2182)),c=n(2183),o={title:"MaintenanceLocation"},s={unversionedId:"cim100/TC57CIM/IEC61968/Work/MaintenanceLocation",id:"cim100/TC57CIM/IEC61968/Work/MaintenanceLocation",isDocsHomePage:!1,title:"MaintenanceLocation",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Work\\MaintenanceLocation.md",slug:"/cim100/TC57CIM/IEC61968/Work/MaintenanceLocation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/MaintenanceLocation",version:"current",sidebar:"docs",previous:{title:"BaseWork",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/BaseWork"},next:{title:"MaintenanceWorkTask",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/MaintenanceWorkTask"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Location where to perform maintenance work.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"block"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(if applicable) Name, identifier, or description of the block in which work is to occur.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"lot"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(if applicable) Name, identifier, or description of the lot in which work is to occur.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"nearestIntersection"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The names of streets at the nearest intersection to work area.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"subdivision"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(if applicable) Name, identifier, or description of the subdivision in which work is to occur.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Work/WorkLocation",mdxType:"Link"},"WorkLocation"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}b.isMDXComponent=!0}}]);