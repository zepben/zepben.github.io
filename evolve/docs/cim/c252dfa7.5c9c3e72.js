(window.webpackJsonp=window.webpackJsonp||[]).push([[1613],{1671:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(2147)),b={title:"Equipment"},c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/Equipment",id:"cim100/TC57CIM/IEC61970/Base/Core/Equipment",isDocsHomePage:!1,title:"Equipment",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Core\\Equipment.md",slug:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/Equipment",version:"current",sidebar:"docs",previous:{title:"CurveStyle",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/CurveStyle"},next:{title:"EquipmentContainer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"The parts of a power system that are physical devices, electronic or mechanical.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aggregate"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The aggregate flag provides an alternative way of representing an aggregated (equivalent) element. It is applicable in cases when the dedicated classes for equivalent equipment do not have all of the attributes necessary to represent the required level of detail.  In case the flag is set to \u201ctrue\u201d the single instance of equipment represents multiple pieces of equipment that have been modelled together as an aggregate equivalent obtained by a network reduction procedure. Examples would be power transformers or synchronous machines operating in parallel modelled as a single aggregate power transformer or aggregate synchronous machine.   The attribute is not used for EquivalentBranch, EquivalentShunt and EquivalentInjection.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inService"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the availability of the equipment. True means the equipment is available for topology processing, which determines if the equipment is energized or not. False means that the equipment is treated by network applications as if it is not in the model.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"networkAnalysisEnabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment is enabled to participate in network analysis.  If unspecified, the value is assumed to be true.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"normallyInService"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the availability of the equipment under normal operating conditions. True means the equipment is available for topology processing, which determines if the equipment is energized or not. False means that the equipment is treated by network applications as if it is not in the model.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource"}),"PowerSystemResource"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment"}),"AuxiliaryEquipment"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/CompositeSwitch"}),"CompositeSwitch"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment"}),"ConductingEquipment"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment"}),"ContingencyEquipment"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCConductingEquipment"}),"DCConductingEquipment"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer"}),"EquipmentContainer"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer"}),"EquipmentContainer"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent"}),"EquipmentLimitSeriesComponent"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/EquipmentUnavailabilitySchedule"}),"EquipmentUnavailabilitySchedule"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Faults/Fault"}),"Fault"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratingUnit"}),"GeneratingUnit"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump"}),"HydroPump"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency"}),"LimitDependency"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet"}),"OperationalLimitSet"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Operations/OperationalRestriction"}),"OperationalRestriction"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Operations/Outage"}),"Outage"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment"}),"PinEquipment"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/PowerElectronicsUnit"}),"PowerElectronicsUnit"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Protection/ProtectionEquipment"}),"ProtectionEquipment"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment"}),"ProtectiveActionEquipment"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerTank"}),"TransformerTank"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint"),"  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/WeatherStation"}),"WeatherStation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WeatherStation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer"}),"EquipmentContainer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AdditionalEquipmentContainer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Additional equipment container beyond the primary equipment container.  The equipment is contained in another equipment container, but also grouped with this equipment container."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AdditionalGroupedEquipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The additonal contained equipment.  The equipment belong to the equipment container. The equipment is contained in another equipment container, but also grouped with this equipment container.  Examples include when a switch contained in a substation is also desired to be grouped with a line contianer or when a switch is included in a secondary substation and also grouped in a feeder.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/EquipmentContainer"}),"EquipmentContainer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EquipmentContainer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Container of this equipment."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Contained equipment.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Faults/Fault"}),"Fault")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Faults"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All faults on this equipment."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"FaultyEquipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment carrying this fault.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet"}),"OperationalLimitSet")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalLimitSet"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The operational limit sets associated with this equipment."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment to which the limit set applies.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment"}),"ContingencyEquipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ContingencyEquipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The contingency equipments in which this equipment participates."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The single piece of equipment to which to apply the contingency.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/EquipmentUnavailabilitySchedule"}),"EquipmentUnavailabilitySchedule")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment"}),"PinEquipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PinEquipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Equipment that should be used in compare.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionEquipment"}),"ProtectiveActionEquipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProtectiveActionEquipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Protective action is controlling equipment. This can be direct signals from the control center, or emulation of action done by protection equipment."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent"}),"EquipmentLimitSeriesComponent")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EqiupmentLimitSeriesComponent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment limit series calculation component to which this equipment contributes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment contributing toward the series limit.   The reference here is to Equipment rather than a specific limit on the equipment so the grouiping can be reused for multiple limits of different types on the same instance of equipment.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency"}),"LimitDependency")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LimitDependencyModel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limit dependencymodels organized under this equipment as a means for organizing the model in a tree view."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment for which this limit dependency model is organized under.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/OperationalRestriction"}),"OperationalRestriction")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationalRestrictions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All operational restrictions for this equipment."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All equipments to which this restriction applies.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Operations/Outage"}),"Outage")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Outages"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All outages in which this equipment is involved."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All equipments associated with this outage.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment"}),"Equipment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All usage points connected to the electrical grid through this equipment."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipments"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All equipment connecting this usage point to the electrical grid.")))))}p.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=i.a.createContext({}),p=function(e){var t=i.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},O=function(e){var t=p(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),O=p(a),j=n,s=O["".concat(b,".").concat(j)]||O[j]||o[j]||r;return a?i.a.createElement(s,c({ref:t},m,{components:a})):i.a.createElement(s,c({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var m=2;m<r;m++)b[m]=a[m];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);