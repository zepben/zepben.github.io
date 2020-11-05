(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return p}));var b=a(0),n=a.n(b);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},o=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,c=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=j(a),d=b,p=o["".concat(l,".").concat(d)]||o[d]||m[d]||c;return a?n.a.createElement(p,r({ref:t},O,{components:a})):n.a.createElement(p,r({ref:t},O))}));function p(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=a.length,l=new Array(c);l[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:b,l[1]=r;for(var O=2;O<c;O++)l[O]=a[O];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},425:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(2),n=a(6),c=(a(0),a(2147)),l={title:"ExcPIC"},r={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",isDocsHomePage:!1,title:"ExcPIC",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcPIC.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",version:"current",sidebar:"docs",previous:{title:"ExcOEX3T",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcOEX3T"},next:{title:"ExcREXS",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcREXS"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Proportional/integral regulator excitation system.  This model can be used to represent excitation systems with a proportional-integral (PI) voltage regulator controller.   "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ta2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"a2")),") (",">","= 0).  Typical value = 0,01.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ta3"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"a3")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ta4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"a4")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"te"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"e")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tf1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Rate feedback time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"f1")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tf2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Rate feedback lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"f2")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vr1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PI maximum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"r1")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vr2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PI minimum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"r2")),").  Typical value = -0,87.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator maximum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"rmax")),") (",">"," ExcPIC.vrmin).  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Voltage regulator minimum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"rmin")),") (","<"," ExcPIC.vrmax).  Typical value = -0,87.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"e1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Field voltage value 1 (",Object(c.b)("i",null,"E"),Object(c.b)("i",null,Object(c.b)("sub",null,"1")),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"e2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Field voltage value 2 (",Object(c.b)("i",null,"E"),Object(c.b)("i",null,Object(c.b)("sub",null,"2")),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"efdmax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter maximum limit (",Object(c.b)("i",null,"E"),Object(c.b)("i",null,Object(c.b)("sub",null,"fdmax")),") (",">"," ExcPIC.efdmin).  Typical value = 8.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"efdmin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter minimum limit (",Object(c.b)("i",null,"E"),Object(c.b)("i",null,Object(c.b)("sub",null,"fdmin")),") (","<"," ExcPIC.efdmax).  Typical value = -0,87.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ka"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PI controller gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"a")),").  Typical value = 3,15.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kc"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter regulation factor (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"c")),").  Typical value = 0,08.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ke"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Exciter constant (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"e")),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kf"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Rate feedback gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"f")),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Current source gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"i")),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kp"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Potential source gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"p")),").  Typical value = 6,5.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"se1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Saturation factor at ",Object(c.b)("i",null,"E"),Object(c.b)("i",null,Object(c.b)("sub",null,"1"))," (",Object(c.b)("i",null,"Se"),Object(c.b)("i",null,Object(c.b)("sub",null,"1")),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"se2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Saturation factor at ",Object(c.b)("i",null,"E"),Object(c.b)("i",null,Object(c.b)("sub",null,"2"))," (",Object(c.b)("i",null,"Se"),Object(c.b)("i",null,Object(c.b)("sub",null,"2")),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ta1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PI controller time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"a1")),") (",">","= 0).  Typical value = 1.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}j.isMDXComponent=!0}}]);