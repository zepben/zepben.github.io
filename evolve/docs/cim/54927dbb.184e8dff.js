(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return C}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),O=n,C=s["".concat(i,".").concat(O)]||s[O]||m[O]||c;return a?r.a.createElement(C,o({ref:t},l,{components:a})):r.a.createElement(C,o({ref:t},l))}));function C(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},770:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(2147)),i={title:"DCEquipmentContainer"},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/DC/DCEquipmentContainer",id:"cim100/TC57CIM/IEC61970/Base/DC/DCEquipmentContainer",isDocsHomePage:!1,title:"DCEquipmentContainer",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\DC\\DCEquipmentContainer.md",slug:"/cim100/TC57CIM/IEC61970/Base/DC/DCEquipmentContainer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCEquipmentContainer",version:"current",sidebar:"docs",previous:{title:"DCDisconnector",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCDisconnector"},next:{title:"DCGround",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCGround"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"A modelling construct to provide a root class for containment of DC as well as AC equipment. The class differ from the EquipmentContaner for AC in that it may also contain DCNode-s. Hence it can contain both AC and DC equipment.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("p",null,"None  "),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer"}),"EquipmentContainer"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCConverterUnit"}),"DCConverterUnit"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCLine"}),"DCLine"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCNode"}),"DCNode"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCEquipmentContainer"}),"DCEquipmentContainer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode"}),"DCTopologicalNode")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCEquipmentContainer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The connectivity node container to which the topological node belongs."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCTopologicalNode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The topological nodes which belong to this connectivity node container.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCNode"}),"DCNode")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCEquipmentContainer"}),"DCEquipmentContainer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCNodes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The DC nodes contained in the DC equipment container."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DCEquipmentContainer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The DC container for the DC nodes.")))))}p.isMDXComponent=!0}}]);