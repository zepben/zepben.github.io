(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{2198:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2199:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,O=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(O,o({ref:t},s,{components:a})):r.a.createElement(O,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2198),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2201),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,p=e.isNavLink,u=e.to,O=e.href,m=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,C=void 0===y||y,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,v=Object(n.useContext)(l),N=u||O,I=Object(c.a)(N),T=null==N?void 0:N.replace("pathname://",""),E=void 0!==T?(a=T,C&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,w=Object(n.useRef)(!1),D=p?i.e:i.c,P=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!P&&I&&window.docusaurus.prefetch(E),function(){P&&d&&d.disconnect()}}),[E,P,I]);var W=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,M=!E||!I||W;return E&&I&&!W&&!f&&v.collectLink(E),M?r.a.createElement("a",Object.assign({href:E},N&&!I&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(D,Object.assign({},g,{onMouseEnter:function(){w.current||(window.docusaurus.preload(E),w.current=!0)},innerRef:function(e){var t,a;P&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(E)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:E||""},p&&{isActive:j,activeClassName:m}))}},2201:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2198);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},610:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(2199)),c=a(2200),o={title:"WindContPType4bIEC",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContPType4bIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContPType4bIEC",isDocsHomePage:!1,title:"WindContPType4bIEC",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\WindDynamics\\WindContPType4bIEC.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContPType4bIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContPType4bIEC",version:"current",sidebar:"docs",previous:{title:"WindContPType4aIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContPType4aIEC"},next:{title:"WindContQIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQIEC"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"P control model type 4B."),Object(i.a)("p",null,"Reference: IEC 61400-27-1:2015, 5.6.5.6.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dpmaxp4b"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum wind turbine power ramp rate (",Object(i.a)("i",null,"dp"),Object(i.a)("i",null,Object(i.a)("sub",null,"maxp4B")),"). It is a project-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpaero"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant in aerodynamic power response (",Object(i.a)("i",null,"T"),Object(i.a)("i",null,Object(i.a)("sub",null,"paero")),") (",">","= 0). It is a type-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpordp4b"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant in power order lag (",Object(i.a)("i",null,"T"),Object(i.a)("i",null,Object(i.a)("sub",null,"pordp4B")),") (",">","= 0). It is a type-dependent parameter.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tufiltp4b"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage measurement filter time constant (",Object(i.a)("i",null,"T"),Object(i.a)("i",null,Object(i.a)("sub",null,"ufiltp4B")),") (",">","= 0). It is a type-dependent parameter.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContPType4bIEC",mdxType:"Link"},"WindContPType4bIEC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType4bIEC",mdxType:"Link"},"WindTurbineType4bIEC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindContPType4bIEC"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind control P type 4B model associated with this wind turbine type 4B model."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindTurbineType4bIEC"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind turbine type 4B model with which this wind control P type 4B model is associated.")))))}d.isMDXComponent=!0}}]);