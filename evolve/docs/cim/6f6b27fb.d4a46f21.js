(window.webpackJsonp=window.webpackJsonp||[]).push([[895],{2146:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||O[u]||c;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},953:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(2146)),i={title:"ProtectiveActionEquipment"},o={unversionedId:"Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment",id:"Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment",isDocsHomePage:!1,title:"ProtectiveActionEquipment",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\InfIEC61970\\InfSIPS\\ProtectiveActionEquipment.md",slug:"/Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment",version:"current",sidebar:"docs",previous:{title:"ProtectiveActionCollection",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionCollection"},next:{title:"ProtectiveActionRegulation",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionRegulation"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Protective action to put an Equipment in-service/out-of-service.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"inService"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If true the equipment is put in-service, otherwise out-of-service.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveAction"}),"ProtectiveAction"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment"}),"ProtectiveActionEquipment")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ProtectiveActionEquipment"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Protective action is controlling equipment. This can be direct signals from the control center, or emulation of action done by protection equipment."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);