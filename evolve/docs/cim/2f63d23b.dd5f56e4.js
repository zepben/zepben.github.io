(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,O=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(O,i({ref:t},b,{components:a})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},430:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=(a(0),a(2147)),o={title:"SynchrocheckRelay"},i={unversionedId:"cim100/TC57CIM/IEC61970/Base/Protection/SynchrocheckRelay",id:"cim100/TC57CIM/IEC61970/Base/Protection/SynchrocheckRelay",isDocsHomePage:!1,title:"SynchrocheckRelay",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Protection\\SynchrocheckRelay.md",slug:"/cim100/TC57CIM/IEC61970/Base/Protection/SynchrocheckRelay",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Protection/SynchrocheckRelay",version:"current",sidebar:"docs",previous:{title:"RecloseSequence",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Protection/RecloseSequence"},next:{title:"EquipmentFault",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Faults/EquipmentFault"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"A device that operates when two AC circuits are within the desired limits of frequency, phase angle, and voltage, to permit or to cause the paralleling of these two circuits. Used to prevent the paralleling of non-synchronous topological islands.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxAngleDiff"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleRadians"}),"AngleRadians")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum allowable voltage vector phase angle difference across the open device.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxFreqDiff"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum allowable frequency difference across the open device.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxVoltDiff"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage"}),"Voltage")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum allowable difference voltage across the open device.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Protection/ProtectionEquipment"}),"ProtectionEquipment"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}s.isMDXComponent=!0}}]);