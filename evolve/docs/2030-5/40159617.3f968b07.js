(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(483)),i=r(481),c={title:"DERControlType"},l={unversionedId:"2030-5/SmartGrid/IEEE2030-5/DER/DERControlType",id:"2030-5/SmartGrid/IEEE2030-5/DER/DERControlType",isDocsHomePage:!1,title:"DERControlType",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\DER\\DERControlType.md",slug:"/2030-5/SmartGrid/IEEE2030-5/DER/DERControlType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERControlType",version:"current",sidebar:"docs",previous:{title:"DERControlList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERControlList"},next:{title:"DERCurve",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERCurve"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"Control modes supported by the DER.  Bit positions SHALL be defined as follows:"),Object(a.a)("p",null,"0 - Charge mode"),Object(a.a)("p",null,"1 - Discharge mode"),Object(a.a)("p",null,"2 - opModConnect (Connect / Disconnect - implies galvanic isolation)"),Object(a.a)("p",null,"3 - opModEnergize (Energize / De-Energize)"),Object(a.a)("p",null,"4 - opModFixedPFAbsorbW (Fixed Power Factor Setpoint when absorbing active power)"),Object(a.a)("p",null,"5 - opModFixedPFInjectW (Fixed Power Factor Setpoint when injecting active power)"),Object(a.a)("p",null,"6 - opModFixedVar (Reactive Power Setpoint)"),Object(a.a)("p",null,"7 - opModFixedW (Charge / Discharge Setpoint)"),Object(a.a)("p",null,"8 - opModFreqDroop (Frequency-Watt Parameterized Mode)"),Object(a.a)("p",null,"9 - opModFreqWatt (Frequency-Watt Curve Mode)"),Object(a.a)("p",null,"10 - opModHFRTMayTrip (High Frequency Ride Through, May Trip Mode)"),Object(a.a)("p",null,"11 - opModHFRTMustTrip (High Frequency Ride Through, Must Trip Mode)"),Object(a.a)("p",null,"12 - opModHVRTMayTrip (High Voltage Ride Through, May Trip Mode)"),Object(a.a)("p",null,"13 - opModHVRTMomentaryCessation (High Voltage Ride Through, Momentary Cessation Mode)"),Object(a.a)("p",null,"14 - opModHVRTMustTrip (High Voltage Ride Through, Must Trip Mode)"),Object(a.a)("p",null,"15 - opModLFRTMayTrip (Low Frequency Ride Through, May Trip Mode)"),Object(a.a)("p",null,"16 - opModLFRTMustTrip (Low Frequency Ride Through, Must Trip Mode)"),Object(a.a)("p",null,"17 - opModLVRTMayTrip (Low Voltage Ride Through, May Trip Mode)"),Object(a.a)("p",null,"18 - opModLVRTMomentaryCessation (Low Voltage Ride Through, Momentary Cessation Mode)"),Object(a.a)("p",null,"19 - opModLVRTMustTrip (Low Voltage Ride Through, Must Trip Mode)"),Object(a.a)("p",null,"20 - opModMaxLimW (Maximum Active Power)"),Object(a.a)("p",null,"21 - opModTargetVar (Target Reactive Power)"),Object(a.a)("p",null,"22 - opModTargetW (Target Active Power)"),Object(a.a)("p",null,"23 - opModVoltVar (Volt-Var Mode)"),Object(a.a)("p",null,"24 - opModVoltWatt (Volt-Watt Mode)"),Object(a.a)("p",null,"25 - opModWattPF (Watt-PowerFactor Mode)"),Object(a.a)("p",null,"26 - opModWattVar (Watt-Var Mode)"),Object(a.a)("p",null,"All other values reserved.  "),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(i.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/HexBinary32",mdxType:"Link"},"HexBinary32"))),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}p.isMDXComponent=!0},480:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},481:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(10),i=r(480),c=r(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=r(482),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:p,href:d,activeClassName:b,isActive:O,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=e,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(s.b)(),m=Object(n.useContext)(l),v=p||d,M=Object(i.a)(v),g=null==v?void 0:v.replace("pathname://",""),E=void 0!==g?(T=g,j&&(e=>e.startsWith("/"))(T)?h(T):T):void 0;var T;const w=Object(n.useRef)(!1),R=r?a.e:a.c,C=c.a.canUseIntersectionObserver;let D;Object(n.useEffect)((()=>(!C&&M&&window.docusaurus.prefetch(E),()=>{C&&D&&D.disconnect()})),[E,C,M]);const P=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!M||P;return E&&M&&!P&&!f&&m.collectLink(E),x?o.a.createElement("a",Object.assign({href:E},v&&!M&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(R,Object.assign({},y,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(E),w.current=!0)},innerRef:e=>{var t,r;C&&e&&M&&(t=e,r=()=>{window.docusaurus.prefetch(E)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),r())}))})),D.observe(t))},to:E||""},r&&{isActive:O,activeClassName:b}))}},482:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(23),o=r(480);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},483:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,O=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return r?o.a.createElement(O,c({ref:t},s,{components:r})):o.a.createElement(O,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);