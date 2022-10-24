(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{226:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(294)),c={id:"overview",title:"Overview",slug:"/"},i={unversionedId:"overview",id:"version-2.8.0/overview",isDocsHomePage:!1,title:"Overview",description:"The EWB Server is the primary server that supplies APIs to access network and time series data, as well as provides web",source:"@site/versioned_docs/version-2.8.0/overview.md",slug:"/",permalink:"/evolve/docs/energy-workbench-server/2.8.0/",version:"2.8.0",sidebar:"version-2.8.0/sidebar",next:{title:"Data File Structure",permalink:"/evolve/docs/energy-workbench-server/2.8.0/data-file-structure"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Run",id:"run",children:[]},{value:"ewb_server.sh",id:"ewb_serversh",children:[]}],o={toc:l};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The EWB Server is the primary server that supplies APIs to access network and time series data, as well as provides web\napps that provide visualisations and other high level functionality related to the data from the APIs."),Object(b.b)("p",null,"This document describes how to configure and run the energy workbench server."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"configuration"},"Configuration"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Configuration for the energy workbench server is specified in a JSON file.")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"http")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds http related config. ",Object(b.b)("br",null),"Refer ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#http-config"}),Object(b.b)("strong",{parentName:"a"},"http config options"))," below"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"ewbData")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds the ewb data related config. ",Object(b.b)("br",null),"Refer ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ewb-data-config"}),Object(b.b)("strong",{parentName:"a"},"ewb data config options"))," below"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"auth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds the auth related config. ",Object(b.b)("br",null),"Refer ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#auth"}),Object(b.b)("strong",{parentName:"a"},"auth config options"))," below"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"syslog")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds system log related config for Nix based systems ",Object(b.b)("br",null),"Refer ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#system-log-config"}),Object(b.b)("strong",{parentName:"a"},"system log options"))," below"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"geoView")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds time series related config ",Object(b.b)("br",null),"Refer ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#geographic-view-config"}),Object(b.b)("strong",{parentName:"a"},"geo view options"))," below"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"debug")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds results cache related config ",Object(b.b)("br",null),"Refer ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#debug-config"}),Object(b.b)("strong",{parentName:"a"},"debug options"))," below"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h6",{id:"http-config"},"HTTP Config"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"port")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The port for the server to listen on."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"webroot")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to the directory holding the application website."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"webroot")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"staticCachingEnabled")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to indicate whether static caching is enabled."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"cors")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify hosts to add to the CORS (cross origin resource sharing) white list."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"tlsEnabled")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable HTTPS on the web server."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"keyPath")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to the PEM private key file."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"certPath")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to the PEM certificate for the provided private key."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"caPath")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to a PEM CA chain for client authentication."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"clientAuth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether client authentication should be enabled. One of ",Object(b.b)("inlineCode",{parentName:"td"},"request"),", ",Object(b.b)("inlineCode",{parentName:"td"},"required"),", or ",Object(b.b)("inlineCode",{parentName:"td"},"none"),", meaning client auth is optional (client can request), required (client must present a signed certificate by a CA in ",Object(b.b)("inlineCode",{parentName:"td"},"caPath"),"), or no client auth is available respectively."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"none"))))),Object(b.b)("h6",{id:"ewb-data-config"},"EWB Data Config"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"path")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to the ewb data directory"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"timezone")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The timezone which the data belongs to"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"previousDaysToSearchForNetwork")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of days to search the network back from the current date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"cachePeriod")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Limits the amount of load data available in the server. ",Object(b.b)("br",null),"Specified in days unless a units character is appended. ",Object(b.b)("br",null),"Valid unit characters: 'd' (days), 'm' (months), 'y' (years)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"All")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"resultsCacheTtlSeconds")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The time to live for the results cache"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0")))),Object(b.b)("h6",{id:"auth-config"},"Auth Config"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"authType")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Authorization method to be used ",Object(b.b)("br",null)," Valid values: ",Object(b.b)("inlineCode",{parentName:"td"},"AUTH0"),", ",Object(b.b)("inlineCode",{parentName:"td"},"NONE")," ",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},"AUTH0")," uses Auth0 OAuth2 implementation ",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},"NONE")," to disable authorization"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"NONE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"issuer")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Domain url for the authorization server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"audience")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"API audience for the server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"defaultApiClaim")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Default API claim"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"read:ewb"')))),Object(b.b)("h6",{id:"system-log-config"},"System Log Config"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"facility")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The facility code to specify the type of program logging the message. ",Object(b.b)("br",null)," Valid Values : ",Object(b.b)("inlineCode",{parentName:"td"},"SYSLOG"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL0"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL1"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL2"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL3"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL4"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL5"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL6"),", ",Object(b.b)("inlineCode",{parentName:"td"},"LOCAL7")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"tag")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The tag for the log message."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"With facility"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h6",{id:"geographic-view-config"},"Geographic View Config"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"tileSize")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the tiles to produce"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4096")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"maxZoom")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum supported zoom level"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"20")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"mapboxApiToken")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The API token required to render MapBox tiles"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"invalid token")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"keepLevelSpec")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/evolve/docs/energy-workbench-server/2.8.0/keep-level-spec"}),Object(b.b)("strong",{parentName:"a"},"keep level specification"))," to be used for vector tiles"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null")))),Object(b.b)("h6",{id:"debug-config"},"Debug Config"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"logRoutes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates if the server should print all registered routes on start-up"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"logRequests")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates if the server should print all requests received"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"logRequestBodyToFile")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies a file to save the last received request body"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"If any paths in the configuration are given as relative paths, they will be relative to the working directory of the JVM."))),Object(b.b)("p",null,"The following is a sample configuration file:"),Object(b.b)("h4",{id:"sample-configuration-file"},"Sample Configuration File"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "http": {\n    "port": 9000,\n    "webroot": "/Users/zepben/Desktop/Zepben/Client/web-client/dist",\n    "staticCachingEnabled": false,\n    "cors": ".*"\n  },\n\n "ewbData": {\n    "path": "/Users/zepben/Desktop/Zepben/Server/EnergyWorkbench/ewb",\n    "previousDaysToSearchForNetwork": 365,\n    "timezone": "Australia/Melbourne",\n    "cachePeriod": "1m",\n    "resultsCacheTtlSeconds": 90000\n  },\n\n  "syslog": {\n    "facility": "SYSLOG",\n    "tag": "EWB"\n  }\n\n}\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"run"},"Run"),Object(b.b)("h5",{id:"command-line-arguments"},"Command Line Arguments"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Flag"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Valid Values"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"-jar")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Path to the jar file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"-conf")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Path to the configuration file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"To run the server, execute the following command at a terminal.\nBecause you are running up a server with large network models and a lot of load profiles, you will need to increase the heap size for the JVM instance using the appropriate JVM flags:")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"  java -Xmx<heap size> -Xms<heap size> -jar <path to energy-workbench-server-jar> -conf <path to config file>\n")),Object(b.b)("p",null,"  where:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"heap size is the desired size of the heap. E.g. 16g")),Object(b.b)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),Object(b.b)("p",null," A network with ",Object(b.b)("inlineCode",{parentName:"p"},"500,000 HV assets")," requires around ",Object(b.b)("inlineCode",{parentName:"p"},"8GB"),". ",Object(b.b)("br",null),"\nLoad points for around ",Object(b.b)("inlineCode",{parentName:"p"},"100,000 distribution transformers")," require ",Object(b.b)("inlineCode",{parentName:"p"},"20GB/year"),". ",Object(b.b)("br",null),"\nWeather Data from ",Object(b.b)("inlineCode",{parentName:"p"},"100 weather stations")," would require around ",Object(b.b)("inlineCode",{parentName:"p"},"512MB/year"),". ",Object(b.b)("br",null),"\nDepending on the API usage the ",Object(b.b)("inlineCode",{parentName:"p"},"JVM")," would require more than ",Object(b.b)("inlineCode",{parentName:"p"},"8GB"),"."),Object(b.b)("h2",{id:"ewb_serversh"},"ewb_server.sh"),Object(b.b)("p",null,"As the server runs as a server (that is generally as a background process but at the very least as a process that does not\njust finish after a task is done) a script is provided to more easily start and stop the server.\nThe script will make sure if there is a EWB server instance already running it will not start a second instance."),Object(b.b)("p",null,"The script can be found at ",Object(b.b)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_server.sh"),"."),Object(b.b)("p",null,"The underlying java command that starts the server can be configured in the ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf")," configuration file. See the\ndeployment documentation for more information on ",Object(b.b)("inlineCode",{parentName:"p"},"ewb.conf"),"."),Object(b.b)("p",null,"To start the EWB server using this script:"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_server.sh start")),Object(b.b)("p",null,"To stop the EWB server using this script:"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_server.sh stop")),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"The ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_daily.sh")," script relies on the ",Object(b.b)("inlineCode",{parentName:"p"},"ewb_server.sh")," script to stop and start the server."))))}O.isMDXComponent=!0},294:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},j=function(e){var t=O(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),j=O(a),d=n,m=j["".concat(c,".").concat(d)]||j[d]||p[d]||b;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);