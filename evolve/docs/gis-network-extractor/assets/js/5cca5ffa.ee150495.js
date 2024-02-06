"use strict";(self.webpackChunkgis_network_extractor_doco=self.webpackChunkgis_network_extractor_doco||[]).push([[3238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},N="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),N=p(n),k=r,u=N["".concat(d,".").concat(k)]||N[k]||s[k]||i;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[N]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"run-app",title:"Running the Application"},l=void 0,o={unversionedId:"run-app",id:"run-app",title:"Running the Application",description:"Configuration options for the GIS Network Extractor are provided as command line arguments.",source:"@site/docs/run-app.md",sourceDirName:".",slug:"/run-app",permalink:"/evolve/docs/gis-network-extractor/next/run-app",draft:!1,tags:[],version:"current",frontMatter:{id:"run-app",title:"Running the Application"},sidebar:"sidebar",previous:{title:"Input Files",permalink:"/evolve/docs/gis-network-extractor/next/input-files"}},d={},p=[{value:"Command Line Options",id:"command-line-options",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Heap Size Estimation",id:"heap-size-estimation",level:5}],m={toc:p},N="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(N,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Configuration options for the GIS Network Extractor are provided as command line arguments."),(0,r.kt)("h3",{id:"command-line-options"},"Command Line Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-com"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--company <COMPANY>")),(0,r.kt)("td",{parentName:"tr",align:null},"Selects the processing data logic to be used based on company name. ",(0,r.kt)("inlineCode",{parentName:"td"},"CPPAL")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"EE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CPPAL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-cpi"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--connection-point-identifier <IDENTIFIER>")),(0,r.kt)("td",{parentName:"tr",align:null},"allows renaming the connection point identifier. e.g. use ",(0,r.kt)("inlineCode",{parentName:"td"},"ICP")," instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"NMI")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NMI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-dl"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--detailed-log")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls if a detailed set of errors are logged, or just the summary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-dsc"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--dont-stitch-conductors")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls if the conductor stitching processor runs."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stitch"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-e"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--ewb-data <EWB_DATA_PATH>")),(0,r.kt)("td",{parentName:"tr",align:null},"The root path for the EWB data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./ewb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-ep"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--extract-phases <true or false>")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls if the phase information will be extracted from the source data. If disabled everything will be extracted as ",(0,r.kt)("inlineCode",{parentName:"td"},"ABC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-f3p"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--force-three-phase-lv")),(0,r.kt)("td",{parentName:"tr",align:null},"Force the LV network below a 3-phase transformer to ignore the phasing of the backbone and replace it with 3-phase."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-g"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--gis-data <GIS_DATA_PATH>")),(0,r.kt)("td",{parentName:"tr",align:null},"The path where the input GIS JSON files are located"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./gis"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--help")),(0,r.kt)("td",{parentName:"tr",align:null},"Shows this help message."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-lvt"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--low-voltage-threshold <LOW_VOLTAGE_THRESHOLD>")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the LV voltage upper limit in volts (inclusive)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-m"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--meter-mappings <METER_MAPPINGS_PATH>")),(0,r.kt)("td",{parentName:"tr",align:null},"The path where the input meter mappings csv files are located"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./meter_mappings"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-mmdp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--meter-mappings-date-pattern <METER_MAPPINGS_DATE_PATTERN>")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the pattern used to represent dates for the records in the meter mappings csv files"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yyyyMMdd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-mmfp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--meter-mappings-file-pattern <METER_MAPPING_FILE_PATTERN>")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the file name pattern for meter mapping files"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NMI_TX_MAPPING_(\\d{8}).*[.]csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-n"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--network-hierarchy <NETWORK_HIERARCHY_FILE>")),(0,r.kt)("td",{parentName:"tr",align:null},"The file containing the network hierarchy JSON"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./network-hierarchy.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-nc"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--nodes-config <NODES_CONFIG_PATH>")),(0,r.kt)("td",{parentName:"tr",align:null},"The file containing the nodes JSON config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./nodes-config.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-pc"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--processor-config <PROCESSOR_CONFIG_PATH>")),(0,r.kt)("td",{parentName:"tr",align:null},"The file containing the processor JSON config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./processor-config.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-pdn"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--phase-debug-names")),(0,r.kt)("td",{parentName:"tr",align:null},"indicates if they phase information should be added to the conductor names before and after the phase consistency processing is run. This information can be very useful for debugging phase issues."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-pl"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--pole-data <POLE_DATA_PATH>")),(0,r.kt)("td",{parentName:"tr",align:null},"The file containing the pole data JSON"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./poles.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-pof"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--poweron-fusion <HOST> <PORT> <INSTANCE>")),(0,r.kt)("td",{parentName:"tr",align:null},"PowerOn Fusion database connection configuration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-q"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--quality-checks <CHECKS>")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls which quality checks are run. Comma separated list of ","[",(0,r.kt)("inlineCode",{parentName:"td"},"NONE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ALL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PHASES"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ALL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-qo"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--quality-output <PATH>")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls the output directory of the quality checks."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./quality"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-si"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--source-impedance <SOURCE_IMPEDANCES_FILE>")),(0,r.kt)("td",{parentName:"tr",align:null},"The file containing the source impedance values"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./source-impedances.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-tc"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--types-config <TYPES_FILE>")),(0,r.kt)("td",{parentName:"tr",align:null},"The file containing the cable types JSON or SINCAL standard types database"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./cable-types.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--trust-lv1-phases")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the LV1 phases (AN, BN and CN) can be trusted. If not trusted, they will be replaced with XN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"If the option for processing PowerOn Fusion is enabled, the following environment variables must be set to connect to the PowerOn Fusion database."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ENMAC_USER")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The user for the PoF Oracle database."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enmac"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ENMAC_PASSWORD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The password for the PoF Oracle database."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password"))))),(0,r.kt)("p",null,"To run the tool, execute the following command at a terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -Xmx<heap size> -Xms<heap size> -jar <path to gis-network-extractor> <COMMAND LINE OPTIONS>\n")),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PoF databse connection environment variables have been defined. e.g. ",(0,r.kt)("strong",{parentName:"p"},"ENMAC_USER"),"=enmac; ",(0,r.kt)("strong",{parentName:"p"},"ENMAC_PASSWORD"),"=password;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"heap size is the desired size of the heap. e.g. 16g"))),(0,r.kt)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),(0,r.kt)("p",null,"PoF system with 2.5 million components requires around ",(0,r.kt)("inlineCode",{parentName:"p"},"10GB")),(0,r.kt)("p",null,"The LV Mapping data requires around ",(0,r.kt)("inlineCode",{parentName:"p"},"2GB")),(0,r.kt)("p",null,"Together with the process overhead, the recommended heap size is ",(0,r.kt)("inlineCode",{parentName:"p"},"16GB")))}s.isMDXComponent=!0}}]);