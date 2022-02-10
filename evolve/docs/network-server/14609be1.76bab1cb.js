(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),b=n(7),l=(n(0),n(124)),r={},i={type:"mdx",permalink:"/evolve/docs/network-server/release-notes",source:"@site/src/pages/release-notes.md"},c=[{value:"v2.4.0",id:"v240",children:[]},{value:"v2.3.0",id:"v230",children:[]},{value:"v2.2.0",id:"v220",children:[]},{value:"v2.1.0",id:"v210",children:[]},{value:"v2.0.0",id:"v200",children:[]},{value:"v1.2.0",id:"v120",children:[]},{value:"v1.1.0",id:"v110",children:[]}],o={toc:c};function d(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h4",{id:"release-history"},"Release History"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Date"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v240"}),"2.4.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"23 September 2021"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v230"}),"2.3.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"06 April 2021"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v220"}),"2.2.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"01 February 2021"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v210"}),"2.1.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"13 January 2021"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v200"}),"2.0.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"10 November 2020"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v120"}),"1.2.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"8 November 2019"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v110"}),"1.1.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"21 June 2019"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"7 March 2019"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v240"},"v2.4.0"),Object(l.b)("h5",{id:"breaking-changes"},"Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"All classes will now send their class name via the REST API rather than ",Object(l.b)("inlineCode",{parentName:"li"},"BasicNode")," if they did not exist in the old network model."),Object(l.b)("li",{parentName:"ul"},"ID correlations are no longer used. Equivalent functionality has been introduced into the CIM.")),Object(l.b)("h5",{id:"new-features"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The gRPC API now supports the following CIM classes:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"EquivalentBranch")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"NoLoadTest")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"OpenCircuitTest")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ShortCircuitTest")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ShuntCompensatorInfo")))),Object(l.b)("li",{parentName:"ul"},"Added ",Object(l.b)("inlineCode",{parentName:"li"},"isVirtual")," and ",Object(l.b)("inlineCode",{parentName:"li"},"connectionCategory")," to ",Object(l.b)("inlineCode",{parentName:"li"},"UsagePoint"))),Object(l.b)("h5",{id:"enhancements"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"fixes"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conductor colouring has been corrected in the graphics routes."),Object(l.b)("li",{parentName:"ul"},"Switch states have been corrected in the graphics routes.")),Object(l.b)("h5",{id:"notes"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v230"},"v2.3.0"),Object(l.b)("h5",{id:"breaking-changes-1"},"Breaking Changes"),Object(l.b)("p",null," None."),Object(l.b)("h5",{id:"new-features-1"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Added support for:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BusBarSection")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"LoadBreakSwitch")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TransformerEndInfo")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TransformerTankInfo")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TransformerStarImpedance")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"gRPC service to listen for switch state changes. Note functionality is not implemented yet, the request is just logged.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Added endpoint to request associated transformers and feeders for nmis - ",Object(l.b)("inlineCode",{parentName:"p"},"/ewb/network/api/v1/nmi-transformers-feeders"),". See the API documentation for details."))),Object(l.b)("h5",{id:"enhancements-1"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Asset response for equipment now includes location.")),Object(l.b)("h5",{id:"fixes-1"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"notes-1"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Updated to Vert.x 3.9.6.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v220"},"v2.2.0"),Object(l.b)("h5",{id:"breaking-changes-2"},"Breaking Changes"),Object(l.b)("p",null," None."),Object(l.b)("h5",{id:"new-features-2"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"enhancements-2"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"fixes-2"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"notes-2"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v210"},"v2.1.0"),Object(l.b)("h5",{id:"breaking-changes-3"},"Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Updated ewb-network-routes version to latest snapshot.")),Object(l.b)("h5",{id:"new-features-3"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Added a new route for retrieving metadata about the network - ",Object(l.b)("inlineCode",{parentName:"li"},"/ewb/network/api/v1/metadata"),".\nSee the API documentation for details.")),Object(l.b)("h5",{id:"enhancements-3"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"fixes-3"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Transformer voltage is extracted from the first of the transformer's ends.")),Object(l.b)("h5",{id:"notes-3"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v200"},"v2.0.0"),Object(l.b)("h5",{id:"breaking-changes-4"},"Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fault indicators are no longer included in network traces (including feeder assets)."),Object(l.b)("li",{parentName:"ul"},"Updated database version."),Object(l.b)("li",{parentName:"ul"},"Updated to use new patch API JSON format and layers.")),Object(l.b)("h5",{id:"new-features-4"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Added a new trace to find conducting equipment with attached usage points downstream from the\nspecified conducting equipment, with an optional conducting equipment stop condition to support\n"between" tracing. If there is no path between from -> to, a trace in the opposite direction will\nalso be performed (i.e. to -> from)'),Object(l.b)("li",{parentName:"ul"},"Support for load profile manipulation has been added to the patch processor. The final manipulation value is ",Object(l.b)("inlineCode",{parentName:"li"},"quantity / df"),"."),Object(l.b)("li",{parentName:"ul"},"A REST API has been added to retrieve load manipulations at ",Object(l.b)("inlineCode",{parentName:"li"},"/ewb/patch/api/v1/load-manipulations"),".\nSee the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.zepben.com"}),"online documentation")," for details. ")),Object(l.b)("h5",{id:"enhancements-4"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The mapbox vector tiles now include conductor paths if available.")),Object(l.b)("h5",{id:"fixes-4"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"notes-4"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v120"},"v1.2.0"),Object(l.b)("h5",{id:"breaking-changes-5"},"Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Updated to use v11.0 network database.")),Object(l.b)("h5",{id:"new-features-5"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Underground/Overhead conductors are now supported. A flag ",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"isUnderground"))," has been added to all JSON payloads that\nreturn conductor details.  "),Object(l.b)("li",{parentName:"ul"},"Conductor styling has been added in the Mapbox Vector Tile feature properties. You can use the ",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"lineColor")),", ",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"lineWidth")),"\nand ",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"isUnderground"))," properties of conductor features to control the rendering of map layers."),Object(l.b)("li",{parentName:"ul"},"Added an isolation trace API that can find all assets within a proposed isolation area.")),Object(l.b)("h5",{id:"enhancements-5"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HV supply point assets now include connected meter information like other supply points."),Object(l.b)("li",{parentName:"ul"},"A new field ",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"rating"))," has been added to all JSON payloads that return transformer details.")),Object(l.b)("h5",{id:"fixes-5"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Phases are now being inferred when the core configuration drops phases.")),Object(l.b)("h5",{id:"notes-5"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v110"},"v1.1.0"),Object(l.b)("h5",{id:"breaking-changes-6"},"Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Updated to use v10.0 network database.")),Object(l.b)("h5",{id:"new-features-6"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Patch actions are now processed in order based on type (add, modify then remove)."),Object(l.b)("li",{parentName:"ul"},"Support for system tags (e.g. GIS) has been added to all routes that use asset ID's."),Object(l.b)("li",{parentName:"ul"},"Filtering has been added to all routes."),Object(l.b)("li",{parentName:"ul"},"Routes that return terminals now include the terminals lat/lon."),Object(l.b)("li",{parentName:"ul"},"Added support for cut conductor processing.")),Object(l.b)("h5",{id:"enhancements-6"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Feeder start points can now be the feeder circuit breaker, but it will trace the zone if there is one."),Object(l.b)("li",{parentName:"ul"},"No longer warning about primary sources on feeders if the primary source is the feeder start point."),Object(l.b)("li",{parentName:"ul"},"Unknown layers now result in an error rather than aborting.")),Object(l.b)("h5",{id:"fixes-6"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"notes-6"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")))}d.isMDXComponent=!0}}]);