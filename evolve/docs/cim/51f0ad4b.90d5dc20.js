(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{2170:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2171:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,O=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(O,i({ref:t},s,{components:a})):r.a.createElement(O,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a(2170),i=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2173),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,p,d=e.isNavLink,u=e.to,O=e.href,j=e.activeClassName,f=e.isActive,m=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,g=void 0===C||C,N=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,v=Object(n.useContext)(l),y=u||O,T=Object(c.a)(y),D=null==y?void 0:y.replace("pathname://",""),w=void 0!==D?(a=D,g&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,I=Object(n.useRef)(!1),E=d?o.e:o.c,k=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&T&&window.docusaurus.prefetch(w),function(){k&&p&&p.disconnect()}}),[w,k,T]);var B=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,x=!w||!T||B;return w&&T&&!B&&!m&&v.collectLink(w),x?r.a.createElement("a",Object.assign({href:w},y&&!T&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(E,Object.assign({},N,{onMouseEnter:function(){I.current||(window.docusaurus.preload(w),I.current=!0)},innerRef:function(e){var t,a;k&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(w)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:w||""},d&&{isActive:f,activeClassName:j}))}},2173:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2170);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(o,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},763:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(2171)),c=a(2172),i={title:"DCTopologicalNode"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode",id:"cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode",isDocsHomePage:!1,title:"DCTopologicalNode",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\DC\\DCTopologicalNode.md",slug:"/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode",version:"current",sidebar:"docs",previous:{title:"DCTerminal",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCTerminal"},next:{title:"DCPolarityKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCPolarityKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"DC bus.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCEquipmentContainer",mdxType:"Link"},"DCEquipmentContainer")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode",mdxType:"Link"},"DCTopologicalNode")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCEquipmentContainer"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The connectivity node container to which the topological node belongs."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCTopologicalNode"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The topological nodes which belong to this connectivity node container.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCNode",mdxType:"Link"},"DCNode")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode",mdxType:"Link"},"DCTopologicalNode")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCNodes"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The DC connectivity nodes combined together to form this DC topological node.  May depend on the current state of switches in the network."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCTopologicalNode"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The DC topological node to which this DC connectivity node is assigned.  May depend on the current state of switches in the network.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCBaseTerminal",mdxType:"Link"},"DCBaseTerminal")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode",mdxType:"Link"},"DCTopologicalNode")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCTerminals"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"See association end TopologicalNode.Terminal."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCTopologicalNode"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"See association end Terminal.TopologicalNode.")))))}p.isMDXComponent=!0}}]);