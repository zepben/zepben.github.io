(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{2160:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2161:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2162:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),c=n(2160),i=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(2163),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:b,href:p,activeClassName:f,isActive:d,"data-noBrokenLinkCheck":O,autoAddBaseUrl:j=!0}=e,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:m}=Object(l.b)(),h=Object(r.useContext)(s),y=b||p,g=Object(c.a)(y),I=null==y?void 0:y.replace("pathname://",""),w=void 0!==I?(C=I,j&&(e=>e.startsWith("/"))(C)?m(C):C):void 0;var C;const N=Object(r.useRef)(!1),E=n?o.e:o.c,k=i.a.canUseIntersectionObserver;let A;Object(r.useEffect)((()=>(!k&&g&&window.docusaurus.prefetch(w),()=>{k&&A&&A.disconnect()})),[w,k,g]);const x=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,W=!w||!g||x;return w&&g&&!x&&!O&&h.collectLink(w),W?a.a.createElement("a",Object.assign({href:w},y&&!g&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(E,Object.assign({},v,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(w),N.current=!0)},innerRef:e=>{var t,n;k&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(w)},A=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),n())}))})),A.observe(t))},to:w||""},n&&{isActive:d,activeClassName:f}))}},2163:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(23),a=n(2160);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},360:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(2161)),c=n(2162),i={title:"WireInfo"},s={unversionedId:"evolve/IEC61968/AssetInfo/WireInfo",id:"evolve/IEC61968/AssetInfo/WireInfo",isDocsHomePage:!1,title:"WireInfo",description:"Class Description",source:"@site/docs\\evolve\\IEC61968\\AssetInfo\\WireInfo.md",slug:"/evolve/IEC61968/AssetInfo/WireInfo",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/WireInfo",version:"current",sidebar:"docs",previous:{title:"CableInfo",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/CableInfo"},next:{title:"OverheadWireInfo",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/OverheadWireInfo"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Wire data that can be specified per line segment phase, or for the line segment as a whole in case its phases all have the same wire characteristics."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedCurrent"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Current carrying capacity of the wire under stated thermal conditions.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"material"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61968/AssetInfo/WireMaterialKind",mdxType:"Link"},"WireMaterialKind")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Conductor material.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61968/AssetInfo/CableInfo",mdxType:"Link"},"CableInfo")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61968/AssetInfo/OverheadWireInfo",mdxType:"Link"},"OverheadWireInfo"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}b.isMDXComponent=!0}}]);