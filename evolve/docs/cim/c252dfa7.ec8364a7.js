(window.webpackJsonp=window.webpackJsonp||[]).push([[1625],{1694:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(2176)),c=a(2177),l={title:"Equipment"},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/Equipment",id:"cim100/TC57CIM/IEC61970/Base/Core/Equipment",isDocsHomePage:!1,title:"Equipment",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Core\\Equipment.md",slug:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/Equipment",version:"current",sidebar:"docs",previous:{title:"NameTypeAuthority",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/NameTypeAuthority"},next:{title:"GeographicalRegion",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/GeographicalRegion"}},p=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:p};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"The parts of a power system that are physical devices, electronic or mechanical.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"normallyInService"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the availability of the equipment under normal operating conditions. True means the equipment is available for topology processing, which determines if the equipment is energized or not. False means that the equipment is treated by network applications as if it is not in the model.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aggregate"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The aggregate flag provides an alternative way of representing an aggregated (equivalent) element. It is applicable in cases when the dedicated classes for equivalent equipment do not have all of the attributes necessary to represent the required level of detail.  In case the flag is set to \u201ctrue\u201d the single instance of equipment represents multiple pieces of equipment that have been modelled together as an aggregate equivalent obtained by a network reduction procedure. Examples would be power transformers or synchronous machines operating in parallel modelled as a single aggregate power transformer or aggregate synchronous machine.   The attribute is not used for EquivalentBranch, EquivalentShunt and EquivalentInjection.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inService"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the availability of the equipment. True means the equipment is available for topology processing, which determines if the equipment is energized or not. False means that the equipment is treated by network applications as if it is not in the model.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"networkAnalysisEnabled"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment is enabled to participate in network analysis.  If unspecified, the value is assumed to be true.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",mdxType:"Link"},"AuxiliaryEquipment")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/CompositeSwitch",mdxType:"Link"},"CompositeSwitch")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/DCConductingEquipment",mdxType:"Link"},"DCConductingEquipment")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratingUnit",mdxType:"Link"},"GeneratingUnit")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",mdxType:"Link"},"HydroPump")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/PowerElectronicsUnit",mdxType:"Link"},"PowerElectronicsUnit")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Protection/ProtectionEquipment",mdxType:"Link"},"ProtectionEquipment")),Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerTank",mdxType:"Link"},"TransformerTank"))),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer",mdxType:"Link"},"EquipmentContainer")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EquipmentContainer"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Container of this equipment."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Contained equipment.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer",mdxType:"Link"},"EquipmentContainer")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AdditionalEquipmentContainer"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Additional equipment container beyond the primary equipment container.  The equipment is contained in another equipment container, but also grouped with this equipment container."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AdditionalGroupedEquipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The additonal contained equipment.  The equipment belong to the equipment container. The equipment is contained in another equipment container, but also grouped with this equipment container.  Examples include when a switch contained in a substation is also desired to be grouped with a line contianer or when a switch is included in a secondary substation and also grouped in a feeder.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/WeatherStation",mdxType:"Link"},"WeatherStation")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WeatherStation"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",mdxType:"Link"},"OperationalLimitSet")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalLimitSet"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The operational limit sets associated with this equipment."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment to which the limit set applies.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment",mdxType:"Link"},"ContingencyEquipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ContingencyEquipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The contingency equipments in which this equipment participates."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The single piece of equipment to which to apply the contingency.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Faults/Fault",mdxType:"Link"},"Fault")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Faults"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All faults on this equipment."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"FaultyEquipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment carrying this fault.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",mdxType:"Link"},"PinEquipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PinEquipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Equipment that should be used in compare.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment",mdxType:"Link"},"ProtectiveActionEquipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProtectiveActionEquipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Protective action is controlling equipment. This can be direct signals from the control center, or emulation of action done by protection equipment."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent",mdxType:"Link"},"EquipmentLimitSeriesComponent")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EqiupmentLimitSeriesComponent"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment limit series calculation component to which this equipment contributes."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment contributing toward the series limit.   The reference here is to Equipment rather than a specific limit on the equipment so the grouiping can be reused for multiple limits of different types on the same instance of equipment.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LimitDependencyModel"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limit dependencymodels organized under this equipment as a means for organizing the model in a tree view."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment for which this limit dependency model is organized under.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/EquipmentUnavailabilitySchedule",mdxType:"Link"},"EquipmentUnavailabilitySchedule")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Operations/Outage",mdxType:"Link"},"Outage")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Outages"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All outages in which this equipment is involved."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All equipments associated with this outage.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Operations/OperationalRestriction",mdxType:"Link"},"OperationalRestriction")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalRestrictions"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All operational restrictions for this equipment."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All equipments to which this restriction applies.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint",mdxType:"Link"},"UsagePoint")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All usage points connected to the electrical grid through this equipment."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All equipment connecting this usage point to the electrical grid.")))))}b.isMDXComponent=!0},2175:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},2176:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),m=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),O=m(a),s=n,j=O["".concat(c,".").concat(s)]||O[s]||b[s]||r;return a?i.a.createElement(j,l({ref:t},p,{components:a})):i.a.createElement(j,l({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2177:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(10),c=a(2175),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),p=a(2178),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,b,O=e.isNavLink,s=e.to,j=e.href,d=e.activeClassName,u=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,C=void 0===g||g,N=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(p.b)().withBaseUrl,y=Object(n.useContext)(o),E=s||j,q=Object(c.a)(E),I=null==E?void 0:E.replace("pathname://",""),T=void 0!==I?(a=I,C&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,v=Object(n.useRef)(!1),w=O?r.e:r.c,k=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&q&&window.docusaurus.prefetch(T),function(){k&&b&&b.disconnect()}}),[T,k,q]);var L=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,x=!T||!q||L;return T&&q&&!L&&!f&&y.collectLink(T),x?i.a.createElement("a",Object.assign({href:T},E&&!q&&{target:"_blank",rel:"noopener noreferrer"},N)):i.a.createElement(w,Object.assign({},N,{onMouseEnter:function(){v.current||(window.docusaurus.preload(T),v.current=!0)},innerRef:function(e){var t,a;k&&e&&q&&(t=e,a=function(){window.docusaurus.prefetch(T)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:T||""},O&&{isActive:u,activeClassName:d}))}},2178:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(23),i=a(2175);function r(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,c=r.forcePrependBaseUrl,l=void 0!==c&&c,o=r.absolute,p=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(l)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+m:m}(r,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}}}]);