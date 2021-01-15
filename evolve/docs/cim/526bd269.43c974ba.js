(window.webpackJsonp=window.webpackJsonp||[]).push([[689],{2160:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(0),c=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var O=c.a.createContext({}),j=function(t){var e=c.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):i({},e,{},t)),a},o={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},m=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,r=t.parentName,O=b(t,["components","mdxType","originalType","parentName"]),m=j(a),u=n,s=m["".concat(r,".").concat(u)]||m[u]||o[u]||l;return a?c.a.createElement(s,i({ref:e},O,{components:a})):c.a.createElement(s,i({ref:e},O))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var b in e)hasOwnProperty.call(e,b)&&(i[b]=e[b]);i.originalType=t,i.mdxType="string"==typeof t?t:n,r[1]=i;for(var O=2;O<l;O++)r[O]=a[O];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},760:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return j}));var n=a(3),c=a(7),l=(a(0),a(2160)),r={title:"ExcIEEEAC6A"},i={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC6A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC6A",isDocsHomePage:!1,title:"ExcIEEEAC6A",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcIEEEAC6A.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC6A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC6A",version:"current",sidebar:"docs",previous:{title:"ExcIEEEAC5A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC5A"},next:{title:"ExcIEEEAC7B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:b};function j(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(l.a)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(l.a)("h3",{id:"class-description"},"Class Description"),Object(l.a)("p",null,"IEEE 421.5-2005 type AC6A model. The model represents field-controlled alternator-rectifier excitation systems with system-supplied electronic voltage regulators.  The maximum output of the regulator, ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"R")),", is a function of terminal voltage, ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"T")),". The field current limiter included in the original model AC6A remains in the 2005 update."),Object(l.a)("p",null,"Reference: IEEE 421.5-2005, 6.6. "),Object(l.a)("h3",{id:"attributes"},"Attributes"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"A")),") (",">"," 0).  Typical value = 536.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"C")),") (",">","= 0). Typical value = 0,173.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Demagnetizing factor, a function of exciter alternator reactances (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"D")),") (",">","= 0).  Typical value = 1,91.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),").  Typical value = 1,6.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kh"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limiter gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"H")),") (",">","= 0).  Typical value = 92.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E1")),", back of commutating reactance (",Object(l.a)("i",null,"S"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),Object(l.a)("i",null,"[V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E1")),Object(l.a)("i",null,"]",")")," (",">","= 0).  Typical value = 0,214.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E2")),", back of commutating reactance (",Object(l.a)("i",null,"S"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),Object(l.a)("i",null,"[V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E2")),Object(l.a)("i",null,"]"),") (",">","= 0).  Typical value = 0,044.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"A")),") (",">","= 0).  Typical value = 0,086.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"B")),") (",">","= 0).  Typical value = 9.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"C")),") (",">","= 0).  Typical value = 3.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"E")),") (",">"," 0).  Typical value = 1.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"th"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limiter time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"H")),") (",">"," 0).  Typical value = 0,08.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tj"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limiter time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"J")),") (",">","= 0).  Typical value = 0,02.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tk"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"K")),") (",">","= 0).  Typical value = 0,18.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamax"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"AMAX")),") (",">"," 0).  Typical value = 75.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamin"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (V",Object(l.a)("sub",null,"AMIN"),") (","<"," 0).  Typical value = -75.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E1")),") (",">"," 0).  Typical value = 7,4.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"E2")),") (",">"," 0).  Typical value = 5,55.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vfelim"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limit reference (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"FELIM")),") (",">"," 0).  Typical value = 19.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vhmax"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum field current limiter signal reference (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"HMAX")),") (",">"," 0).  Typical value = 75.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMAX")),") (",">"," 0).  Typical value = 44.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"RMIN")),") (","<"," 0).  Typical value = -36.")))),Object(l.a)("h3",{id:"relationships"},"Relationships"),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.a)("h3",{id:"associations"},"Associations"),Object(l.a)("p",null,"None"))}j.isMDXComponent=!0}}]);