(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{2207:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),O=r,d=p["".concat(i,".").concat(O)]||p[O]||u[O]||c;return a?n.a.createElement(d,o({ref:t},s,{components:a})):n.a.createElement(d,o({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2207),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(2210),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:u,href:p,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=e,m=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(s.b)(),g=Object(r.useContext)(l),h=u||p,C=Object(i.a)(h),N=null==h?void 0:h.replace("pathname://",""),y=void 0!==N?(I=N,j&&(e=>e.startsWith("/"))(I)?v(I):I):void 0;var I;const E=Object(r.useRef)(!1),w=a?c.e:c.c,k=o.a.canUseIntersectionObserver;let L;Object(r.useEffect)((()=>(!k&&C&&window.docusaurus.prefetch(y),()=>{k&&L&&L.disconnect()})),[y,k,C]);const T=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,x=!y||!C||T;return y&&C&&!T&&!f&&g.collectLink(y),x?n.a.createElement("a",Object.assign({href:y},h&&!C&&{target:"_blank",rel:"noopener noreferrer"},m)):n.a.createElement(w,Object.assign({},m,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(y),E.current=!0)},innerRef:e=>{var t,a;k&&e&&C&&(t=e,a=()=>{window.docusaurus.prefetch(y)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),a())}))})),L.observe(t))},to:y||""},a&&{isActive:d,activeClassName:O}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2207);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,r)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},236:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),c=(a(0),a(2208)),i=a(2209),o={title:"Circuit",hide_table_of_contents:!0},l={unversionedId:"evolve/IEC61970/InfIEC61970/Feeder/Circuit",id:"evolve/IEC61970/InfIEC61970/Feeder/Circuit",isDocsHomePage:!1,title:"Circuit",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\InfIEC61970\\Feeder\\Circuit.mdx",slug:"/evolve/IEC61970/InfIEC61970/Feeder/Circuit",permalink:"/evolve/docs/cim/evolve/IEC61970/InfIEC61970/Feeder/Circuit",version:"current",sidebar:"docs",previous:{title:"Loop",permalink:"/evolve/docs/cim/evolve/IEC61970/InfIEC61970/Feeder/Loop"},next:{title:"LvFeeder",permalink:"/evolve/docs/cim/evolve/IEC61970/InfIEC61970/Feeder/LvFeeder"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/evolve/IEC61970/Base/Wires/Line",mdxType:"Link"},"Line"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/InfIEC61970/Feeder/Circuit",mdxType:"Link"},"Circuit")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/InfIEC61970/Feeder/Loop",mdxType:"Link"},"Loop")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"circuits"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Sub-transmission circuits that form part of this loop."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"loop"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The loop containing this circuit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/InfIEC61970/Feeder/Circuit",mdxType:"Link"},"Circuit")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Circuit"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EndTerminal"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/InfIEC61970/Feeder/Circuit",mdxType:"Link"},"Circuit")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/Base/Core/Substation",mdxType:"Link"},"Substation")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"circuits"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Simplification of the CIM association via Bay to Substation"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"endSubstations"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Simplification of the CIM association via Bay to Circuit")))))}u.isMDXComponent=!0}}]);