(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||O[m]||r;return a?i.a.createElement(d,o({ref:t},s,{components:a})):i.a.createElement(d,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<r;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(10),c=a(2207),o=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2210),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,{isNavLink:a,to:O,href:b,activeClassName:m,isActive:d,"data-noBrokenLinkCheck":j,autoAddBaseUrl:f=!0}=e,u=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),y=Object(n.useContext)(l),h=O||b,N=Object(c.a)(h),C=null==h?void 0:h.replace("pathname://",""),T=void 0!==C?(L=C,f&&(e=>e.startsWith("/"))(L)?g(L):L):void 0;var L;const v=Object(n.useRef)(!1),I=a?r.e:r.c,w=o.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!w&&N&&window.docusaurus.prefetch(T),()=>{w&&E&&E.disconnect()})),[T,w,N]);const k=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,x=!T||!N||k;return T&&N&&!k&&!j&&y.collectLink(T),x?i.a.createElement("a",Object.assign({href:T},h&&!N&&{target:"_blank",rel:"noopener noreferrer"},u)):i.a.createElement(I,Object.assign({},u,{onMouseEnter:()=>{v.current||(window.docusaurus.preload(T),v.current=!0)},innerRef:e=>{var t,a;w&&e&&N&&(t=e,a=()=>{window.docusaurus.prefetch(T)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:T||""},a&&{isActive:d,activeClassName:m}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(23),i=a(2207);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}},449:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return O}));var n=a(3),i=a(7),r=(a(0),a(2208)),c=a(2209),o={title:"OperationalLimitType",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",id:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",isDocsHomePage:!1,title:"OperationalLimitType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\OperationalLimits\\OperationalLimitType.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",version:"current",sidebar:"docs",previous:{title:"OperationalLimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet"},next:{title:"TopologicalIsland",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:s};function O(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"The operational meaning of a category of limits."),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"acceptableDuration"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The nominal acceptable duration of the limit. Limits are commonly expressed in terms of the time limit for which the limit is normally acceptable. The actual acceptable duration of a specific limit may depend on other local factors such as temperature or wind speed. The attribute has meaning only if the flag isInfiniteDuration is set to false, hence it shall not be exchanged when isInfiniteDuration is set to true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"direction"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitDirectionKind",mdxType:"Link"},"OperationalLimitDirectionKind")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The direction of the limit.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isInfiniteDuration"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines if the operational limit type has infinite duration. If true, the limit has infinite duration. If false, the limit has definite duration which is defined by the attribute acceptableDuration.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",mdxType:"Link"},"OperationalLimit")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",mdxType:"Link"},"OperationalLimitType")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalLimit"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The operational limits associated with this type of limit."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalLimitType"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The limit type associated with this limit.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling",mdxType:"Link"},"OperatonalLimitTypeScaling")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",mdxType:"Link"},"OperationalLimitType")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SourceOperationalLimitTypeScaling"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SourceOperationalLimitType"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/OperatonalLimitTypeScaling",mdxType:"Link"},"OperatonalLimitTypeScaling")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",mdxType:"Link"},"OperationalLimitType")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TargetOperationalLimitmTypeScaling"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TargetOperationalLimit"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);