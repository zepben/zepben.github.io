(window.webpackJsonp=window.webpackJsonp||[]).push([[620],{2195:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2196:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,O=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return a?r.a.createElement(O,o({ref:t},u,{components:a})):r.a.createElement(O,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2195),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),u=a(2198),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,p,b=e.isNavLink,m=e.to,O=e.href,d=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,h=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(u.b)().withBaseUrl,g=Object(n.useContext)(l),E=m||O,x=Object(c.a)(E),N=null==E?void 0:E.replace("pathname://",""),T=void 0!==N?(a=N,v&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,I=Object(n.useRef)(!1),A=b?i.e:i.c,w=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!w&&x&&window.docusaurus.prefetch(T),function(){w&&p&&p.disconnect()}}),[T,w,x]);var q=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,k=!T||!x||q;return T&&x&&!q&&!j&&g.collectLink(T),k?r.a.createElement("a",Object.assign({href:T},E&&!x&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(A,Object.assign({},h,{onMouseEnter:function(){I.current||(window.docusaurus.preload(T),I.current=!0)},innerRef:function(e){var t,a;w&&e&&x&&(t=e,a=function(){window.docusaurus.prefetch(T)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:T||""},b&&{isActive:f,activeClassName:d}))}},2198:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2195);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,u=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+s:s}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},689:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(2196)),c=a(2197),o={title:"AuxiliaryEquipment",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",id:"cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",isDocsHomePage:!1,title:"AuxiliaryEquipment",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\AuxiliaryEquipment\\AuxiliaryEquipment.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",version:"current",sidebar:"docs",previous:{title:"PotentialTransformer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/PotentialTransformer"},next:{title:"FaultIndicator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"AuxiliaryEquipment describe equipment that is not performing any primary functions but support for the equipment performing the primary function."),Object(i.a)("p",null,"AuxiliaryEquipment is attached to primary equipment via an association with Terminal.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator",mdxType:"Link"},"FaultIndicator")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/Sensor",mdxType:"Link"},"Sensor")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/SurgeArrester",mdxType:"Link"},"SurgeArrester")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/WaveTrap",mdxType:"Link"},"WaveTrap"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",mdxType:"Link"},"AuxiliaryEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AuxiliaryEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The auxiliary equipment connected to the terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Terminal at the equipment where the AuxiliaryEquipment is attached.")))))}p.isMDXComponent=!0}}]);