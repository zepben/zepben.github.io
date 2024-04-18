"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[24652],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,g=m(e,["components","mdxType","originalType","parentName"]),u=p(n),s=i,d=u["".concat(o,".").concat(s)]||u[s]||y[s]||r;return n?a.createElement(d,l(l({ref:t},g),{},{components:n})):a.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[u]="string"==typeof e?e:i,l[1]=m;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),i=(n(96540),n(15680)),r=n(75489);const l={title:"Equipment",hide_table_of_contents:!0,slug:"Equipment",sidebar_position:0},m=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/Equipment",id:"cim100/TC57CIM/IEC61970/Base/Core/Equipment",title:"Equipment",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Core/Equipment.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Core",slug:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/Equipment",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Equipment",hide_table_of_contents:!0,slug:"Equipment",sidebar_position:0},sidebar:"docs",previous:{title:"CurveStyle",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/CurveStyle"},next:{title:"EquipmentContainer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer"}},p={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:g},y="wrapper";function s(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"The parts of a power system that are physical devices, electronic or mechanical."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"aggregate"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"The aggregate flag provides an alternative way of representing an aggregated (equivalent) element. It is applicable in cases when the dedicated classes for equivalent equipment do not have all of the attributes necessary to represent the required level of detail.  In case the flag is set to \u201ctrue\u201d the single instance of equipment represents multiple pieces of equipment that have been modelled together as an aggregate equivalent obtained by a network reduction procedure. Examples would be power transformers or synchronous machines operating in parallel modelled as a single aggregate power transformer or aggregate synchronous machine.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"The attribute is not used for EquivalentBranch, EquivalentShunt and EquivalentInjection."),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"inService"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"Specifies the availability of the equipment. True means the equipment is available for topology processing, which determines if the equipment is energized or not. False means that the equipment is treated by network applications as if it is not in the model.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"networkAnalysisEnabled"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"The equipment is enabled to participate in network analysis.  If unspecified, the value is assumed to be true.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"normallyInService"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"Specifies the availability of the equipment under normal operating conditions. True means the equipment is available for topology processing, which determines if the equipment is energized or not. False means that the equipment is treated by network applications as if it is not in the model.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",mdxType:"Link"},"AuxiliaryEquipment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/CompositeSwitch",mdxType:"Link"},"CompositeSwitch")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCConductingEquipment",mdxType:"Link"},"DCConductingEquipment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratingUnit",mdxType:"Link"},"GeneratingUnit")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",mdxType:"Link"},"HydroPump")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/PowerElectronicsUnit",mdxType:"Link"},"PowerElectronicsUnit")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Protection/ProtectionEquipment",mdxType:"Link"},"ProtectionEquipment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerTank",mdxType:"Link"},"TransformerTank"))),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Target"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/WeatherStation",mdxType:"Link"},"WeatherStation")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"WeatherStation"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",mdxType:"Link"},"OperationalLimitSet")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,i.yg)("td",{parentName:"tr",align:null},"The equipment to which the limit set applies."),(0,i.yg)("td",{parentName:"tr",align:null},"OperationalLimitSet"),(0,i.yg)("td",{parentName:"tr",align:null},"The operational limit sets associated with this equipment.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment",mdxType:"Link"},"ContingencyEquipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,i.yg)("td",{parentName:"tr",align:null},"The single piece of equipment to which to apply the contingency."),(0,i.yg)("td",{parentName:"tr",align:null},"ContingencyEquipment"),(0,i.yg)("td",{parentName:"tr",align:null},"The contingency equipments in which this equipment participates.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer",mdxType:"Link"},"EquipmentContainer")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipments"),(0,i.yg)("td",{parentName:"tr",align:null},"Contained equipment."),(0,i.yg)("td",{parentName:"tr",align:null},"EquipmentContainer"),(0,i.yg)("td",{parentName:"tr",align:null},"Container of this equipment.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Faults/Fault",mdxType:"Link"},"Fault")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"FaultyEquipment"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment carrying this fault."),(0,i.yg)("td",{parentName:"tr",align:null},"Faults"),(0,i.yg)("td",{parentName:"tr",align:null},"All faults on this equipment.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,i.yg)("td",{parentName:"tr",align:null},"The equipment for which this limit dependency model is organized under."),(0,i.yg)("td",{parentName:"tr",align:null},"LimitDependencyModel"),(0,i.yg)("td",{parentName:"tr",align:null},"Limit dependencymodels organized under this equipment as a means for organizing the model in a tree view.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent",mdxType:"Link"},"EquipmentLimitSeriesComponent")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment contributing toward the series limit.   The reference here is to Equipment rather than a specific limit on the equipment so the grouiping can be reused for multiple limits of different types on the same instance of equipment."),(0,i.yg)("td",{parentName:"tr",align:null},"EqiupmentLimitSeriesComponent"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment limit series calculation component to which this equipment contributes.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment",mdxType:"Link"},"ProtectiveActionEquipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"ProtectiveActionEquipment"),(0,i.yg)("td",{parentName:"tr",align:null},"Protective action is controlling equipment. This can be direct signals from the control center, or emulation of action done by protection equipment.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",mdxType:"Link"},"PinEquipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,i.yg)("td",{parentName:"tr",align:null},"The Equipment that should be used in compare."),(0,i.yg)("td",{parentName:"tr",align:null},"PinEquipment"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/EquipmentUnavailabilitySchedule",mdxType:"Link"},"EquipmentUnavailabilitySchedule")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer",mdxType:"Link"},"EquipmentContainer")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"AdditionalGroupedEquipment"),(0,i.yg)("td",{parentName:"tr",align:null},"The additonal contained equipment.  The equipment belong to the equipment container. The equipment is contained in another equipment container, but also grouped with this equipment container.  Examples include when a switch contained in a substation is also desired to be grouped with a line contianer or when a switch is included in a secondary substation and also grouped in a feeder."),(0,i.yg)("td",{parentName:"tr",align:null},"AdditionalEquipmentContainer"),(0,i.yg)("td",{parentName:"tr",align:null},"Additional equipment container beyond the primary equipment container.  The equipment is contained in another equipment container, but also grouped with this equipment container.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint",mdxType:"Link"},"UsagePoint")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipments"),(0,i.yg)("td",{parentName:"tr",align:null},"All equipment connecting this usage point to the electrical grid."),(0,i.yg)("td",{parentName:"tr",align:null},"UsagePoints"),(0,i.yg)("td",{parentName:"tr",align:null},"All usage points connected to the electrical grid through this equipment.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/OperationalRestriction",mdxType:"Link"},"OperationalRestriction")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipments"),(0,i.yg)("td",{parentName:"tr",align:null},"All equipments to which this restriction applies."),(0,i.yg)("td",{parentName:"tr",align:null},"OperationalRestrictions"),(0,i.yg)("td",{parentName:"tr",align:null},"All operational restrictions for this equipment.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/Outage",mdxType:"Link"},"Outage")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"Equipments"),(0,i.yg)("td",{parentName:"tr",align:null},"All equipments associated with this outage."),(0,i.yg)("td",{parentName:"tr",align:null},"Outages"),(0,i.yg)("td",{parentName:"tr",align:null},"All outages in which this equipment is involved.")))))}s.isMDXComponent=!0}}]);