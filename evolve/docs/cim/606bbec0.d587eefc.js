(window.webpackJsonp=window.webpackJsonp||[]).push([[812],{2170:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},2171:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return n?r.a.createElement(f,c({ref:t},l,{components:n})):r.a.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2172:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(10),o=n(2170),c=n(8),s=Object(i.createContext)({collectLink:function(){}}),l=n(2173),u=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,m=e.to,f=e.href,b=e.activeClassName,O=e.isActive,h=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,j=void 0===v||v,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),I=Object(l.b)().withBaseUrl,C=Object(i.useContext)(s),g=m||f,w=Object(o.a)(g),E=null==g?void 0:g.replace("pathname://",""),L=void 0!==E?(n=E,j&&function(e){return e.startsWith("/")}(n)?I(n):n):void 0,D=Object(i.useRef)(!1),N=d?a.e:a.c,T=c.a.canUseIntersectionObserver;Object(i.useEffect)((function(){return!T&&w&&window.docusaurus.prefetch(L),function(){T&&p&&p.disconnect()}}),[L,T,w]);var k=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,P=!L||!w||k;return L&&w&&!k&&!h&&C.collectLink(L),P?r.a.createElement("a",Object.assign({href:L},g&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(N,Object.assign({},y,{onMouseEnter:function(){D.current||(window.docusaurus.preload(L),D.current=!0)},innerRef:function(e){var t,n;T&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(L)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:L||""},d&&{isActive:O,activeClassName:b}))}},2173:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var i=n(23),r=n(2170);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},881:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(2171)),o=n(2172),c={title:"SeriesEquipmentDependentLimit"},s={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",isDocsHomePage:!1,title:"SeriesEquipmentDependentLimit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfOperationalLimits\\SeriesEquipmentDependentLimit.md",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",version:"current",sidebar:"docs",previous:{title:"ScheduledVoltageLimitValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledVoltageLimitValue"},next:{title:"TemperatureDependentLimitPoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperatureDependentLimitPoint"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.a)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"Limit based on most restrictive series equipment limit."),Object(a.a)("p",null,"A specification of  of equipment that determines the calculated operational limit values based upon other equipment and their ratings.  The most restrictive limit connected in series within the group is used.   The physical connection based on switch status for example may also impact which elements in the group are considered. Any equipment in the group that are presently connected in series with the equipment of the directly associated operational limit are used.   This provides a means to indicate which potentially series equipment limits are considered for a computed operational limit. The operational limit of the same operational limit type is assumed to be used from the grouped equipment.   It is also possible to make assumptions or calculations regarding how flow might split if the equipment is not simply in series.  "),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency"))),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}p.isMDXComponent=!0}}]);