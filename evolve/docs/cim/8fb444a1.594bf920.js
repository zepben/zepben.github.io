(window.webpackJsonp=window.webpackJsonp||[]).push([[1189],{1247:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var o=a(2),n=a(6),l=(a(0),a(2146)),r={title:"TopologicalNode"},c={unversionedId:"Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode",id:"Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode",isDocsHomePage:!1,title:"TopologicalNode",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Base\\Topology\\TopologicalNode.md",slug:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode",version:"current",sidebar:"docs",previous:{title:"TopologicalIsland",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"},next:{title:"Diagram",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Base/DiagramLayout/Diagram"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],i={rightToc:b};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"class-description"},"Class Description"),Object(l.b)("p",null,"For a detailed substation model a topological node is a set of connectivity nodes that, in the current network state, are connected together through any type of closed switches, including  jumpers. Topological nodes change as the current network state changes (i.e., switches, breakers, etc. change state)."),Object(l.b)("p",null,'For a planning model, switch statuses are not used to form topological nodes. Instead they are manually created or deleted in a model builder tool. Topological nodes maintained this way are also called "busses".  '),Object(l.b)("h3",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"pInjection"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The active power injected into the bus at this location in addition to injections from equipment.  Positive sign means injection into the TopologicalNode (bus). Starting value for a steady state solution.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"qInjection"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/ReactivePower"}),"ReactivePower")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The reactive power injected into the bus at this location in addition to injections from equipment. Positive sign means injection into the TopologicalNode (bus). Starting value for a steady state solution.")))),Object(l.b)("h3",{id:"relationships"},"Relationships"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/BusNameMarker"}),"BusNameMarker"),"  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Core/ConnectivityNode"}),"ConnectivityNode"),"  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/StateVariables/SvInjection"}),"SvInjection"),"  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/StateVariables/SvVoltage"}),"SvVoltage"),"  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Core/Terminal"}),"Terminal"),"  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"}),"TopologicalIsland"),"  ")),Object(l.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.b)("h3",{id:"associations"},"Associations"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/ConnectivityNode"}),"ConnectivityNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"ConnectivityNodes"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The connectivity nodes combine together to form this topological node.  May depend on the current state of switches in the network."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node to which this connectivity node is assigned.  May depend on the current state of switches in the network.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/Terminal"}),"Terminal")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The terminals associated with the topological node.   This can be used as an alternative to the connectivity node path to terminal, thus making it unnecessary to model connectivity nodes in some cases.   Note that if connectivity nodes are in the model, this association would probably not be used as an input specification."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node associated with the terminal.   This can be used as an alternative to the connectivity node path to topological node, thus making it unnecessary to model connectivity nodes in some cases.   Note that the if connectivity nodes are in the model, this association would probably not be used as an input specification.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/BusNameMarker"}),"BusNameMarker")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"BusNameMarker"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"BusnameMarkers that may refer to a pre defined TopologicalNode."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"A user defined topological node that was originally defined in a planning model not yet having topology described by ConnectivityNodes. Once ConnectivityNodes has been created they may linked to user defined ToplogicalNdes using BusNameMarkers.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"}),"TopologicalIsland")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"AngleRefTopologicalIsland"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The island for which the node is an angle reference.   Normally there is one angle reference node for each island."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"AngleRefTopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The angle reference for the island.   Normally there is one TopologicalNode that is selected as the angle reference for each island.   Other reference schemes exist, so the association is typically optional.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/BaseVoltage"}),"BaseVoltage")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological nodes at the base voltage."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The base voltage of the topological node.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/ConnectivityNodeContainer"}),"ConnectivityNodeContainer")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological nodes which belong to this connectivity node container."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"ConnectivityNodeContainer"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The connectivity node container to which the topological node belongs.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Core/ReportingGroup"}),"ReportingGroup")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological nodes that belong to the reporting group."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"ReportingGroup"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The reporting group to which the topological node belongs.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"}),"TopologicalIsland")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNodes"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"A topological node belongs to a topological island."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalIsland"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"A topological node belongs to a topological island.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/StateVariables/SvInjection"}),"SvInjection")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"SvInjection"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The injection flows state variables associated with the topological node."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node associated with the flow injection state variable.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/StateVariables/SvVoltage"}),"SvVoltage")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(o.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Topology/TopologicalNode"}),"TopologicalNode")),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"1"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"SvVoltage"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The state voltage associated with the topological node."),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node associated with the voltage state.")))))}d.isMDXComponent=!0},2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var o=a(0),n=a.n(o);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),d=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=d(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=d(a),O=o,s=p["".concat(r,".").concat(O)]||p[O]||j[O]||l;return a?n.a.createElement(s,c({ref:t},i,{components:a})):n.a.createElement(s,c({ref:t},i))}));function s(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var i=2;i<l;i++)r[i]=a[i];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);