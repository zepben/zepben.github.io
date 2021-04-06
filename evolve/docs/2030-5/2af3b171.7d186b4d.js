(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),i=(a(0),a(483)),c=a(481),o={title:"DERSettings"},l={unversionedId:"2030-5/SmartGrid/IEEE2030-5/DER/DERSettings",id:"2030-5/SmartGrid/IEEE2030-5/DER/DERSettings",isDocsHomePage:!1,title:"DERSettings",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\DER\\DERSettings.md",slug:"/2030-5/SmartGrid/IEEE2030-5/DER/DERSettings",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERSettings",version:"current",sidebar:"docs",previous:{title:"CurveData",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/CurveData"},next:{title:"DERList",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/DER/DERList"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:b};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Distributed energy resource settings  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setGradW"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set default rate of change (ramp rate) of active power output due to command or internal action, defined in %setWMax / second.  Resolution is in hundredths of a percent/second. A value of 0 means there is no limit. Interpreted as a percentage change in output capability limit per second when used as a default ramp rate.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxChargeRateW"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum rate of energy transfer received by the storage device, in Watts. Defaults to rtgMaxChargeRateW.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxDischargeRateW"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum rate of energy transfer delivered by the storage device, in Watts. Defaults to rtgMaxDischargeRateW.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxVA"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ApparentPower",mdxType:"Link"},"ApparentPower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set limit for maximum apparent power capability of the DER (in VA). Defaults to rtgMaxVA.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxVarNeg"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ReactivePower",mdxType:"Link"},"ReactivePower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set limit for maximum reactive power received by the DER (in var). If present, SHALL be a negative value ",">","= rtgMaxVarNeg (default). If absent, defaults to negative setMaxVar.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxVar"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ReactivePower",mdxType:"Link"},"ReactivePower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set limit for maximum reactive power delivered by the DER (in var). SHALL be a positive value ","<","= rtgMaxVar (default).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxW"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ActivePower",mdxType:"Link"},"ActivePower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set limit for maximum active power capability of the DER (in W). Defaults to rtgMaxW.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMinPFOverExcited"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/PowerFactor",mdxType:"Link"},"PowerFactor")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set minimum Power Factor displacement limit of the DER when injecting reactive power (over-excited); SHALL be a positive value between 0.0 (typically ",">"," 0.7) and 1.0.  SHALL be ",">","= rtgMinPFOverExcited (default).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMinPFUnderExcited"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/PowerFactor",mdxType:"Link"},"PowerFactor")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set minimum Power Factor displacement limit of the DER when absorbing reactive power (under-excited); SHALL be a positive value between 0.0 (typically ",">"," 0.7) and 0.9999.  If present, SHALL be ",">","= rtgMinPFUnderExcited (default).  If absent, defaults to setMinPFOverExcited.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setVRef"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/VoltageRMS",mdxType:"Link"},"VoltageRMS")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The nominal AC voltage (RMS) at the utility's point of common coupling.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setVRefOfs"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/VoltageRMS",mdxType:"Link"},"VoltageRMS")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The nominal AC voltage (RMS) offset between the DER's electrical connection point and the utility's point of common coupling.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"updatedTime"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/TimeType",mdxType:"Link"},"TimeType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Specifies the time at which the DER information was last updated.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setSoftGradW"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Set soft-start rate of change (soft-start ramp rate) of active power output due to command or internal action, defined in %setWMax / second.  Resolution is in hundredths of a percent/second. A value of 0 means there is no limit. Interpreted as a percentage change in output capability limit per second when used as a ramp rate.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setESHighVolt"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/Int16",mdxType:"Link"},"Int16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enter service voltage high. Specified as an effective percent voltage, defined as (100% * (locally measured voltage - setVRefOfs) / setVRef), in hundredths of a percent.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setESLowVolt"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/Int16",mdxType:"Link"},"Int16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enter service voltage low. Specified as an effective percent voltage, defined as (100% * (locally measured voltage - setVRefOfs) / setVRef), in hundredths of a percent.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setESHighFreq"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enter service frequency high. Specified in hundredths of Hz.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setESLowFreq"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt16",mdxType:"Link"},"UInt16")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enter service frequency low. Specified in hundredths of Hz.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setESDelay"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enter service delay, in hundredths of a second.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setESRandomDelay"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enter service randomized delay, in hundredths of a second.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxChargeRateVA"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ApparentPower",mdxType:"Link"},"ApparentPower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Apparent power charge maximum. Maximum apparent power the DER can absorb from the grid in Volt-Amperes. May differ from the apparent power maximum (setMaxVA).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxA"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/CurrentRMS",mdxType:"Link"},"CurrentRMS")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AC current maximum. Maximum AC current in RMS Amperes.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"modesEnabled"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/DERControlType",mdxType:"Link"},"DERControlType")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Bitmap indicating the DER Controls enabled on the device. See DERControlType for values. If a control is supported (see DERCapability::modesSupported), but not enabled, the control will not be executed if encountered.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxWh"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/WattHour",mdxType:"Link"},"WattHour")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum energy storage capacity of the DER, in WattHours. Note: this may be different from physical capability.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxDischargeRateVA"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/ApparentPower",mdxType:"Link"},"ApparentPower")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Apparent power discharge maximum. Maximum apparent power the DER can deliver to the grid in Volt-Amperes. May differ from the apparent power maximum (setMaxVA).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxAh"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/AmpereHour",mdxType:"Link"},"AmpereHour")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum usable energy storage capacity of the DER, in AmpHours. Note: this may be different from physical capability.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setESRampTms"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt32",mdxType:"Link"},"UInt32")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Enter service ramp time, in hundredths of a second.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setVNom"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/VoltageRMS",mdxType:"Link"},"VoltageRMS")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AC voltage nominal setting.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMinV"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/VoltageRMS",mdxType:"Link"},"VoltageRMS")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AC voltage minimum setting.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"setMaxV"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/DER/VoltageRMS",mdxType:"Link"},"VoltageRMS")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AC voltage maximum setting.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/Identification/SubscribableResource",mdxType:"Link"},"SubscribableResource"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}d.isMDXComponent=!0},480:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},481:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(480),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var b=a(482),m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:d,href:p,activeClassName:s,isActive:O,"data-noBrokenLinkCheck":j,autoAddBaseUrl:f=!0}=e,u=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(b.b)(),E=Object(r.useContext)(l),y=d||p,N=Object(c.a)(y),v=null==y?void 0:y.replace("pathname://",""),h=void 0!==v?(S=v,f&&(e=>e.startsWith("/"))(S)?g(S):S):void 0;var S;const R=Object(r.useRef)(!1),x=a?i.e:i.c,w=o.a.canUseIntersectionObserver;let D;Object(r.useEffect)((()=>(!w&&N&&window.docusaurus.prefetch(h),()=>{w&&D&&D.disconnect()})),[h,w,N]);const I=null!==(t=null==h?void 0:h.startsWith("#"))&&void 0!==t&&t,T=!h||!N||I;return h&&N&&!I&&!j&&E.collectLink(h),T?n.a.createElement("a",Object.assign({href:h},y&&!N&&{target:"_blank",rel:"noopener noreferrer"},u)):n.a.createElement(x,Object.assign({},u,{onMouseEnter:()=>{R.current||(window.docusaurus.preload(h),R.current=!0)},innerRef:e=>{var t,a;w&&e&&N&&(t=e,a=()=>{window.docusaurus.prefetch(h)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),a())}))})),D.observe(t))},to:h||""},a&&{isActive:O,activeClassName:s}))}},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},483:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),m=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=m(a),s=r,O=p["".concat(c,".").concat(s)]||p[s]||d[s]||i;return a?n.a.createElement(O,o({ref:t},b,{components:a})):n.a.createElement(O,o({ref:t},b))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);