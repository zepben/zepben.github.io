(window.webpackJsonp=window.webpackJsonp||[]).push([[2083],{2153:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return o})),a.d(e,"default",(function(){return j}));var n=a(3),c=a(7),r=(a(0),a(2171)),i=a(2172),l={title:"ExcELIN2"},b={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcELIN2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcELIN2",isDocsHomePage:!1,title:"ExcELIN2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcELIN2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcELIN2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcELIN2",version:"current",sidebar:"docs",previous:{title:"ExcELIN1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcELIN1"},next:{title:"ExcHU",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcHU"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:o};function j(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(r.a)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Detailed excitation system ELIN (VATECH).  This model represents an all-static excitation system. A PI voltage controller establishes a desired field current set point for a proportional current controller. The integrator of the PI controller has a follow-up input to match its signal to the present field current.  Power system stabilizer models used in conjunction with this excitation system model: PssELIN2, PssIEEE2B, Pss2B.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efdbas"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.a)("i",null,"Efdbas"),").  Typical value = 0,1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iefmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limiter (",Object(r.a)("i",null,"I"),Object(r.a)("i",null,Object(r.a)("sub",null,"efmax")),") (",">"," ExcELIN2.iefmin).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iefmax2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum open circuit excitation voltage (",Object(r.a)("i",null,"I"),Object(r.a)("i",null,Object(r.a)("sub",null,"efmax2")),").  Typical value = -5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iefmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limiter (",Object(r.a)("i",null,"I"),Object(r.a)("i",null,Object(r.a)("sub",null,"efmin")),") (","<"," ExcELIN2.iefmax).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator input gain (",Object(r.a)("i",null,"K1"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k1ec"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator input limit (",Object(r.a)("i",null,"K1ec"),").  Typical value = 2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.a)("i",null,"K2"),").  Typical value = 5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.a)("i",null,"K3"),").  Typical value = 0,1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.a)("i",null,"K4"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage controller derivative gain (",Object(r.a)("i",null,"Kd1"),").  Typical value = 34,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.a)("i",null,"Ke2"),").  Typical value = 0,1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ketb"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.a)("i",null,"Ketb"),").  Typical value = 0,06.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pid1max"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Controller follow up gain (",Object(r.a)("i",null,"PID1max"),").  Typical value = 2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),", back of commutating reactance (",Object(r.a)("i",null,"Se","[Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),", back of commutating reactance (",Object(r.a)("i",null,"Se","[Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage controller derivative washout time constant (",Object(r.a)("i",null,"Tb1"),") (",">","= 0).  Typical value = 12,45.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.a)("i",null,"Te"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time Constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"e2")),") (",">","= 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ti1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Controller follow up deadband (",Object(r.a)("i",null,"Ti1"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ti3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"i3")),") (",">","= 0).  Typical value = 3.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ti4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"i4")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tr4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"r4")),") (",">","= 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"upmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limiter (",Object(r.a)("i",null,"Upmax"),") (",">"," ExcELIN2.upmin).  Typical value = 3.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"upmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limiter (",Object(r.a)("i",null,"Upmin"),") (","<"," ExcELIN2.upmax).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),") (",">"," 0).  Typical value = 3.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.a)("i",null,"Ve"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),") (",">"," 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xp"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation transformer effective reactance (",Object(r.a)("i",null,"Xp"),").  Typical value = 1.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}j.isMDXComponent=!0},2170:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function c(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return c}))},2171:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(0),c=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var o=c.a.createContext({}),O=function(t){var e=c.a.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},j={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},m=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,o=b(t,["components","mdxType","originalType","parentName"]),m=O(a),s=n,p=m["".concat(i,".").concat(s)]||m[s]||j[s]||r;return a?c.a.createElement(p,l({ref:e},o,{components:a})):c.a.createElement(p,l({ref:e},o))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var b in e)hasOwnProperty.call(e,b)&&(l[b]=e[b]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2172:function(t,e,a){"use strict";var n=a(0),c=a.n(n),r=a(10),i=a(2170),l=a(8),b=Object(n.createContext)({collectLink:function(){}}),o=a(2173),O=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};e.a=function(t){var e,a,j,m=t.isNavLink,s=t.to,p=t.href,d=t.activeClassName,u=t.isActive,f=t["data-noBrokenLinkCheck"],y=t.autoAddBaseUrl,N=void 0===y||y,g=O(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(o.b)().withBaseUrl,v=Object(n.useContext)(b),T=s||p,I=Object(i.a)(T),E=null==T?void 0:T.replace("pathname://",""),x=void 0!==E?(a=E,N&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,h=Object(n.useRef)(!1),P=m?r.e:r.c,D=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!D&&I&&window.docusaurus.prefetch(x),function(){D&&j&&j.disconnect()}}),[x,D,I]);var k=null!==(e=null==x?void 0:x.startsWith("#"))&&void 0!==e&&e,L=!x||!I||k;return x&&I&&!k&&!f&&v.collectLink(x),L?c.a.createElement("a",Object.assign({href:x},T&&!I&&{target:"_blank",rel:"noopener noreferrer"},g)):c.a.createElement(P,Object.assign({},g,{onMouseEnter:function(){h.current||(window.docusaurus.preload(x),h.current=!0)},innerRef:function(t){var e,a;D&&t&&I&&(e=t,a=function(){window.docusaurus.prefetch(x)},(j=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(j.unobserve(e),j.disconnect(),a())}))}))).observe(e))},to:x||""},m&&{isActive:u,activeClassName:d}))}},2173:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var n=a(23),c=a(2170);function r(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var r=void 0===n?{}:n,i=r.forcePrependBaseUrl,l=void 0!==i&&i,b=r.absolute,o=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(l)return e+a;var O=a.startsWith(e)?a:e+a.replace(/^\//,"");return o?t+O:O}(r,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}}}]);