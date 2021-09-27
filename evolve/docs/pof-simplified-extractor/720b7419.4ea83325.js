(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(98)),c={id:"overview",title:"Overview"},o={unversionedId:"overview",id:"version-1.0.1/overview",isDocsHomePage:!1,title:"Overview",description:"The PoF Simplified Extractor builds an Energy Workbench model from a PowerOn Fusion model simplifying lines and buses.",source:"@site/versioned_docs/version-1.0.1/overview.md",slug:"/overview",permalink:"/evolve/docs/pof-simplified-extractor/1.0.1/overview",version:"1.0.1",sidebar:"version-1.0.1/sidebar",previous:{title:"PoF Simplified Extractor",permalink:"/evolve/docs/pof-simplified-extractor/1.0.1/"}},d=[{value:"Run",id:"run",children:[{value:"Command Line Arguments",id:"command-line-arguments",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"TODO",id:"todo",children:[]}],l={toc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The PoF Simplified Extractor builds an Energy Workbench model from a PowerOn Fusion model simplifying lines and buses."),Object(i.a)("h2",{id:"run"},"Run"),Object(i.a)("p",null,"The extractor can be run with the following command:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"java -jar <path to jar> [options]\n")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"If the extractor runs slowly and spends all of its time garbage collecting you need to run the tool with a custom heap size. Execute the following command at a terminal:"),Object(i.a)("pre",{parentName:"blockquote"},Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"java -Xmx<heap size> -Xms<heap size> -jar <path to jar> [options]\n")),Object(i.a)("p",{parentName:"blockquote"},"   where heap size is the desired size of the heap. E.g. 16g")),Object(i.a)("h3",{id:"command-line-arguments"},"Command Line Arguments"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Flag"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-c, --conf <CONFIGURATION>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Use the specified configuration file"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"./config.json"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-cdg, --create-debug-geo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a debug view of the schematic in the geo world."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-d, --date <DATE>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Use the specified date for the output extract directory structure. Format: ",Object(i.a)("inlineCode",{parentName:"td"},"yyyy-MM-dd")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Current local date")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-dl, --detailed-log")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Used to show a detailed messages for each warning collected in the summary outputs."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-dt, --database-type <DATABASE_TYPE>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The PowerOn Fusion database type. One of ",Object(i.a)("inlineCode",{parentName:"td"},"ORACLE")," or ",Object(i.a)("inlineCode",{parentName:"td"},"SQLSERVER")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"ORACLE"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-ewb, --ewb-data-path <PATH>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Export the EWB database into the specified data store."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"./data"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-f, --force-data-overwrite")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Overwrites any data found in the output extract path."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Program fails and warns you of the presence of files in the output path")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-h, --help")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shows this help message."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-i, --instance <instance>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The instance/database name to use for the network extraction."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"nms")," for ",Object(i.a)("inlineCode",{parentName:"td"},"ORACLE"),", ",Object(i.a)("inlineCode",{parentName:"td"},"none")," for ",Object(i.a)("inlineCode",{parentName:"td"},"SQLSERVER"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-is, --integrated-security")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enable integrated security for the database connection. See note below."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-p, --port <port>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The port number used to connect to the database."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"1521")," for ORACLE, ",Object(i.a)("inlineCode",{parentName:"td"},"1433")," for SQLSERVER")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"-s, --server <SERVER>")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The PowerOn Fusion server to use for the network extraction."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.a)("inlineCode",{parentName:"td"},"localhost"))))),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"NOTE:"),Object(i.a)("p",{parentName:"blockquote"},"To use integrated security with SQLServer you need to have a copy of the Microsoft authentication DLL ",Object(i.a)("inlineCode",{parentName:"p"},"mssql-jdbc_auth-#.#.#.x64.dll")," installed on your system,\nor in the same directory as the JAR. If you do not have a copy you can download it from\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.microsoft.sqlserver/mssql-jdbc_auth"}),"Maven Central"),".")),Object(i.a)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.a)("p",null,"If integrated security is not enabled, the following system environment variables are used by the tool for\ndatabase authentication. The default is applied if the environment variable does not exist."),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Variable"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"ENMAC_USER")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The user for the PoF Oracle database."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"enmac")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("inlineCode",{parentName:"td"},"ENMAC_PASSWORD")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The password for the PoF Oracle database."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"password")))),Object(i.a)("h2",{id:"configuration"},"Configuration"),Object(i.a)("p",null,"Configuration for the extractor is specified in a JSON file."),Object(i.a)("hr",null),Object(i.a)("h2",{id:"todo"},"TODO"))}b.isMDXComponent=!0}}]);