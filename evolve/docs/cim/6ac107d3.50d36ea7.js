(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{2197:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2198:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),O=n,m=b["".concat(c,".").concat(O)]||b[O]||u[O]||i;return a?r.a.createElement(m,o({ref:t},s,{components:a})):r.a.createElement(m,o({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2197),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2200),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,b=e.isNavLink,O=e.to,m=e.href,f=e.activeClassName,d=e.isActive,j=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,v=void 0===h||h,g=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,C=Object(n.useContext)(l),N=O||m,w=Object(c.a)(N),T=null==N?void 0:N.replace("pathname://",""),L=void 0!==T?(a=T,v&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,I=Object(n.useRef)(!1),E=b?i.e:i.c,S=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!S&&w&&window.docusaurus.prefetch(L),function(){S&&u&&u.disconnect()}}),[L,S,w]);var k=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,B=!L||!w||k;return L&&w&&!k&&!j&&C.collectLink(L),B?r.a.createElement("a",Object.assign({href:L},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){I.current||(window.docusaurus.preload(L),I.current=!0)},innerRef:function(e){var t,a;S&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(L)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:L||""},b&&{isActive:d,activeClassName:f}))}},2200:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2197);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+p:p}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},954:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(2198)),c=a(2199),o={title:"OperationalLimitSet",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",id:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",isDocsHomePage:!1,title:"OperationalLimitSet",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\OperationalLimits\\OperationalLimitSet.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",version:"current",sidebar:"docs",previous:{title:"BranchGroupTerminal",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/BranchGroupTerminal"},next:{title:"OperationalLimitType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A set of limits associated with equipment.  Sets of limits might apply to a specific temperature, or season for example. A set of limits may contain different severities of limit levels that would apply to the same equipment. The set may contain limits of different types such as apparent power and current limits or high and low voltage limits  that are logically applied together as a set."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",mdxType:"Link"},"OperationalLimitSet")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalLimitSet"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The operational limit sets associated with this equipment."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment to which the limit set applies.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",mdxType:"Link"},"OperationalLimitSet")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ACDCTerminal",mdxType:"Link"},"ACDCTerminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalLimitSet"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The operational limit sets at the terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminal where the operational limit set apply.")))))}u.isMDXComponent=!0}}]);