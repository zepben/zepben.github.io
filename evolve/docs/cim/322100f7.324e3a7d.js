(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{2160:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),O=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),j=O(a),s=r,u=j["".concat(l,".").concat(s)]||j[s]||p[s]||c;return a?n.a.createElement(u,i({ref:t},b,{components:a})):n.a.createElement(u,i({ref:t},b))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=j;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),l=a(2160),i=a(8);const o=Object(r.createContext)({collectLink:()=>{}});var b=a(2163),O=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:j,activeClassName:s,isActive:u,"data-noBrokenLinkCheck":d,autoAddBaseUrl:m=!0}=e,f=O(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:N}=Object(b.b)(),g=Object(r.useContext)(o),y=p||j,v=Object(l.a)(y),h=null==y?void 0:y.replace("pathname://",""),C=void 0!==h?(w=h,m&&(e=>e.startsWith("/"))(w)?N(w):w):void 0;var w;const k=Object(r.useRef)(!1),I=a?c.e:c.c,D=i.a.canUseIntersectionObserver;let M;Object(r.useEffect)((()=>(!D&&v&&window.docusaurus.prefetch(C),()=>{D&&M&&M.disconnect()})),[C,D,v]);const T=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,E=!C||!v||T;return C&&v&&!T&&!d&&g.collectLink(C),E?n.a.createElement("a",Object.assign({href:C},y&&!v&&{target:"_blank",rel:"noopener noreferrer"},f)):n.a.createElement(I,Object.assign({},f,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(C),k.current=!0)},innerRef:e=>{var t,a;D&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(C)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),a())}))})),M.observe(t))},to:C||""},a&&{isActive:u,activeClassName:s}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var r=a(23),n=a(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const l=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+l:l}(t,e,a,r)}}function l(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},474:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return O}));var r=a(3),n=a(7),c=(a(0),a(2161)),l=(a(2162),{title:"FuelSource"}),i={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/FuelSource",id:"cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/FuelSource",isDocsHomePage:!1,title:"FuelSource",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MktDomain\\FuelSource.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/FuelSource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/FuelSource",version:"current",sidebar:"docs",previous:{title:"FlowDirectionType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/FlowDirectionType"},next:{title:"InterTieDirection",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/InterTieDirection"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:o};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"For example:"),Object(c.a)("p",null,"Bio Gas (Landfill, Sewage, Digester, etc.)"),Object(c.a)("p",null,"Biomass"),Object(c.a)("p",null,"Coal"),Object(c.a)("p",null,"DIST"),Object(c.a)("p",null,"Natural Gas"),Object(c.a)("p",null,"Geothermal"),Object(c.a)("p",null,"HRCV"),Object(c.a)("p",null,"None"),Object(c.a)("p",null,"Nuclear"),Object(c.a)("p",null,"Oil"),Object(c.a)("p",null,"Other"),Object(c.a)("p",null,"Solar"),Object(c.a)("p",null,"Waste to Energy"),Object(c.a)("p",null,"Water"),Object(c.a)("p",null,"Wind"),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"NG"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Natural Gas")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"NNG"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Non-Natural Gas")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BGAS"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Bio Gas (Landfill, Sewage, Digester, etc.)")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BIOM"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Biomass")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"COAL"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Coal")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DIST"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GAS"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GEOT"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GeoThermal")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HRCV"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"NONE"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"NUCL"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Nuclear")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OIL"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OTHR"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Other")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SOLR"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Solar")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WAST"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Waste to Energy")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WATR"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Water")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WIND"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Wind")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}O.isMDXComponent=!0}}]);