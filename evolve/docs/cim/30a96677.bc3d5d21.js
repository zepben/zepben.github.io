(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=s(a),j=r,m=O["".concat(c,".").concat(j)]||O[j]||p[j]||b;return a?n.a.createElement(m,l({ref:t},i,{components:a})):n.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},442:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),b=(a(0),a(2147)),c={title:"BaseVoltage"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage",id:"cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage",isDocsHomePage:!1,title:"BaseVoltage",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Core\\BaseVoltage.md",slug:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage",version:"current",sidebar:"docs",previous:{title:"BasePower",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/BasePower"},next:{title:"BasicIntervalSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/BasicIntervalSchedule"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],i={rightToc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"Defines a system base voltage which is referenced.   "),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"nominalVoltage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage"}),"Voltage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The power system resource's base voltage.  Shall be a positive value and not zero.")))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Assets/AssetDeployment"}),"AssetDeployment"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerEnd"}),"TransformerEnd"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/VoltageLevel"}),"VoltageLevel"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage"}),"BaseVoltage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment"}),"ConductingEquipment")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Base voltage of this conducting equipment.  Use only when there is no voltage level container used and only one base voltage applies.  For example, not used for transformers."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All conducting equipment with this base voltage.  Use only when there is no voltage level container used and only one base voltage applies.  For example, not used for transformers.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/VoltageLevel"}),"VoltageLevel")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage"}),"BaseVoltage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"VoltageLevel"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The voltage levels having this base voltage."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The base voltage used for all equipment within the voltage level.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerEnd"}),"TransformerEnd")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage"}),"BaseVoltage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransformerEnds"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transformer ends at the base voltage.  This is essential for PU calculation."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Base voltage of the transformer end.  This is essential for PU calculation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage"}),"BaseVoltage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The topological nodes at the base voltage."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The base voltage of the topological node.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Assets/AssetDeployment"}),"AssetDeployment")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage"}),"BaseVoltage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"NetworkAssetDeployment"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A network asset deployment at this base voltage level."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Base voltage of this network asset deployment.")))))}s.isMDXComponent=!0}}]);