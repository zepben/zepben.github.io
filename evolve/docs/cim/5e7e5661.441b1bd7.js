(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{2170:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function c(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return c}))},2171:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(0),c=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var o=c.a.createContext({}),u=function(t){var e=c.a.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i({},e,{},t)),a},O={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},s=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,r=t.parentName,o=b(t,["components","mdxType","originalType","parentName"]),s=u(a),j=n,m=s["".concat(r,".").concat(j)]||s[j]||O[j]||l;return a?c.a.createElement(m,i({ref:e},o,{components:a})):c.a.createElement(m,i({ref:e},o))}));function j(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=s;var i={};for(var b in e)hasOwnProperty.call(e,b)&&(i[b]=e[b]);i.originalType=t,i.mdxType="string"==typeof t?t:n,r[1]=i;for(var o=2;o<l;o++)r[o]=a[o];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2172:function(t,e,a){"use strict";var n=a(0),c=a.n(n),l=a(10),r=a(2170),i=a(8),b=Object(n.createContext)({collectLink:function(){}}),o=a(2173),u=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};e.a=function(t){var e,a,O,s=t.isNavLink,j=t.to,m=t.href,d=t.activeClassName,p=t.isActive,f=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,y=void 0===g||g,E=u(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(o.b)().withBaseUrl,v=Object(n.useContext)(b),N=j||m,I=Object(r.a)(N),T=null==N?void 0:N.replace("pathname://",""),h=void 0!==T?(a=T,y&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,x=Object(n.useRef)(!1),D=s?l.e:l.c,M=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!M&&I&&window.docusaurus.prefetch(h),function(){M&&O&&O.disconnect()}}),[h,M,I]);var k=null!==(e=null==h?void 0:h.startsWith("#"))&&void 0!==e&&e,P=!h||!I||k;return h&&I&&!k&&!f&&v.collectLink(h),P?c.a.createElement("a",Object.assign({href:h},N&&!I&&{target:"_blank",rel:"noopener noreferrer"},E)):c.a.createElement(D,Object.assign({},E,{onMouseEnter:function(){x.current||(window.docusaurus.preload(h),x.current=!0)},innerRef:function(t){var e,a;M&&t&&I&&(e=t,a=function(){window.docusaurus.prefetch(h)},(O=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(O.unobserve(e),O.disconnect(),a())}))}))).observe(e))},to:h||""},s&&{isActive:p,activeClassName:d}))}},2173:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return r}));var n=a(23),c=a(2170);function l(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var l=void 0===n?{}:n,r=l.forcePrependBaseUrl,i=void 0!==r&&r,b=l.absolute,o=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(i)return e+a;var u=a.startsWith(e)?a:e+a.replace(/^\//,"");return o?t+u:u}(l,a,t,e)}}}function r(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},863:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return o})),a.d(e,"default",(function(){return O}));var n=a(3),c=a(7),l=(a(0),a(2171)),r=a(2172),i={title:"ExcIEEEAC8B"},b={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",isDocsHomePage:!1,title:"ExcIEEEAC8B",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcIEEEAC8B.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",version:"current",sidebar:"docs",previous:{title:"ExcIEEEAC7B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B"},next:{title:"ExcIEEEDC1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEDC1A"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:o};function O(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(l.a)("wrapper",Object(n.a)({},u,a,{components:e,mdxType:"MDXLayout"}),Object(l.a)("h3",{id:"class-description"},"Class Description"),Object(l.a)("p",null,"IEEE 421.5-2005 type AC8B model. This model represents a PID voltage regulator with either a brushless exciter or DC exciter. The AVR in this model consists of PID control, with separate constants for the proportional (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"PR")),"), integral (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"IR")),"), and derivative (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"DR")),") gains. The representation of the brushless exciter (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),", ",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),", ",Object(l.a)("i",null,"S"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),", ",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"C")),", ",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"D")),") is similar to the model type AC2A. The type AC8B model can be used to represent static voltage regulators applied to brushless excitation systems. Digitally based voltage regulators feeding DC rotating main exciters can be represented with the AC type AC8B model with the parameters ",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"C"))," and ",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"D"))," set to 0.  For thyristor power stages fed from the generator terminals, the limits ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMAX"))," and ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMIN")),Object(l.a)("i",null," "),"should be a function of terminal voltage: V",Object(l.a)("i",null,Object(l.a)("sub",null,"T"))," x ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMAX")),Object(l.a)("sub",null," "),"and ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"T"))," x ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMIN")),"."),Object(l.a)("p",null,"Reference: IEEE 421.5-2005, 6.8.   "),Object(l.a)("h3",{id:"attributes"},"Attributes"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"A")),") (",">"," 0).  Typical value = 1.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"C")),") (",">","= 0). Typical value = 0,55.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Demagnetizing factor, a function of exciter alternator reactances (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"D")),") (",">","= 0).  Typical value = 1,1.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kdr"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator derivative gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"DR")),") (",">","= 0).  Typical value = 10.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),").  Typical value = 1.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kir"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator integral gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"IR")),") (",">","= 0).  Typical value = 5.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpr"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator proportional gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"PR")),") (",">"," 0 if ExcIEEEAC8B.kir = 0).  Typical value = 80.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E1")),", back of commutating reactance (",Object(l.a)("i",null,"S"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),Object(l.a)("i",null,"[V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E1")),Object(l.a)("i",null,"]"),") (",">","= 0).  Typical value = 0,3.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E2")),", back of commutating reactance (",Object(l.a)("i",null,"S"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),Object(l.a)("i",null,"[V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E2")),Object(l.a)("i",null,"]"),") (",">","= 0).  Typical value = 3.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"A")),") (",">","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tdr"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"DR")),") (",">"," 0).  Typical value = 0,1.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),") (",">"," 0).  Typical value = 1,2.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E1")),") (",">"," 0).  Typical value = 6,5.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E2")),") (",">"," 0).  Typical value = 9.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vemin"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum exciter voltage output (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"EMIN")),") (","<","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vfemax"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limit reference (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"FEMAX")),").  Typical value = 6.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMAX")),") (",">"," 0).  Typical value = 35.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMIN")),") (","<","= 0).  Typical value = 0.")))),Object(l.a)("h3",{id:"relationships"},"Relationships"),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.a)("h3",{id:"associations"},"Associations"),Object(l.a)("p",null,"None"))}O.isMDXComponent=!0}}]);