(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(98)),i={id:"run-app",title:"Running the Application"},o={unversionedId:"run-app",id:"version-2.3.0/run-app",isDocsHomePage:!1,title:"Running the Application",description:"Command Line Arguments",source:"@site/versioned_docs\\version-2.3.0\\run-app.md",slug:"/run-app",permalink:"/evolve/docs/pof-network-extractor/2.3.0/run-app",version:"2.3.0",sidebar:"version-2.3.0/sidebar",previous:{title:"Configuring",permalink:"/evolve/docs/pof-network-extractor/2.3.0/configuring"},next:{title:"Processing Details",permalink:"/evolve/docs/pof-network-extractor/2.3.0/processing-details"}},l=[],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h5",{id:"command-line-arguments"},"Command Line Arguments"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Flag"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"-c")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Path to the configuration file"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"-s")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Server running the PoF Oracle database"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"localhost")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"-p")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The port number of the server running the PoF Oracle database"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1521")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"-i")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Oracle database instance holding the PoF database"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nms")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"-d")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Allows to network model to be written to a specific dates file"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"-f")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Forces an overwrite if an existing extract database exists."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"--detailed-stats-log")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Used to show detailed messages for each warning collected in the summary output"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("p",null,"To run the tool, execute the following command at a terminal."),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"java -Xmx<heap size> -Xms<heap size> -jar <path to load-aggregator-jar> -c <path to config file> -s <PoF Oracle server> -i <PoF Oracle instance>\n")),Object(c.a)("p",null,"where:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"heap size is the desired size of the heap. E.g. 16g")),Object(c.a)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),Object(c.a)("p",null,"PoF system with 2.5 million components requires around ",Object(c.a)("inlineCode",{parentName:"p"},"10GB")),Object(c.a)("p",null,"The LV Mapping data requires around ",Object(c.a)("inlineCode",{parentName:"p"},"2GB")),Object(c.a)("p",null,"Together with the process overhead, the recommended heap size is ",Object(c.a)("inlineCode",{parentName:"p"},"16GB")))}p.isMDXComponent=!0}}]);