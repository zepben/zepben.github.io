"use strict";(self.webpackChunkenergy_worbench_server_doco=self.webpackChunkenergy_worbench_server_doco||[]).push([[4737],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return N}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,N=s["".concat(d,".").concat(u)]||s[u]||k[u]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2086:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"overview",title:"Overview",slug:"/"},d=void 0,p={unversionedId:"overview",id:"version-2.20.0/overview",title:"Overview",description:"The EWB Server is the primary server that supplies APIs to access network and time series data, as well as provides web apps that provide visualisations and",source:"@site/versioned_docs/version-2.20.0/overview.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/energy-workbench-server/2.20.0/",draft:!1,tags:[],version:"2.20.0",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"sidebar",next:{title:"Data File Structure",permalink:"/evolve/docs/energy-workbench-server/2.20.0/data-file-structure"}},m={},s=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP Config",id:"http-config",level:6},{value:"EWB Data Config",id:"ewb-data-config",level:6},{value:"Auth Config",id:"auth-config",level:6},{value:"System Log Config",id:"system-log-config",level:6},{value:"Geographic View Config",id:"geographic-view-config",level:6},{value:"Debug Config",id:"debug-config",level:6},{value:"Sample Configuration File",id:"sample-configuration-file",level:4},{value:"Run",id:"run",level:2},{value:"Command Line Arguments",id:"command-line-arguments",level:5},{value:"Heap Size Estimation",id:"heap-size-estimation",level:5},{value:"ewb_server.sh",id:"ewb_serversh",level:2}],k={toc:s},u="wrapper";function N(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(u,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The EWB Server is the primary server that supplies APIs to access network and time series data, as well as provides web apps that provide visualisations and\nother high level functionality related to the data from the APIs."),(0,i.kt)("p",null,"This document describes how to configure and run the energy workbench server."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Configuration for the energy workbench server is specified in a JSON file.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http")),(0,i.kt)("td",{parentName:"tr",align:null},"Object that holds http related config. ",(0,i.kt)("br",null),"Refer ",(0,i.kt)("a",{parentName:"td",href:"#http-config"},(0,i.kt)("strong",{parentName:"a"},"http config options"))," below"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ewbData")),(0,i.kt)("td",{parentName:"tr",align:null},"Object that holds the ewb data related config. ",(0,i.kt)("br",null),"Refer ",(0,i.kt)("a",{parentName:"td",href:"#ewb-data-config"},(0,i.kt)("strong",{parentName:"a"},"ewb data config options"))," below"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"auth")),(0,i.kt)("td",{parentName:"tr",align:null},"Object that holds the auth related config. ",(0,i.kt)("br",null),"Refer ",(0,i.kt)("a",{parentName:"td",href:"#auth-config"},(0,i.kt)("strong",{parentName:"a"},"auth config options"))," below"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"syslog")),(0,i.kt)("td",{parentName:"tr",align:null},"Object that holds system log related config for Nix based systems ",(0,i.kt)("br",null),"Refer ",(0,i.kt)("a",{parentName:"td",href:"#system-log-config"},(0,i.kt)("strong",{parentName:"a"},"system log options"))," below"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geoView")),(0,i.kt)("td",{parentName:"tr",align:null},"Object that holds map tile related config ",(0,i.kt)("br",null),"Refer ",(0,i.kt)("a",{parentName:"td",href:"#geographic-view-config"},(0,i.kt)("strong",{parentName:"a"},"geo view options"))," below"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"publicGeoView")),(0,i.kt)("td",{parentName:"tr",align:null},"Object that holds map tile related config for the public map tile endpoint ",(0,i.kt)("br",null),"Refer ",(0,i.kt)("a",{parentName:"td",href:"#geographic-view-config"},(0,i.kt)("strong",{parentName:"a"},"geo view options"))," below"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"debug")),(0,i.kt)("td",{parentName:"tr",align:null},"Object that holds results cache related config ",(0,i.kt)("br",null),"Refer ",(0,i.kt)("a",{parentName:"td",href:"#debug-config"},(0,i.kt)("strong",{parentName:"a"},"debug options"))," below"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")))),(0,i.kt)("h6",{id:"http-config"},"HTTP Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"port")),(0,i.kt)("td",{parentName:"tr",align:null},"The port for the server to listen on."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"webroot")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the directory holding the application website."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"webroot")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"staticCachingEnabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether static caching is enabled."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cors")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows you to specify hosts to add to the CORS (cross origin resource sharing) white list."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tlsEnabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable HTTPS on the web server."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyPath")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the PEM private key file."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"certPath")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the PEM certificate for the provided private key."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"caPath")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to a PEM CA chain for client authentication."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"clientAuth")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether client authentication should be enabled. One of ",(0,i.kt)("inlineCode",{parentName:"td"},"request"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"required"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"none"),", meaning client auth is optional (client can request), required (client must present a signed certificate by a CA in ",(0,i.kt)("inlineCode",{parentName:"td"},"caPath"),"), or no client auth is available respectively."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"none"))))),(0,i.kt)("h6",{id:"ewb-data-config"},"EWB Data Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the ewb data directory. When AWS related keys are specified, this is the path where EWB downloads the files from S3."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"timezone")),(0,i.kt)("td",{parentName:"tr",align:null},"The timezone which the data belongs to."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"previousDaysToSearchForNetwork")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of days to search the network back from the current date."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"previousDaysToSearchForDiagram")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of days number of days prior to the date of the ",(0,i.kt)("inlineCode",{parentName:"td"},"network-model")," database being loaded to search for a ",(0,i.kt)("inlineCode",{parentName:"td"},"diagrams")," database, if an exact match did not exist."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"previousDaysToSearchForCustomer")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of days number of days prior to the date of the ",(0,i.kt)("inlineCode",{parentName:"td"},"network-model")," database being loaded to search for a ",(0,i.kt)("inlineCode",{parentName:"td"},"customer")," database, if an exact match did not exist."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cachePeriod")),(0,i.kt)("td",{parentName:"tr",align:null},"Limits the amount of load data available in the server. ",(0,i.kt)("br",null),"Specified in days unless a units character is appended. ",(0,i.kt)("br",null),"Valid unit characters: 'd' (days), 'm' (months), 'y' (years)."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"All")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"resultsCacheTtlSeconds")),(0,i.kt)("td",{parentName:"tr",align:null},"The time to live for the results cache."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connectionPointIdentifier")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the identifier used for connection points."),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"NMI"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"excludeCustomers")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates that customers should be excluded from the EWB database load. Must be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," if you do not have a customer database."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"networkDate")),(0,i.kt)("td",{parentName:"tr",align:null},"When set EWB will only attempt to load a ",(0,i.kt)("inlineCode",{parentName:"td"},"network-model")," database of this date."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"awsRegion")),(0,i.kt)("td",{parentName:"tr",align:null},"When set EWB will use this value as part of the AWS S3 URI of database files."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes, if awsBucket is defined"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"awsBucket")),(0,i.kt)("td",{parentName:"tr",align:null},"When set EWB will use this value as part of the AWS S3 URI of database files."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes, if awsRegion is defined"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To use AWS S3, see ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/credentials-chain.html"},"default credentials provider chain")," to set up authentication.")),(0,i.kt)("h6",{id:"auth-config"},"Auth Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"authType")),(0,i.kt)("td",{parentName:"tr",align:null},"Auth method to be used ",(0,i.kt)("br",null)," Valid values: ",(0,i.kt)("inlineCode",{parentName:"td"},"AUTH0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"EntraID"),",",(0,i.kt)("inlineCode",{parentName:"td"},"NONE")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"AUTH0")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"EntraId")," use Auth0 or EntraId OAuth2 implementation respectively.",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"NONE")," to disable auth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes, if auth defined"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"NONE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"trustedIssuers")),(0,i.kt)("td",{parentName:"tr",align:null},"List of domain URL's for token issuers to be trusted by EWB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes, if type is not ",(0,i.kt)("inlineCode",{parentName:"td"},"NONE")),(0,i.kt)("td",{parentName:"tr",align:"center"},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"audience")),(0,i.kt)("td",{parentName:"tr",align:null},"API audience for the server"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes, if type is not ",(0,i.kt)("inlineCode",{parentName:"td"},"NONE")),(0,i.kt)("td",{parentName:"tr",align:"center"},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"defaultApiClaim")),(0,i.kt)("td",{parentName:"tr",align:null},"Default API claim"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"read:ewb"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allowAllPermissions")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag to disable Authorisation - all claims will be accepted when authorising. Not recommended for production use cases."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("p",null,"For instance, for EntraId, use the following example (the url have to be used the way as in the example, or it won't work):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"auth": {\n    "authType": "entraid",\n    "trustedIssuers": ["https://login.microsoftonline.com/<tenant>/v2.0"],\n    "audience": "982374979-23492837492-23423874987289asjdf"\n}\n')),(0,i.kt)("p",null,"For an Auth0 config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"auth": {\n    "authType": "auth0",\n    "trustedIssuers": ["zepben-dev.au.auth0.com"],\n    "audience": "https://some-audience/",\n    "defaultApiClaim": "read:ewb"\n}\n')),(0,i.kt)("h6",{id:"system-log-config"},"System Log Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"facility")),(0,i.kt)("td",{parentName:"tr",align:null},"The facility code to specify the type of program logging the message. ",(0,i.kt)("br",null)," Valid Values : ",(0,i.kt)("inlineCode",{parentName:"td"},"SYSLOG"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL2"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL3"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL4"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL5"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL6"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL7")),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tag")),(0,i.kt)("td",{parentName:"tr",align:null},"The tag for the log message."),(0,i.kt)("td",{parentName:"tr",align:"left"},"With facility"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h6",{id:"geographic-view-config"},"Geographic View Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tileSize")),(0,i.kt)("td",{parentName:"tr",align:null},"The size of the tiles to produce."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4096")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxZoom")),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum supported zoom level."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"20")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mapboxApiToken")),(0,i.kt)("td",{parentName:"tr",align:null},"The API token required to render MapBox tiles."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"invalid token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keepLevelSpec")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/evolve/docs/energy-workbench-server/2.20.0/keep-level-spec"},(0,i.kt)("strong",{parentName:"a"},"keep level specification"))," to be used for vector tiles."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxCacheSize")),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum size in MB for tiles in the memory tile cache."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"512")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cacheWritePeriod")),(0,i.kt)("td",{parentName:"tr",align:null},"The time period in seconds between batch writes of the MVTs in memory to be written to disk. ",(0,i.kt)("br",null),"A value of 0 will disable disk writes."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"minPointsToWrite")),(0,i.kt)("td",{parentName:"tr",align:null},"The minimum number of points on a tile for it to be written to the disk cache."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"switchNamePattern")),(0,i.kt)("td",{parentName:"tr",align:null},"A regex pattern with a maximum of one group to extract switch names for visualisation on the map. If a single regex grouping is provided the group will be returned as the switch name. If the pattern doesn't match the switch name will not be included. Default is no switch names in the map tiles."),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"null")))),(0,i.kt)("h6",{id:"debug-config"},"Debug Config"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"logRoutes")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates if the server should print all registered routes on start-up"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"logExceptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable stacktrace loggin when the server response with a 500"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"logRequests")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates if the server should print all requests received"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"logRequestBodyToFile")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies a file to save the last received request body"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"suppressZeroLength")),(0,i.kt)("td",{parentName:"tr",align:null},"Suppress the logging of zero length energy profile warnings"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If any paths in the configuration are given as relative paths, they will be relative to the working directory of the JVM.")),(0,i.kt)("p",null,"The following is a sample configuration file:"),(0,i.kt)("h4",{id:"sample-configuration-file"},"Sample Configuration File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "http": {\n    "port": 9000,\n    "webroot": "/Users/zepben/Desktop/Zepben/Client/web-client/dist",\n    "staticCachingEnabled": false,\n    "cors": ".*"\n  },\n  "ewbData": {\n    "path": "/Users/zepben/Desktop/Zepben/Server/EnergyWorkbench/ewb",\n    "previousDaysToSearchForNetwork": 365,\n    "timezone": "Australia/Melbourne",\n    "cachePeriod": "1m",\n    "resultsCacheTtlSeconds": 90000\n  },\n  "syslog": {\n    "facility": "SYSLOG",\n    "tag": "EWB"\n  }\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("h5",{id:"command-line-arguments"},"Command Line Arguments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid Values"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-c"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--conf")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the configuration file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"energy-workbench-server-conf.json"))))),(0,i.kt)("p",null,"To run the server, execute the following command at a terminal where ",(0,i.kt)("inlineCode",{parentName:"p"},"<heap size>")," is the desired size of the heap (e.g. 16g):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -Xmx<heap size> -Xms<heap size> -jar <path to energy-workbench-server-jar> --conf <path to config file>\n")),(0,i.kt)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),(0,i.kt)("admonition",{title:"Because you are running up a server with large network models and a lot of load profiles, you will need to increase the heap size for the JVM instance",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"using the appropriate JVM flags:")),(0,i.kt)("p",null,"A network with ",(0,i.kt)("inlineCode",{parentName:"p"},"500,000 HV assets")," requires around ",(0,i.kt)("inlineCode",{parentName:"p"},"8GB"),". ",(0,i.kt)("br",null),"\nLoad points for around ",(0,i.kt)("inlineCode",{parentName:"p"},"100,000 distribution transformers")," require ",(0,i.kt)("inlineCode",{parentName:"p"},"20GB/year"),". ",(0,i.kt)("br",null),"\nWeather Data from ",(0,i.kt)("inlineCode",{parentName:"p"},"100 weather stations")," would require around ",(0,i.kt)("inlineCode",{parentName:"p"},"512MB/year"),". ",(0,i.kt)("br",null),"\nDepending on the API usage the ",(0,i.kt)("inlineCode",{parentName:"p"},"JVM")," would require more than ",(0,i.kt)("inlineCode",{parentName:"p"},"8GB"),"."),(0,i.kt)("h2",{id:"ewb_serversh"},"ewb_server.sh"),(0,i.kt)("p",null,"As the server runs as a server (that is generally as a background process but at the very least as a process that does not just finish after a task is done) a\nscript is provided to more easily start and stop the server. The script will make sure if there is a EWB server instance already running it will not start a\nsecond instance."),(0,i.kt)("p",null,"The script can be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_server.sh"),"."),(0,i.kt)("p",null,"The underlying java command that starts the server can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ewb.conf")," configuration file. See the deployment documentation for more information\non ",(0,i.kt)("inlineCode",{parentName:"p"},"ewb.conf"),"."),(0,i.kt)("p",null,"To start the EWB server using this script:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_server.sh start")),(0,i.kt)("p",null,"To stop the EWB server using this script:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EWB_RELEASE_DIR/bin/ewb_server.sh stop")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ewb_daily.sh")," script relies on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ewb_server.sh")," script to stop and start the server.")))}N.isMDXComponent=!0}}]);