(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),c=(a(0),a(97)),i={id:"run-app",title:"Running the Application"},o={unversionedId:"run-app",id:"version-3.0.0/run-app",isDocsHomePage:!1,title:"Running the Application",description:"Command Line Arguments",source:"@site/versioned_docs\\version-3.0.0\\run-app.md",slug:"/run-app",permalink:"/evolve/docs/load-aggregator/3.0.0/run-app",version:"3.0.0",sidebar:"version-3.0.0/sidebar",previous:{title:"Configuring",permalink:"/evolve/docs/load-aggregator/3.0.0/configuring"}},p=[],d={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h5",{id:"command-line-arguments"},"Command Line Arguments"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Flag"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Valid Values"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"-c")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Path to the configuration file"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"--detailed-stats-log")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Used to show detailed messages for each warning collected in the stats output"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"--force-aggregation")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Allows all meters to be aggregated to their transformers for a specified date range."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("p",null,"To run the tool, execute the following command at a terminal:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"java -Xmx<heap size> -Xms<heap size> -jar <path to load-aggregator-jar> -conf <path to config file>\n")),Object(c.a)("p",null,"where:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"heap size is the desired size of the heap. E.g. 16g")),Object(c.a)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),Object(c.a)("p",null,"The LV Mapping data requires around ",Object(c.a)("inlineCode",{parentName:"p"},"2GB")," "),Object(c.a)("p",null,"The meter data requires around ",Object(c.a)("inlineCode",{parentName:"p"},"1.5GB")),Object(c.a)("p",null,"Together with the process overhead, the recommended heap size is ",Object(c.a)("inlineCode",{parentName:"p"},"8GB")," "))}l.isMDXComponent=!0}}]);