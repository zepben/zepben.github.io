(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{2199:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2200:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(f,s({ref:t},l,{components:n})):a.a.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2201:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),i=n(2199),s=n(8);const c=Object(r.createContext)({collectLink:()=>{}});var l=n(2202),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:d,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:h=!0}=e,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),v=Object(r.useContext)(c),C=p||b,y=Object(i.a)(C),P=null==C?void 0:C.replace("pathname://",""),g=void 0!==P?(w=P,h&&(e=>e.startsWith("/"))(w)?j(w):w):void 0;var w;const N=Object(r.useRef)(!1),I=n?o.e:o.c,E=s.a.canUseIntersectionObserver;let S;Object(r.useEffect)((()=>(!E&&y&&window.docusaurus.prefetch(g),()=>{E&&S&&S.disconnect()})),[g,E,y]);const k=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,T=!g||!y||k;return g&&y&&!k&&!m&&v.collectLink(g),T?a.a.createElement("a",Object.assign({href:g},C&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(I,Object.assign({},O,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(g),N.current=!0)},innerRef:e=>{var t,n;E&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(g)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))})),S.observe(t))},to:g||""},n&&{isActive:f,activeClassName:d}))}},2202:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(23),a=n(2199);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},805:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2200)),i=n(2201),s={title:"NonlinearShuntCompensatorPhase",hide_table_of_contents:!0},c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",id:"cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",isDocsHomePage:!1,title:"NonlinearShuntCompensatorPhase",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\NonlinearShuntCompensatorPhase.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",version:"current",sidebar:"docs",previous:{title:"LinearShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase"},next:{title:"NonlinearShuntCompensatorPhasePoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhasePoint"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"A per phase non linear shunt compensator has bank or section admittance values that differ. The attributes g and b of the associated NonlinearShuntCompensatorPhasePoint describe the total conductance and admittance of a NonlinearShuntCompensatorPhasePoint at a section number specified by NonlinearShuntCompensatorPhasePoint.sectionNumber.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",mdxType:"Link"},"ShuntCompensatorPhase"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0}}]);