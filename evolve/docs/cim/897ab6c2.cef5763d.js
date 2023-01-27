(window.webpackJsonp=window.webpackJsonp||[]).push([[1144],{1215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),i=(a(0),a(2208)),c=a(2209),l={title:"Terminal",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/Terminal",id:"cim100/TC57CIM/IEC61970/Base/Core/Terminal",isDocsHomePage:!1,title:"Terminal",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Core\\Terminal.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/Terminal",version:"current",sidebar:"docs",previous:{title:"IdentifiedObject",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"},next:{title:"BaseVoltage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:b};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"An AC electrical connection point to a piece of conducting equipment. Terminals are connected at physical connection points called connectivity nodes.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phases"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",mdxType:"Link"},"PhaseCode")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Represents the normal network phasing condition. If the attribute is missing, three phases (ABC) shall be assumed, except for terminals of grounding classes (specializations of EarthFaultCompensator, GroundDisconnector, GroundSwitch, and Ground) which will be assumed to be N. Therefore, phase code ABCN is explicitly declared when needed, e.g. for star point grounding equipment. The phase code on terminals connecting same ConnectivityNode or same TopologicalNode as well as for equipment between two terminals shall be consistent.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ACDCTerminal",mdxType:"Link"},"ACDCTerminal"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MktTerminal",mdxType:"Link"},"MktTerminal"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminals"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Conducting equipment have terminals that may be connected to other conducting equipment terminals via connectivity nodes or topological nodes."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The conducting equipment of the terminal.  Conducting equipment have  terminals that may be connected to other conducting equipment terminals via connectivity nodes or topological nodes.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConnectivityNode",mdxType:"Link"},"ConnectivityNode")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminals"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminals interconnected with zero impedance at a this connectivity node."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConnectivityNode"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The connectivity node to which this terminal connects with zero impedance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminals associated with the topological node.   This can be used as an alternative to the connectivity node path to terminal, thus making it unnecessary to model connectivity nodes in some cases.   Note that if connectivity nodes are in the model, this association would probably not be used as an input specification."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The topological node associated with the terminal.   This can be used as an alternative to the connectivity node path to topological node, thus making it unnecessary to model connectivity nodes in some cases.   Note that the if connectivity nodes are in the model, this association would probably not be used as an input specification.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",mdxType:"Link"},"RegulatingControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminal associated with this regulating control.  The terminal is associated instead of a node, since the terminal could connect into either a topological node or a connectivity node.  Sometimes it is useful to model regulation at a terminal of a bus bar object."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RegulatingControl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The controls regulating this terminal.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/BranchGroupTerminal",mdxType:"Link"},"BranchGroupTerminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BranchGroupTerminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The directed branch group terminals for which this terminal is monitored."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminal to be summed.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransformerEnd"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All transformer ends connected at this terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal of the power transformer to which this transformer end belongs.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/MutualCoupling",mdxType:"Link"},"MutualCoupling")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HasFirstMutualCoupling"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Mutual couplings associated with the branch as the first branch."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"First_Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The starting terminal for the calculation of distances along the first branch of the mutual coupling.  Normally MutualCoupling would only be used for terminals of AC line segments.  The first and second terminals of a mutual coupling should point to different AC line segments.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/MutualCoupling",mdxType:"Link"},"MutualCoupling")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HasSecondMutualCoupling"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Mutual couplings with the branch associated as the first branch."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Second_Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The starting terminal for the calculation of distances along the second branch of the mutual coupling.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",mdxType:"Link"},"AuxiliaryEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AuxiliaryEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The auxiliary equipment connected to the terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Terminal at the equipment where the AuxiliaryEquipment is attached.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/TieFlow",mdxType:"Link"},"TieFlow")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..2"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TieFlow"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The control area tie flows to which this terminal associates."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminal to which this tie flow belongs.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvPowerFlow",mdxType:"Link"},"SvPowerFlow")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SvPowerFlow"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The power flow state variable associated with the terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminal associated with the power flow state variable.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Faults/EquipmentFault",mdxType:"Link"},"EquipmentFault")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EquipmentFaults"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment faults at this terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminal connecting to the bus to which the fault is applied.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/ACDCConverter",mdxType:"Link"},"ACDCConverter")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConverterDCSides"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All converters' DC sides linked to this point of common coupling terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PccTerminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Point of common coupling terminal for this converter DC side. It is typically the terminal on the power transformer (or switch) closest to the AC network.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinTerminal",mdxType:"Link"},"PinTerminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PinTerminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Terminal that should be used in compare.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Feeder",mdxType:"Link"},"Feeder")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NormalHeadFeeder"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The feeder that this terminal normally feeds.  Only specified for the terminals at head of feeders."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NormalHeadTerminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The normal head terminal or terminals of the feeder.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/Feeder/Circuit",mdxType:"Link"},"Circuit")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Circuit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndTerminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardInterconnections/RemoteInputSignal",mdxType:"Link"},"RemoteInputSignal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RemoteInputSignal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input signal coming from this terminal."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Remote terminal with which this input signal is associated.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Bushing",mdxType:"Link"},"Bushing")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Bushing"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal to which this bushing is attached.")))))}O.isMDXComponent=!0},2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=m(a),j=n,d=s["".concat(c,".").concat(j)]||s[j]||O[j]||i;return a?r.a.createElement(d,l({ref:t},b,{components:a})):r.a.createElement(d,l({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2207),l=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var b=a(2210),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:O,href:s,activeClassName:j,isActive:d,"data-noBrokenLinkCheck":p,autoAddBaseUrl:f=!0}=e,u=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(b.b)(),C=Object(n.useContext)(o),h=O||s,N=Object(c.a)(h),T=null==h?void 0:h.replace("pathname://",""),y=void 0!==T?(I=T,f&&(e=>e.startsWith("/"))(I)?g(I):I):void 0;var I;const v=Object(n.useRef)(!1),w=a?i.e:i.c,E=l.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!E&&N&&window.docusaurus.prefetch(y),()=>{E&&k&&k.disconnect()})),[y,E,N]);const M=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,x=!y||!N||M;return y&&N&&!M&&!p&&C.collectLink(y),x?r.a.createElement("a",Object.assign({href:y},h&&!N&&{target:"_blank",rel:"noopener noreferrer"},u)):r.a.createElement(w,Object.assign({},u,{onMouseEnter:()=>{v.current||(window.docusaurus.preload(y),v.current=!0)},innerRef:e=>{var t,a;E&&e&&N&&(t=e,a=()=>{window.docusaurus.prefetch(y)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),a())}))})),k.observe(t))},to:y||""},a&&{isActive:d,activeClassName:j}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}}}]);