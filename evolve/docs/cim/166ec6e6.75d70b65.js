(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{2199:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},2200:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return r?a.a.createElement(f,i({ref:t},l,{components:r})):a.a.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2201:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(10),o=r(2199),i=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(2202),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:b,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:v=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:m}=Object(l.b)(),h=Object(n.useContext)(s),y=p||b,w=Object(o.a)(y),g=null==y?void 0:y.replace("pathname://",""),C=void 0!==g?(k=g,v&&(e=>e.startsWith("/"))(k)?m(k):k):void 0;var k;const E=Object(n.useRef)(!1),P=r?c.e:c.c,B=i.a.canUseIntersectionObserver;let N;Object(n.useEffect)((()=>(!B&&w&&window.docusaurus.prefetch(C),()=>{B&&N&&N.disconnect()})),[C,B,w]);const I=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,x=!C||!w||I;return C&&w&&!I&&!O&&h.collectLink(C),x?a.a.createElement("a",Object.assign({href:C},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(P,Object.assign({},j,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(C),E.current=!0)},innerRef:e=>{var t,r;B&&e&&w&&(t=e,r=()=>{window.docusaurus.prefetch(C)},N=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),r())}))})),N.observe(t))},to:C||""},r&&{isActive:f,activeClassName:d}))}},2202:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(23),a=r(2199);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},262:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(2200)),o=r(2201),i={title:"ProtectedSwitch",hide_table_of_contents:!0},s={unversionedId:"evolve/IEC61970/Base/Wires/ProtectedSwitch",id:"evolve/IEC61970/Base/Wires/ProtectedSwitch",isDocsHomePage:!1,title:"ProtectedSwitch",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Wires\\ProtectedSwitch.mdx",slug:"/evolve/IEC61970/Base/Wires/ProtectedSwitch",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/ProtectedSwitch",version:"current",sidebar:"docs",previous:{title:"Breaker",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/Breaker"},next:{title:"Connector",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/Connector"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A ProtectedSwitch is a switching device that can be operated by ProtectionEquipment.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/evolve/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/evolve/IEC61970/Base/Wires/Breaker",mdxType:"Link"},"Breaker")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/evolve/IEC61970/Base/Wires/LoadBreakSwitch",mdxType:"Link"},"LoadBreakSwitch"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}p.isMDXComponent=!0}}]);