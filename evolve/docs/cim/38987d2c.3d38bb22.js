(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{2207:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2208:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),O=a,d=u["".concat(i,".").concat(O)]||u[O]||p[O]||c;return n?r.a.createElement(d,o({ref:t},s,{components:n})):r.a.createElement(d,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(10),i=n(2207),o=n(8);const l=Object(a.createContext)({collectLink:()=>{}});var s=n(2210),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:u,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:m=!0}=e,j=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(s.b)(),g=Object(a.useContext)(l),h=p||u,y=Object(i.a)(h),N=null==h?void 0:h.replace("pathname://",""),w=void 0!==N?(C=N,m&&(e=>e.startsWith("/"))(C)?v(C):C):void 0;var C;const E=Object(a.useRef)(!1),I=n?c.e:c.c,D=o.a.canUseIntersectionObserver;let k;Object(a.useEffect)((()=>(!D&&y&&window.docusaurus.prefetch(w),()=>{D&&k&&k.disconnect()})),[w,D,y]);const A=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,P=!w||!y||A;return w&&y&&!A&&!f&&g.collectLink(w),P?r.a.createElement("a",Object.assign({href:w},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(I,Object.assign({},j,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(w),E.current=!0)},innerRef:e=>{var t,n;D&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(w)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:w||""},n&&{isActive:d,activeClassName:O}))}},2210:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2207);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},549:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(2208)),i=(n(2209),{title:"GeosphericAnalogKind",hide_table_of_contents:!0}),o={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvDomain/GeosphericAnalogKind",id:"cim100/TC57CIM/IEC62325/Environmental/EnvDomain/GeosphericAnalogKind",isDocsHomePage:!1,title:"GeosphericAnalogKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\EnvDomain\\GeosphericAnalogKind.mdx",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/GeosphericAnalogKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/GeosphericAnalogKind",version:"current",sidebar:"docs",previous:{title:"FScale",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/FScale"},next:{title:"HydrosphericAnalogKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/HydrosphericAnalogKind"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Kinds of analogs (floats) measuring a geospheric condition.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"lightningDensity"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Flash rate in strikes/hour/km",Object(c.a)("sup",null,"2"),".")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"seismicEastWest"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"seismicNorthSouth"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"seismicVertical"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"snowPackDepth"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"temperature"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}b.isMDXComponent=!0}}]);