(window.webpackJsonp=window.webpackJsonp||[]).push([[1476],{1534:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),b=a(6),r=(a(0),a(2146)),c={title:"ExcAC8B"},l={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC8B",id:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC8B",isDocsHomePage:!1,title:"ExcAC8B",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcAC8B.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC8B",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC8B",version:"current",sidebar:"docs",previous:{title:"ExcAC6A",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC6A"},next:{title:"ExcANS",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcANS"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"Modified IEEE AC8B alternator-supplied rectifier excitation system with speed input and input limiter.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inlim"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input limiter indicator. true = input limiter ",Object(r.b)("i",null,"Vimax")," and ",Object(r.b)("i",null,"Vimin")," is considered false = input limiter ",Object(r.b)("i",null,"Vimax "),"and ",Object(r.b)("i",null,"Vimin")," is not considered. Typical value = true.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(r.b)("i",null,"Ka"),") (",">"," 0).  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(r.b)("i",null,"Kc"),") (",">","= 0). Typical value = 0,55.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Demagnetizing factor, a function of exciter alternator reactances (",Object(r.b)("i",null,"Kd"),") (",">","= 0).  Typical value = 1,1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kdr"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator derivative gain (",Object(r.b)("i",null,"Kdr"),") (",">","= 0).  Typical value = 10.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(r.b)("i",null,"Ke"),").  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kir"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator integral gain (",Object(r.b)("i",null,"Kir"),") (",">","= 0).  Typical value = 5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpr"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator proportional gain (",Object(r.b)("i",null,"Kpr"),") (",">"," 0 if ExcAC8B.kir = 0).  Typical value = 80.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ks"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Coefficient to allow different usage of the model-speed coefficient (",Object(r.b)("i",null,"Ks"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pidlim"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PID limiter indicator. true = input limiter ",Object(r.b)("i",null,"Vpidmax")," and ",Object(r.b)("i",null,"Vpidmin")," is considered false = input limiter ",Object(r.b)("i",null,"Vpidmax")," and ",Object(r.b)("i",null,"Vpidmin")," is not considered. Typical value = true.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.b)("i",null,"Ve"),Object(r.b)("i",null,Object(r.b)("sub",null,"1")),", back of commutating reactance (",Object(r.b)("i",null,"Se","[Ve"),Object(r.b)("i",null,Object(r.b)("sub",null,"1")),Object(r.b)("i",null,"]"),") (",">","= 0).  Typical value = 0,3.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seve2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.b)("i",null,"Ve"),Object(r.b)("i",null,Object(r.b)("sub",null,"2")),", back of commutating reactance (",Object(r.b)("i",null,"Se","[Ve"),Object(r.b)("i",null,Object(r.b)("sub",null,"2")),Object(r.b)("i",null,"]"),") (",">","= 0).  Typical value = 3.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.b)("i",null,"Ta"),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tdr"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant (",Object(r.b)("i",null,"Tdr"),") (",">"," 0 if ExcAC8B.kdr ",">"," 0).  Typical value = 0,1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(r.b)("i",null,"Te"),") (",">"," 0).  Typical value = 1,2.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"telim"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Selector for the limiter on the block (",Object(r.b)("i",null,"1/sTe"),").  See diagram for meaning of true and false. Typical value = false.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.b)("i",null,"Ve"),Object(r.b)("i",null,Object(r.b)("sub",null,"1")),") (",">"," 0).  Typical value = 6,5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ve2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter alternator output voltages back of commutating reactance at which saturation is defined (",Object(r.b)("i",null,"Ve"),Object(r.b)("i",null,Object(r.b)("sub",null,"2")),") (",">"," 0).  Typical value = 9.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vemin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum exciter voltage output (",Object(r.b)("i",null,"Vemin"),") (","<","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vfemax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter field current limit reference (",Object(r.b)("i",null,"Vfemax"),").  Typical value = 6.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vimax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input signal maximum (",Object(r.b)("i",null,"Vimax"),") (",">"," ExcAC8B.vimin).  Typical value = 35.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vimin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input signal minimum (",Object(r.b)("i",null,"Vimin"),") (","<"," ExcAC8B.vimax).  Typical value = -10.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vpidmax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PID maximum controller output (",Object(r.b)("i",null,"Vpidmax"),") (",">"," ExcAC8B.vpidmin).  Typical value = 35.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vpidmin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PID minimum controller output (",Object(r.b)("i",null,"Vpidmin"),") (","<"," ExcAC8B.vpidmax).  Typical value = -10.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(r.b)("i",null,"Vrmax"),") (",">"," 0). Typical value = 35.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(r.b)("i",null,"Vrmin"),") (","<"," 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vtmult"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Multiply by generator's terminal voltage indicator. true =the limits ",Object(r.b)("i",null,"Vrmax")," and ",Object(r.b)("i",null,"Vrmin")," are multiplied by the generator\ufffds terminal voltage to represent a thyristor power stage fed from the generator terminals false = limits are not multiplied by generator's terminal voltage.  Typical value = false.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("p",null,"None"))}O.isMDXComponent=!0},2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),O=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=O(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=O(a),d=n,p=j["".concat(c,".").concat(d)]||j[d]||m[d]||r;return a?b.a.createElement(p,l({ref:t},o,{components:a})):b.a.createElement(p,l({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);