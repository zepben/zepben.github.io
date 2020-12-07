(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),o=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=o(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=o(a),j=n,p=s["".concat(b,".").concat(j)]||s[j]||O[j]||c;return a?r.a.createElement(p,i({ref:t},m,{components:a})):r.a.createElement(p,i({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var m=2;m<c;m++)b[m]=a[m];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},466:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),c=(a(0),a(2147)),b={title:"PssIEEE3B"},i={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE3B",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE3B",isDocsHomePage:!1,title:"PssIEEE3B",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PowerSystemStabilizerDynamics\\PssIEEE3B.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE3B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE3B",version:"current",sidebar:"docs",previous:{title:"PssIEEE2B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE2B"},next:{title:"PssIEEE4B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={rightToc:l};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"IEEE 421.5-2005 type PSS3B power system stabilizer model. The PSS model PSS3B has dual inputs of electrical power and rotor angular frequency deviation. The signals are used to derive an equivalent mechanical power signal."),Object(c.b)("p",null,"This model has 2 input signals. They have the following fixed types (expressed in terms of InputSignalKind values): the first one is of rotorAngleFrequencyDeviation type and the second one is of generatorElectricalPower type."),Object(c.b)("p",null,"Reference: IEEE 3B 421.5-2005, 8.3. "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A1"),").  Typical value = 0,359.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A2"),").  Typical value = 0,586.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A3"),").  Typical value = 0,429.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a4"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A4"),").  Typical value = 0,564.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A5"),").  Typical value = 0,001.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A6"),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A7"),").  Typical value = 0,031.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Notch filter parameter (",Object(c.b)("i",null,"A8"),").  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ks1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain on signal # 1 (",Object(c.b)("i",null,"Ks1"),").  Typical value = -0,602.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ks2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain on signal # 2 (",Object(c.b)("i",null,"Ks2"),").  Typical value = 30,12.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transducer time constant (",Object(c.b)("i",null,"T1"),") (",">","= 0).  Typical value = 0,012.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transducer time constant (",Object(c.b)("i",null,"T2"),") (",">","= 0).  Typical value = 0,012.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Washout time constant (",Object(c.b)("i",null,"Tw1"),") (",">","= 0).  Typical value = 0,3.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Washout time constant (",Object(c.b)("i",null,"Tw2"),") (",">","= 0).  Typical value = 0,3.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Washout time constant (",Object(c.b)("i",null,"Tw3"),") (",">","= 0).  Typical value = 0,6.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vstmax"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output maximum limit (",Object(c.b)("i",null,"Vstmax"),") (",">"," PssIEEE3B.vstmin).  Typical value = 0,1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vstmin"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output minimum limit (",Object(c.b)("i",null,"Vstmin"),") (","<"," PssIEEE3B.vstmax).  Typical value = -0,1.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}),"PowerSystemStabilizerDynamics"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}o.isMDXComponent=!0}}]);