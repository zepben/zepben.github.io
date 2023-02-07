(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(7),i=(t(0),t(99)),l={},c={type:"mdx",permalink:"/evolve/docs/migrator-sdk-jvm/release-notes",source:"@site/src/pages/release-notes.md"},o=[{value:"v0.8.0",id:"v080",children:[]},{value:"v0.7.0",id:"v070",children:[]},{value:"v0.6.0",id:"v060",children:[]},{value:"v0.5.0",id:"v050",children:[]},{value:"v0.4.0",id:"v040",children:[]},{value:"v0.3.0",id:"v030",children:[]},{value:"v0.2.0",id:"v020",children:[]},{value:"v0.1.0",id:"v010",children:[]}],s={toc:o};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h4",{id:"release-history"},"Release History"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Released"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v0100"}),"0.10.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"07 February 2023"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v090"}),"0.9.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"23 August 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v080"}),"0.8.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"11 May 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v070"}),"0.7.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"27 April 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v060"}),"0.6.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"03 March 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v050"}),"0.5.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"06 December 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v040"}),"0.4.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"24 November 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v030"}),"0.3.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"11 November 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v020"}),"0.2.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"10 November 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v010"}),"0.1.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"22 September 2021"))))),Object(i.a)("hr",null),Object(i.a)("p",null,"NOTE: This library is not yet stable, and breaking changes should be expected until a 1.0.0 release."),Object(i.a)("hr",null),Object(i.a)("h5",{id:"breaking-changes"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated SDK with breaking changes."),Object(i.a)("li",{parentName:"ul"},"Conversion of ",Object(i.a)("inlineCode",{parentName:"li"},"StdTwoWindingTransformer")," and ",Object(i.a)("inlineCode",{parentName:"li"},"StdThreeWindingTransformer")," now stores the type name in ",Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformerInfo.description")," rather than\n",Object(i.a)("inlineCode",{parentName:"li"},"TransformerEndInfo.description")),Object(i.a)("li",{parentName:"ul"},"Reorganised the ",Object(i.a)("inlineCode",{parentName:"li"},"processors")," package. This caused the packages of a lot of the classes to change. Please re-import any affected classes from their new\nlocations."),Object(i.a)("li",{parentName:"ul"},"Merged in the processing of energy sources from the GIS extractor. Energy sources will now be created only on feeders with no EHV, and on power transformers\nwithin EHV."),Object(i.a)("li",{parentName:"ul"},"The ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySource")," that is added to a ",Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformer")," by the ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySourceCreator")," will now be added to the terminal with the lowest HV voltage, with the\nmost phases.")),Object(i.a)("h5",{id:"new-features"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"PhaseConsistencyProcessor"),", which can be used to fix inconsistent phases in a ",Object(i.a)("inlineCode",{parentName:"li"},"NetworkService"),". This includes the following sub-processors:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"DroppedPhaseLoopFixer")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"IncompatiblePhaseFixer")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PhaseExtender")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"TransformerPhaseProcessor")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"XyPhaseProcessor")))),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"CroProcessorPoF"),", which can be used to extract ",Object(i.a)("inlineCode",{parentName:"li"},"OperationalRestriction")," instances from PowerOn Fusion/Advantage."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"DefaultValueProcessor"),", which can be used to run a set of ",Object(i.a)("inlineCode",{parentName:"li"},"DefaultValueAssigner")," instances."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"DuplicatePathConductorRemover"),", which can be used to remove duplicate conductors which share the same equipment on both ends."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"BypassedSwitchFixer"),", which removes any conductors which connect to multiple terminals of a single switch.")),Object(i.a)("h5",{id:"enhancements"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated ",Object(i.a)("inlineCode",{parentName:"li"},"IssueTrackerGroup")," to support finding trackers from delegated classes.")),Object(i.a)("h5",{id:"fixes"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Subclasses of ",Object(i.a)("inlineCode",{parentName:"li"},"IssueTrackerGroup")," now find trackers from their superclasses.")),Object(i.a)("h5",{id:"notes"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v080"},"v0.8.0"),Object(i.a)("h5",{id:"breaking-changes-1"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Reorganised packages between ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator")," and ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier"),":"),Object(i.a)("li",{parentName:"ul"},"Moved ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.datachecker")," to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier.datachecker"),"."),Object(i.a)("li",{parentName:"ul"},"Moved ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier.processors")," to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.processors"),".",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Excluded ",Object(i.a)("inlineCode",{parentName:"li"},"VoltageLevel")," from this move, instead moving it to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier"),"."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"assigners.EnergySourceProcessor")," to this package."))),Object(i.a)("li",{parentName:"ul"},"Moved ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.Services")," to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier.Services"),"."),Object(i.a)("li",{parentName:"ul"},"Updated network verifier library with breaking changes.")),Object(i.a)("h5",{id:"new-features-1"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added the following classes that are common to RDF importers:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"RdfElement"),", ",Object(i.a)("inlineCode",{parentName:"li"},"RdfAttribute"),", ",Object(i.a)("inlineCode",{parentName:"li"},"RdfMapper"),", and ",Object(i.a)("inlineCode",{parentName:"li"},"RdfMappingProcessor"),", under the ",Object(i.a)("inlineCode",{parentName:"li"},"rdf")," package."))),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"TestExtensions")," for the ",Object(i.a)("inlineCode",{parentName:"li"},"issues")," package to allow simple testing of summary line generation.")),Object(i.a)("h5",{id:"enhancements-1"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-1"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-1"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v070"},"v0.7.0"),Object(i.a)("h5",{id:"breaking-changes-2"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added assignment of default ",Object(i.a)("inlineCode",{parentName:"li"},"WireInfo")," based on voltage to ",Object(i.a)("inlineCode",{parentName:"li"},"AcLineSegmentDefaults"),".")),Object(i.a)("h5",{id:"new-features-2"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Phases are now set through transformers allowing for phase changes. Only valid phase mappings are currently supported. If a valid mapping has been missed, please contact Zepben."),Object(i.a)("li",{parentName:"ul"},"Added an AcLineSegment filter for the lines getting defaults applied using AcLineSegmentDefaults."),Object(i.a)("li",{parentName:"ul"},"Added an PowerTransformer filter for the txs getting defaults applied using PowerTransformerDefaults.")),Object(i.a)("h5",{id:"new-features-3"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added IssuesLog.")),Object(i.a)("h5",{id:"enhancements-2"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-2"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"SetDirection")," now correctly handles ",Object(i.a)("inlineCode",{parentName:"li"},"Switch")," instances without phases."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"SetPhases")," no longer removes phases when there is an LV loop with mixed single and 3-phase.")),Object(i.a)("h5",{id:"notes-2"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v060"},"v0.6.0"),Object(i.a)("h5",{id:"breaking-changes-3"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated evolve sdk dependency.")),Object(i.a)("h5",{id:"new-features-4"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"enhancements-3"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Setting ",Object(i.a)("inlineCode",{parentName:"li"},"isExternalGrid")," for ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySource")," instances created from SINCAL ",Object(i.a)("inlineCode",{parentName:"li"},"stdInfeeder"),"."),Object(i.a)("li",{parentName:"ul"},"Updated phase consistency check to use known nominal phases rather than traced normal phases where possible.")),Object(i.a)("h5",{id:"fixes-3"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"StdTwoWindingTransformer")," instances with autotransformer vector groups now correctly create a second end with a common winding.")),Object(i.a)("h5",{id:"notes-3"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v050"},"v0.5.0"),Object(i.a)("h5",{id:"breaking-changes-4"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"new-features-5"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"enhancements-4"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Enhanced the data checker to give a count of violations for a use case, rather than the number checks that had at least one failure.")),Object(i.a)("h5",{id:"fixes-4"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-4"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v040"},"v0.4.0"),Object(i.a)("h5",{id:"breaking-changes-5"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated validation to be in sync with version 0.2 of the EWB requirements.")),Object(i.a)("h5",{id:"new-features-6"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"enhancements-5"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-5"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-5"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v030"},"v0.3.0"),Object(i.a)("h5",{id:"breaking-changes-6"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"new-features-7"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated to use a newer verifier lib.")),Object(i.a)("h5",{id:"enhancements-6"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-6"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-6"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v020"},"v0.2.0"),Object(i.a)("h5",{id:"breaking-changes-7"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Removed ",Object(i.a)("inlineCode",{parentName:"li"},"VoltageLevel")," class and replaced it with ",Object(i.a)("inlineCode",{parentName:"li"},"VoltageLevel")," class in network-verifier-lib. Replace ",Object(i.a)("inlineCode",{parentName:"li"},"import com.zepben.migrator.VoltageLevel")," with\n",Object(i.a)("inlineCode",{parentName:"li"},"import com.zepben.verifier.processors.VoltageLevel")," to update your references.")),Object(i.a)("h5",{id:"new-features-8"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"customerService")," and ",Object(i.a)("inlineCode",{parentName:"li"},"metadata")," to ",Object(i.a)("inlineCode",{parentName:"li"},"Services"),"."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"UseCaseChecker")," class to check if a set of services fulfills the data quality requirements for common use cases")),Object(i.a)("h5",{id:"enhancements-7"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-7"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Fixed error setting fetch direction in ",Object(i.a)("inlineCode",{parentName:"li"},"QueryExecutor")," when using SQL Server.")),Object(i.a)("h5",{id:"notes-7"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v010"},"v0.1.0"),Object(i.a)("p",null,"Initial Release"),Object(i.a)("h5",{id:"breaking-changes-8"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Moved ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySourceProcessor")," from package ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.processors")," to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.processors.sources"),"."),Object(i.a)("li",{parentName:"ul"},"You now need to provide a ",Object(i.a)("inlineCode",{parentName:"li"},"SourceIssues")," instance to ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySourceProcessor"),"."),Object(i.a)("li",{parentName:"ul"},"Fix the ordering for the processing of TerminalReplacement instances from breadth first to depth first in the IncompatiblePhaseFixer. This prevents the phase\nfixing code from getting stuck in ABC to ABCN loops."),Object(i.a)("li",{parentName:"ul"},"Renamed ",Object(i.a)("inlineCode",{parentName:"li"},"FeederDirection.has")," to ",Object(i.a)("inlineCode",{parentName:"li"},"FeederDirection.contains"),", which can be used via its operator version ",Object(i.a)("inlineCode",{parentName:"li"},"in"),". e.g. ",Object(i.a)("inlineCode",{parentName:"li"},"BOTH.has(DOWNSTREAM)")," can be replaced with\n",Object(i.a)("inlineCode",{parentName:"li"},"BOTH.contains(DOWNSTREAM)")," or ",Object(i.a)("inlineCode",{parentName:"li"},"DOWNSTREAM in BOTH"))),Object(i.a)("h5",{id:"new-features-9"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"LvFeederCreator"),", which adds missing LV feeders to the secondary terminals of each distribution transformer."),Object(i.a)("li",{parentName:"ul"},"Added the following constants to ",Object(i.a)("inlineCode",{parentName:"li"},"AcLineSegmentDefaults")," for use with things such as internal conductors that are not real artefacts, or busbars or other zero\nlength cables/lines that have no provided impedance, type or rating details:")),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constant"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"ZEPBEN_ZERO_IMP_PLSI")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"A zero-impedance ",Object(i.a)("inlineCode",{parentName:"td"},"PerLengthLineImpedance")," used to give no impedance to a line, while also indicating that no impedance data was provided.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"ZEPBEN_UNRATED_WIRE_INFO")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ",Object(i.a)("inlineCode",{parentName:"td"},"OverheadWireInfo")," that has such a high rating it is essentially unrated, while also indicating that no cable type or rating information was provided.")))),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added VoltageProcessor - a helper processor that wraps the VoltageLevelAssigner and VoltageLevelVoltageAssigner"),Object(i.a)("li",{parentName:"ul"},"Added support for current transformers and power transformers with the following classes in ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.evolve.cim.*"),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"In ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.evolve.cim.iec61968.infiec61968.infassetinfo"),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"CurrentTransformerInfo"),": Properties of current transformer asset."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PotentialTransformerInfo"),": Properties of potential transformer asset."))),Object(i.a)("li",{parentName:"ul"},"In ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.evolve.cim.iec61968.infiec61968.infcommon"),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Ratio"),": Fraction specified explicitly with a numerator and denominator, which can be used to calculate the quotient."))),Object(i.a)("li",{parentName:"ul"},"In ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.evolve.cim.iec61970.base.auxiliaryequipment"),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"CurrentTransformer"),": Instrument transformer used to measure electrical qualities of the circuit that is being protected and/or monitored."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PotentialTransformer"),": Instrument transformer (also known as Voltage Transformer) used to measure electrical qualities of the circuit that\nis being protected and/or monitored."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PotentialTransformerKind"),": The construction kind of the potential transformer. (Enum)"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Sensor"),": This class describes devices that transform a measured quantity into signals that can be presented at displays,\nused in control or be recorded."))))),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformer().getEnd(Terminal)"),", which gets a ",Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformerEnd")," by the ",Object(i.a)("inlineCode",{parentName:"li"},"Terminal")," it's connected to."),Object(i.a)("li",{parentName:"ul"},"Added the following functions to ",Object(i.a)("inlineCode",{parentName:"li"},"ConnectedEquipmentTrace")," for creating traces that work on ",Object(i.a)("inlineCode",{parentName:"li"},"ConductingEquipment"),", and ignore phase connectivity, instead\nconsidering things to be connected if they share a ",Object(i.a)("inlineCode",{parentName:"li"},"ConnectivityNode"),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"newNormalDownstreamEquipmentTrace"),": Creates a trace that traverses in the downstream direction using the normal state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"newNormalUpstreamEquipmentTrace"),": Creates a trace that traverses in the upstream direction using the normal state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"newCurrentDownstreamEquipmentTrace"),": Creates a trace that traverses in the downstream direction using the current state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"newCurrentUpstreamEquipmentTrace"),": Creates a trace that traverses in the upstream direction using the current state of the network."))),Object(i.a)("li",{parentName:"ul"},"Added support for protection equipment with the following classes, enums, and fields:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"SwitchInfo"),": Switch datasheet information."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"ProtectionEquipment"),": An electrical device designed to respond to input conditions in a prescribed manner and after specified conditions are met to cause\ncontact operation or similar abrupt change in associated electric control circuits, or simply to display the detected condition."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"CurrentRelay"),": A device that checks current flow values in any direction or designated direction."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"CurrentRelayInfo"),": Current relay datasheet information."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"RecloseSequence"),": A reclose sequence (open and close) is defined for each possible reclosure of a breaker."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"ProtectionKind"),": The kind of protection being provided by this protection equipment."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"ProtectedSwitch::breakingCapacity"),": The maximum fault current in amps a breaking device can break safely under prescribed conditions of use."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Switch::ratedCurrent"),": The maximum continuous current carrying capacity in amps governed by the device material and construction.\nThe attribute shall be a positive value."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Breaker::inTransitTime"),": The transition time from open to close in seconds."))),Object(i.a)("li",{parentName:"ul"},"Added DTOs of the following CIM classes to support custom default configurations:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PerLengthSequenceImpedance")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"WireInfo")," - translates to either ",Object(i.a)("inlineCode",{parentName:"li"},"CableInfo")," or ",Object(i.a)("inlineCode",{parentName:"li"},"OverheadWireInfo")," depending on the ",Object(i.a)("inlineCode",{parentName:"li"},"isOverhead")," flag."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformerInfo"),", along with every directly and transitively referenced class (",Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformerInfo"),", ",Object(i.a)("inlineCode",{parentName:"li"},"TransformerEndInfo"),", etc.)."))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"AcLineSegmentDefaults")," now supports custom defaults for ",Object(i.a)("inlineCode",{parentName:"li"},"wireInfo")," and ",Object(i.a)("inlineCode",{parentName:"li"},"perLengthSequenceImpedance"),", configurable via the new constructor parameters\n",Object(i.a)("inlineCode",{parentName:"li"},"defaultWireInfo")," and ",Object(i.a)("inlineCode",{parentName:"li"},"defaultPerLengthSequenceImpedance")," respectively."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformerDefaults")," now supports a custom default for ",Object(i.a)("inlineCode",{parentName:"li"},"assetInfo"),", configurable via the new constructor parameter ",Object(i.a)("inlineCode",{parentName:"li"},"defaultPowerTransformerInfo"),".")),Object(i.a)("h5",{id:"enhancements-8"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated to the latest super pom."),Object(i.a)("li",{parentName:"ul"},"Energy sources created on feeder heads or substation transformers are now added to the ",Object(i.a)("inlineCode",{parentName:"li"},"Substation"),"."),Object(i.a)("li",{parentName:"ul"},"Added support to the ",Object(i.a)("inlineCode",{parentName:"li"},"TransformerPhaseProcessor")," for HV1 to LV2 transformers."),Object(i.a)("li",{parentName:"ul"},"Added support for split 3-phase backbones."),Object(i.a)("li",{parentName:"ul"},"Updated the phase consistency processing to prevent incorrect phases in the backbone of a feeder from severely breaking the feeder phasing by checking\ndownstream transformer phases for compatibility before spreading them. If they are not compatible with the transformers, repair the upstream path instead."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"FeederDirection.not")," operator function.")),Object(i.a)("h5",{id:"fixes-8"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Removed excess warnings from the ",Object(i.a)("inlineCode",{parentName:"li"},"TransformerPhaseProcessor")," about conflicting SWER voltages and phases when the transformer phasing is unknown."),Object(i.a)("li",{parentName:"ul"},"Prevented the ",Object(i.a)("inlineCode",{parentName:"li"},"IncompatiblePhaseFixer")," from removing valid phases when restoring the upstream path to a transformer."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"NetworkService.remove")," for ",Object(i.a)("inlineCode",{parentName:"li"},"LvFeeder")," function fixed (previously added instead)."),Object(i.a)("li",{parentName:"ul"},"Fixed bug where limited connected traces with ",Object(i.a)("inlineCode",{parentName:"li"},"maximumSteps = 1")," could include equipment 2 steps away when using a direction."),Object(i.a)("li",{parentName:"ul"},"The evolve-sdk now correctly assign AuxiliaryEquipment and ProtectionEquipment to Feeders and LvFeeders.")),Object(i.a)("h5",{id:"notes-8"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.\\n\\n---\\n")))}d.isMDXComponent=!0},99:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c({},a,{},e)),t},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,u=p["".concat(l,".").concat(m)]||p[m]||b[m]||i;return t?r.a.createElement(u,c({ref:a},s,{components:t})):r.a.createElement(u,c({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=p;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);