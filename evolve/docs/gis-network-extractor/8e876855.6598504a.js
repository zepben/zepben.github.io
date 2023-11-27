(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(122)),l={id:"run-app",title:"Running the Application"},c={unversionedId:"run-app",id:"version-2.14.0/run-app",isDocsHomePage:!1,title:"Running the Application",description:"Configuration options for the GIS Network Extractor are provided as command line arguments.",source:"@site/versioned_docs/version-2.14.0/run-app.md",slug:"/run-app",permalink:"/evolve/docs/gis-network-extractor/2.14.0/run-app",version:"2.14.0",sidebar:"version-2.14.0/sidebar",previous:{title:"Input Files",permalink:"/evolve/docs/gis-network-extractor/2.14.0/input-files"}},o=[{value:"Command Line Options",id:"command-line-options",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]}],p={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Configuration options for the GIS Network Extractor are provided as command line arguments."),Object(i.a)("h3",{id:"command-line-options"},"Command Line Options"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-com"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--company <COMPANY>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Selects the processing data logic to be used based on company name. ",Object(i.a)("inlineCode",{parentName:"td"},"CPPAL")," or ",Object(i.a)("inlineCode",{parentName:"td"},"EE")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"CPPAL"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-cpi"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--connection-point-identifier <IDENTIFIER>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"allows renaming the connection point identifier. e.g. use ",Object(i.a)("inlineCode",{parentName:"td"},"ICP")," instead of ",Object(i.a)("inlineCode",{parentName:"td"},"NMI")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"NMI"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-dl"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--detailed-log")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if a detailed set of errors are logged, or just the summary"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-dsc"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--dont-stitch-conductors")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if the conductor stitching processor runs."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"stitch"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-e"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--ewb-data <EWB_DATA_PATH>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The root path for the EWB data"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./ewb"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-ep"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--extract-phases <true or false>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if the phase information will be extracted from the source data. If disabled everything will be extracted as ",Object(i.a)("inlineCode",{parentName:"td"},"ABC")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"true"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-g"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--gis-data <GIS_DATA_PATH>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path where the input GIS JSON files are located"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./gis"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-h"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--help")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Shows this help message."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-lvt"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--low-voltage-threshold <LOW_VOLTAGE_THRESHOLD>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the LV voltage upper limit in volts (inclusive)"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"1000"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-m"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--meter-mappings <METER_MAPPINGS_PATH>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path where the input meter mappings csv files are located"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./meter_mappings"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-mmdp"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--meter-mappings-date-pattern <METER_MAPPINGS_DATE_PATTERN>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the pattern used to represent dates for the records in the meter mappings csv files"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"yyyyMMdd"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-mmfp"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--meter-mappings-file-pattern <METER_MAPPING_FILE_PATTERN>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the file name pattern for meter mapping files"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"NMI_TX_MAPPING_(\\d{8}).*[.]csv"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-n"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--network-hierarchy <NETWORK_HIERARCHY_FILE>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The file containing the network hierarchy JSON"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./network-hierarchy.json"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-nc"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--nodes-config <NODES_CONFIG_PATH>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The file containing the nodes JSON config"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./nodes-config.json"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-pc"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--processor-config <PROCESSOR_CONFIG_PATH>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The file containing the processor JSON config"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./processor-config.json"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-pl"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--pole-data <POLE_DATA_PATH>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The file containing the pole data JSON"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./poles.json"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-pof"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--poweron-fusion <HOST> <PORT> <INSTANCE>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"PowerOn Fusion database connection configuration"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"null"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-q"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--quality-checks <CHECKS>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls which quality checks are run. Comma separated list of ","[",Object(i.a)("inlineCode",{parentName:"td"},"NONE"),", ",Object(i.a)("inlineCode",{parentName:"td"},"ALL"),", ",Object(i.a)("inlineCode",{parentName:"td"},"PHASES"),"]"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"ALL"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-si"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--source-impedance <SOURCE_IMPEDANCES_FILE>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The file containing the source impedance values"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./source-impedances.csv"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"-tc"),", ",Object(i.a)("inlineCode",{parentName:"td"},"--types-config <TYPES_FILE>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The file containing the cable types JSON or SINCAL standard types database"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"./cable-types.json"))))),Object(i.a)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.a)("p",null,"If the option for processing PowerOn Fusion is enabled, the following environment\nvariables must be set to connect to the PowerOn Fusion database."),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Variable"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"ENMAC_USER")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The user for the PoF Oracle database."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"enmac"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"ENMAC_PASSWORD")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The password for the PoF Oracle database."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"password"))))),Object(i.a)("p",null,"To run the tool, execute the following command at a terminal."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"java -Xmx<heap size> -Xms<heap size> -jar <path to gis-network-extractor> <COMMAND LINE OPTIONS>\n")),Object(i.a)("p",null,"where:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"PoF databse connection environment variables have been defined. e.g. ",Object(i.a)("strong",{parentName:"p"},"ENMAC_USER"),"=enmac; ",Object(i.a)("strong",{parentName:"p"},"ENMAC_PASSWORD"),"=password;")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"heap size is the desired size of the heap. e.g. 16g"))),Object(i.a)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),Object(i.a)("p",null,"PoF system with 2.5 million components requires around ",Object(i.a)("inlineCode",{parentName:"p"},"10GB")),Object(i.a)("p",null,"The LV Mapping data requires around ",Object(i.a)("inlineCode",{parentName:"p"},"2GB")),Object(i.a)("p",null,"Together with the process overhead, the recommended heap size is ",Object(i.a)("inlineCode",{parentName:"p"},"16GB")))}d.isMDXComponent=!0},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),O=d(a),j=n,m=O["".concat(l,".").concat(j)]||O[j]||b[j]||i;return a?r.a.createElement(m,c({ref:t},p,{components:a})):r.a.createElement(m,c({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);