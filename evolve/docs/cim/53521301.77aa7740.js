(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var b=a(0),n=a.n(b);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},o=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,c=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=j(a),m=b,s=o["".concat(l,".").concat(m)]||o[m]||d[m]||c;return a?n.a.createElement(s,r({ref:t},O,{components:a})):n.a.createElement(s,r({ref:t},O))}));function s(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=a.length,l=new Array(c);l[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:b,l[1]=r;for(var O=2;O<c;O++)l[O]=a[O];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},740:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(2),n=a(6),c=(a(0),a(2146)),l={title:"Pss2B"},r={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2B",id:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2B",isDocsHomePage:!1,title:"Pss2B",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PowerSystemStabilizerDynamics\\Pss2B.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2B",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2B",version:"current",sidebar:"docs",previous:{title:"Pss1A",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss1A"},next:{title:"PssSH",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssSH"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Modified IEEE PSS2B.  Extra lead/lag (or rate) block added at end (up to 4 lead/lags total).  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tw2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Second washout on signal #1 (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"w2")),") (",">","= 0).  Typical value = 2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tw3"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"First washout on signal #2 (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"w3")),") (",">","= 0).  Typical value = 2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tw4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Second washout on signal #2 (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"w4")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vsi1max"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Input signal #1 maximum limit (",Object(c.b)("i",null,"Vsi1max"),") (",">"," Pss2B.vsi1min).  Typical value = 2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vsi1min"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Input signal #1 minimum limit (",Object(c.b)("i",null,"Vsi1min"),") (","<"," Pss2B.vsi1max).  Typical value = -2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vsi2max"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Input signal #2 maximum limit (",Object(c.b)("i",null,"Vsi2max"),") (",">"," Pss2B.vsi2min).  Typical value = 2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vsi2min"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Input signal #2 minimum limit (",Object(c.b)("i",null,"Vsi2min"),") (","<"," Pss2B.vsi2max).  Typical value = -2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vstmax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Stabilizer output maximum limit (",Object(c.b)("i",null,"Vstmax"),") (",">"," Pss2B.vstmin).  Typical value = 0,1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vstmin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Stabilizer output minimum limit (",Object(c.b)("i",null,"Vstmin"),") (","<"," Pss2B.vstmax).  Typical value = -0,1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"a"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Numerator constant (",Object(c.b)("i",null,"a"),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ks1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Stabilizer gain (",Object(c.b)("i",null,"Ks1"),").  Typical value = 12.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ks2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Gain on signal #2 (",Object(c.b)("i",null,"Ks2"),").  Typical value = 0,2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ks3"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Gain on signal #2 input before ramp-tracking filter (",Object(c.b)("i",null,"Ks3"),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ks4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Gain on signal #2 input after ramp-tracking filter (",Object(c.b)("i",null,"Ks4"),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"m"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Denominator order of ramp tracking filter (",Object(c.b)("i",null,"m"),").  Typical value = 5.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"n"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Order of ramp tracking filter (",Object(c.b)("i",null,"n"),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"1")),") (",">","= 0).  Typical value = 0,12.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t10"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"10")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t11"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"11")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"2")),") (",">","= 0).  Typical value = 0,02.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t3"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"3")),") (",">","= 0).  Typical value = 0,3.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"4")),") (",">","= 0).  Typical value = 0,02.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Time constant on signal #1 (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"6")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t7"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Time constant on signal #2 (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"7")),") (",">","= 0).  Typical value = 2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t8"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead of ramp tracking filter (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"8")),") (",">","= 0).  Typical value = 0,2.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"t9"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lag of ramp tracking filter (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"9")),") (",">","= 0).  Typical value = 0,1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ta"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lead constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"a")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tb"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Lag time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"b")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tw1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"First washout on signal #1 (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"w1")),") (",">","= 0).  Typical value = 2.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}),"PowerSystemStabilizerDynamics"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}j.isMDXComponent=!0}}]);