(window.webpackJsonp=window.webpackJsonp||[]).push([[658],{2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),O=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},s=function(e){var t=O(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=O(a),d=n,p=s["".concat(l,".").concat(d)]||s[d]||j[d]||r;return a?b.a.createElement(p,c({ref:t},o,{components:a})):b.a.createElement(p,c({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},716:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),b=a(6),r=(a(0),a(2146)),l={title:"Pss5"},c={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",id:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",isDocsHomePage:!1,title:"Pss5",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PowerSystemStabilizerDynamics\\Pss5.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss5",version:"current",sidebar:"docs",previous:{title:"Pss2ST",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss2ST"},next:{title:"PssELIN2",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssELIN2"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"Detailed Italian PSS.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ctw2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Selector for second washout enabling (",Object(r.b)("i",null,"C"),Object(r.b)("i",null,Object(r.b)("sub",null,"TW2")),"). true = second washout filter is bypassed false = second washout filter in use. Typical value = true.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"deadband"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output deadband (",Object(r.b)("i",null,"DEADBAND"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isfreq"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Selector for frequency/shaft speed input (",Object(r.b)("i",null,"isFreq"),"). true = speed (same meaning as InputSignaKind.rotorSpeed) false = frequency (same meaning as InputSignalKind.busFrequency). Typical value = true (same meaning as InputSignalKind.rotorSpeed).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Frequency/shaft speed input gain (",Object(r.b)("i",null,"K"),Object(r.b)("i",null,Object(r.b)("sub",null,"F")),").  Typical value = 5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpe"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Electric power input gain (",Object(r.b)("i",null,"K"),Object(r.b)("i",null,Object(r.b)("sub",null,"PE")),").  Typical value = 0,3.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpss"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PSS gain (",Object(r.b)("i",null,"K"),Object(r.b)("i",null,Object(r.b)("sub",null,"PSS")),").  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum power PSS enabling (",Object(r.b)("i",null,"Pmin"),").  Typical value = 0,25.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"L1")),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"L2")),") (",">","= 0).  If = 0, both blocks are bypassed.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"L3")),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tl4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead/lag time constant (T",Object(r.b)("sub",null,"L4"),") (",">","= 0).  If = 0, both blocks are bypassed.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpe"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Electric power filter time constant (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"PE")),") (",">","= 0).  Typical value = 0,05.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"First washout (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"W1")),") (",">","= 0).  Typical value = 3,5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Second washout (",Object(r.b)("i",null,"T"),Object(r.b)("i",null,Object(r.b)("sub",null,"W2")),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vadat"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("font",{color:"#0f0f0f"},"Signal selector (",Object(r.b)("i",null,"V"),Object(r.b)("i",null,Object(r.b)("sub",null,"adAtt")),").")," ",Object(r.b)("font",{color:"#0f0f0f"},"true = closed (generator power is greater than ",Object(r.b)("i",null,"Pmin"),")")," ",Object(r.b)("font",{color:"#0f0f0f"},"false = open (",Object(r.b)("i",null,"Pe")," is smaller than ",Object(r.b)("i",null,"Pmin"),").")," ",Object(r.b)("font",{color:"#0f0f0f"},"Typical value = true."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vsmn"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output maximum limit (",Object(r.b)("i",null,"V"),Object(r.b)("i",null,Object(r.b)("sub",null,"SMN")),").  Typical value = -0,1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vsmx"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stabilizer output minimum limit (",Object(r.b)("i",null,"V"),Object(r.b)("i",null,Object(r.b)("sub",null,"SMX")),").  Typical value = 0,1.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}),"PowerSystemStabilizerDynamics"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("p",null,"None"))}O.isMDXComponent=!0}}]);