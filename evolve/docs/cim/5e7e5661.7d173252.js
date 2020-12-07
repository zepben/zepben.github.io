(window.webpackJsonp=window.webpackJsonp||[]).push([[787],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var b=a(0),n=a.n(b);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},o=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,c=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=j(a),s=b,m=o["".concat(l,".").concat(s)]||o[s]||u[s]||c;return a?n.a.createElement(m,r({ref:t},O,{components:a})):n.a.createElement(m,r({ref:t},O))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=a.length,l=new Array(c);l[0]=s;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:b,l[1]=r;for(var O=2;O<c;O++)l[O]=a[O];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},845:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(2),n=a(6),c=(a(0),a(2147)),l={title:"ExcIEEEAC8B"},r={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",isDocsHomePage:!1,title:"ExcIEEEAC8B",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcIEEEAC8B.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B",version:"current",sidebar:"docs",previous:{title:"ExcIEEEAC7B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B"},next:{title:"ExcIEEEDC1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEDC1A"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"IEEE 421.5-2005 type AC8B model. This model represents a PID voltage regulator with either a brushless exciter or DC exciter. The AVR in this model consists of PID control, with separate constants for the proportional (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"PR")),"), integral (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"IR")),"), and derivative (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"DR")),") gains. The representation of the brushless exciter (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"E")),", ",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"E")),", ",Object(c.b)("i",null,"S"),Object(c.b)("i",null,Object(c.b)("sub",null,"E")),", ",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"C")),", ",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"D")),") is similar to the model type AC2A. The type AC8B model can be used to represent static voltage regulators applied to brushless excitation systems. Digitally based voltage regulators feeding DC rotating main exciters can be represented with the AC type AC8B model with the parameters ",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"C"))," and ",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"D"))," set to 0.  For thyristor power stages fed from the generator terminals, the limits ",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"RMAX"))," and ",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"RMIN")),Object(c.b)("i",null," "),"should be a function of terminal voltage: V",Object(c.b)("i",null,Object(c.b)("sub",null,"T"))," x ",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"RMAX")),Object(c.b)("sub",null," "),"and ",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"T"))," x ",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"RMIN")),"."),Object(c.b)("p",null,"Reference: IEEE 421.5-2005, 6.8.   "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ka"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"A")),") (",">"," 0).  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kc"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"C")),") (",">","= 0). Typical value = 0,55.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kd"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Demagnetizing factor, a function of exciter alternator reactances (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"D")),") (",">","= 0).  Typical value = 1,1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kdr"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator derivative gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"DR")),") (",">","= 0).  Typical value = 10.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ke"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"E")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kir"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator integral gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"IR")),") (",">","= 0).  Typical value = 5.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kpr"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator proportional gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"PR")),") (",">"," 0 if ExcIEEEAC8B.kir = 0).  Typical value = 80.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"seve1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"E1")),", back of commutating reactance (",Object(c.b)("i",null,"S"),Object(c.b)("i",null,Object(c.b)("sub",null,"E")),Object(c.b)("i",null,"[V"),Object(c.b)("i",null,Object(c.b)("sub",null,"E1")),Object(c.b)("i",null,"]"),") (",">","= 0).  Typical value = 0,3.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"seve2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"E2")),", back of commutating reactance (",Object(c.b)("i",null,"S"),Object(c.b)("i",null,Object(c.b)("sub",null,"E")),Object(c.b)("i",null,"[V"),Object(c.b)("i",null,Object(c.b)("sub",null,"E2")),Object(c.b)("i",null,"]"),") (",">","= 0).  Typical value = 3.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ta"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"A")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tdr"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"DR")),") (",">"," 0).  Typical value = 0,1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"te"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"E")),") (",">"," 0).  Typical value = 1,2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ve1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"E1")),") (",">"," 0).  Typical value = 6,5.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ve2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"E2")),") (",">"," 0).  Typical value = 9.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vemin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Minimum exciter voltage output (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"EMIN")),") (","<","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vfemax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter field current limit reference (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"FEMAX")),").  Typical value = 6.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"RMAX")),") (",">"," 0).  Typical value = 35.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"RMIN")),") (","<","= 0).  Typical value = 0.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}j.isMDXComponent=!0}}]);