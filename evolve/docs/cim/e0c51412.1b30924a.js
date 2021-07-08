(window.webpackJsonp=window.webpackJsonp||[]).push([[1860],{1929:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return s}));var n=a(3),c=a(7),r=(a(0),a(2195)),i=a(2196),l={title:"ExcIEEEAC3A",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC3A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC3A",isDocsHomePage:!1,title:"ExcIEEEAC3A",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcIEEEAC3A.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC3A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC3A",version:"current",sidebar:"docs",previous:{title:"ExcIEEEAC2A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC2A"},next:{title:"ExcIEEEAC4A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC4A"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:b};function s(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(r.a)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"IEEE 421.5-2005 type AC3A model. The model represents the field-controlled alternator-rectifier excitation systems designated type AC3A. These excitation systems include an alternator main exciter with non-controlled rectifiers. The exciter employs self-excitation, and the voltage regulator power is derived from the exciter output voltage.  Therefore, this system has an additional nonlinearity, simulated by the use of a multiplier whose inputs are the voltage regulator command signal, ",Object(r.a)("i",null,"Va"),", and the exciter output voltage, ",Object(r.a)("i",null,"Efd"),", times ",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"R")),".  This model is applicable to excitation systems employing static voltage regulators."),Object(r.a)("p",null,"Reference: IEEE 421.5-2005, 6.3.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efdn"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Value of ",Object(r.a)("i",null,"Efd "),"at which feedback gain changes (",Object(r.a)("i",null,"E"),Object(r.a)("i",null,Object(r.a)("sub",null,"FDN")),") (",">"," 0).  Typical value = 2,36.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"A")),") (",">"," 0).  Typical value = 45,62.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"C")),") (",">","= 0).  Typical value = 0,104.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Demagnetizing factor, a function of exciter alternator reactances (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"D")),") (",">","= 0).  Typical value = 0,499.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"E")),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer gains (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"F")),") (",">","= 0).  Typical value = 0,143.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kn"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"N")),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kr"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constant associated with regulator and alternator field power supply (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"R")),") (",">"," 0).  Typical value = 3,77.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"E1")),", back of commutating reactance (",Object(r.a)("i",null,"S"),Object(r.a)("i",null,Object(r.a)("sub",null,"E")),Object(r.a)("i",null,"[V"),Object(r.a)("i",null,Object(r.a)("sub",null,"E1")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 1,143.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"E2")),", back of commutating reactance (",Object(r.a)("i",null,"S"),Object(r.a)("i",null,Object(r.a)("sub",null,"E")),Object(r.a)("i",null,"[V"),Object(r.a)("i",null,Object(r.a)("sub",null,"E2")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 0,1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"A")),") (",">"," 0).  Typical value = 0,013.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"B")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"C")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"E")),") (",">"," 0).  Typical value = 1,17.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"F")),") (",">"," 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"AMAX")),") (",">"," 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"AMIN")),") (","<"," 0).  Typical value = -0,95.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"E1")),") (",">"," 0).  Typical value = 6,24.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"E2")),") (",">"," 0).  Typical value = 4,68.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vemin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum exciter voltage output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"EMIN")),") (","<","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vfemax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limit reference (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"FEMAX")),") (",">","= 0).  Typical value = 16.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}s.isMDXComponent=!0},2194:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function c(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return c}))},2195:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(0),c=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var b=c.a.createContext({}),O=function(t){var e=c.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},s={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},u=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),u=O(a),j=n,m=u["".concat(i,".").concat(j)]||u[j]||s[j]||r;return a?c.a.createElement(m,l({ref:e},b,{components:a})):c.a.createElement(m,l({ref:e},b))}));function j(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var b=2;b<r;b++)i[b]=a[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2196:function(t,e,a){"use strict";var n=a(0),c=a.n(n),r=a(10),i=a(2194),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2197),O=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};e.a=function(t){var e,a,s,u=t.isNavLink,j=t.to,m=t.href,d=t.activeClassName,p=t.isActive,f=t["data-noBrokenLinkCheck"],y=t.autoAddBaseUrl,g=void 0===y||y,E=O(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(b.b)().withBaseUrl,N=Object(n.useContext)(o),v=j||m,T=Object(i.a)(v),x=null==v?void 0:v.replace("pathname://",""),I=void 0!==x?(a=x,g&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,h=Object(n.useRef)(!1),D=u?r.e:r.c,k=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&T&&window.docusaurus.prefetch(I),function(){k&&s&&s.disconnect()}}),[I,k,T]);var M=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,w=!I||!T||M;return I&&T&&!M&&!f&&N.collectLink(I),w?c.a.createElement("a",Object.assign({href:I},v&&!T&&{target:"_blank",rel:"noopener noreferrer"},E)):c.a.createElement(D,Object.assign({},E,{onMouseEnter:function(){h.current||(window.docusaurus.preload(I),h.current=!0)},innerRef:function(t){var e,a;k&&t&&T&&(e=t,a=function(){window.docusaurus.prefetch(I)},(s=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(s.unobserve(e),s.disconnect(),a())}))}))).observe(e))},to:I||""},u&&{isActive:p,activeClassName:d}))}},2197:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var n=a(23),c=a(2194);function r(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var r=void 0===n?{}:n,i=r.forcePrependBaseUrl,l=void 0!==i&&i,o=r.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(l)return e+a;var O=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+O:O}(r,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}}}]);