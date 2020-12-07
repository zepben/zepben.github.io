(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(2147)),b={title:"ReadingType"},c={unversionedId:"cim100/TC57CIM/IEC61968/Metering/ReadingType",id:"cim100/TC57CIM/IEC61968/Metering/ReadingType",isDocsHomePage:!1,title:"ReadingType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\ReadingType.md",slug:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/ReadingType",version:"current",sidebar:"docs",previous:{title:"ReadingQualityType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/ReadingQualityType"},next:{title:"Register",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/Register"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"Detailed description for a type of a reading value. Values in attributes allow for the creation of recommended codes to be used for identifying reading value types as follows: ",Object(i.b)("inlineCode",{parentName:"p"},"<macroPeriod>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<aggregate>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<measuringPeriod>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<accumulation>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<flowDirection>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<commodity>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<measurementKind>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<interharmonic.numerator>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<interharmonic.denominator>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<argument.numerator>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<argument.denominator>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<tou>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<cpp>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<consumptionTier>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<phases>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<multiplier>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<unit>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<currency>"),".  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"accumulation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/AccumulationKind"}),"AccumulationKind")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Accumulation behaviour of a reading over time, usually 'measuringPeriod', to be used with individual endpoints (as opposed to 'macroPeriod' and 'aggregate' that are used to describe aggregations of data from individual endpoints).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aggregate"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/AggregateKind"}),"AggregateKind")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Salient attribute of the reading data aggregated from individual endpoints. This is mainly used to define a mathematical operation carried out over 'macroPeriod', but may also be used to describe an attribute of the data when the 'macroPeriod' is not defined.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"argument"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/RationalNumber"}),"RationalNumber")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Argument used to introduce numbers into the unit of measure description where they are needed (e.g., 4 where the measure needs an argument such as CEMI(n=4)). Most arguments used in practice however will be integers (i.e., 'denominator'=1). Value 0 in 'numerator' and 'denominator' means not applicable.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"commodity"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/CommodityKind"}),"CommodityKind")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Commodity being measured.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"consumptionTier"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"In case of common flat-rate pricing for power, in which all purchases are at a given rate, 'consumptionTier'=0. Otherwise, the value indicates the consumption tier, which can be used in conjunction with TOU or CPP pricing. Consumption tier pricing refers to the method of billing in which a certain \"block\" of energy is purchased/sold at one price, after which the next block of energy is purchased at another price, and so on, all throughout a defined period. At the start of the defined period, consumption is initially zero, and any usage is measured against the first consumption tier ('consumptionTier'=1). If this block of energy is consumed before the end of the period, energy consumption moves to be reconed against the second consumption tier ('consumptionTier'=2), and so on. At the end of the defined period, the consumption accumulator is reset, and usage within the 'consumptionTier'=1 restarts.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cpp"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Critical peak period (CPP) bucket the reading value is attributed to. Value 0 means not applicable. Even though CPP is usually considered a specialised form of time of use 'tou', this attribute is defined explicitly for flexibility.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"currency"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Currency"}),"Currency")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific currency.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"flowDirection"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/FlowDirectionKind"}),"FlowDirectionKind")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow direction for a reading where the direction of flow of the commodity is important (for electricity measurements this includes current, energy, power, and demand).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"interharmonic"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ReadingInterharmonic"}),"ReadingInterharmonic")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indication of a \"harmonic\" or \"interharmonic\" basis for the measurement. Value 0 in 'numerator' and 'denominator' means not applicable.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"macroPeriod"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/MacroPeriodKind"}),"MacroPeriodKind")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time period of interest that reflects how the reading is viewed or captured over a long period of time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"measurementKind"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/MeasurementKind"}),"MeasurementKind")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identifies \"what\" is being measured, as refinement of 'commodity'. When combined with 'unit', it provides detail to the unit of measure. For example, 'energy' with a unit of measure of 'kWh' indicates to the user that active energy is being measured, while with 'kVAh' or 'kVArh', it indicates apparent energy and reactive energy, respectively. 'power' can be combined in a similar way with various power units of measure: Distortion power ('distortionVoltAmperes') with 'kVA' is different from 'power' with 'kVA'.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"measuringPeriod"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/MeasuringPeriodKind"}),"MeasuringPeriodKind")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time attribute inherent or fundamental to the reading value (as opposed to 'macroPeriod' that supplies an \"adjective\" to describe aspects of a time period with regard to the measurement). It refers to the way the value was originally measured and not to the frequency at which it is reported or presented. For example, an hourly interval of consumption data would have value 'hourly' as an attribute. However in the case of an hourly sampled voltage value, the meterReadings schema would carry the 'hourly' interval size information. It is common for meters to report demand in a form that is measured over the course of a portion of an hour, while enterprise applications however commonly assume the demand (in kW or kVAr) normalised to 1 hour. The system that receives readings directly from the meter therefore shall perform this transformation before publishing readings for use by the other enterprise systems. The scalar used is chosen based on the block size (not any sub-interval size).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"multiplier"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitMultiplier"}),"UnitMultiplier")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific multiplier.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phases"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode"}),"PhaseCode")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific phase code.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tou"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time of use (TOU) bucket the reading value is attributed to. Value 0 means not applicable.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unit"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol"}),"UnitSymbol")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific unit.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"}),"ConsumptionTariffInterval"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock"}),"IntervalBlock"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Metering/MetrologyRequirement"}),"MetrologyRequirement"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Metering/PendingCalculation"}),"PendingCalculation"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Metering/Reading"}),"Reading"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock"}),"IntervalBlock")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ReadingType"}),"ReadingType")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IntervalBlocks"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All blocks containing interval reading values with this type information."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type information for interval reading values contained in this block.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/MetrologyRequirement"}),"MetrologyRequirement")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ReadingType"}),"ReadingType")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MetrologyRequirements"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All metrology requirements that require this reading type to be collected."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingTypes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All reading types required to be collected by this metrology requirement.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/PendingCalculation"}),"PendingCalculation")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ReadingType"}),"ReadingType")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PendingCalculation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pending calculation that produced this reading type."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reading type resulting from this pending conversion.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/Reading"}),"Reading")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ReadingType"}),"ReadingType")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Readings"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All reading values with this type information."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type information for this reading value.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ReadingType"}),"ReadingType")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/Channel"}),"Channel")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reading type for register values reported/collected by this channel."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Channel"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Channel reporting/collecting register values with this type information.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"}),"ConsumptionTariffInterval")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ReadingType"}),"ReadingType")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All tariff intervals with consumption described by this reading type."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reading type for 'startValue'.")))))}d.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(a),O=n,j=m["".concat(b,".").concat(O)]||m[O]||p[O]||i;return a?r.a.createElement(j,c({ref:t},l,{components:a})):r.a.createElement(j,c({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var l=2;l<i;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);