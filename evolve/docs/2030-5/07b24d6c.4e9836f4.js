(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{480:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},481:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(10),c=r(480),o=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(482),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:b,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),E=Object(n.useContext)(s),y=p||b,h=Object(c.a)(y),g=null==y?void 0:y.replace("pathname://",""),C=void 0!==g?(D=g,m&&(e=>e.startsWith("/"))(D)?j(D):D):void 0;var D;const w=Object(n.useRef)(!1),R=r?i.e:i.c,N=o.a.canUseIntersectionObserver;let L;Object(n.useEffect)((()=>(!N&&h&&window.docusaurus.prefetch(C),()=>{N&&L&&L.disconnect()})),[C,N,h]);const k=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,I=!C||!h||k;return C&&h&&!k&&!O&&E.collectLink(C),I?a.a.createElement("a",Object.assign({href:C},y&&!h&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(R,Object.assign({},v,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(C),w.current=!0)},innerRef:e=>{var t,r;N&&e&&h&&(t=e,r=()=>{window.docusaurus.prefetch(C)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),r())}))})),L.observe(t))},to:C||""},r&&{isActive:f,activeClassName:d}))}},482:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(23),a=r(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},483:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(f,o({ref:t},l,{components:r})):a.a.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(483)),c=r(481),o={title:"DERCurveList"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/DER/DERCurveList",id:"2030-5/SmartGrid/IEEE2030-5/DER/DERCurveList",isDocsHomePage:!1,title:"DERCurveList",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\DER\\DERCurveList.md",slug:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurveList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERCurveList",version:"current",sidebar:"docs",previous:{title:"DERCurve",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERCurve"},next:{title:"DERCurveType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERCurveType"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A List element to hold DERCurve objects.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/List",mdxType:"Link"},"List"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurveList",mdxType:"Link"},"DERCurveList")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurve",mdxType:"Link"},"DERCurve")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*")))))}p.isMDXComponent=!0}}]);