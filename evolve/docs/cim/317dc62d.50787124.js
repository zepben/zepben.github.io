(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{2160:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2161:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(c,".").concat(f)]||b[f]||p[f]||o;return r?a.a.createElement(d,s({ref:t},l,{components:r})):a.a.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2162:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(10),c=r(2160),s=r(8);const i=Object(n.createContext)({collectLink:()=>{}});var l=r(2163),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:b,activeClassName:f,isActive:d,"data-noBrokenLinkCheck":O,autoAddBaseUrl:v=!0}=e,m=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),h=Object(n.useContext)(i),y=p||b,g=Object(c.a)(y),w=null==y?void 0:y.replace("pathname://",""),C=void 0!==w?(E=w,v&&(e=>e.startsWith("/"))(E)?j(E):E):void 0;var E;const A=Object(n.useRef)(!1),N=r?o.e:o.c,I=s.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!I&&g&&window.docusaurus.prefetch(C),()=>{I&&k&&k.disconnect()})),[C,I,g]);const P=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,x=!C||!g||P;return C&&g&&!P&&!O&&h.collectLink(C),x?a.a.createElement("a",Object.assign({href:C},y&&!g&&{target:"_blank",rel:"noopener noreferrer"},m)):a.a.createElement(N,Object.assign({},m,{onMouseEnter:()=>{A.current||(window.docusaurus.preload(C),A.current=!0)},innerRef:e=>{var t,r;I&&e&&g&&(t=e,r=()=>{window.docusaurus.prefetch(C)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),r())}))})),k.observe(t))},to:C||""},r&&{isActive:d,activeClassName:f}))}},2163:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(23),a=r(2160);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},465:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2161)),c=r(2162),s={title:"Structure"},i={unversionedId:"evolve/IEC61968/Assets/Structure",id:"evolve/IEC61968/Assets/Structure",isDocsHomePage:!1,title:"Structure",description:"Class Description",source:"@site/docs\\evolve\\IEC61968\\Assets\\Structure.md",slug:"/evolve/IEC61968/Assets/Structure",permalink:"/evolve/docs/cim/evolve/IEC61968/Assets/Structure",version:"current",sidebar:"docs",previous:{title:"AssetOwner",permalink:"/evolve/docs/cim/evolve/IEC61968/Assets/AssetOwner"},next:{title:"Streetlight",permalink:"/evolve/docs/cim/evolve/IEC61968/Assets/Streetlight"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Construction holding assets such as conductors, transformers, switchgear, etc. Where applicable, number of conductors can be derived from the number of associated wire spacing instances."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61968/Assets/AssetContainer",mdxType:"Link"},"AssetContainer"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61968/InfIEC61968/InfAssets/Pole",mdxType:"Link"},"Pole"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0}}]);