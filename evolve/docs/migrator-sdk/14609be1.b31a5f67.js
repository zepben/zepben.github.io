(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{73:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return s}));var n=t(3),l=t(7),i=(t(0),t(98)),r={},c={type:"mdx",permalink:"/evolve/docs/migrator-sdk-jvm/release-notes",source:"@site/src/pages/release-notes.md"},o=[{value:"v0.8.0",id:"v080",children:[]},{value:"v0.7.0",id:"v070",children:[]},{value:"v0.6.0",id:"v060",children:[]},{value:"v0.5.0",id:"v050",children:[]},{value:"v0.4.0",id:"v040",children:[]},{value:"v0.3.0",id:"v030",children:[]},{value:"v0.2.0",id:"v020",children:[]},{value:"v0.1.0",id:"v010",children:[]}],b={toc:o};function s(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h4",{id:"release-history"},"Release History"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Released"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v090"}),"0.9.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"23 August 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v080"}),"0.8.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"11 May 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v070"}),"0.7.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"27 April 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v060"}),"0.6.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"03 March 2022"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v050"}),"0.5.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"06 December 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v040"}),"0.4.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"24 November 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v030"}),"0.3.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"11 November 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v020"}),"0.2.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"10 November 2021"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"#v010"}),"0.1.0")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"22 September 2021"))))),Object(i.a)("hr",null),Object(i.a)("p",null,"NOTE: This library is not yet stable, and breaking changes should be expected until a 1.0.0 release."),Object(i.a)("hr",null),Object(i.a)("h5",{id:"breaking-changes"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated SDK with breaking changes."),Object(i.a)("li",{parentName:"ul"},"Conversion of ",Object(i.a)("inlineCode",{parentName:"li"},"StdTwoWindingTransformer")," and ",Object(i.a)("inlineCode",{parentName:"li"},"StdThreeWindingTransformer")," now stores the type name in ",Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformerInfo.description")," rather than\n",Object(i.a)("inlineCode",{parentName:"li"},"TransformerEndInfo.description")),Object(i.a)("li",{parentName:"ul"},"Reorganised the ",Object(i.a)("inlineCode",{parentName:"li"},"processors")," package. This caused the packages of a lot of the classes to change. Please re-import any affected classes from their new\nlocations."),Object(i.a)("li",{parentName:"ul"},"Merged in the processing of energy sources from the GIS extractor. Energy sources will now be created only on feeders with no EHV, and on power transformers\nwithin EHV."),Object(i.a)("li",{parentName:"ul"},"The ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySource")," that is added to a ",Object(i.a)("inlineCode",{parentName:"li"},"PowerTransformer")," by the ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySourceCreator")," will now be added to the terminal with the lowest HV voltage, with the\nmost phases.")),Object(i.a)("h5",{id:"new-features"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"PhaseConsistencyProcessor"),", which can be used to fix inconsistent phases in a ",Object(i.a)("inlineCode",{parentName:"li"},"NetworkService"),". This includes the following sub-processors:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"DroppedPhaseLoopFixer")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"IncompatiblePhaseFixer")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PhaseExtender")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"TransformerPhaseProcessor")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"XyPhaseProcessor")))),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"CroProcessorPoF"),", which can be used to extract ",Object(i.a)("inlineCode",{parentName:"li"},"OperationalRestriction")," instances from PowerOn Fusion/Advantage."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"DefaultValueProcessor"),", which can be used to run a set of ",Object(i.a)("inlineCode",{parentName:"li"},"DefaultValueAssigner")," instances."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"DuplicatePathConductorRemover"),", which can be used to remove duplicate conductors which share the same equipment on both ends."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"BypassedSwitchFixer"),", which removes any conductors which connect to multiple terminals of a single switch.")),Object(i.a)("h5",{id:"enhancements"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated ",Object(i.a)("inlineCode",{parentName:"li"},"IssueTrackerGroup")," to support finding trackers from delegated classes.")),Object(i.a)("h5",{id:"fixes"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Subclasses of ",Object(i.a)("inlineCode",{parentName:"li"},"IssueTrackerGroup")," now find trackers from their superclasses.")),Object(i.a)("h5",{id:"notes"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v080"},"v0.8.0"),Object(i.a)("h5",{id:"breaking-changes-1"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Reorganised packages between ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator")," and ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier"),":"),Object(i.a)("li",{parentName:"ul"},"Moved ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.datachecker")," to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier.datachecker"),"."),Object(i.a)("li",{parentName:"ul"},"Moved ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier.processors")," to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.processors"),".",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Excluded ",Object(i.a)("inlineCode",{parentName:"li"},"VoltageLevel")," from this move, instead moving it to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier"),"."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"assigners.EnergySourceProcessor")," to this package."))),Object(i.a)("li",{parentName:"ul"},"Moved ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.migrator.Services")," to ",Object(i.a)("inlineCode",{parentName:"li"},"com.zepben.verifier.Services"),"."),Object(i.a)("li",{parentName:"ul"},"Updated network verifier library with breaking changes.")),Object(i.a)("h5",{id:"new-features-1"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added the following classes that are common to RDF importers:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"RdfElement"),", ",Object(i.a)("inlineCode",{parentName:"li"},"RdfAttribute"),", ",Object(i.a)("inlineCode",{parentName:"li"},"RdfMapper"),", and ",Object(i.a)("inlineCode",{parentName:"li"},"RdfMappingProcessor"),", under the ",Object(i.a)("inlineCode",{parentName:"li"},"rdf")," package."))),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"TestExtensions")," for the ",Object(i.a)("inlineCode",{parentName:"li"},"issues")," package to allow simple testing of summary line generation.")),Object(i.a)("h5",{id:"enhancements-1"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-1"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-1"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v070"},"v0.7.0"),Object(i.a)("h5",{id:"breaking-changes-2"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added assignment of default ",Object(i.a)("inlineCode",{parentName:"li"},"WireInfo")," based on voltage to ",Object(i.a)("inlineCode",{parentName:"li"},"AcLineSegmentDefaults"),".")),Object(i.a)("h5",{id:"new-features-2"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Phases are now set through transformers allowing for phase changes. Only valid phase mappings are currently supported. If a valid mapping has been missed, please contact Zepben."),Object(i.a)("li",{parentName:"ul"},"Added an AcLineSegment filter for the lines getting defaults applied using AcLineSegmentDefaults."),Object(i.a)("li",{parentName:"ul"},"Added an PowerTransformer filter for the txs getting defaults applied using PowerTransformerDefaults.")),Object(i.a)("h5",{id:"new-features-3"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added IssuesLog.")),Object(i.a)("h5",{id:"enhancements-2"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-2"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"SetDirection")," now correctly handles ",Object(i.a)("inlineCode",{parentName:"li"},"Switch")," instances without phases."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"SetPhases")," no longer removes phases when there is an LV loop with mixed single and 3-phase.")),Object(i.a)("h5",{id:"notes-2"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v060"},"v0.6.0"),Object(i.a)("h5",{id:"breaking-changes-3"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated evolve sdk dependency.")),Object(i.a)("h5",{id:"new-features-4"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"enhancements-3"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Setting ",Object(i.a)("inlineCode",{parentName:"li"},"isExternalGrid")," for ",Object(i.a)("inlineCode",{parentName:"li"},"EnergySource")," instances created from SINCAL ",Object(i.a)("inlineCode",{parentName:"li"},"stdInfeeder"),"."),Object(i.a)("li",{parentName:"ul"},"Updated phase consistency check to use known nominal phases rather than traced normal phases where possible.")),Object(i.a)("h5",{id:"fixes-3"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"StdTwoWindingTransformer")," instances with autotransformer vector groups now correctly create a second end with a common winding.")),Object(i.a)("h5",{id:"notes-3"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v050"},"v0.5.0"),Object(i.a)("h5",{id:"breaking-changes-4"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"new-features-5"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"enhancements-4"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Enhanced the data checker to give a count of violations for a use case, rather than the number checks that had at least one failure.")),Object(i.a)("h5",{id:"fixes-4"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-4"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v040"},"v0.4.0"),Object(i.a)("h5",{id:"breaking-changes-5"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated validation to be in sync with version 0.2 of the EWB requirements.")),Object(i.a)("h5",{id:"new-features-6"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"enhancements-5"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-5"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-5"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v030"},"v0.3.0"),Object(i.a)("h5",{id:"breaking-changes-6"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"new-features-7"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Updated to use a newer verifier lib.")),Object(i.a)("h5",{id:"enhancements-6"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-6"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"notes-6"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v020"},"v0.2.0"),Object(i.a)("h5",{id:"breaking-changes-7"},"Breaking Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Removed ",Object(i.a)("inlineCode",{parentName:"li"},"VoltageLevel")," class and replaced it with ",Object(i.a)("inlineCode",{parentName:"li"},"VoltageLevel")," class in network-verifier-lib. Replace ",Object(i.a)("inlineCode",{parentName:"li"},"import com.zepben.migrator.VoltageLevel")," with\n",Object(i.a)("inlineCode",{parentName:"li"},"import com.zepben.verifier.processors.VoltageLevel")," to update your references.")),Object(i.a)("h5",{id:"new-features-8"},"New Features"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"customerService")," and ",Object(i.a)("inlineCode",{parentName:"li"},"metadata")," to ",Object(i.a)("inlineCode",{parentName:"li"},"Services"),"."),Object(i.a)("li",{parentName:"ul"},"Added ",Object(i.a)("inlineCode",{parentName:"li"},"UseCaseChecker")," class to check if a set of services fulfills the data quality requirements for common use cases")),Object(i.a)("h5",{id:"enhancements-7"},"Enhancements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("h5",{id:"fixes-7"},"Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Fixed error setting fetch direction in ",Object(i.a)("inlineCode",{parentName:"li"},"QueryExecutor")," when using SQL Server.")),Object(i.a)("h5",{id:"notes-7"},"Notes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None.")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"v010"},"v0.1.0"),Object(i.a)("p",null,"Initial Release"))}s.isMDXComponent=!0}}]);