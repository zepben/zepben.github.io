"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[77607],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var g=n.createContext({}),d=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(g.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,g=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=d(a),y=o,m=s["".concat(g,".").concat(y)]||s[y]||c[y]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=y;var r={};for(var g in t)hasOwnProperty.call(t,g)&&(r[g]=t[g]);r.originalType=e,r[s]="string"==typeof e?e:o,i[1]=r;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},70394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var n=a(58168),o=(a(96540),a(15680)),l=a(75489);const i={title:"TopologicalNode",hide_table_of_contents:!0},r=void 0,g={unversionedId:"cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",id:"cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",title:"TopologicalNode",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Topology",slug:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",draft:!1,tags:[],version:"current",frontMatter:{title:"TopologicalNode",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"TopologicalIsland",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"},next:{title:"ACLineSegment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ACLineSegment"}},d={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],s={toc:p},c="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(c,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"class-description"},"Class Description"),(0,o.yg)("p",null,'For a detailed substation model a topological node is a set of connectivity nodes that, in the current network state, are connected together through any type of closed switches, including  jumpers. Topological nodes change as the current network state changes (i.e., switches, breakers, etc. change state).\nFor a planning model, switch statuses are not used to form topological nodes. Instead they are manually created or deleted in a model builder tool. Topological nodes maintained this way are also called "busses".'),(0,o.yg)("h2",{id:"attributes"},"Attributes"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"pInjection"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,o.yg)("td",{parentName:"tr",align:null},"The active power injected into the bus at this location in addition to injections from equipment.  Positive sign means injection into the TopologicalNode (bus).")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Starting value for a steady state solution."),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"qInjection"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,o.yg)("td",{parentName:"tr",align:null},"The reactive power injected into the bus at this location in addition to injections from equipment. Positive sign means injection into the TopologicalNode (bus).")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Starting value for a steady state solution."),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null})))),(0,o.yg)("h2",{id:"relationships"},"Relationships"),(0,o.yg)("h3",{id:"ancestors"},"Ancestors"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,o.yg)("h3",{id:"descendents"},"Descendents"),(0,o.yg)("p",null,"No descendent classes"),(0,o.yg)("h2",{id:"associations"},"Associations"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,o.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,o.yg)("th",{parentName:"tr",align:null},"Target"),(0,o.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,o.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,o.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"1..*"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalIsland",mdxType:"Link"},"TopologicalIsland")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNodes"),(0,o.yg)("td",{parentName:"tr",align:null},"A topological node belongs to a topological island."),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalIsland"),(0,o.yg)("td",{parentName:"tr",align:null},"A topological node belongs to a topological island.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/ReportingGroup",mdxType:"Link"},"ReportingGroup")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The topological nodes that belong to the reporting group."),(0,o.yg)("td",{parentName:"tr",align:null},"ReportingGroup"),(0,o.yg)("td",{parentName:"tr",align:null},"The reporting group to which the topological node belongs.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/ConnectivityNodeContainer",mdxType:"Link"},"ConnectivityNodeContainer")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The topological nodes which belong to this connectivity node container."),(0,o.yg)("td",{parentName:"tr",align:null},"ConnectivityNodeContainer"),(0,o.yg)("td",{parentName:"tr",align:null},"The connectivity node container to which the topological node belongs.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/BaseVoltage",mdxType:"Link"},"BaseVoltage")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The topological nodes at the base voltage."),(0,o.yg)("td",{parentName:"tr",align:null},"BaseVoltage"),(0,o.yg)("td",{parentName:"tr",align:null},"The base voltage of the topological node.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/StateVariables/SvInjection",mdxType:"Link"},"SvInjection")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The topological node associated with the flow injection state variable."),(0,o.yg)("td",{parentName:"tr",align:null},"SvInjection"),(0,o.yg)("td",{parentName:"tr",align:null},"The injection flows state variables associated with the topological node.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/StateVariables/SvVoltage",mdxType:"Link"},"SvVoltage")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The topological node associated with the voltage state."),(0,o.yg)("td",{parentName:"tr",align:null},"SvVoltage"),(0,o.yg)("td",{parentName:"tr",align:null},"The state voltage associated with the topological node.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalIsland",mdxType:"Link"},"TopologicalIsland")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},"AngleRefTopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The angle reference for the island.   Normally there is one TopologicalNode that is selected as the angle reference for each island.   Other reference schemes exist, so the association is typically optional."),(0,o.yg)("td",{parentName:"tr",align:null},"AngleRefTopologicalIsland"),(0,o.yg)("td",{parentName:"tr",align:null},"The island for which the node is an angle reference.   Normally there is one angle reference node for each island.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/ConnectivityNode",mdxType:"Link"},"ConnectivityNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The topological node to which this connectivity node is assigned.  May depend on the current state of switches in the network."),(0,o.yg)("td",{parentName:"tr",align:null},"ConnectivityNodes"),(0,o.yg)("td",{parentName:"tr",align:null},"The connectivity nodes combine together to form this topological node.  May depend on the current state of switches in the network.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"The topological node associated with the terminal.   This can be used as an alternative to the connectivity node path to topological node, thus making it unnecessary to model connectivity nodes in some cases.   Note that the if connectivity nodes are in the model, this association would probably not be used as an input specification."),(0,o.yg)("td",{parentName:"tr",align:null},"Terminal"),(0,o.yg)("td",{parentName:"tr",align:null},"The terminals associated with the topological node.   This can be used as an alternative to the connectivity node path to terminal, thus making it unnecessary to model connectivity nodes in some cases.   Note that if connectivity nodes are in the model, this association would probably not be used as an input specification.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),(0,o.yg)("td",{parentName:"tr",align:null},"0..1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Topology/BusNameMarker",mdxType:"Link"},"BusNameMarker")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},"TopologicalNode"),(0,o.yg)("td",{parentName:"tr",align:null},"A user defined topological node that was originally defined in a planning model not yet having topology described by ConnectivityNodes. Once ConnectivityNodes has been created they may linked to user defined ToplogicalNdes using BusNameMarkers."),(0,o.yg)("td",{parentName:"tr",align:null},"BusNameMarker"),(0,o.yg)("td",{parentName:"tr",align:null},"BusnameMarkers that may refer to a pre defined TopologicalNode.")))))}y.isMDXComponent=!0}}]);