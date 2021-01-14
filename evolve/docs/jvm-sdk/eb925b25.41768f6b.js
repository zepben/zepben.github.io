(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(98)),l={},o={type:"mdx",permalink:"/evolve/docs/jvm-sdk/release-notes",source:"@site/src\\pages\\release-notes.md"},c=[{value:"v0.4.0",id:"v040",children:[]},{value:"v0.3.0",id:"v030",children:[]},{value:"v0.2.0",id:"v020",children:[]},{value:"v0.1.0",id:"v010",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h4",{id:"release-history"},"Release History"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Released"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"#v040"}),"0.4.0")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("inlineCode",{parentName:"td"},"12 January 2021"))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"#v030"}),"0.3.0")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("inlineCode",{parentName:"td"},"10 November 2020"))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"#v020"}),"0.2.0")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("inlineCode",{parentName:"td"},"08 October 2020"))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"#v010"}),"0.1.0")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.a)("inlineCode",{parentName:"td"},"07 September 2020"))))),Object(r.a)("hr",null),Object(r.a)("p",null,"NOTE: This library is not yet stable, and breaking changes should be expected until a 1.0.0 release."),Object(r.a)("hr",null),Object(r.a)("h3",{id:"v040"},"v0.4.0"),Object(r.a)("h5",{id:"breaking-changes"},"Breaking Changes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Updated logic for the PhaseInferrer. When trying to fix missing phases it will first check if it has nominal phase data available and use it before trying to infer the phase."),Object(r.a)("li",{parentName:"ul"},"The ",Object(r.a)("inlineCode",{parentName:"li"},"AssignToFeeders")," was changed to assign all ",Object(r.a)("inlineCode",{parentName:"li"},"ConductingEquipment")," on the ",Object(r.a)("inlineCode",{parentName:"li"},"normalHeadTerminal")," side\n(inclusive) stopping at open points, head equipment for other feeders and substation transformers."),Object(r.a)("li",{parentName:"ul"},"You can no longer run ",Object(r.a)("inlineCode",{parentName:"li"},"AssignToFeeders")," directly on a feeder."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"getIdentifiedObjects")," in the consumer clients now returns a ",Object(r.a)("inlineCode",{parentName:"li"},"GrpcResult")," of a ",Object(r.a)("inlineCode",{parentName:"li"},"MultiObjectResult"),", which includes the map of objects added plus a new field\n",Object(r.a)("inlineCode",{parentName:"li"},"failed")," which is the set of mRIDs that were not added to the service because another object with the same ",Object(r.a)("inlineCode",{parentName:"li"},"mRID")," already existed."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"getFeeder")," in ",Object(r.a)("inlineCode",{parentName:"li"},"NetworkConsumerClient")," now returns a ",Object(r.a)("inlineCode",{parentName:"li"},"GrpcResult")," as per ",Object(r.a)("inlineCode",{parentName:"li"},"getIdentifiedObjects")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"addFromPb")," now return nullable types. They will return null when adding to the service returns ",Object(r.a)("inlineCode",{parentName:"li"},"false"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"NetworkProtoToCim.toCim(ConnectivityNode)")," will no longer update an existing ConnectivityNode if it already exists in the service. This brings the\nserialisation into line with all other ",Object(r.a)("inlineCode",{parentName:"li"},"toCim()")," functions, however means that deserialising the same ",Object(r.a)("inlineCode",{parentName:"li"},"ConnectivityNode")," multiple times will now fail rather\nthan merging the ",Object(r.a)("inlineCode",{parentName:"li"},"ConnectivityNode"),"s."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"Equipment")," is now added to a ",Object(r.a)("inlineCode",{parentName:"li"},"Feeder")," even if the phasing is broken. Side effect of this is un-ganged normal switching will no longer assign feeders\ncorrectly."),Object(r.a)("li",{parentName:"ul"},"Packages have been reworked, you will need to update your imports."),Object(r.a)("li",{parentName:"ul"},"Removed obsolete ",Object(r.a)("inlineCode",{parentName:"li"},"PositionPointParser"),"."),Object(r.a)("li",{parentName:"ul"},"Improved connectivity when using XY phasing.")),Object(r.a)("h5",{id:"new-features"},"New Features"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"None.")),Object(r.a)("h5",{id:"enhancements"},"Enhancements"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Updated ",Object(r.a)("inlineCode",{parentName:"li"},"Feeder")," to allow for updating the ",Object(r.a)("inlineCode",{parentName:"li"},"normalHeadTerminal")," if the feeder has no equipment assigned."),Object(r.a)("li",{parentName:"ul"},"Added transformer utilisation property to PowerTransformer class"),Object(r.a)("li",{parentName:"ul"},"PhaseInferrer now supports Neutral phase.")),Object(r.a)("h5",{id:"fixes"},"Fixes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"None.")),Object(r.a)("h5",{id:"notes"},"Notes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"None.")),Object(r.a)("hr",null),Object(r.a)("h3",{id:"v030"},"v0.3.0"),Object(r.a)("h5",{id:"breaking-changes-1"},"Breaking Changes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"tryGrpc")," no longer throws. Helper methods have been added to ",Object(r.a)("inlineCode",{parentName:"li"},"GrpcResult")," providing convenient ways of maintaining the previous functionality.")),Object(r.a)("h5",{id:"new-features-1"},"New Features"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Added ",Object(r.a)("inlineCode",{parentName:"li"},"getFeeder")," helper to the ",Object(r.a)("inlineCode",{parentName:"li"},"NetworkConsumerClient"),"."),Object(r.a)("li",{parentName:"ul"},"Added ",Object(r.a)("inlineCode",{parentName:"li"},"customer")," and ",Object(r.a)("inlineCode",{parentName:"li"},"diagram")," consumer clients."),Object(r.a)("li",{parentName:"ul"},"Added ",Object(r.a)("inlineCode",{parentName:"li"},"MetadataCollection")," allowing you to specify ",Object(r.a)("inlineCode",{parentName:"li"},"DataSource")," information.")),Object(r.a)("h5",{id:"enhancements-1"},"Enhancements"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"The gRPC consumer and producer clients now share a common base class."),Object(r.a)("li",{parentName:"ul"},"Added primaryVoltage property to PowerTransformer for convenience.")),Object(r.a)("h5",{id:"fixes-1"},"Fixes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Fixed null annotations on ",Object(r.a)("inlineCode",{parentName:"li"},"ConnectivityResult"),".")),Object(r.a)("h5",{id:"notes-1"},"Notes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"None.")),Object(r.a)("hr",null),Object(r.a)("h3",{id:"v020"},"v0.2.0"),Object(r.a)("h5",{id:"breaking-changes-2"},"Breaking Changes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"ConnectivityResult")," is now immutable.")),Object(r.a)("h5",{id:"new-features-2"},"New Features"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"None.")),Object(r.a)("h5",{id:"enhancements-2"},"Enhancements"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Tweaked error handling in the ",Object(r.a)("inlineCode",{parentName:"li"},"put")," package.")),Object(r.a)("h5",{id:"fixes-2"},"Fixes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Database upgrade now takes its backup before changing the version table to change sets."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"RemovePhases")," now supports SWER."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"FindWithUsagePoints")," now supports first terminal sequence numbers greater than one.")),Object(r.a)("h5",{id:"notes-2"},"Notes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"None.")),Object(r.a)("hr",null),Object(r.a)("h3",{id:"v010"},"v0.1.0"),Object(r.a)("p",null,"Initial release containing the Zepben CIM profile, database ","[de]","serialisation, protobuf ","[de]","serialisation, network model tracing, and gRPC producer clients."))}b.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,O=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?i.a.createElement(O,o({ref:t},s,{components:a})):i.a.createElement(O,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);