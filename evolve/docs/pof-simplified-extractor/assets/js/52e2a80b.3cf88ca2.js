"use strict";(self.webpackChunkpof_simplified_extractor_doco=self.webpackChunkpof_simplified_extractor_doco||[]).push([[12],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,N=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"home",title:"PoF Simplified Extractor",slug:"/"},i=void 0,o={unversionedId:"home",id:"home",title:"PoF Simplified Extractor",description:"A tool for pulling out the specified elements from a PowerOn Fusion database.",source:"@site/docs/readme.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/pof-simplified-extractor/next/",draft:!1,tags:[],version:"current",frontMatter:{id:"home",title:"PoF Simplified Extractor",slug:"/"},sidebar:"sidebar"},s={},u=[{value:"Extracting",id:"extracting",level:2},{value:"Command Line Arguments",id:"command-line-arguments",level:3},{value:"Configuration",id:"configuration",level:2},{value:"PoF Attributes",id:"pof-attributes",level:3},{value:"PoF Classes",id:"pof-classes",level:3},{value:"Database User",id:"database-user",level:3},{value:"Configuration File",id:"configuration-file",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A tool for pulling out the specified elements from a PowerOn Fusion database."),(0,r.kt)("h2",{id:"extracting"},"Extracting"),(0,r.kt)("p",null,"Before you run the extractor, please make sure you have completed the ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," and are familiar with the ",(0,r.kt)("a",{parentName:"p",href:"#command-line-arguments"},"command line arguments"),". You need to install java 11 (or higher) in order to run the PoF simplified extractor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java [jvm options] -jar pof-simplified-extractor-current.jar [command line arguments]\n")),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -Xmx16g -Xms16g -Dfile.encoding=UTF-8 -jar pof-simplified-extractor-current.jar -s enmacdb -ewb \\ewb\\data -f\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-Xmx16g -Xms16g")),(0,r.kt)("td",{parentName:"tr",align:null},"give the JVM 16GB of memory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-Dfile.encoding=UTF-8")),(0,r.kt)("td",{parentName:"tr",align:null},"tell the JVM to use UTF-8 encoding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-s enmacdb")),(0,r.kt)("td",{parentName:"tr",align:null},"change the enmac database server to ",(0,r.kt)("inlineCode",{parentName:"td"},"enmacdb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-ewb \\ewb\\data")),(0,r.kt)("td",{parentName:"tr",align:null},"change the ewb data path to ",(0,r.kt)("inlineCode",{parentName:"td"},"/ewb/data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-f")),(0,r.kt)("td",{parentName:"tr",align:null},"force override any existing database for today")))),(0,r.kt)("h3",{id:"command-line-arguments"},"Command Line Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"usage: pof-simplified-extractor [-c <CONFIGURATION>] [-cdg] [-d <DATE>]\n       [-dl] [-dt <DATABASE_TYPE>] [-ewb <PATH>] [-f] [-h] [-i <instance>]\n       [-is] [-p <port>] [-s <SERVER>]\n\nExtracts the simplified model out of a PowerOn Fusion server.\n\n -c,--conf <CONFIGURATION>             use the specified configuration\n                                       file (DEFAULT: ./config.json).\n -cdg,--create-debug-geo               create a debug view of the\n                                       schematic in the geo world\n                                       (DEFAULT: false).\n -d,--date <DATE>                      use the specified date(yyyy-MM-dd)\n                                       for the output extract directory\n                                       structure (DEFAULT: Current local\n                                       date).\n -dl,--detailed-log                    used to show a detailed messages\n                                       for each warning collected in the\n                                       summary outputs (DEFAULT: false).\n -dt,--database-type <DATABASE_TYPE>   the PowerOn Fusion database type\n                                       (DEFAULT: ORACLE). One of [ORACLE,\n                                       SQLSERVER].\n -ewb,--ewb-data-path <PATH>           export the EWB database into the\n                                       specified data store (DEFAULT:\n                                       ./data).\n -f,--force-data-overwrite             Overwrites any data found in the\n                                       output extract path (DEFAULT:\n                                       Program fails and warns you of the\n                                       presence of files in the output\n                                       path).\n -h,--help                             shows this help message.\n -i,--instance <instance>              the instance/database name to use\n                                       for the network extraction\n                                       (DEFAULT: nms for ORACLE, none for\n                                       SQLSERVER).\n -is,--integrated-security             enable integrated security for the\n                                       database connection. (DEFAULT:\n                                       false).\n -p,--port <port>                      the port number used to connect to\n                                       the database (DEFAULT: 1521 for\n                                       ORACLE, 1433 for SQLSERVER).\n -s,--server <SERVER>                  the PowerOn Fusion server to use\n                                       for the network extraction\n                                       (DEFAULT: localhost).\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE:"),(0,r.kt)("p",{parentName:"blockquote"},"To use integrated security with SQLServer you need to have a copy of the Microsoft authentication DLL ",(0,r.kt)("inlineCode",{parentName:"p"},"mssql-jdbc_auth-#.#.#.x64.dll")," installed on your system,\nor in the same directory as the JAR. If you do not have a copy you can download it from\n",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.microsoft.sqlserver/mssql-jdbc_auth"},"Maven Central"),".")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"pof-attributes"},"PoF Attributes"),(0,r.kt)("p",null,"You will need to create four scalar attributes on each node you wish to include in the final extract:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logical"),(0,r.kt)("td",{parentName:"tr",align:null},"Controls if the node is included in the extract"),(0,r.kt)("td",{parentName:"tr",align:null},"Include in Model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Char 32"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the CIM class used to represent the node"),(0,r.kt)("td",{parentName:"tr",align:null},"CIM Class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Char 32"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the diagram styling of the node"),(0,r.kt)("td",{parentName:"tr",align:null},"Diagram Object Style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int 32"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the standard types lookup id used for configuration data for the node if required."),(0,r.kt)("td",{parentName:"tr",align:null},"Sincal Element ID")))),(0,r.kt)("p",null,"The CIM class attribute should be configured to be a lookup with the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AcLineSegment"),(0,r.kt)("li",{parentName:"ul"},"Breaker"),(0,r.kt)("li",{parentName:"ul"},"Disconnector"),(0,r.kt)("li",{parentName:"ul"},"EnergyConsumer"),(0,r.kt)("li",{parentName:"ul"},"EnergySource"),(0,r.kt)("li",{parentName:"ul"},"Fuse"),(0,r.kt)("li",{parentName:"ul"},"Jumper"),(0,r.kt)("li",{parentName:"ul"},"Junction"),(0,r.kt)("li",{parentName:"ul"},"LinearShuntCompensator"),(0,r.kt)("li",{parentName:"ul"},"LoadBreakSwitch"),(0,r.kt)("li",{parentName:"ul"},"PowerTransformer"),(0,r.kt)("li",{parentName:"ul"},"Recloser"),(0,r.kt)("li",{parentName:"ul"},"Substation"),(0,r.kt)("li",{parentName:"ul"},"SubGeographicalRegion"),(0,r.kt)("li",{parentName:"ul"},"GeographicalRegion")),(0,r.kt)("p",null,"The diagram object style attribute should be configured to be a lookup with the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ARC_CHUTE"),(0,r.kt)("li",{parentName:"ul"},"BRIDGE"),(0,r.kt)("li",{parentName:"ul"},"CB"),(0,r.kt)("li",{parentName:"ul"},"DISCONNECTOR"),(0,r.kt)("li",{parentName:"ul"},"DIST_TRANSFORMER"),(0,r.kt)("li",{parentName:"ul"},"ENERGY_SOURCE"),(0,r.kt)("li",{parentName:"ul"},"FEEDER_CB"),(0,r.kt)("li",{parentName:"ul"},"FLICKER_BLADE"),(0,r.kt)("li",{parentName:"ul"},"FUSE"),(0,r.kt)("li",{parentName:"ul"},"GAS_INSULATED"),(0,r.kt)("li",{parentName:"ul"},"JUMPER"),(0,r.kt)("li",{parentName:"ul"},"JUNCTION"),(0,r.kt)("li",{parentName:"ul"},"ISO_TRANSFORMER"),(0,r.kt)("li",{parentName:"ul"},"LIVE_LINE_CLAMP"),(0,r.kt)("li",{parentName:"ul"},"NON_REVERSIBLE_REGULATOR"),(0,r.kt)("li",{parentName:"ul"},"NONE"),(0,r.kt)("li",{parentName:"ul"},"RECLOSER"),(0,r.kt)("li",{parentName:"ul"},"REVERSIBLE_REGULATOR"),(0,r.kt)("li",{parentName:"ul"},"SHUNT_COMPENSATOR"),(0,r.kt)("li",{parentName:"ul"},"SWITCH"),(0,r.kt)("li",{parentName:"ul"},"USAGE_POINT"),(0,r.kt)("li",{parentName:"ul"},"ZONE_TRANSFORMER")),(0,r.kt)("h3",{id:"pof-classes"},"PoF Classes"),(0,r.kt)("p",null,"You will need to have three distinct classes (new or existing):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"To control the detection of busbars"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be connected inline as part of the busbar section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"To control the detection of lines"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be connected inline as part of the line and be placed beyond the last included node of the substation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"To control the placement of equivalent injection points for energising the model"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be connected to the network, either inline or on a spur")))),(0,r.kt)("h3",{id:"database-user"},"Database User"),(0,r.kt)("p",null,"If integrated security is not enabled, the username and password for the database connection are provided by two environment variables:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENMAC_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"enmac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENMAC_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"password")))),(0,r.kt)("p",null,"These can either be set permanently or injected via a script."),(0,r.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"Specification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{\n    "ewbDataDirectory": string, // path to ewb data directory\n    "worlds": [int], // array of world indexes\n    "includeAttribute": string, // attribute name which controls if nodes are included\n    "cimClassAttribute": string, //attribute name mapping the node to a CIM class\n    "diagramObjectStyleAttribute": string, //attribute name mapping a node to a diagram object style\n    "sincalMappingAttribute": string, //attribute name mapping to the std types lookup\n    "useAliasAsName": bool, // OPTIONAL - indicates if the component alias should be used as the name rather than the component pathname [default false]. \n    "cimNameAttribute": string, //attribute name to use instead of component pathname\n    "excludeVoltage": int, // voltage to exclude from in volts\n    "busbarClass": { // defines the special class used to detect busbars\n        "componentClass": int, // class index\n        "nameAttribute": string // OPTIONAL - attribute name\n    },\n    "equivalentInjectionClass": { // defines the special class used to detect injection points\n        "componentClass": int, // class index\n        "nameAttribute": string // OPTIONAL - attribute name\n    },\n    "lineClass": { // defines the special class used to detect lines between substations\n        "componentClass": int, // class index\n        "nameAttribute": string // OPTIONAL - attribute name\n    },\n    "stdTypesDatabase": string, // path to mdb or sqlite file\n    "pofTableNames": { // OPTIONAL - allows overriding table names to specify schema/database names if required (e.g. SQLServer connections).\n        "componentHeader": string, // OPTIONAL - default "COMPONENT_HEADER"\n        "componentAttributes": string, // OPTIONAL - default "COMPONENT_ATTRIBUTES"\n        "hotSpotPositions": string, // OPTIONAL - default "HOT_SPOT_POSITIONS"\n        "connections": string // OPTIONAL - default "CONNECTIONS"\n    }\n}\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ewbDataDirectory": "../ewb/data",\n    "worlds": [101],\n    "includeAttribute": "Include in Model",\n    "cimClassAttribute": "CIM Class",\n    "diagramObjectStyleAttribute": "Diagram Object Style",\n    "sincalMappingAttribute": "Sincal Element ID",\n    "useAliasAsName": false,\n    "cimNameAttribute": "CIM Name",\n    "excludeVoltage": 330000,\n    "busbarClass": {\n        "componentClass": 577,\n        "nameAttribute": "Busbar Number"\n    },\n    "equivalentInjectionClass": {\n        "componentClass": 1011\n    },\n    "lineClass": {\n        "componentClass": 1009,\n        "nameAttribute": "Line Name"\n    },\n    "stdTypesDatabase": "./Local line types Version 16.mdb",\n    "pofTableNames": {\n      "componentHeader": "DB.ENMAC.COMPONENT_HEADER",\n      "componentAttributes": "DB.ENMAC.COMPONENT_ATTRIBUTES",\n      "hotSpotPositions": "DB.ENMAC.HOT_SPOT_POSITIONS",\n      "connections": "DB.ENMAC.CONNECTIONS"\n    }\n}\n')))}m.isMDXComponent=!0}}]);