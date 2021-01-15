(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),O=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),j=O(a),m=n,p=j["".concat(i,".").concat(m)]||j[m]||s[m]||r;return a?c.a.createElement(p,l({ref:t},o,{components:a})):c.a.createElement(p,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=j;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},617:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a(3),c=a(7),r=(a(0),a(2160)),i={title:"ExcIEEEST2A"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST2A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST2A",isDocsHomePage:!1,title:"ExcIEEEST2A",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcIEEEST2A.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST2A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST2A",version:"current",sidebar:"docs",previous:{title:"ExcIEEEST1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A"},next:{title:"ExcIEEEST3A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST3A"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={toc:b};function O(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"IEEE 421.5-2005 type ST2A model. Some static systems use both current and voltage sources (generator terminal quantities) to comprise the power source.  The regulator controls the exciter output through controlled saturation of the power transformer components.  These compound-source rectifier excitation systems are designated type ST2A and are represented by ExcIEEEST2A."),Object(r.a)("p",null,"Reference: IEEE 421.5-2005, 7.2.   "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efdmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum field voltage (",Object(r.a)("i",null,"E"),Object(r.a)("i",null,Object(r.a)("sub",null,"FDMax")),") (",">","= 0).  Typical value = 99.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"A")),") (",">"," 0).  Typical value = 120.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"C")),") (",">","= 0). Typical value = 1,82.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"E")),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer gains (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"F")),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ki"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Potential circuit gain coefficient (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"I")),") (",">","= 0).  Typical value = 8.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kp"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Potential circuit gain coefficient (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"P")),") (",">","= 0).  Typical value = 4,88.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"A")),") (",">"," 0).  Typical value = 0,15.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"E")),") (",">"," 0).  Typical value = 0,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"F")),") (",">","= 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uelin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL input (",Object(r.a)("i",null,"UELin"),"). true = HV gate false = add to error signal. Typical value = true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator outputs (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"RMAX")),") (",">"," 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator outputs (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"RMIN")),") (","<","= 0).  Typical value = 0.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}O.isMDXComponent=!0}}]);