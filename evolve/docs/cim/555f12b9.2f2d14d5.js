(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var O=c.a.createContext({}),j=function(e){var t=c.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},o={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,O=b(e,["components","mdxType","originalType","parentName"]),m=j(a),s=n,p=m["".concat(l,".").concat(s)]||m[s]||o[s]||r;return a?c.a.createElement(p,i({ref:t},O,{components:a})):c.a.createElement(p,i({ref:t},O))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var O=2;O<r;O++)l[O]=a[O];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},788:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return j}));var n=a(3),c=a(7),r=(a(0),a(2160)),l={title:"ExcAVR4"},i={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAVR4",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAVR4",isDocsHomePage:!1,title:"ExcAVR4",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcAVR4.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAVR4",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAVR4",version:"current",sidebar:"docs",previous:{title:"ExcAVR3",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAVR3"},next:{title:"ExcAVR5",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAVR5"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:b};function j(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Italian excitation system. It represents a static exciter and electric voltage regulator.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"imul"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AVR output voltage dependency selector (",Object(r.a)("i",null,"I"),Object(r.a)("i",null,Object(r.a)("sub",null,"MUL")),"). true = selector is connected false = selector is not connected. Typical value = true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AVR gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"A")),").  Typical value = 300.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"E")),Object(r.a)("i",null,")"),".  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kif"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter internal reactance (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"IF")),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AVR time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),") (",">","= 0).  Typical value = 4,8.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t1if"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter current feedback time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"1IF")),") (",">","= 0).  Typical value = 60.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AVR time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),") (",">","= 0).  Typical value = 1,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AVR time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"3")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AVR time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"4")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter current feedback time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"IF")),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vfmn"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum exciter output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"FMN")),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vfmx"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum exciter output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"FMX")),").  Typical value = 5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmn"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum AVR output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"RMN")),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmx"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum AVR output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"RMX")),").  Typical value = 5.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics"}),"ExcitationSystemDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}j.isMDXComponent=!0}}]);