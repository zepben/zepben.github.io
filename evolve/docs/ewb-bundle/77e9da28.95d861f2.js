(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),b=(a(0),a(78)),o={id:"deployment",title:"Deployment"},i={unversionedId:"deployment",id:"version-r13.0/deployment",isDocsHomePage:!1,title:"Deployment",description:"Prerequisites",source:"@site/versioned_docs/version-r13.0/deployment.md",slug:"/deployment",permalink:"/evolve/docs/ewb-bundle/deployment",version:"r13.0",sidebar:"version-r13.0/sidebar",previous:{title:"Data Ingestion",permalink:"/evolve/docs/ewb-bundle/data-ingestion"},next:{title:"Glossary",permalink:"/evolve/docs/ewb-bundle/glossary"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Decompressing the release",id:"decompressing-the-release",children:[]},{value:"File Layout",id:"file-layout",children:[]},{value:"Configuration files",id:"configuration-files",children:[]},{value:"File Handle Limits",id:"file-handle-limits",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(b.b)("p",null,"To run the energy workbench, the following software needs to be installed on your system:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Oracle Java SE 8")),Object(b.b)("p",null,"The supplied scripts with the release are all written in bash. This means a Linux host or a Windows system with a bash\ninterpreter installed is required to run the daily data script or the helper script to start and stop the EWB server."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"decompressing-the-release"},"Decompressing the release"),Object(b.b)("p",null,"Start by decompressing the EWB release archive into a location of your choosing."),Object(b.b)("p",null,"To decompress the EWB release on a ","*","nix platform, copy the file to where you want to extract the release.\nOpen a terminal in the directory with the EWB release and run the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-no-highlight"}),"tar -xvzf energy-workbench-server-<YYYY>-<MM>-<dd>.tar.gz\n")),Object(b.b)("p",null,"where ",Object(b.b)("inlineCode",{parentName:"p"},"<YYYY>")," ",Object(b.b)("inlineCode",{parentName:"p"},"<MM>")," ",Object(b.b)("inlineCode",{parentName:"p"},"<dd>")," are the year, month and date of the release."),Object(b.b)("p",null,"To decompress on Windows systems, you will need to install a utility to decompress and extract the archive.\nWe recommend using 7-Zip ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.7zip.org"}),"http://www.7zip.org"),". Once installed extract the release to your desired directory."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"file-layout"},"File Layout"),Object(b.b)("p",null,"Within the extracted EWB release directory, the file layout should be as follows:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-no-highlight"}),"energy-workbench-<DATE>/\n|-- bin/\n|   |-- energy-workbench-server-<version>.jar\n|   |-- ewb_daily.sh\n|   |-- ewb_server.sh\n|   |-- load-aggregator-<version>.jar\n|   |-- load-processor-<version>.jar\n|   |-- pof-network-extractor-<version>.jar\n|   |-- weather-processor-<version>.jar\n|   `-- weather-station-mapper-<version>.jar\n|-- conf/\n|   `-- ewb.conf\n|-- docs/\n|   |-- ...\n|   `-- index.html\n|-- logs\n")),Object(b.b)("h5",{id:"bin-directory"},"bin directory"),Object(b.b)("p",null,"This directory contains all the applications and scripts required by the energy workbench. Descriptions of each file:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"File"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"energy-workbench-server-","<","version",">",".jar")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Energy Workbench server application.",Object(b.b)("br",null)," See the EWB Server config for more information")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"ewb_daily.sh")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The script that runs the daily data ingestion.",Object(b.b)("br",null)," See the data ingestion page for more information")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"ewb_server.sh")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A script to start and stop the EWB server. This is used by the ewb_daily.sh script to stop the server while data is updated, and start it again when it's done.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"load-aggregator-","<","version",">",".jar")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The load aggregator tool.",Object(b.b)("br",null)," See the Load Aggregator page for more information.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"load-processor-","<","version",">",".jar")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The load processor tool.",Object(b.b)("br",null)," See the Load Processor page for more information.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"pof-network-extractor-","<","version",">",".jar")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The PoF Network Extractor tool. ",Object(b.b)("br",null)," See the PoF Network Extractor page for more information.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"weather-processor-","<","version",">",".jar")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weather processor tool.",Object(b.b)("br",null)," See the weather Processor page for more information.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("pre",null,"weather-station-mapper-","<","version",">",".jar")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Weather Station Mapper tool.",Object(b.b)("br",null)," See the Weather Station Mapper page for more information.")))),Object(b.b)("h5",{id:"conf-directory"},"conf directory"),Object(b.b)("p",null,"This is the recommended directory to put all the configuration files for the tools and applications in the bin directory."),Object(b.b)("p",null,"See each of the corresponding pages for each tool / application for more information about config files and their contents."),Object(b.b)("p",null,"The supplied ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf")," file is used by the ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_daily.sh")," and ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_server.sh")," scripts.\nSee the data ingestion page for more details."),Object(b.b)("h5",{id:"docs-directory"},"docs directory"),Object(b.b)("p",null,"Contains the documentation pages you are reading now. There are many files and sub directories in this directory making\nup the documentation, however the primary file of interest is the ",Object(b.b)("inlineCode",{parentName:"p"},"index.html")," file. Opening this in a web browser\nwill allow you to view the documentation pages you are currently reading. Alternatively you can point an HTTP server at\nthis directory to serve the docs pages remotely."),Object(b.b)("h5",{id:"logs-directory"},"logs directory"),Object(b.b)("p",null,"This is the default directory where logs are placed if invoked via the ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_daily.sh")," and ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_server.sh"),"\nscripts using the default values in ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf"),". See the Logging page for more information about configuring logging."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"configuration-files"},"Configuration files"),Object(b.b)("p",null,"All the tools and the server provided in the release have their own specific configuration files. See each of the\nrelevant applications pages to create their configuration files. Once they have been created, they can be reused\nbetween releases, however, make sure to check if any configuration parameters have been changed, added or removed by the\napplication in the newer release."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_daily.sh")," and ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_server.sh")," scripts rely on ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf")," being in the default location. If you move\nthe location of ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf")," you need to make sure to update the config include line in these scripts with the path\nto the ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf")," file."),Object(b.b)("h5",{id:"ewbconf"},"ewb.conf"),Object(b.b)("p",null,"The default ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf")," is a configuration file used by the bash scripts included with the Energy Workbench.\nThe default variable values make assumptions about the file layout described above.\nIf you move any files from the default file layout location described above the configuration will need to be modified."),Object(b.b)("p",null,"The following table describes the variables defined in ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf"),". See the ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf")," that ships with the release\nfor default values."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Variable"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"JAVA")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Path to java binary.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"USE_SYSLOG")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set to 1 for the scripts to log events to the system log",Object(b.b)("br",null),"Set to 0 to disable logging to the system log.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"SYSLOG_LEVEL")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The facility level to use for system log messages.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_BASE_PATH")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the EWB release directory (the top level directory described in the file layout section).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_BIN_PATH")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the bin directory described in the file layout above.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_CONF_PATH")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the conf directory described in the file layout above.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_LOGS_PATH")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the logs directory described in the file layout above.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_SERVER_JAR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path the the EWB server jar file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_SERVER_CONF")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the EWB server configuration file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_SERVER_CMD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The command to invoke the EWB server jar file with all required command line arguments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_SERVER_STOP")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Command used by the ewb_daily.sh script to stop the EWB server.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"EWB_SERVER_START")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Command used by the ewb_daily.sh script to start the EWB server.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"POF_EXTRACTOR_JAR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path the the PoF Network Extractor jar file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"POF_EXTRACTOR_CONF")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the PoF Network Extractor configuration file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"POF_SERVER")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The server name or IP address of the PoF Server. This can be a report server.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"POF_EXTRACTOR_CMD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The command to invoke the PoF Network Extractor jar file with all required command line arguments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LOAD_PROCESSOR_JAR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path the the Load Processor jar file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LOAD_PROCESSOR_CONF")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the Load Processor configuration file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LOAD_PROCESSOR_CMD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The command to invoke the Load Processor jar file with all required command line arguments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LOAD_AGGREGATOR_JAR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path the the Load Aggregator jar file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LOAD_AGGREGATOR_CONF")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the Load Aggregator configuration file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LOAD_AGGREGATOR_CMD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The command to invoke the Load Aggregator jar file with all required command line arguments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"WEATHER_PROCESSOR_JAR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path the the Weather Processor jar file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"WEATHER_PROCESSOR_CONF")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the Weather Processor configuration file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"WEATHER_PROCESSOR_CMD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The command to invoke the Weather Processor jar file with all required command line arguments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"WEATHER_STATION_MAPPER_JAR")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path the the Weather Station Mapper jar file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"WEATHER_STATION_MAPPER_CONF")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An absolute path to the Weather Station Mapper configuration file.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"WEATHER_STATION_MAPPER_CMD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The command to invoke the Weather Station Mapper jar file with all required command line arguments.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"file-handle-limits"},"File Handle Limits"),Object(b.b)("p",null,"The Energy Workbench handles a lot of time series data. To support this a large amount of files are used. For performance\nreasons, handles to these files are held once opened until the application ends."),Object(b.b)("p",null,"Some operating systems will have default open file handle limits lower than what the Energy Workbench requires. In these\ncases it is required to increase the open file handle limit to run the Energy Workbench. If your OS has a file handle\nlimit of less than 65535, it is recommend to increase it to this value."),Object(b.b)("p",null,"Consult your operating system documentation for specific instructions on how to increase open file handle limits.\nRemember that this limit needs to be available to the user running any of the EWB processes, not just the maximum\nsystem limit."))}d.isMDXComponent=!0},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,j=p["".concat(o,".").concat(O)]||p[O]||s[O]||b;return a?r.a.createElement(j,i({ref:t},c,{components:a})):r.a.createElement(j,i({ref:t},c))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,o=new Array(b);o[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<b;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);