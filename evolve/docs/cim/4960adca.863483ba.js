(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{2160:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2161:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(b,o({ref:t},l,{components:n})):a.a.createElement(b,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2162:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),c=n(2160),o=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(2163),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:f,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),h=Object(r.useContext)(s),y=p||d,C=Object(c.a)(y),I=null==y?void 0:y.replace("pathname://",""),g=void 0!==I?(w=I,O&&(e=>e.startsWith("/"))(w)?v(w):w):void 0;var w;const L=Object(r.useRef)(!1),E=n?i.e:i.c,N=o.a.canUseIntersectionObserver;let D;Object(r.useEffect)((()=>(!N&&C&&window.docusaurus.prefetch(g),()=>{N&&D&&D.disconnect()})),[g,N,C]);const k=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,P=!g||!C||k;return g&&C&&!k&&!m&&h.collectLink(g),P?a.a.createElement("a",Object.assign({href:g},y&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(E,Object.assign({},j,{onMouseEnter:()=>{L.current||(window.docusaurus.preload(g),L.current=!0)},innerRef:e=>{var t,n;N&&e&&C&&(t=e,n=()=>{window.docusaurus.prefetch(g)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:g||""},n&&{isActive:b,activeClassName:f}))}},2163:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(23),a=n(2160);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},679:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(2161)),c=n(2162),o={title:"ScheduledLimitDependency"},s={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledLimitDependency",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledLimitDependency",isDocsHomePage:!1,title:"ScheduledLimitDependency",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfOperationalLimits\\ScheduledLimitDependency.md",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledLimitDependency",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledLimitDependency",version:"current",sidebar:"docs",previous:{title:"ScheduledCurrentLimitValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledCurrentLimitValue"},next:{title:"ScheduledLimitValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledLimitValue"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0}}]);