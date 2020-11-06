(window.webpackJsonp=window.webpackJsonp||[]).push([[1526],{1584:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(2),c=a(6),r=(a(0),a(2147)),i={title:"ExcSEXS"},b={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSEXS",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSEXS",isDocsHomePage:!1,title:"ExcSEXS",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcSEXS.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSEXS",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSEXS",version:"current",sidebar:"docs",previous:{title:"ExcSCRX",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSCRX"},next:{title:"ExcSK",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSK"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function m(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"Simplified excitation system.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efdmax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field voltage clipping maximum limit (",Object(r.b)("i",null,"Efdmax"),") (",">"," ExcSEXS.efdmin).  Typical value = 5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efdmin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field voltage clipping minimum limit (",Object(r.b)("i",null,"Efdmin"),") (","<"," ExcSEXS.efdmax).  Typical value = -5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"emax"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum field voltage output (",Object(r.b)("i",null,"Emax"),") (",">"," ExcSEXS.emin).  Typical value = 5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"emin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum field voltage output (",Object(r.b)("i",null,"Emin"),") (","<"," ExcSEXS.emax).  Typical value = -5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain (",Object(r.b)("i",null,"K"),") (",">"," 0).  Typical value = 100.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PI controller gain (",Object(r.b)("i",null,"Kc"),") (",">"," 0 if ExcSEXS.tc ",">"," 0).  Typical value = 0,08.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tatb"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain reduction ratio of lag-lead element (",Object(r.b)("i",null,"[Ta / Tb]"),").  Typical value = 0,1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Denominator time constant of lag-lead block (",Object(r.b)("i",null,"Tb"),") (",">","= 0).  Typical value = 10.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PI controller phase lead time constant (",Object(r.b)("i",null,"Tc"),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant of gain block (",Object(r.b)("i",null,"Te"),") (",">"," 0).  Typical value = 0,05.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("p",null,"None"))}m.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),m=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=m(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=m(a),p=n,d=s["".concat(i,".").concat(p)]||s[p]||O[p]||r;return a?c.a.createElement(d,b({ref:t},o,{components:a})):c.a.createElement(d,b({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<r;o++)i[o]=a[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);