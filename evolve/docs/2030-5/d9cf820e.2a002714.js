(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{429:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(483)),s=n(481),c={title:"TextMessageListLink"},o={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Links/TextMessageListLink",id:"2030-5/SmartGrid/IEEE2030-5/Links/TextMessageListLink",isDocsHomePage:!1,title:"TextMessageListLink",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Links\\TextMessageListLink.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Links/TextMessageListLink",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Links/TextMessageListLink",version:"current",sidebar:"docs",previous:{title:"TariffProfileListLink",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Links/TariffProfileListLink"},next:{title:"TimeLink",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Links/TimeLink"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"SHALL contain a Link to a List of TextMessage instances.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(s.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/ListLink",mdxType:"Link"},"ListLink"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(s.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Messaging/MessagingProgram",mdxType:"Link"},"MessagingProgram")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(s.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Links/TextMessageListLink",mdxType:"Link"},"TextMessageListLink")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1")))))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},481:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),s=n(480),c=n(8);const o=Object(r.createContext)({collectLink:()=>{}});var l=n(482),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":O,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),v=Object(r.useContext)(o),y=p||b,L=Object(s.a)(y),h=null==y?void 0:y.replace("pathname://",""),k=void 0!==h?(E=h,m&&(e=>e.startsWith("/"))(E)?g(E):E):void 0;var E;const w=Object(r.useRef)(!1),x=n?i.e:i.c,T=c.a.canUseIntersectionObserver;let N;Object(r.useEffect)((()=>(!T&&L&&window.docusaurus.prefetch(k),()=>{T&&N&&N.disconnect()})),[k,T,L]);const C=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,P=!k||!L||C;return k&&L&&!C&&!O&&v.collectLink(k),P?a.a.createElement("a",Object.assign({href:k},y&&!L&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(x,Object.assign({},j,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(k),w.current=!0)},innerRef:e=>{var t,n;T&&e&&L&&(t=e,n=()=>{window.docusaurus.prefetch(k)},N=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())}))})),N.observe(t))},to:k||""},n&&{isActive:f,activeClassName:d}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(23),a=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,r)}}function s(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);