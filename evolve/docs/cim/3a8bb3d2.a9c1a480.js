(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{2170:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function c(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return c}))},2171:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(0),c=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var b=c.a.createContext({}),O=function(t){var e=c.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},m={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},j=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),j=O(a),d=n,s=j["".concat(i,".").concat(d)]||j[d]||m[d]||r;return a?c.a.createElement(s,l({ref:e},b,{components:a})):c.a.createElement(s,l({ref:e},b))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=j;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var b=2;b<r;b++)i[b]=a[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},2172:function(t,e,a){"use strict";var n=a(0),c=a.n(n),r=a(10),i=a(2170),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2173),O=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};e.a=function(t){var e,a,m,j=t.isNavLink,d=t.to,s=t.href,p=t.activeClassName,u=t.isActive,f=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,y=void 0===g||g,N=O(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(b.b)().withBaseUrl,v=Object(n.useContext)(o),T=d||s,x=Object(i.a)(T),E=null==T?void 0:T.replace("pathname://",""),I=void 0!==E?(a=E,y&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,h=Object(n.useRef)(!1),k=j?r.e:r.c,D=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!D&&x&&window.docusaurus.prefetch(I),function(){D&&m&&m.disconnect()}}),[I,D,x]);var M=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,P=!I||!x||M;return I&&x&&!M&&!f&&v.collectLink(I),P?c.a.createElement("a",Object.assign({href:I},T&&!x&&{target:"_blank",rel:"noopener noreferrer"},N)):c.a.createElement(k,Object.assign({},N,{onMouseEnter:function(){h.current||(window.docusaurus.preload(I),h.current=!0)},innerRef:function(t){var e,a;D&&t&&x&&(e=t,a=function(){window.docusaurus.prefetch(I)},(m=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),a())}))}))).observe(e))},to:I||""},j&&{isActive:u,activeClassName:p}))}},2173:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var n=a(23),c=a(2170);function r(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var r=void 0===n?{}:n,i=r.forcePrependBaseUrl,l=void 0!==i&&i,o=r.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(l)return e+a;var O=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+O:O}(r,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}},551:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return m}));var n=a(3),c=a(7),r=(a(0),a(2171)),i=a(2172),l={title:"ExcAC2A"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC2A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC2A",isDocsHomePage:!1,title:"ExcAC2A",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcAC2A.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC2A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC2A",version:"current",sidebar:"docs",previous:{title:"ExcAC1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC1A"},next:{title:"ExcAC3A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC3A"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:b};function m(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(r.a)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Modified IEEE AC2A alternator-supplied rectifier excitation system with different field current limit.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hvgate"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates if HV gate is active (",Object(r.a)("i",null,"HVgate"),"). true = gate is used false = gate is not used. Typical value = true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(r.a)("i",null,"Ka"),") (",">"," 0).  Typical value = 400.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kb"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Second stage regulator gain (",Object(r.a)("i",null,"Kb"),") (",">"," 0).  Exciter field current controller gain.  Typical value = 25.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kb1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Second stage regulator gain (",Object(r.a)("i",null,"Kb1"),"). It is exciter field current controller gain used as alternative to ",Object(r.a)("i",null,"Kb")," to represent a variant of the ExcAC2A model.  Typical value = 25.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(r.a)("i",null,"Kc"),") (",">","= 0).  Typical value = 0,28.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Demagnetizing factor, a function of exciter alternator reactances (",Object(r.a)("i",null,"Kd"),") (",">","= 0).  Typical value = 0,35.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(r.a)("i",null,"Ke"),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer gains (",Object(r.a)("i",null,"Kf"),") (",">","= 0).  Typical value = 0,03.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kh"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current feedback gain (",Object(r.a)("i",null,"Kh"),") (",">","= 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kl"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limiter gain (",Object(r.a)("i",null,"Kl"),").  Typical value = 10.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kl1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Coefficient to allow different usage of the model (",Object(r.a)("i",null,"Kl1"),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ks"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Coefficient to allow different usage of the model-speed coefficient (",Object(r.a)("i",null,"Ks"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lvgate"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates if LV gate is active (",Object(r.a)("i",null,"LVgate"),"). true = gate is used false = gate is not used. Typical value = true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),", back of commutating reactance (",Object(r.a)("i",null,"Se","[Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 0,037.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),", back of commutating reactance (",Object(r.a)("i",null,"Se","[Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 0,012.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"Ta"),") (",">"," 0).  Typical value = 0,02.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"Tb"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"Tc"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(r.a)("i",null,"Te"),") (",">"," 0).  Typical value = 0,6.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(r.a)("i",null,"Tf"),") (",">"," 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(r.a)("i",null,"Vamax"),") (",">"," 0).  Typical value = 8.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(r.a)("i",null,"Vamin"),") (","<"," 0).  Typical value = -8.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),") (",">"," 0).  Typical value = 4,4.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),") (",">"," 0).  Typical value = 3,3.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vfemax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limit reference (",Object(r.a)("i",null,"Vfemax"),") (",">","= 0).  Typical value = 4,4.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vlr"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum exciter field current (",Object(r.a)("i",null,"Vlr"),") (",">"," 0).  Typical value = 4,4.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator outputs (",Object(r.a)("i",null,"Vrmax"),") (",">"," 0).  Typical value = 105.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator outputs (",Object(r.a)("i",null,"Vrmin"),") (","<"," 0).  Typical value = -95.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}m.isMDXComponent=!0}}]);