(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(100)),i={id:"home",title:"PoF Simplified Extractor",slug:"/"},o={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"PoF Simplified Extractor",description:"A tool for pulling out the specified elements from a PowerOn Fusion database.",source:"@site/docs/readme.md",slug:"/",permalink:"/evolve/docs/pof-simplified-extractor/next/",version:"current",sidebar:"sidebar",next:{title:"Overview",permalink:"/evolve/docs/pof-simplified-extractor/next/overview"}},c=[{value:"Extracting",id:"extracting",children:[{value:"Command Line Arguments",id:"command-line-arguments",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"PoF Attributes",id:"pof-attributes",children:[]},{value:"PoF Classes",id:"pof-classes",children:[]},{value:"Database User",id:"database-user",children:[]},{value:"Configuration File",id:"configuration-file",children:[]}]}],b={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"A tool for pulling out the specified elements from a PowerOn Fusion database."),Object(l.a)("h2",{id:"extracting"},"Extracting"),Object(l.a)("p",null,"Before you run the extractor, please make sure you have completed the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#configuration"}),"configuration")," and are familiar with the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#command-line-arguments"}),"command line arguments"),". You need to install java 11 (or higher) in order to run the PoF simplified extractor."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{}),"java [jvm options] -jar pof-simplified-extractor-current.jar [command line arguments]\n")),Object(l.a)("p",null,"example:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{}),"java -Xmx16g -Xms16g -Dfile.encoding=UTF-8 -jar pof-simplified-extractor-current.jar -s enmacdb -ewb \\ewb\\data -f\n")),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"parameter"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"explanation"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-Xmx16g -Xms16g")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"give the JVM 16GB of memory")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-Dfile.encoding=UTF-8")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"tell the JVM to use UTF-8 encoding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-s enmacdb")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"change the enmac database server to ",Object(l.a)("inlineCode",{parentName:"td"},"enmacdb"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-ewb \\ewb\\data")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"change the ewb data path to ",Object(l.a)("inlineCode",{parentName:"td"},"/ewb/data"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-f")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"force override any existing database for today")))),Object(l.a)("h3",{id:"command-line-arguments"},"Command Line Arguments"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{}),"usage: pof-simplified-extractor [-c <CONFIGURATION>] [-cdg] [-d <DATE>]\n       [-dl] [-dt <DATABASE_TYPE>] [-ewb <PATH>] [-f] [-h] [-i <instance>]\n       [-is] [-p <port>] [-s <SERVER>]\n\nExtracts the simplified model out of a PowerOn Fusion server.\n\n -c,--conf <CONFIGURATION>             use the specified configuration\n                                       file (DEFAULT: ./config.json).\n -cdg,--create-debug-geo               create a debug view of the\n                                       schematic in the geo world\n                                       (DEFAULT: false).\n -d,--date <DATE>                      use the specified date(yyyy-MM-dd)\n                                       for the output extract directory\n                                       structure (DEFAULT: Current local\n                                       date).\n -dl,--detailed-log                    used to show a detailed messages\n                                       for each warning collected in the\n                                       summary outputs (DEFAULT: false).\n -dt,--database-type <DATABASE_TYPE>   the PowerOn Fusion database type\n                                       (DEFAULT: ORACLE). One of [ORACLE,\n                                       SQLSERVER].\n -ewb,--ewb-data-path <PATH>           export the EWB database into the\n                                       specified data store (DEFAULT:\n                                       ./data).\n -f,--force-data-overwrite             Overwrites any data found in the\n                                       output extract path (DEFAULT:\n                                       Program fails and warns you of the\n                                       presence of files in the output\n                                       path).\n -h,--help                             shows this help message.\n -i,--instance <instance>              the instance/database name to use\n                                       for the network extraction\n                                       (DEFAULT: nms for ORACLE, none for\n                                       SQLSERVER).\n -is,--integrated-security             enable integrated security for the\n                                       database connection. (DEFAULT:\n                                       false).\n -p,--port <port>                      the port number used to connect to\n                                       the database (DEFAULT: 1521 for\n                                       ORACLE, 1433 for SQLSERVER).\n -s,--server <SERVER>                  the PowerOn Fusion server to use\n                                       for the network extraction\n                                       (DEFAULT: localhost).\n")),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},"NOTE:"),Object(l.a)("p",{parentName:"blockquote"},"To use integrated security with SQLServer you need to have a copy of the Microsoft authentication DLL ",Object(l.a)("inlineCode",{parentName:"p"},"mssql-jdbc_auth-#.#.#.x64.dll")," installed on your system,\nor in the same directory as the JAR. If you do not have a copy you can download it from\n",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.microsoft.sqlserver/mssql-jdbc_auth"}),"Maven Central"),".")),Object(l.a)("h2",{id:"configuration"},"Configuration"),Object(l.a)("h3",{id:"pof-attributes"},"PoF Attributes"),Object(l.a)("p",null,"You will need to create four scalar attributes on each node you wish to include in the final extract:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example Name"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Logical"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if the node is included in the extract"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Include in Model")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Char 32"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the CIM class used to represent the node"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CIM Class")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Char 32"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the diagram styling of the node"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Diagram Object Style")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int 32"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the standard types lookup id used for configuration data for the node if required."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sincal Element ID")))),Object(l.a)("p",null,"The CIM class attribute should be configured to be a lookup with the following values:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"AcLineSegment"),Object(l.a)("li",{parentName:"ul"},"Breaker"),Object(l.a)("li",{parentName:"ul"},"Disconnector"),Object(l.a)("li",{parentName:"ul"},"EnergyConsumer"),Object(l.a)("li",{parentName:"ul"},"EnergySource"),Object(l.a)("li",{parentName:"ul"},"Fuse"),Object(l.a)("li",{parentName:"ul"},"Jumper"),Object(l.a)("li",{parentName:"ul"},"Junction"),Object(l.a)("li",{parentName:"ul"},"LinearShuntCompensator"),Object(l.a)("li",{parentName:"ul"},"LoadBreakSwitch"),Object(l.a)("li",{parentName:"ul"},"PowerTransformer"),Object(l.a)("li",{parentName:"ul"},"Recloser"),Object(l.a)("li",{parentName:"ul"},"Substation"),Object(l.a)("li",{parentName:"ul"},"SubGeographicalRegion"),Object(l.a)("li",{parentName:"ul"},"GeographicalRegion")),Object(l.a)("p",null,"The diagram object style attribute should be configured to be a lookup with the following values:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"ARC_CHUTE"),Object(l.a)("li",{parentName:"ul"},"BRIDGE"),Object(l.a)("li",{parentName:"ul"},"CB"),Object(l.a)("li",{parentName:"ul"},"DISCONNECTOR"),Object(l.a)("li",{parentName:"ul"},"DIST_TRANSFORMER"),Object(l.a)("li",{parentName:"ul"},"ENERGY_SOURCE"),Object(l.a)("li",{parentName:"ul"},"FEEDER_CB"),Object(l.a)("li",{parentName:"ul"},"FLICKER_BLADE"),Object(l.a)("li",{parentName:"ul"},"FUSE"),Object(l.a)("li",{parentName:"ul"},"GAS_INSULATED"),Object(l.a)("li",{parentName:"ul"},"JUMPER"),Object(l.a)("li",{parentName:"ul"},"JUNCTION"),Object(l.a)("li",{parentName:"ul"},"ISO_TRANSFORMER"),Object(l.a)("li",{parentName:"ul"},"LIVE_LINE_CLAMP"),Object(l.a)("li",{parentName:"ul"},"NON_REVERSIBLE_REGULATOR"),Object(l.a)("li",{parentName:"ul"},"NONE"),Object(l.a)("li",{parentName:"ul"},"RECLOSER"),Object(l.a)("li",{parentName:"ul"},"REVERSIBLE_REGULATOR"),Object(l.a)("li",{parentName:"ul"},"SHUNT_COMPENSATOR"),Object(l.a)("li",{parentName:"ul"},"SWITCH"),Object(l.a)("li",{parentName:"ul"},"USAGE_POINT"),Object(l.a)("li",{parentName:"ul"},"ZONE_TRANSFORMER")),Object(l.a)("h3",{id:"pof-classes"},"PoF Classes"),Object(l.a)("p",null,"You will need to have three distinct classes (new or existing):"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Requirements"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"To control the detection of busbars"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must be connected inline as part of the busbar section")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"To control the detection of lines"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must be connected inline as part of the line and be placed beyond the last included node of the substation.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"To control the placement of equivalent injection points for energising the model"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must be connected to the network, either inline or on a spur")))),Object(l.a)("h3",{id:"database-user"},"Database User"),Object(l.a)("p",null,"If integrated security is not enabled, the username and password for the database connection are provided by two environment variables:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Environment Variable"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENMAC_USER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"enmac")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENMAC_PASSWORD"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"password")))),Object(l.a)("p",null,"These can either be set permanently or injected via a script."),Object(l.a)("h3",{id:"configuration-file"},"Configuration File"),Object(l.a)("p",null,"Specification:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"lines",lines:!0}),'{\n    "ewbDataDirectory": string, // path to ewb data directory\n    "worlds": [int], // array of world indexes\n    "includeAttribute": string, // attribute name which controls if nodes are included\n    "cimClassAttribute": string, //attribute name mapping the node to a CIM class\n    "diagramObjectStyleAttribute": string, //attribute name mapping a node to a diagram object style\n    "sincalMappingAttribute": string, //attribute name mapping to the std types lookup\n    "cimNameAttribute": string, //attribute name to use instead of component pathname\n    "excludeVoltage": int, // voltage to exclude from in volts\n    "busbarClass": { // defines the special class used to detect busbars\n        "componentClass": int, // class index\n        "nameAttribute": optional string // attribute name\n    },\n    "equivalentInjectionClass": { // defines the special class used to detect injection points\n        "componentClass": int, // class index\n        "nameAttribute": optional string // attribute name\n    },\n    "lineClass": { // defines the special class used to detect lines between substations\n        "componentClass": int, // class index\n        "nameAttribute": optional string // attribute name\n    },\n    "stdTypesDatabase": string, // path to mdb or sqlite file\n    "pofTableNames": { // optional. Allows overriding table names to specify schema/database names if required (e.g. SQLServer connections).\n        "componentHeader": optional string, // default "COMPONENT_HEADER"\n        "componentAttributes": optional string, // default "COMPONENT_ATTRIBUTES"\n        "hotSpotPositions": optional string, // default "HOT_SPOT_POSITIONS"\n        "connections": optional string // default "CONNECTIONS"\n    }\n}\n\n}\n')),Object(l.a)("p",null,"Example:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "ewbDataDirectory": "../ewb/data",\n    "worlds": [101],\n    "includeAttribute": "Include in Model",\n    "cimClassAttribute": "CIM Class",\n    "diagramObjectStyleAttribute": "Diagram Object Style",\n    "sincalMappingAttribute": "Sincal Element ID",\n    "cimNameAttribute": "CIM Name",\n    "excludeVoltage": 330000,\n    "busbarClass": {\n        "componentClass": 577,\n        "nameAttribute": "Busbar Number"\n    },\n    "equivalentInjectionClass": {\n        "componentClass": 1011\n    },\n    "lineClass": {\n        "componentClass": 1009,\n        "nameAttribute": "Line Name"\n    },\n    "stdTypesDatabase": "./Local line types Version 16.mdb",\n    "pofTableNames": {\n      "componentHeader": "DB.ENMAC.COMPONENT_HEADER",\n      "componentAttributes": "DB.ENMAC.COMPONENT_ATTRIBUTES",\n      "hotSpotPositions": "DB.ENMAC.HOT_SPOT_POSITIONS",\n      "connections": "DB.ENMAC.CONNECTIONS"\n    }\n}\n')))}s.isMDXComponent=!0}}]);