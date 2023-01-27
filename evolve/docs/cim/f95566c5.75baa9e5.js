(window.webpackJsonp=window.webpackJsonp||[]).push([[2080],{2152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(2208)),c=a(2209),o={title:"PhaseTapChangerLinear",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",id:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",isDocsHomePage:!1,title:"PhaseTapChangerLinear",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\PhaseTapChangerLinear.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",version:"current",sidebar:"docs",previous:{title:"Junction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/Junction"},next:{title:"Conductor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/Conductor"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Describes a tap changer with a linear relation between the tap step and the phase angle difference across the transformer. This is a mathematical model that is an approximation of a real phase tap changer."),Object(i.a)("p",null,"The phase angle is computed as stepPhaseShiftIncrement times the tap position."),Object(i.a)("p",null,"The voltage magnitude of both sides is the same.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stepPhaseShiftIncrement"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phase shift per step position. A positive value indicates a positive angle variation from the Terminal at the  PowerTransformerEnd,  where the TapChanger is located, into the transformer. The actual phase shift increment might be more accurately computed from the symmetrical or asymmetrical models or a tap step table lookup if those are available.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xMax"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'The reactance depends on the tap position according to a "u" shaped curve. The maximum reactance (xMax) appears at the low and high tap positions. Depending on the \u201cu\u201d curve the attribute can be either higher or lower than PowerTransformerEnd.x.')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xMin"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'The reactance depends on the tap position according to a "u" shaped curve. The minimum reactance (xMin) appears at the mid tap position.  PowerTransformerEnd.x shall be consistent with PhaseTapChangerLinear.xMin and PhaseTapChangerNonLinear.xMin. In case of inconsistency, PowerTransformerEnd.x shall be used.')))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",mdxType:"Link"},"PhaseTapChanger"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}u.isMDXComponent=!0},2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,o({ref:t},l,{components:a})):r.a.createElement(m,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2207),o=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(2210),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:u,href:b,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":h,autoAddBaseUrl:f=!0}=e,O=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),g=Object(n.useContext)(s),v=u||b,C=Object(c.a)(v),y=null==v?void 0:v.replace("pathname://",""),T=void 0!==y?(w=y,f&&(e=>e.startsWith("/"))(w)?j(w):w):void 0;var w;const N=Object(n.useRef)(!1),P=a?i.e:i.c,I=o.a.canUseIntersectionObserver;let x;Object(n.useEffect)((()=>(!I&&C&&window.docusaurus.prefetch(T),()=>{I&&x&&x.disconnect()})),[T,I,C]);const E=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,k=!T||!C||E;return T&&C&&!E&&!h&&g.collectLink(T),k?r.a.createElement("a",Object.assign({href:T},v&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):r.a.createElement(P,Object.assign({},O,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(T),N.current=!0)},innerRef:e=>{var t,a;I&&e&&C&&(t=e,a=()=>{window.docusaurus.prefetch(T)},x=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),a())}))})),x.observe(t))},to:T||""},a&&{isActive:m,activeClassName:d}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}}}]);