(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,O=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(O,i({ref:t},l,{components:a})):r.a.createElement(O,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a(2207),i=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(2210),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:d,activeClassName:u,isActive:O,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=e,m=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),g=Object(n.useContext)(s),N=p||d,h=Object(c.a)(N),y=null==N?void 0:N.replace("pathname://",""),T=void 0!==y?(w=y,j&&(e=>e.startsWith("/"))(w)?v(w):w):void 0;var w;const C=Object(n.useRef)(!1),E=a?o.e:o.c,I=i.a.canUseIntersectionObserver;let x;Object(n.useEffect)((()=>(!I&&h&&window.docusaurus.prefetch(T),()=>{I&&x&&x.disconnect()})),[T,I,h]);const L=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,A=!T||!h||L;return T&&h&&!L&&!f&&g.collectLink(T),A?r.a.createElement("a",Object.assign({href:T},N&&!h&&{target:"_blank",rel:"noopener noreferrer"},m)):r.a.createElement(E,Object.assign({},m,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(T),C.current=!0)},innerRef:e=>{var t,a;I&&e&&h&&(t=e,a=()=>{window.docusaurus.prefetch(T)},x=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),a())}))})),x.observe(t))},to:T||""},a&&{isActive:O,activeClassName:u}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2207);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},536:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(2208)),c=a(2209),i={title:"NoLoadTest",hide_table_of_contents:!0},s={unversionedId:"evolve/IEC61968/AssetInfo/NoLoadTest",id:"evolve/IEC61968/AssetInfo/NoLoadTest",isDocsHomePage:!1,title:"NoLoadTest",description:"Class Description",source:"@site/docs\\evolve\\IEC61968\\AssetInfo\\NoLoadTest.mdx",slug:"/evolve/IEC61968/AssetInfo/NoLoadTest",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/NoLoadTest",version:"current",sidebar:"docs",previous:{title:"TransformerTest",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/TransformerTest"},next:{title:"ShortCircuitTest",permalink:"/evolve/docs/cim/evolve/IEC61968/AssetInfo/ShortCircuitTest"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"No-load test results determine core admittance parameters. They include exciting current and core loss measurements from applying voltage to one winding. The excitation may be positive sequence or zero sequence. The test may be repeated at different voltages to measure saturation.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"excitingCurrent"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciting current measured from a positive-sequence or single-phase excitation test.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"excitingCurrentZero"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciting current measured from a zero-sequence open-circuit excitation test.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"loss"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Losses measured from a positive-sequence or single-phase excitation test.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lossZero"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Losses measured from a zero-sequence excitation test.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"energisedEndVoltage"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage applied to the winding (end) during test.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61968/AssetInfo/TransformerTest",mdxType:"Link"},"TransformerTest"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"True"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61968/AssetInfo/NoLoadTest",mdxType:"Link"},"NoLoadTest")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnergisedEndNoLoadTests"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All no-load test measurements in which this transformer end was energised."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnergisedEnd"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transformer end that current is applied to in this no-load test.")))))}p.isMDXComponent=!0}}]);