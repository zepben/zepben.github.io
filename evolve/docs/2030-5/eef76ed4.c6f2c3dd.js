(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{449:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(483)),o=a(481),c={title:"DERCurve"},l={unversionedId:"2030-5/SmartGrid/IEEE2030-5/DER/DERCurve",id:"2030-5/SmartGrid/IEEE2030-5/DER/DERCurve",isDocsHomePage:!1,title:"DERCurve",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\DER\\DERCurve.md",slug:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurve",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERCurve",version:"current",sidebar:"docs",previous:{title:"DERControlType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERControlType"},next:{title:"DERCurveList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERCurveList"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"DER related curves such as Volt-Var mode curves. Relationship between an independent variable (X-axis) and a dependent variable (Y-axis).  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"creationTime"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeType",mdxType:"Link"},"TimeType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The time at which the object was created.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rampPT1Tms"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The configuration parameter for a low-pass filter, PT1 is a time, in hundredths of a second, in which the filter will settle to 95% of a step change in the input value. Resolution is 1/100 sec.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"xMultiplier"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/PowerOfTenMultiplierType",mdxType:"Link"},"PowerOfTenMultiplierType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Exponent for X-axis value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"yMultiplier"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/PowerOfTenMultiplierType",mdxType:"Link"},"PowerOfTenMultiplierType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Exponent for Y-axis value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"yRefType"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERUnitRefType",mdxType:"Link"},"DERUnitRefType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Y-axis units context.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rampDecTms"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Decreasing ramp rate, interpreted as a percentage change in output capability limit per second (e.g. %setMaxW / sec).  Resolution is in hundredths of a percent/second. A value of 0 means there is no limit. If absent, ramp rate defaults to setGradW.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rampIncTms"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Increasing ramp rate, interpreted as a percentage change in output capability limit per second (e.g. %setMaxW / sec).  Resolution is in hundredths of a percent/second. A value of 0 means there is no limit. If absent, ramp rate defaults to rampDecTms.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"curveType"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurveType",mdxType:"Link"},"DERCurveType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Specifies the associated curve-based control mode.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"openLoopTms"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Open loop response time, the time to ramp up to 90% of the new target in response to the change in voltage, in hundredths of a second. Resolution is 1/100 sec. A value of 0 is used to mean no limit. When not present, the device SHOULD follow its default behavior.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vRef"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/PerCent",mdxType:"Link"},"PerCent")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If the curveType is opModVoltVar, then this field MAY be present. If the curveType is not opModVoltVar, then this field SHALL NOT be present. The nominal AC voltage (RMS) adjustment to the voltage curve points for Volt-Var curves.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"autonomousVRefEnable"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/XSD/boolean",mdxType:"Link"},"boolean")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If the curveType is opModVoltVar, then this field MAY be present. If the curveType is not opModVoltVar, then this field SHALL NOT be present. Enable/disable autonomous vRef adjustment. When enabled, the Volt-Var curve characteristic SHALL be adjusted autonomously as vRef changes and autonomousVRefTimeConstant SHALL be present. If a DER is able to support Volt-Var mode but is unable to support autonomous vRef adjustment, then the DER SHALL execute the curve without autonomous vRef adjustment. If not specified, then the value is false.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"autonomousVRefTimeConstant"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If the curveType is opModVoltVar, then this field MAY be present. If the curveType is not opModVoltVar, then this field SHALL NOT be present. Adjustment range for vRef time constant, in hundredths of a second.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurve",mdxType:"Link"},"DERCurve")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/CurveData",mdxType:"Link"},"CurveData")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..10")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurveList",mdxType:"Link"},"DERCurveList")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERCurve",mdxType:"Link"},"DERCurve")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*")))))}b.isMDXComponent=!0},480:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},481:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),o=a(480),c=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(482),p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:d,activeClassName:m,isActive:u,"data-noBrokenLinkCheck":O,autoAddBaseUrl:f=!0}=e,j=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:E}=Object(s.b)(),v=Object(r.useContext)(l),h=b||d,y=Object(o.a)(h),g=null==h?void 0:h.replace("pathname://",""),N=void 0!==g?(T=g,f&&(e=>e.startsWith("/"))(T)?E(T):T):void 0;var T;const R=Object(r.useRef)(!1),D=a?i.e:i.c,C=c.a.canUseIntersectionObserver;let I;Object(r.useEffect)((()=>(!C&&y&&window.docusaurus.prefetch(N),()=>{C&&I&&I.disconnect()})),[N,C,y]);const w=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,x=!N||!y||w;return N&&y&&!w&&!O&&v.collectLink(N),x?n.a.createElement("a",Object.assign({href:N},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(D,Object.assign({},j,{onMouseEnter:()=>{R.current||(window.docusaurus.preload(N),R.current=!0)},innerRef:e=>{var t,a;C&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(N)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),a())}))})),I.observe(t))},to:N||""},a&&{isActive:u,activeClassName:m}))}},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var r=a(23),n=a(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,r)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return a?n.a.createElement(u,c({ref:t},s,{components:a})):n.a.createElement(u,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);