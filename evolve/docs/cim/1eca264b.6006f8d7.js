(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{2160:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),O=r,d=p["".concat(c,".").concat(O)]||p[O]||b[O]||o;return a?n.a.createElement(d,i({ref:t},s,{components:a})):n.a.createElement(d,i({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(10),c=a(2160),i=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(2163),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:p,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=e,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:m}=Object(s.b)(),h=Object(r.useContext)(l),v=b||p,y=Object(c.a)(v),N=null==v?void 0:v.replace("pathname://",""),w=void 0!==N?(C=N,j&&(e=>e.startsWith("/"))(C)?m(C):C):void 0;var C;const E=Object(r.useRef)(!1),R=a?o.e:o.c,k=i.a.canUseIntersectionObserver;let I;Object(r.useEffect)((()=>(!k&&y&&window.docusaurus.prefetch(w),()=>{k&&I&&I.disconnect()})),[w,k,y]);const B=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,x=!w||!y||B;return w&&y&&!B&&!f&&h.collectLink(w),x?n.a.createElement("a",Object.assign({href:w},v&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(R,Object.assign({},g,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(w),E.current=!0)},innerRef:e=>{var t,a;k&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(w)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),a())}))})),I.observe(t))},to:w||""},a&&{isActive:d,activeClassName:O}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2160);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},293:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(2161)),c=a(2162),i={title:"GeographicalRegion"},l={unversionedId:"evolve/IEC61970/Base/Core/GeographicalRegion",id:"evolve/IEC61970/Base/Core/GeographicalRegion",isDocsHomePage:!1,title:"GeographicalRegion",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Core\\GeographicalRegion.md",slug:"/evolve/IEC61970/Base/Core/GeographicalRegion",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/GeographicalRegion",version:"current",sidebar:"docs",previous:{title:"Substation",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/Substation"},next:{title:"SubGeographicalRegion",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/SubGeographicalRegion"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"A geographical region of a power system network model."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"True"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Core/GeographicalRegion",mdxType:"Link"},"GeographicalRegion")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Core/SubGeographicalRegion",mdxType:"Link"},"SubGeographicalRegion")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Region"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The geographical region which this sub-geographical region is within."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Regions"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All sub-geographical regions within this geographical region.")))))}b.isMDXComponent=!0}}]);