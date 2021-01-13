(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(78)),i={id:"data-ingestion",title:"Data Ingestion"},l={unversionedId:"data-ingestion",id:"data-ingestion",isDocsHomePage:!1,title:"Data Ingestion",description:"The Energy Workbench deals with a lot of time series data. Each day, the previous days data becomes available for",source:"@site/docs/data-ingestion.md",slug:"/data-ingestion",permalink:"/evolve/docs/ewb-bundle/next/data-ingestion",version:"current",sidebar:"sidebar",previous:{title:"Overview",permalink:"/evolve/docs/ewb-bundle/next/"},next:{title:"Deployment",permalink:"/evolve/docs/ewb-bundle/next/deployment"}},c=[{value:"ewb_daily.sh",id:"ewb_dailysh",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Energy Workbench deals with a lot of time series data. Each day, the previous days data becomes available for\nconsumption and the EWB ingests this to have the latest data ready to be accessed from the EWB APIs."),Object(o.b)("p",null,"The daily data that gets crunched includes the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A network model from PowerOn Fusion."),Object(o.b)("li",{parentName:"ul"},"Energy consumption data from smart meters."),Object(o.b)("li",{parentName:"ul"},"Mappings of current meter, supply point, NMI, transformers and weather stations."),Object(o.b)("li",{parentName:"ul"},"Weather data such as temperature, rainfall, wind speeds etc.")),Object(o.b)("p",null,"This data is processed by various tools released as part of the Energy Workbench:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Tool"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"PoF Network Extractor")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Extracts a network model from PowerOn Fusion and processes LV meter mappings.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Load Processor")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Processes meter energy usage data CSV files and stores it in the EWB time series database.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Load Aggregator")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Aggregates meter energy usage data to their corresponding distribution transformer.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Weather Processor")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Processes weather data CSV files and stores it in the database.")))),Object(o.b)("p",null,"For more information on each on these tools, see their corresponding documentation."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ewb_dailysh"},"ewb_daily.sh"),Object(o.b)("p",null,"A script has been provided to invoke all the above tools in the appropriate order to perform the daily data crunching."),Object(o.b)("p",null,"It can be found at ",Object(o.b)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_daily.sh"),"."),Object(o.b)("p",null,"The script relies on the ",Object(o.b)("inlineCode",{parentName:"p"},"ewb.conf")," script found in ",Object(o.b)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/conf/ewb.conf"),". If you have moved this conf file\nthe conf include path in the script needs to updated to its location. See the deployment doco for more information\nabout ",Object(o.b)("inlineCode",{parentName:"p"},"ewb.conf"),"."),Object(o.b)("p",null,"It is recommended to set this script to run via a cron job after all appropriate data files have been copied to the input\ndirectories defined in each tools conf file. See the corresponding tool documentation for information on their config\nand the types of files they ingest."),Object(o.b)("p",null,"The script performs the following tasks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stops the EWB server."),Object(o.b)("li",{parentName:"ul"},"Run the PoF Network Extractor."),Object(o.b)("li",{parentName:"ul"},"Run the Load Processor."),Object(o.b)("li",{parentName:"ul"},"Run the Load Aggregator."),Object(o.b)("li",{parentName:"ul"},"Run the Weather Processor."),Object(o.b)("li",{parentName:"ul"},"Run the Weather Station Mapper."),Object(o.b)("li",{parentName:"ul"},"Start the EWB Server.")),Object(o.b)("p",null,"!!! note\nThe PoF Network Extractor will use the ENMAC_USER and ENMAC_PASSWORD environment variables.\nEnsure the daily script is run in a way that these environment variables are available."),Object(o.b)("p",null,"If any of the data processing tools fail, the script will still restart the EWB server and then exit with a non 0 code.\nAny errors that occur during the processing will need to be fixed and then the failed processes will need to be manually\ninvoked to process the data.\nCheck the syslog if it has been enabled via ",Object(o.b)("inlineCode",{parentName:"p"},"ewb.conf")," for errors and also in the logs for each tool in the logs/\ndirectory under the EWB release directory (or at the otherwise configured location)."),Object(o.b)("hr",null))}b.isMDXComponent=!0},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(h,l({ref:t},s,{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);