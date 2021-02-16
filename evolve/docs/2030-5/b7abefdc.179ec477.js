(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{373:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(483)),o=a(481),c={title:"DefaultDERControl"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/DER/DefaultDERControl",id:"2030-5/SmartGrid/IEEE2030-5/DER/DefaultDERControl",isDocsHomePage:!1,title:"DefaultDERControl",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\DER\\DefaultDERControl.md",slug:"/2030-5/SmartGrid/IEEE2030-5/DER/DefaultDERControl",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DefaultDERControl",version:"current",sidebar:"docs",previous:{title:"DERControlBase",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERControlBase"},next:{title:"CurrentDERProgramLink",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/CurrentDERProgramLink"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Contains control mode information to be used if no active DERControl is found.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setGradW"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set default rate of change (ramp rate) of active power output due to command or internal action, defined in %setWMax / second.  Resolution is in hundredths of a percent/second. A value of 0 means there is no limit. Interpreted as a percentage change in output capability limit per second when used as a default ramp rate. When present, this value SHALL update the value of the corresponding setting (DERSettings::setGradW).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setSoftGradW"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set soft-start rate of change (soft-start ramp rate) of active power output due to command or internal action, defined in %setWMax / second.  Resolution is in hundredths of a percent/second. A value of 0 means there is no limit. Interpreted as a percentage change in output capability limit per second when used as a ramp rate. When present, this value SHALL update the value of the corresponding setting (DERSettings::setSoftGradW).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setESHighVolt"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/Int16",mdxType:"Link"},"Int16")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter service voltage high. Specified as an effective percent voltage, defined as (100% * (locally measured voltage - setVRefOfs) / setVRef), in hundredths of a percent. When present, this value SHALL update the value of the corresponding setting (DERSettings::setESHighVolt).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setESLowVolt"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/Int16",mdxType:"Link"},"Int16")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter service voltage low. Specified as an effective percent voltage, defined as (100% * (locally measured voltage - setVRefOfs) / setVRef), in hundredths of a percent. When present, this value SHALL update the value of the corresponding setting (DERSettings::setESLowVolt).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setESHighFreq"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter service frequency high. Specified in hundredths of Hz. When present, this value SHALL update the value of the corresponding setting (DERSettings::setESHighFreq).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setESLowFreq"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter service frequency low. Specified in hundredths of Hz. When present, this value SHALL update the value of the corresponding setting (DERSettings::setESLowFreq).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setESDelay"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter service delay, in hundredths of a second. When present, this value SHALL update the value of the corresponding setting (DERSettings::setESDelay).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setESRandomDelay"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter service randomized delay, in hundredths of a second. When present, this value SHALL update the value of the corresponding setting (DERSettings::setESRandomDelay).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setESRampTms"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter service ramp time, in hundredths of a second. When present, this value SHALL update the value of the corresponding setting (DERSettings::setESRampTms).")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/SubscribableIdentifiedObject",mdxType:"Link"},"SubscribableIdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DefaultDERControl",mdxType:"Link"},"DefaultDERControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERControlBase",mdxType:"Link"},"DERControlBase")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1")))))}p.isMDXComponent=!0},480:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},481:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),o=a(480),c=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(482),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:u,activeClassName:b,isActive:m,"data-noBrokenLinkCheck":f,autoAddBaseUrl:O=!0}=e,j=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:E}=Object(l.b)(),h=Object(n.useContext)(s),g=p||u,v=Object(o.a)(g),y=null==g?void 0:g.replace("pathname://",""),S=void 0!==y?(N=y,O&&(e=>e.startsWith("/"))(N)?E(N):N):void 0;var N;const D=Object(n.useRef)(!1),R=a?i.e:i.c,I=c.a.canUseIntersectionObserver;let C;Object(n.useEffect)((()=>(!I&&v&&window.docusaurus.prefetch(S),()=>{I&&C&&C.disconnect()})),[S,I,v]);const w=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,L=!S||!v||w;return S&&v&&!w&&!f&&h.collectLink(S),L?r.a.createElement("a",Object.assign({href:S},g&&!v&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(R,Object.assign({},j,{onMouseEnter:()=>{D.current||(window.docusaurus.preload(S),D.current=!0)},innerRef:e=>{var t,a;I&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(S)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),a())}))})),C.observe(t))},to:S||""},a&&{isActive:m,activeClassName:b}))}},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,n)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return a?r.a.createElement(m,c({ref:t},l,{components:a})):r.a.createElement(m,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);