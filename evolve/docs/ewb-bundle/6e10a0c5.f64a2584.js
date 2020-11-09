(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),o=(a(0),a(78)),i={id:"data-ingestion",title:"Data Ingestion"},l={unversionedId:"data-ingestion",id:"data-ingestion",isDocsHomePage:!1,title:"Data Ingestion",description:"The Energy Workbench deals with a lot of time series data. Each day, the previous days data becomes available for",source:"@site/docs\\data-ingestion.md",slug:"/data-ingestion",permalink:"/evolve/docs/ewb-bundle/data-ingestion",version:"current",sidebar:"sidebar",previous:{title:"Overview",permalink:"/evolve/docs/ewb-bundle/"},next:{title:"Deployment",permalink:"/evolve/docs/ewb-bundle/deployment"}},s=[{value:"ewb_daily.sh",id:"ewb_dailysh",children:[]}],b={rightToc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Energy Workbench deals with a lot of time series data. Each day, the previous days data becomes available for\nconsumption and the EWB ingests this to have the latest data ready to be accessed from the EWB APIs."),Object(o.b)("p",null,"The daily data that gets crunched includes the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A network model from PowerOn Fusion."),Object(o.b)("li",{parentName:"ul"},"Energy consumption data from smart meters."),Object(o.b)("li",{parentName:"ul"},"Mappings of current meter, supply point, NMI, transformers and weather stations."),Object(o.b)("li",{parentName:"ul"},"Weather data such as temperature, rainfall, wind speeds etc.")),Object(o.b)("p",null,"This data is processed by various tools released as part of the Energy Workbench:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tool"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"PoF Network Extractor")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Extracts a network model from PowerOn Fusion and processes LV meter mappings.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Load Processor")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Processes meter energy usage data CSV files and stores it in the EWB time series database.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Load Aggregator")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aggregates meter energy usage data to their corresponding distribution transformer.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Weather Processor")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Processes weather data CSV files and stores it in the database.")))),Object(o.b)("p",null,"For more information on each on these tools, see their corresponding documentation."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ewb_dailysh"},"ewb_daily.sh"),Object(o.b)("p",null,"A script has been provided to invoke all the above tools in the appropriate order to perform the daily data crunching."),Object(o.b)("p",null,"It can be found at ",Object(o.b)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_daily.sh"),"."),Object(o.b)("p",null,"The script relies on the ",Object(o.b)("inlineCode",{parentName:"p"},"ewb.conf")," script found in ",Object(o.b)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/conf/ewb.conf"),". If you have moved this conf file\nthe conf include path in the script needs to updated to its location. See the deployment doco for more information\nabout ",Object(o.b)("inlineCode",{parentName:"p"},"ewb.conf"),"."),Object(o.b)("p",null,"It is recommended to set this script to run via a cron job after all appropriate data files have been copied to the input\ndirectories defined in each tools conf file. See the corresponding tool documentation for information on their config\nand the types of files they ingest."),Object(o.b)("p",null,"The script performs the following tasks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stops the EWB server."),Object(o.b)("li",{parentName:"ul"},"Run the PoF Network Extractor."),Object(o.b)("li",{parentName:"ul"},"Run the Load Processor."),Object(o.b)("li",{parentName:"ul"},"Run the Load Aggregator."),Object(o.b)("li",{parentName:"ul"},"Run the Weather Processor."),Object(o.b)("li",{parentName:"ul"},"Run the Weather Station Mapper."),Object(o.b)("li",{parentName:"ul"},"Start the EWB Server.")),Object(o.b)("p",null,"!!! note\nThe PoF Network Extractor will use the ENMAC_USER and ENMAC_PASSWORD environment variables.\nEnsure the daily script is run in a way that these environment variables are available."),Object(o.b)("p",null,"If any of the data processing tools fail, the script will still restart the EWB server and then exit with a non 0 code.\nAny errors that occur during the processing will need to be fixed and then the failed processes will need to be manually\ninvoked to process the data.\nCheck the syslog if it has been enabled via ",Object(o.b)("inlineCode",{parentName:"p"},"ewb.conf")," for errors and also in the logs for each tool in the logs/\ndirectory under the EWB release directory (or at the otherwise configured location)."),Object(o.b)("hr",null))}c.isMDXComponent=!0}}]);