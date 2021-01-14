(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(6),r=(a(0),a(80)),l={id:"run-app",title:"Running the Application"},i={unversionedId:"run-app",id:"version-2.8.0/run-app",isDocsHomePage:!1,title:"Running the Application",description:"Configuration options for the GIS Network Extractor are provided as command line arguments.",source:"@site/versioned_docs\\version-2.8.0\\run-app.md",slug:"/run-app",permalink:"/evolve/docs/gis-network-extractor/run-app",version:"2.8.0",sidebar:"version-2.8.0/sidebar",previous:{title:"Input Files",permalink:"/evolve/docs/gis-network-extractor/input-files"}},c=[{value:"Command Line Options",id:"command-line-options",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]}],o={rightToc:c};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Configuration options for the GIS Network Extractor are provided as command line arguments."),Object(r.b)("h3",{id:"command-line-options"},"Command Line Options"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Configuration options for the GIS Network Extractor are provided as command line arguments.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-c <FILE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the cable types specification json file."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"./cable-types.json")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-n <FILE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the network hierarchy specification json file."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"./network-hierarchy.json")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-e <PATH>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The root path to be used for the output of the extractor (EWB network data)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"./ewb")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-ep <true or false>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if the phase information will be extracted from the source data. If disabled everything will be extracted as ABC."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-g <PATH>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path where the input GIS JSON files are located."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"./gis")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-m <PATH>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path where the input meter mappings csv files are located."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"./meter_mappings")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-pl <FILE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the poles data json file."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"./poles.json")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-nc <FILE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the nodes config json file."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"./nodes-config.json")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-lvt <NUMBER>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the LV voltage upper limit in volts (inclusive)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-mmdp <PATTERN>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the pattern used to represent dates for the records in the meter mappings csv files."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yyyyMMdd")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-mmfp <REGEX>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the file name pattern for meter mapping files."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NMI",Object(r.b)("em",{parentName:"td"},"TX_MAPPING"),"(\\d{8}).*","[.]","csv")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-pof <HOST> <PORT> <INSTANCE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PowerOn Fusion database connection configuration (Used for CRO extraction)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NULL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-dl")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to enable detailed logging of processing errors."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-dsc")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to disable running of the conductor stitching processor."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-p")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag that controls the formatting of json outputs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-h")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to display help message with the available command line options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"If the option for processing PowerOn Fusion is enabled, the following environment\nvariables must be set to connect to the PowerOn Fusion database."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Variable"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"ENMAC_USER")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The user for the PoF Oracle database."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"enmac"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"ENMAC_PASSWORD")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The password for the PoF Oracle database."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"password"))))),Object(r.b)("p",null,"To run the tool, execute the following command at a terminal."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"java -Xmx<heap size> -Xms<heap size> -jar <path to gis-network-extractor> -c <path to cable types file> -n <path to network hierarchy file> -g <path to gis input files directory> -e <path to output ewb data directory>  -pof <PoF Oracle host> <PoF Oracle port> <PoF Oracle instance>\n")),Object(r.b)("p",null,"where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"PoF databse connection environment variables have been defined. e.g. ",Object(r.b)("strong",{parentName:"p"},"ENMAC_USER"),"=enmac; ",Object(r.b)("strong",{parentName:"p"},"ENMAC_PASSWORD"),"=password;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"heap size is the desired size of the heap. e.g. 16g"))),Object(r.b)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),Object(r.b)("p",null,"PoF system with 2.5 million components requires around ",Object(r.b)("inlineCode",{parentName:"p"},"10GB")),Object(r.b)("p",null,"The LV Mapping data requires around ",Object(r.b)("inlineCode",{parentName:"p"},"2GB")),Object(r.b)("p",null,"Together with the process overhead, the recommended heap size is ",Object(r.b)("inlineCode",{parentName:"p"},"16GB")))}p.isMDXComponent=!0}}]);