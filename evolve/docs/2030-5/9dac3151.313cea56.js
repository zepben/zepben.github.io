(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(483)),c=n(481),o={title:"PrepaymentListLink"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Links/PrepaymentListLink",id:"2030-5/SmartGrid/IEEE2030-5/Links/PrepaymentListLink",isDocsHomePage:!1,title:"PrepaymentListLink",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Links\\PrepaymentListLink.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Links/PrepaymentListLink",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Links/PrepaymentListLink",version:"current",sidebar:"docs",previous:{title:"PrepaymentLink",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Links/PrepaymentLink"},next:{title:"PriceResponseCfgListLink",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Links/PriceResponseCfgListLink"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"SHALL contain a Link to a List of Prepayment instances.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/ListLink",mdxType:"Link"},"ListLink"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/FunctionSetAssignments/FunctionSetAssignmentsBase",mdxType:"Link"},"FunctionSetAssignmentsBase")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Links/PrepaymentListLink",mdxType:"Link"},"PrepaymentListLink")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1")))))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},481:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),c=n(480),o=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(482),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),v=Object(r.useContext)(s),L=p||b,g=Object(c.a)(L),h=null==L?void 0:L.replace("pathname://",""),k=void 0!==h?(E=h,O&&(e=>e.startsWith("/"))(E)?y(E):E):void 0;var E;const w=Object(r.useRef)(!1),P=n?i.e:i.c,N=o.a.canUseIntersectionObserver;let C;Object(r.useEffect)((()=>(!N&&g&&window.docusaurus.prefetch(k),()=>{N&&C&&C.disconnect()})),[k,N,g]);const S=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,I=!k||!g||S;return k&&g&&!S&&!m&&v.collectLink(k),I?a.a.createElement("a",Object.assign({href:k},L&&!g&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(P,Object.assign({},j,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(k),w.current=!0)},innerRef:e=>{var t,n;N&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(k)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:k||""},n&&{isActive:f,activeClassName:d}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(23),a=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(f,o({ref:t},l,{components:n})):a.a.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);