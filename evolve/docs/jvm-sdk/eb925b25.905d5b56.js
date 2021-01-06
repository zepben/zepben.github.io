(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),b=n(6),l=(n(0),n(77)),i={},r={type:"mdx",permalink:"/evolve/docs/jvm-sdk/release-notes",source:"@site/src\\pages\\release-notes.md"},c=[{value:"v0.3.0",id:"v030",children:[]},{value:"v0.2.0",id:"v020",children:[]},{value:"v0.1.0",id:"v010",children:[]}],o={rightToc:c};function d(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h4",{id:"release-history"},"Release History"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Released"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v030"}),"0.3.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"10 November 2020"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v020"}),"0.2.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"08 October 2020"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#v010"}),"0.1.0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"07 September 2020"))))),Object(l.b)("hr",null),Object(l.b)("p",null,"NOTE: This library is not yet stable, and breaking changes should be expected until a 1.0.0 release."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v030"},"v0.3.0"),Object(l.b)("h5",{id:"breaking-changes"},"Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tryGrpc")," no longer throws. Helper methods have been added to ",Object(l.b)("inlineCode",{parentName:"li"},"GrpcResult")," providing convenient ways of maintaining the previous functionality.")),Object(l.b)("h5",{id:"new-features"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Added ",Object(l.b)("inlineCode",{parentName:"li"},"getFeeder")," helper to the ",Object(l.b)("inlineCode",{parentName:"li"},"NetworkConsumerClient"),"."),Object(l.b)("li",{parentName:"ul"},"Added ",Object(l.b)("inlineCode",{parentName:"li"},"customer")," and ",Object(l.b)("inlineCode",{parentName:"li"},"diagram")," consumer clients."),Object(l.b)("li",{parentName:"ul"},"Added ",Object(l.b)("inlineCode",{parentName:"li"},"MetadataCollection")," allowing you to specify ",Object(l.b)("inlineCode",{parentName:"li"},"DataSource")," information.")),Object(l.b)("h5",{id:"enhancements"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The gRPC consumer and producer clients now share a common base class."),Object(l.b)("li",{parentName:"ul"},"Added primaryVoltage property to PowerTransformer for convenience.")),Object(l.b)("h5",{id:"fixes"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fixed null annotations on ",Object(l.b)("inlineCode",{parentName:"li"},"ConnectivityResult"),".")),Object(l.b)("h5",{id:"notes"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v020"},"v0.2.0"),Object(l.b)("h5",{id:"breaking-changes-1"},"Breaking Changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ConnectivityResult")," is now immutable.")),Object(l.b)("h5",{id:"new-features-1"},"New Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("h5",{id:"enhancements-1"},"Enhancements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Tweaked error handling in the ",Object(l.b)("inlineCode",{parentName:"li"},"put")," package.")),Object(l.b)("h5",{id:"fixes-1"},"Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Database upgrade now takes its backup before changing the version table to change sets."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RemovePhases")," now supports SWER."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FindWithUsagePoints")," now supports first terminal sequence numbers greater than one.")),Object(l.b)("h5",{id:"notes-1"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"v010"},"v0.1.0"),Object(l.b)("p",null,"Initial release containing the Zepben CIM profile, database ","[de]","serialisation, protobuf ","[de]","serialisation, network model tracing, and gRPC producer clients."))}d.isMDXComponent=!0}}]);