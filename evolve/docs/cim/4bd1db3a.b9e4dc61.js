(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),O=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=O(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=O(a),m=n,s=d["".concat(b,".").concat(m)]||d[m]||j[m]||r;return a?c.a.createElement(s,l({ref:t},o,{components:a})):c.a.createElement(s,l({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<r;o++)b[o]=a[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},681:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),c=a(6),r=(a(0),a(2146)),b={title:"ExcST2A"},l={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",id:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",isDocsHomePage:!1,title:"ExcST2A",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcST2A.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",version:"current",sidebar:"docs",previous:{title:"ExcST1A",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST1A"},next:{title:"ExcST3A",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST3A"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"Modified IEEE ST2A static excitation system with another lead-lag block added to match the model defined by WECC.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efdmax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum field voltage (",Object(r.b)("i",null,"Efdmax"),") (",">","= 0).  Typical value = 99.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(r.b)("i",null,"Ka"),") (",">"," 0).  Typical value = 120.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(r.b)("i",null,"Kc"),") (",">","= 0).  Typical value = 1,82.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(r.b)("i",null,"Ke"),").  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer gains (",Object(r.b)("i",null,"kf"),") (",">","= 0).  Typical value = 0,05.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ki"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Potential circuit gain coefficient (",Object(r.b)("i",null,"K"),Object(r.b)("i",null,Object(r.b)("sub",null,"i")),") (",">","= 0).  Typical value = 8.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kp"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Potential circuit gain coefficient (",Object(r.b)("i",null,"K"),Object(r.b)("i",null,Object(r.b)("sub",null,"p")),") (",">","= 0).  Typical value = 4,88.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.b)("i",null,"Ta"),") (",">"," 0).  Typical value = 0,15.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.b)("i",null,"Tb"),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.b)("i",null,"Tc"),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(r.b)("i",null,"Te"),") (",">"," 0).  Typical value = 0,5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(r.b)("i",null,"Tf"),") (",">","= 0).  Typical value = 0,7.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uelin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL input (",Object(r.b)("i",null,"UELin"),"). true = HV gate false = add to error signal. Typical value = false.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator outputs (",Object(r.b)("i",null,"Vrmax"),") (",">"," 0).  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator outputs (",Object(r.b)("i",null,"Vrmin"),") (","<"," 0).  Typical value = -1.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("p",null,"None"))}O.isMDXComponent=!0}}]);