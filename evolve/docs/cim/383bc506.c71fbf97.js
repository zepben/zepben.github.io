(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{2171:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2172:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||c;return r?a.a.createElement(d,o({ref:t},l,{components:r})):a.a.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2173:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(10),i=r(2171),o=r(8),s=Object(n.createContext)({collectLink:function(){}}),l=r(2174),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,r,p,b=e.isNavLink,f=e.to,d=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,v=void 0===C||C,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(l.b)().withBaseUrl,g=Object(n.useContext)(s),w=f||d,N=Object(i.a)(w),T=null==w?void 0:w.replace("pathname://",""),I=void 0!==T?(r=T,v&&function(e){return e.startsWith("/")}(r)?h(r):r):void 0,E=Object(n.useRef)(!1),k=b?c.e:c.c,x=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&N&&window.docusaurus.prefetch(I),function(){x&&p&&p.disconnect()}}),[I,x,N]);var M=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,P=!I||!N||M;return I&&N&&!M&&!j&&g.collectLink(I),P?a.a.createElement("a",Object.assign({href:I},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(k,Object.assign({},y,{onMouseEnter:function(){E.current||(window.docusaurus.preload(I),E.current=!0)},innerRef:function(e){var t,r;x&&e&&N&&(t=e,r=function(){window.docusaurus.prefetch(I)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),r())}))}))).observe(t))},to:I||""},b&&{isActive:O,activeClassName:m}))}},2174:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=r(23),a=r(2171);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,s=c.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(o)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(c,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},532:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(2172)),i=r(2173),o={title:"CrewType"},s={unversionedId:"cim100/TC57CIM/IEC61968/Common/CrewType",id:"cim100/TC57CIM/IEC61968/Common/CrewType",isDocsHomePage:!1,title:"CrewType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Common\\CrewType.md",slug:"/cim100/TC57CIM/IEC61968/Common/CrewType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/CrewType",version:"current",sidebar:"docs",previous:{title:"CrewMember",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/CrewMember"},next:{title:"Document",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Document"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Custom description of the type of crew. This may be used to determine the type of work the crew can be assigned to. Examples include repair, tree trimming, switching, etc.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/Crew",mdxType:"Link"},"Crew")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/CrewType",mdxType:"Link"},"CrewType")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Crews"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All crews of this type."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CrewType"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of this crew.")))))}p.isMDXComponent=!0}}]);