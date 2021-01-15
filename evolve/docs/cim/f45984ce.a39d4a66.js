(window.webpackJsonp=window.webpackJsonp||[]).push([[1997],{2069:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(3),c=a(7),r=(a(0),a(2160)),l={title:"Pss5"},i={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",isDocsHomePage:!1,title:"Pss5",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PowerSystemStabilizerDynamics\\Pss5.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",version:"current",sidebar:"docs",previous:{title:"Pss2ST",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2ST"},next:{title:"PssELIN2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssELIN2"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:b};function o(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Detailed Italian PSS.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ctw2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Selector for second washout enabling (",Object(r.a)("i",null,"C"),Object(r.a)("i",null,Object(r.a)("sub",null,"TW2")),"). true = second washout filter is bypassed false = second washout filter in use. Typical value = true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"deadband"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output deadband (",Object(r.a)("i",null,"DEADBAND"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isfreq"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Selector for frequency/shaft speed input (",Object(r.a)("i",null,"isFreq"),"). true = speed (same meaning as InputSignaKind.rotorSpeed) false = frequency (same meaning as InputSignalKind.busFrequency). Typical value = true (same meaning as InputSignalKind.rotorSpeed).")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Frequency/shaft speed input gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"F")),").  Typical value = 5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpe"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Electric power input gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"PE")),").  Typical value = 0,3.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpss"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PSS gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"PSS")),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum power PSS enabling (",Object(r.a)("i",null,"Pmin"),").  Typical value = 0,25.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"L1")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"L2")),") (",">","= 0).  If = 0, both blocks are bypassed.  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"L3")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (T",Object(r.a)("sub",null,"L4"),") (",">","= 0).  If = 0, both blocks are bypassed.  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpe"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Electric power filter time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"PE")),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"First washout (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"W1")),") (",">","= 0).  Typical value = 3,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Second washout (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"W2")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vadat"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("font",{color:"#0f0f0f"},"Signal selector (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"adAtt")),").")," ",Object(r.a)("font",{color:"#0f0f0f"},"true = closed (generator power is greater than ",Object(r.a)("i",null,"Pmin"),")")," ",Object(r.a)("font",{color:"#0f0f0f"},"false = open (",Object(r.a)("i",null,"Pe")," is smaller than ",Object(r.a)("i",null,"Pmin"),").")," ",Object(r.a)("font",{color:"#0f0f0f"},"Typical value = true."))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vsmn"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output maximum limit (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"SMN")),").  Typical value = -0,1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vsmx"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output minimum limit (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"SMX")),").  Typical value = 0,1.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}),"PowerSystemStabilizerDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}o.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var O=c.a.createContext({}),o=function(e){var t=c.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,O=b(e,["components","mdxType","originalType","parentName"]),j=o(a),m=n,p=j["".concat(l,".").concat(m)]||j[m]||s[m]||r;return a?c.a.createElement(p,i({ref:t},O,{components:a})):c.a.createElement(p,i({ref:t},O))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=j;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var O=2;O<r;O++)l[O]=a[O];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);